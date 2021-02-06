﻿using Dax.Formatter;
using Dax.Formatter.Models;
using Microsoft.AnalysisServices;
using Microsoft.Extensions.Logging;
using Sqlbi.Bravo.Core.Helpers;
using Sqlbi.Bravo.Core.Logging;
using Sqlbi.Bravo.Core.Services.Interfaces;
using Sqlbi.Bravo.Core.Settings;
using Sqlbi.Bravo.Core.Settings.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace Sqlbi.Bravo.Core.Services
{
    internal class DaxFormatterService : IDaxFormatterService, IDisposable
    {
        private readonly SemaphoreSlim _initilizeOrRefreshSemaphore = new SemaphoreSlim(1);
        private readonly IDaxFormatterClient _client;
        private readonly ILogger _logger;
        private readonly Server _server;
        private DaxFormatterServiceModelManager _manager;
        private bool _disposed;

        public DaxFormatterService(IDaxFormatterClient client, ILogger<DaxFormatterService> logger)
        {
            _client = client;
            _logger = logger;

            _logger.Trace();
            _server = new Server();
        }

        public async Task InitilizeOrRefreshAsync(RuntimeSummary runtimeSummary)
        {
            _logger.Trace();

            await _initilizeOrRefreshSemaphore.WaitAsync().ConfigureAwait(false);
            try
            {
                await Task.Run(InitilizeOrRefresh).ConfigureAwait(false);
            }
            finally
            {
                _initilizeOrRefreshSemaphore.Release();
            }

            void InitilizeOrRefresh()
            {
                if (_server.Connected == false)
                {
                    var connectionString = AnalysisServicesHelper.BuildConnectionString(runtimeSummary.ServerName, runtimeSummary.DatabaseName);
                    _server.Connect(connectionString);
                }

                var database = _server.Databases[runtimeSummary.DatabaseName];
                database.Model.Sync(new Microsoft.AnalysisServices.Tabular.SyncOptions { DiscardLocalChanges = true });
                database.Refresh();

                _manager = DaxFormatterServiceModelManager.CreateFrom(database.Model);
            }
        }

        public async Task<Dictionary<string, (string, string)>> GetFormattedItems(DaxFormatterServiceTabularObjectType objectType, RuntimeSummary runtimeSummary)
        {
            var origAndFormatted = await Task.Run(async () =>
            {
                var requests = _manager.CreateRequests(objectType, runtimeSummary);

                var measures = new Dictionary<string, (string, string)>();

                foreach (var request in requests)
                {
                    foreach (var item in ParseRequest(request))
                    {
                        measures.Add(item.Key, (item.Value, null));
                    }
                }

                var responses = _client.FormatAsync(requests);

                await foreach (var response in responses)
                {
                    foreach (var item in ParseResponse(response))
                    {
                        var (original, _) = measures[item.Key];

                        measures[item.Key] = (original, item.Value);
                    }
                }

                return measures;
            });

            return origAndFormatted;
        }

        private Dictionary<string, string> ParseRequest(DaxFormatterRequest request)
        {
            var regex = new Regex(DaxFormatterServiceModelManager.ExpressionIdRegexPattern, RegexOptions.None);
            var splits = regex.Split(request.Dax).Where((i) => !string.Empty.Equals(i)).ToArray();

            var ids = splits.Where((s, i) => i % 2 == 0);
            var expressions = splits.Where((s, i) => i % 2 == 1).Select((s) =>
            {
                var str = s.TrimStart('\r', '\n', ' ').TrimEnd('\r', '\n', ' ');

                return str.EndsWith("*^*")
                    ? str.Substring(0, str.LastIndexOf("*^*")).TrimEnd('\r', '\n', ' ')
                    : str;
            });
            var items = ids.Zip(expressions, (k, v) => (Id: k, Expression: v)).ToDictionary((z) => z.Id, (z) => z.Expression);

            return items;
        }

        private Dictionary<string, string> ParseResponse(DaxFormatterResponse response)
        {
            // From DaxFormatterModelManager.UpdateModelFrom
            var regex = new Regex(DaxFormatterServiceModelManager.ExpressionIdRegexPattern, RegexOptions.None);
            var splits = regex.Split(response.Formatted).Where((i) => !string.Empty.Equals(i)).ToArray();

            var ids = splits.Where((s, i) => i % 2 == 0);
            var expressions = splits.Where((s, i) => i % 2 == 1).Select((s) => s.TrimStart('\r', '\n', ' ').TrimEnd('\r', '\n', ' '));
            var items = ids.Zip(expressions, (k, v) => (Id: k, Expression: v)).ToDictionary((z) => z.Id, (z) => z.Expression);

            return items;
        }

        public async Task FormatAsync(DaxFormatterServiceTabularObjectType objectType, RuntimeSummary runtimeSummary)
        {
            _logger.Trace();

            await Task.Run(Format).ConfigureAwait(false);

            async Task Format()
            {
                var database = _server.Databases[runtimeSummary.DatabaseName];
                var requests = _manager.CreateRequests(objectType, runtimeSummary);
                var responses = _client.FormatAsync(requests);

                await foreach (var response in responses)
                    _manager.UpdateModelFrom(response);

                if (database.Model.HasLocalChanges)
                    database.Update();

                var operationResult = database.Model.SaveChanges();
                if (operationResult.XmlaResults is { ContainsErrors: true })
                {
                    foreach (XmlaResult result in operationResult.XmlaResults)
                    {
                        foreach (XmlaMessage message in result.Messages)
                        {
                            var json = "{ }";

                            if (message is XmlaError error)
                                json = System.Text.Json.JsonSerializer.Serialize(error);
                            else if (message is XmlaWarning warning)
                                json = System.Text.Json.JsonSerializer.Serialize(warning);

                            _logger.Error(LogEvents.DaxFormatterFormatSaveChangesContainsErrors, message: json);
                        }
                    }
                }
            }
        }

        public void SaveFormattedMeasures(List<(string id, string expression)> measuresToUpdate, RuntimeSummary runtimeSummary)
        {
            var database = _server.Databases[runtimeSummary.DatabaseName];

            foreach (var (id, expression) in measuresToUpdate)
                _manager.UpdateMeasure(id, expression);

            if (database.Model.HasLocalChanges)
                database.Update();

            var operationResult = database.Model.SaveChanges();
            if (operationResult.XmlaResults is { ContainsErrors: true })
            {
                foreach (XmlaResult result in operationResult.XmlaResults)
                {
                    foreach (XmlaMessage message in result.Messages)
                    {
                        var json = "{ }";

                        if (message is XmlaError error)
                            json = System.Text.Json.JsonSerializer.Serialize(error);
                        else if (message is XmlaWarning warning)
                            json = System.Text.Json.JsonSerializer.Serialize(warning);

                        _logger.Error(LogEvents.DaxFormatterFormatSaveChangesContainsErrors, message: json);
                    }
                }
            }
        }

        public int Count(DaxFormatterServiceTabularObjectType objectType) => _manager.Count(objectType);

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    if (_server.Connected)
                        _server.Disconnect(endSession: true);

                    _server.Dispose();
                }

                _disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        public List<Microsoft.AnalysisServices.Tabular.Measure> GetMeasures()
            => _manager.GetMeasures();
    }
}

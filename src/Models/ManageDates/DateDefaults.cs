﻿namespace Sqlbi.Bravo.Models.ManageDates
{
    using Dax.Template.Tables;
    using Sqlbi.Bravo.Infrastructure.Extensions;
    using System;
    using System.Text.Json.Serialization;

    public class DateDefaults
    {
        [JsonPropertyName("firstFiscalMonth")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? FirstFiscalMonth { get; set; }

        [JsonPropertyName("firstDayOfWeek")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public DayOfWeek? FirstDayOfWeek { get; set; }

        [JsonPropertyName("monthsInYear")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? MonthsInYear { get; set; }

        [JsonPropertyName("workingDayType")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? WorkingDayType { get; set; }

        [JsonPropertyName("nonWorkingDayType")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? NonWorkingDayType { get; set; }

        [JsonPropertyName("typeStartFiscalYear")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public TypeStartFiscalYear? TypeStartFiscalYear { get; set; }

        [JsonPropertyName("quarterWeekType")]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public QuarterWeekType? QuarterWeekType { get; set; }

        [JsonPropertyName("weeklyType")]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        //[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public WeeklyType? WeeklyType { get; set; }

        public void CopyTo(TemplateConfiguration templateConfiguration)
        {
            SetIntVariable(nameof(FirstFiscalMonth), FirstFiscalMonth);
            SetIntVariable(nameof(FirstDayOfWeek), (int?)FirstDayOfWeek);
            SetIntVariable(nameof(MonthsInYear), MonthsInYear);
            SetStringVariable(nameof(WorkingDayType), WorkingDayType);
            SetStringVariable(nameof(NonWorkingDayType), NonWorkingDayType);
            SetIntVariable(nameof(TypeStartFiscalYear), (int?)TypeStartFiscalYear);
            SetStringVariable(nameof(QuarterWeekType), (int?)QuarterWeekType);
            SetStringVariable(nameof(WeeklyType), WeeklyType);

            void SetStringVariable<T>(string parameterName, T? value)
            {
                SetVariable(parameterName, value, "\"");
            }

            void SetIntVariable<T>(string parameterName, T? value)
            {
                SetVariable(parameterName, value, "");
            }

            void SetVariable<T>(string parameterName, T? value, string quote)
            {
                if (value is null)
                    return;

                string key = $"__{parameterName}";

                if (!templateConfiguration.DefaultVariables.ContainsKey(key))
                {
                    throw new Exception($"Invalid { key } variable.");
                }

                string? variableValue = value.ToString();

                if (variableValue is null)
                {
                    throw new Exception($"Null value for { key } variable.");
                }

                templateConfiguration.DefaultVariables[key] = $"{quote}{variableValue}{quote}";
            }
        }

        public static DateDefaults CreateFrom(TemplateConfiguration templateConfiguration)
        {
            var defaults = new DateDefaults
            {
                FirstFiscalMonth = GetIntParameter(nameof(FirstFiscalMonth)),
                FirstDayOfWeek = (DayOfWeek?)GetIntParameter(nameof(FirstDayOfWeek)),
                MonthsInYear = GetIntParameter(nameof(MonthsInYear)),
                WorkingDayType = GetQuotedStringParameter(nameof(WorkingDayType)),
                NonWorkingDayType = GetQuotedStringParameter(nameof(NonWorkingDayType)),
                TypeStartFiscalYear = (TypeStartFiscalYear?)GetIntParameter(nameof(TypeStartFiscalYear)),
            };

            var quarterWeekTypeParameter = GetQuotedStringParameter(nameof(QuarterWeekType));
            if (Enum.TryParse(quarterWeekTypeParameter, out QuarterWeekType quarterWeekType)) 
                defaults.QuarterWeekType = quarterWeekType;

            var weeklyTypeParameter = GetQuotedStringParameter(nameof(WeeklyType));
            if (Enum.TryParse(weeklyTypeParameter, out WeeklyType weeklyType)) 
                defaults.WeeklyType = weeklyType;

            return defaults;

            int? GetIntParameter(string? parameterName)
            {
                var value = GetStringParameter(parameterName);
                if (value == null)
                    return null;

                if (int.TryParse(value, out var valueInt))
                    return valueInt;

                return null;
            }

            string? GetStringParameter(string? parameterName)
            {
                if (parameterName.IsNullOrEmpty())
                    return null;

                if (templateConfiguration.DefaultVariables.TryGetValue($"__{ parameterName }", out string? value))
                    return value;

                return null;
            }

            string? GetQuotedStringParameter(string? parameterName)
            {
                var value = GetStringParameter(parameterName);
                if (value.IsNullOrEmpty())
                    return null;

                if ((value[0] == '"') && (value[^1] == '"'))
                    value = value[1..^1];

                return value;
            }
        }
    }

    public enum DayOfWeek
    {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }

    public enum TypeStartFiscalYear
    {
        FirstDayOfFiscalYear = 0,
        LastDayOfFiscalYear = 1,
    }

    public enum WeeklyType
    {
        Last = 0,
        Nearest = 1,
    }

    public enum QuarterWeekType
    {
        Weekly445 = 445,
        Weekly454 = 454,
        Weekly544 = 544,
    }
}

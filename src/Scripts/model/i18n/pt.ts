/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "pt", // DO NOT TRANSLATE
    enName: "Portuguese", // DO NOT TRANSLATE
    name: "Português",

    strings: {
        [_.addCtrlTitle]: "Abrir",
        [_.aggregatedTableName]: "Múltiplas tabelas",
        [_.AnalyzeModel]: "Analisar Modelo",
        [_.analyzeModelSummary]: `O seu conjunto de dados tem <strong>{size:bytes}</strong> e contém <strong>{count}</strong> coluna{{s}}`,
        [_.analyzeModelSummary2]: `, <span class="text-highlight"><strong>{count}</strong> dessa(s) não {{estão referenciadas|está referenciada}} no modelo.</span>`,
        [_.appName]: "Bravo for Power BI", // DO NOT TRANSLATE
        [_.appUpdateAvailable]: "Nova versão disponível: {version}",
        [_.appUpdateChangelog]: "Registo de alterações",
        [_.appUpdateDownload]: "Transferir",
        [_.appUpdateViewDetails]: "Ver detalhes",
        [_.appUpToDate]: "O Bravo está atualizado",
        [_.appVersion]: "Versão {version}",
        [_.backupReminder]: "Antes de prosseguir, não se esqueça de fazer uma cópia de segurança do seu reltório - <b>algumas alterações poderão não ser reversíveis</b>.",
        [_.BestPractices]: "Melhores Práticas",
        [_.canceled]: "Canecelado",
        [_.changeStatusAdded]: "A",
        [_.changeStatusAddedTitle]: "Adicionado",
        [_.changeStatusDeleted]: "E",
        [_.changeStatusDeletedTitle]: "Eliminado",
        [_.changeStatusModified]: "M",
        [_.changeStatusModifiedTitle]: "Modificado",
        [_.clearCtrlTitle]: "Limpar",
        [_.closeCtrlTitle]: "Fechar",
        [_.closeOtherTabs]: "Fechar outros",
        [_.closeTab]: "Fechar",
        [_.collapseAllCtrlTitle]: "Expandir todos",
        [_.columnExportedCompleted]: "Esta tabela foi exportada com sucesso.",
        [_.columnExportedFailed]: "Esta tabela não foi exportada devido a um erro inesperado.",
        [_.columnExportedTruncated]: "Esta tabela foi truncada porque o número de linhas excedeu o limite máximo permitido.",
        [_.columnMeasureFormatted]: "Esta medida já se encontra formatada.",
        [_.columnMeasureNotFormattedTooltip]: "Esta medida não se encontra formatada.",
        [_.columnMeasureWithError]: "Esta medida tem erros.",
        [_.columnUnreferencedExplanation]: `<span class="text-highlight">Colunas não referenciadas</span> podem, normalmente, ser removidas do modelo, de forma a otimizar o desempenho. Antes de as remover, certifique-se que não as está a usar em nenhum relatório, algo que o Bravo não pode avaliar.`,
        [_.columnUnreferencedTooltip]: "Esta coluna não se encontra referenciada no seu modelo.",
        [_.confirmTabCloseMessage]: "Parece haver alterações ao documento por gravar.<br>Tem a certeza que o quer fechar?",
        [_.connectBrowse]: "Procurar",
        [_.connectDatasetsTableEndorsementCol]: "Endosso",
        [_.connectDatasetsTableNameCol]: "Nome",
        [_.connectDatasetsTableOwnerCol]: "Proprietário",
        [_.connectDatasetsTableWorkspaceCol]: "Área de Trabalho",
        [_.connectDialogAttachPBIMenu]: "Conjuntos de dados em powerbi.com",
        [_.connectDialogConnectPBIMenu]: "Relatórios Ativos em Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "Ficheiros VPAX",
        [_.connectDialogTitle]: "Aberto",
        [_.connectDragFile]: "Arraste um ficheiro VPAX para aqui<br>ou procure no seu computador",
        [_.connectNoReports]: "Nenhum relatório ativo encontrado.<br>Abra um relatório no Power BI Desktop e aguarde que o mesmo surja aqui.",
        [_.copiedErrorDetails]: "Copiado!",
        [_.copy]: "Copiar",
        [_.copyErrorDetails]: "Erro na Cópia",
        [_.copyFormulaCtrlTitle]: "Copiar medida formatada",
        [_.copyMessage]: "Copiar Mensagem",
        [_.copyright]: "Todos os direitos reservados.",
        [_.createIssue]: "Reportar Problema",
        [_.cut]: "Cortar",
        [_.dataUsageLink]: "Como são usados os seus dados?", 
        [_.dataUsageMessage]: `Para formatar o seu código, o Bravo envia as medidas presentes neste conjunto de dados para o DAX Formatter, um serviço gerido por SQLBI, através de uma ligação segura.<p><strong>O serviço não guarda os seus dados em nenhum local.</strong></p><p>Alguma informação, como as funções DAX mais usadas, um indíce de complexidade e uma média do comprimento das consultas poderá ser guardada para fins estatísticos.</p>`,
        [_.dataUsageTitle]: "Como são usados os seus dados?",
        [_.DaxFormatter]: "Formatar DAX",
        [_.daxFormatterAgreement]: "Para formatar DAX, o Bravo envia as suas medidas para o serviço DAX Formatter.",
        [_.daxFormatterAnalyzeConfirm]: "Para realizar uma análise, o Bravo tem de enviar todas as suas medidas para o serviço DAX Formatter. Tem a certeza que quer continuar?",
        [_.daxFormatterAutoPreviewOption]: "Pré-visualização automática",
        [_.daxFormatterFormat]: "Formatar Selecção",
        [_.daxFormatterFormatDisabled]: "Formatar (Não Suportado)",
        [_.daxFormatterFormattedCode]: "Formatada (Pré-visualização)",
        [_.daxFormatterOriginalCode]: "Atual",
        [_.daxFormatterPreviewAllButton]: "Pré-visualizar Todas as Medidas",
        [_.daxFormatterPreviewButton]: "Pré-visualizar",
        [_.daxFormatterPreviewDesc]: "Para gerar uma pré-visualização, o Bravo tem de enviar esta medida para o serviço DAX Formatter.",
        [_.daxFormatterSuccessSceneMessage]: "Parabéns, <strong>{count} medida{{s}}</strong> {{formatadas|formatada}} com sucesso.",
        [_.daxFormatterSummary]: `O seu conjunto de dados contém {count} medida{{s}}: <span class="text-error"><strong>{errors:number}</strong> com erros</strong></span>, <span class="text-highlight"><strong>{formattable:number}</strong> por formatar</span>, <strong>{analyzable:number}</strong> por analisar (<span class="link manual-analyze">analisar agora</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `O seu conjunto de dados contém <strong>{count}</strong> medida{{s}}: <span class="text-error"><strong>{errors:number}</strong> com erros</strong></span> e <span class="text-highlight"><strong>{formattable:number}</strong> por formatar.</span>`,
        [_.defaultTabName]: "Sem título",
        [_.dialogCancel]: "Cancelar",
        [_.dialogOK]: "OK",
        [_.dialogOpen]: "Abrir",
        [_.docLimited]: "Limitado",
        [_.docLimitedTooltip]: "Nem todas as funcionalidades estão disponíveis para este documento.",
        [_.doneCtrlTitle]: "Concluído",
        [_.emailAddress]: "Endereço de Email",
        [_.emailAddressPlaceholder]: "Introduza o seu endereço de email",
        [_.error]: "Erro",
        [_.errorAborted]: "Operação abortada.",
        [_.errorAnalysisServicesConnectionFailed]: "Há um problema de ligação entre o servidor e o Bravo.",
        [_.errorCheckForUpdates]: "Não foi possível verificar a existência de atualizações - o servidor remoto está inacessível.",
        [_.errorConnectionUnsupported]: "A ligação ao recurso requerido não é suportada.",
        [_.errorDatasetConnectionUnknown]: "Ligação não especificada.",
        [_.errorDatasetsEmptyListing]: "Nenhum relatório aberto disponível.",
        [_.errorDatasetsListing]: "Não foi possível recolher a lista de conjuntos de dados do Power BI Service.",
        [_.errorExportDataFileError]: "Algo correu mal na exportação de dados. Por favor, tente de novo.",
        [_.errorManageDateTemplateError]: "Occoreu uma exceção na execução do motor de modelos DAX.",
        [_.errorNetworkError]: "Não está ligado à Internet.",
        [_.errorNone]: "Erro não especificado.",
        [_.errorNotAuthorized]: "Não está autorizado a visualizar o recurso especificado.",
        [_.errorNotConnected]: "Não está ligado ao Power BI - por favor, inicie sessão para continuar.",
        [_.errorNotFound]: "Não foi poss+ivel estabelecer ligação com o recurso especificado.",
        [_.errorReportConnectionUnknown]: "Ligação inválida.",
        [_.errorReportConnectionUnsupportedAnalysisServicesCompatibilityMode]: "O modo de compatibilidade de instância de Power BI Desktop Analysis Services não é PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServicesConnectionNotFound]: "Ligação TCP a Power BI Desktop Analysis Services não encontrada.",
        [_.errorReportConnectionUnsupportedAnalysisServicesProcessNotFound]: "Processo de instância Power BI Desktop Analysis Services não encontrada.", 
        [_.errorReportConnectionUnsupportedConnectionException]: "Foi encontrada uma exceção na ligação à instância de Power BI Desktop Analysis Services.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionEmpty]: "A instância de Power BI Desktop Analysis Services não contém nenhuma base de dados. Tente a ligação ao relatório usando o ícone do Bravo nas Ferramentas Externas do Power BI Desktop.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "A instância de Power BI Desktop Analysis Services contém um número não esperado de bases de dados (> 1) uma vez que apenas uma ou zero era esperado.",
        [_.errorReportConnectionUnsupportedProcessNotReady]: "Processo Power BI Desktop a abrir ou a instância de Analysis Services não está ainda pronta.", 
        [_.errorReportsEmptyListing]: "Nenhum relatório por abrir disponível.",
        [_.errorRetry]: "Tente novamente",
        [_.errorSignInMsalExceptionOccurred]: "Erro inesperado no pedido de início de sessão.",
        [_.errorSignInMsalTimeoutExpired]: "O pedido de início de sessão foi cancelado porque o tempo limite foi excedido antes da operação estar terminada.",
        [_.errorTimeout]: "Tempo limite excedido.",
        [_.errorTitle]: "Opa...",
        [_.errorTOMDatabaseDatabaseNotFound]: "A base de dados não existe na coleção ou o utilizador não tem direitos de administrador à mesma.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "O pedido de atualização está em conflito com o atual estado do recurso alvo.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "O pedido de atualização falhou porque uma ou mais medidas contêm erros.", 
        [_.errorTOMDatabaseUpdateFailed]: "A atualização da base de dados falhou na gravação de alterações locais feitas ao modelo que se encontra no servidor de base de dados.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `O pedido de atualização falhou porque as seguintes medidas contêm erros:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Erro não tratado - por favor, reporte o erro e forneça o ID de rastreio, se disponível.",
        [_.errorUnspecified]: "Erro não especificado.",
        [_.errorUserSettingsSaveError]: "Náo foi possível guardar as definições.",
        [_.errorVpaxFileImportError]: "Ocorreu um erro durante a importação do ficheiro VPAX.",
        [_.errorVpaxFileExportError]: "Ocorreu um erro durante a exportação do ficheiro VPAX.",
        [_.expandAllCtrlTitle]: "Expandir todos",
        [_.ExportData]: "Exportar Dados",
        [_.exportDataCSVCustomDelimiter]: "Delimitador de Campo Personalizado",
        [_.exportDataCSVDelimiter]: "Delimitador de Campos",
        [_.exportDataCSVDelimiterComma]: "Vírgula",
        [_.exportDataCSVDelimiterDesc]: `Escolha o caráter a usar como delimitador para cada campo. <em>Automático</em> usa o caráter por defeito da Cultura do seu sistema.`,
        [_.exportDataCSVDelimiterOther]: "Outro...",
        [_.exportDataCSVDelimiterPlaceholder]: "Caráter",
        [_.exportDataCSVDelimiterSemicolon]: "Ponto e Vírgula",
        [_.exportDataCSVDelimiterSystem]: "Automático",
        [_.exportDataCSVDelimiterTab]: "Tabulador",
        [_.exportDataCSVEncoding]: "Codificação",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVFolder]: "Salvar em uma subpasta",
        [_.exportDataCSVFolderDesc]: "Salvar arquivos CSV gerados em uma subpasta.",
        [_.exportDataCSVQuote]: "Coloque Texto Entre Aspas",
        [_.exportDataCSVQuoteDesc]: "Certifique-se que todo o texto está entre aspas.",
        [_.exportDataExcelCreateExportSummary]: "Exportar Sumário",
        [_.exportDataExcelCreateExportSummaryDesc]: "Adicione uma página ao ficheiro exportado, com o sumário da tarefa.",
        [_.exportDataExport]: "Exportar Seleção",
        [_.exportDataExportAs]: "Exportar Como",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "A exportar {table}...",
        [_.exportDataExportingDone]: "Concluído!",
        [_.exportDataNoColumns]: "Esta tabela não pode ser exportada porque não contém nenhuma coluna.",
        [_.exportDataOpenFile]: "Abrir Ficheiro Exportado",
        [_.exportDataOpenFolder]: "Abrir Pasta de Exportação",
        [_.exportDataOptions]: "Opções de Exportação",
        [_.exportDataStartExporting]: "A inicializar...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} tabela{{s}}</strong> {{exportadas|exportada}} com sucesso.",
        [_.exportDataSummary]: "O seu conjunto de dados contém <strong>{count} tabela{{s}}</strong> para exportação.",
        [_.exportDataTypeCSV]: "CSV (valores separados por vírgulas)",
        [_.exportDataTypeXLSX]: "Folha de Cálculo Excel",
        [_.failed]: "Falhou",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Mostrar apenas medida/medidas por formatar, com erros",
        [_.filterUnrefCtrlTitle]: "Mostrar colunas não referenciadas",
        [_.formattingMeasures]: "A formatar medidas...",
        [_.goBackCtrlTitle]: "Cancelar e voltar atrás",
        [_.groupByTableCtrlTitle]: "Agrupar por Tabela",
        [_.helpConnectVideo]: "Como Ligar",
        [_.helpCtrlTitle]: "Ajuda",
        [_.hideUnsupportedCtrlTitle]: "Apenas suportados",
        [_.less]: "Menos",
        [_.license]: "Publicado sob a licença MIT.",
        [_.loading]: "A carregar...",
        [_.ManageDates]: "Gerir Datas",
        [_.manageDatesApplyCtrlTitle]: "Aplicar Alterações",
        [_.manageDatesAuto]: "Automática",
        [_.manageDatesAutoScan]: "Verificação Automática",
        [_.manageDatesAutoScanActiveRelationships]: "Relações Ativas",
        [_.manageDatesAutoScanDesc]: "Escolha <em>Completa</em> para verificação de todas as colunas que contêm datas. Escolha <em>Escolher Colunas...</em> para selecionar as colunas a usar. Escolha <em>Relações Ativas</em> e <em>Relações Inativas</em> para verificar apenas colunas relacionadas.",
        [_.manageDatesAutoScanDisabled]: "Inativo",
        [_.manageDatesAutoScanFirstYear]: "Ano Inicial",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "Completa",
        [_.manageDatesAutoScanInactiveRelationships]: "Relações Inativas",
        [_.manageDatesAutoScanLastYear]: "Ano Final",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "Esolher Colunas...",
        [_.manageDatesBrowserPlaceholder]: "Sem itens a alterar",
        [_.manageDatesCalendarDesc]: "Escolha um formato de calendário a aplicar a este modelo. O Bravo irá criar ou atualizar as tabelas necessárias, mantendo intactas as relações existentes.", 
        [_.manageDatesCalendarTemplateName]: "Formato de Calendário",
        [_.manageDatesCalendarTemplateNameDesc]: "Selecione <em>Mensal</em> para selecionar o primeiro mês do ano. Escolha <em>Semanal</em> para definir entre os tipos ISO de calendário 445-454-544. Escolha <em>Customizado</em> para calendários fléxiveis, de extensão variável.",
        [_.manageDatesCreatingTables]: "A atualizar o modelo...",
        [_.manageDatesDatesDesc]: "Configure o formato e a localização das datas no seu modelo.",
        [_.manageDatesDatesTableDesc]: "Esta é a tabela a usar para datas em relatórios.",
        [_.manageDatesDatesTableName]: "Tabela de Datas",
        [_.manageDatesDatesTableReferenceDesc]: "Esta é uma tabela escondida que contém todas as funções DAX utilizadas para gerar datas.",
        [_.manageDatesDatesTableReferenceName]: "Tabela de Definições de Datas",
        [_.manageDatesHolidaysDesc]: "Adicione feriados ao seu modelo. O Bravo irá criar ou atualizar as tabelas necessárias, mantendo intactas as relações existentes. ",
        [_.manageDatesHolidaysEnabledDesc]: "Adicione a tabela de feriados ao seu modelo.",
        [_.manageDatesHolidaysEnabledName]: "Feriados",
        [_.manageDatesHolidaysTableDefinitionDesc]: "Esta é uma tabela escondida que contém todas as funções DAX utilizadas para gerar feriados.",
        [_.manageDatesHolidaysTableDefinitionName]: "Tabela de Definições de Datas",
        [_.manageDatesHolidaysTableDesc]: "Esta é a tabela a usar para feriados em relatórios.",
        [_.manageDatesHolidaysTableName]: "Tabela de Feriados",
        [_.manageDatesIntervalDesc]: "Selecione um intervalo de datas para o seu modelo.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "País para Feriados",
        [_.manageDatesISOCustomFormatDesc]: "Defina um formato de região, de acordo com a codificação IETF BCP 47 language. Exemplo: en-US",
        [_.manageDatesISOCustomFormatName]: "Formato Customizado",
        [_.manageDatesISOFormatDesc]: "Escolha as definições regionais para as datas.",
        [_.manageDatesISOFormatName]: "Definições Regionais",
        [_.manageDatesISOFormatOther]: "Outra...",
        [_.manageDatesISOFormatOtherPlaceholder]: "Região",
        [_.manageDatesMenuCalendar]: "Calendário",
        [_.manageDatesMenuDates]: "Datas",
        [_.manageDatesMenuHolidays]: "Feriados",
        [_.manageDatesMenuInterval]: "Intervalo",
        [_.manageDatesMenuPreviewCode]: "Expressão",
        [_.manageDatesMenuPreviewModel]: "Alterações ao Modelo",
        [_.manageDatesMenuPreviewTable]: "Dados de Amostra",
        [_.manageDatesMenuPreviewTreeDate]: "Datas",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "Datas e Feriados",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "Análise de Tempo",
        [_.manageDatesMenuTimeIntelligence]: "Análise de Tempo",
        [_.manageDatesModelCheck]: "Verificação de Modelo",
        [_.manageDatesPreview]: "Pré-visualização",
        [_.manageDatesPreviewCtrlTitle]: "Pré-visualização de Alterações",
        [_.manageDatesSampleData]: "Dados de Amostra",
        [_.manageDatesSampleDataError]: "Não foi possível gerar dados de amostra.",
        [_.manageDatesStatusCompatible]: `<div class="hero">Este modelo já contém algumas <b>tabelas de datas compatíveis</b> com o Bravo.</div>Se alterar alguma coisa, estas tabelas serão atualizadas e as suas relações serão mantidas intactas.`,
        [_.manageDatesStatusError]: `<div class="hero">As atuais definições não podem ser aplicadas.</div>{error}`,
        [_.manageDatesStatusIncompatible]: `<div class="hero">Este modelo contém algumas <b>tabelas de datas que não são compatíveis</b> com o Bravo.</div>Para fazer alterações, terá de selecionar um nome diferente para uma ou mais tabelas a serem criadas por esta ferramenta.<br><br>Verifique <b>Datas</b> e <b>Feriados</b>.`,
        [_.manageDatesStatusNotAvailable]: `<div class="hero">Este modelo já não está disponível.</div> Tente reiniciar a aplicação.`,
        [_.manageDatesStatusOk]: `<div class="hero">Este modelo <b>é compatível com a funcionalidade Gerir Datas</b>.</div>Pode criar novas tabelas de datas sem receio de afetar medidas ou relatórios.`,
        [_.manageDatesSuccessSceneMessage]: "Parabéns, o seu modelo foi atualizado com sucesso.",
        [_.manageDatesTemplateFirstDayOfWeek]: "Primeiro Dia da Semana",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "Para sistema semanal ISO, defina <em>Segunda</em>.",
        [_.manageDatesTemplateFirstFiscalMonth]: "Primeiro Mês do Ano",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "Para sistema semanal ISO, defina <em>Janeiro</em>.",
        [_.manageDatesTemplateMonthsInYear]: "Meses no Ano",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "Padrão",
        [_.manageDatesTemplateNameConfig02]: "Mensal",
        [_.manageDatesTemplateNameConfig03]: "Customizado",
        [_.manageDatesTemplateNameConfig04]: "Semanal",
        [_.manageDatesTemplateQuarterWeekType]: "Sistema Semanal",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "Primeiro Dia do Ano Fiscal",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "Para sistema semanal ISO, defina <em>Último do Ano</em>.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "Primeiro do Ano",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "Último do Ano",
        [_.manageDatesTemplateWeeklyType]: "Último Dia da Semana do Ano",
        [_.manageDatesTemplateWeeklyTypeDesc]: "Se a sua semana inicia ao Domingo, o último dia da semana é Sábado. Se escolher <em>Último do Ano</em>, o ano fiscal termina no último Sábado do último mês. Caso contrário, o ano fiscal termina no Sábado mais próximo do último dia do último mês - poderá ser no ano seguinte. Para sistema semanal, defina <em>Mais Próximo do Final do Ano</em>.",
        [_.manageDatesTemplateWeeklyTypeLast]: "Último do Ano",
        [_.manageDatesTemplateWeeklyTypeNearest]: "Mais Próximo do Final do Ano",
        [_.manageDatesTimeIntelligenceDesc]: "Criar as funções DAX de Análise de Tempo mais comuns disponíveis no seu modelo.",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Funções de Análise de Tempo",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "Todas as Medidas",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "Escolher Medidas...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "Escolha as medidas a usar na geração de funções de Análise de Tempo.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "Medidas Destino",
        [_.manageDatesYearRange]: "Intervalo de Datas",
        [_.manageDatesYearRangeDesc]: "Escolha como determinar o intervalo de datas no seu modelo. Deixe <em>Ano Inicial</em> e/ou <em>Ano Final</em> em branco para usar a verificação automática.",
        [_.menuCtrlTitle]: "Fechar/Expandir menu",
        [_.minimizeCtrlTitle]: "Minimizar",
        [_.modelLanguage]: "Linguagem do modelo ({culture})",
        [_.more]: "Mais",
        [_.notificationCtrlTitle]: "Notificações",
        [_.notificationsTitle]: "{count} notificação{{ões}}",
        [_.openSourcePayoff]: "{appName} é uma ferramenta open-source, desenvolvida e mantida por SQLBI e a comunidade Github. Junte-se a nós em",
        [_.openWithDaxFormatterCtrlTitle]: "Formatar online com DAX Formatter",  
        [_.optionAccount]: "Conta Power BI",
        [_.optionAccountDescription]: "Defina a conta para acesso a conjuntos de dados Power BI online.",
        [_.optionDiagnostic]: "Nível de Diagnósticos",
        [_.optionDiagnosticDescription]: "Mostra erros e registos num painel de diagnóstico. Escolha <em>Básico</em> para registar apenas algumas mensagens. <em>Verbose</em> para registar todas as mensagens.",
        [_.optionDiagnosticLevelBasic]: "Básico",
        [_.optionDiagnosticLevelNone]: "Nenhum",
        [_.optionDiagnosticLevelVerbose]: "Verbose",
        [_.optionDiagnosticMore]: "Para reportar um erro da aplicação, por favor use",
        [_.optionFormattingBreaks]: "Quebra de Nomes e Expressões de Medidas",
        [_.optionFormattingBreaksAuto]: "Automática",
        [_.optionFormattingBreaksDescription]: "Escolha como separar nomes e expressões de medidas. Defina <em>Automática</em> para determinar automáticamente o estilo a usar no modelo.",
        [_.optionFormattingBreaksInitial]: "Quebra de Linha",
        [_.optionFormattingBreaksNone]: "Mesma Linha",
        [_.optionFormattingIncludeTimeIntelligence]: "Inclua inteligência de tempo",
        [_.optionFormattingIncludeTimeIntelligenceDescription]: "Inclua medidas criadas automaticamente, gerencie datas para inteligência de tempo.",
        [_.optionFormattingLines]: "Linhas",
        [_.optionFormattingLinesDescription]: "Escollha entre entre linhas curtas ou longas.",
        [_.optionFormattingLinesValueLong]: "Linhas Longas",
        [_.optionFormattingLinesValueShort]: "Linhas Curtas",
        [_.optionFormattingPreview]: "Pré-visualização Automática",
        [_.optionFormattingPreviewDescription]: "Enviar medidas automáticamente para o DAX Formatter, para gerar pré-visualizações.",
        [_.optionFormattingSeparators]: "Separadores",
        [_.optionFormattingSeparatorsDescription]: "Escolha os separadores para números e listas.",
        [_.optionFormattingSeparatorsValueAuto]: "Automático",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "Espaçamento",
        [_.optionFormattingSpacesDescription]: "Espaçamento após nomes de funções.",
        [_.optionFormattingSpacesValueBestPractice]: "Melhores práticas",
        [_.optionFormattingSpacesValueFalse]: "Sem espaço - IF( ",
        [_.optionFormattingSpacesValueTrue]: "Espaço - IF ( ",
        [_.optionLanguage]: "Linguagem",
        [_.optionLanguageDescription]: "Escolha a linguagem do Bravo. Será necessário reiniciar a aplicação.",
        [_.optionLanguageResetConfirm]: "Deseja reiniciar o Bravo para aplicar a nova linguagem?",
        [_.optionsDialogAboutMenu]: "Acerca",
        [_.optionsDialogFormattingMenu]: "Formatação",
        [_.optionsDialogGeneralMenu]: "Geral",
        [_.optionsDialogTelemetryMenu]: "Diagnósticos",
        [_.optionsDialogTitle]: "Opções",
        [_.optionTelemetry]: "Telemetria",
        [_.optionTelemetryDescription]: "Enviar dados de utilização anónimos para SQLBI.",
        [_.optionTelemetryMore]: "Ajude-nos a compreender melhor como usa o Bravo e como o podemos melhorar. Não é recolhida qualquer informação pessoal. Por favor, note que se esta opção estiver desabilitada a equipa de desenvolvimento não poderá recolher dados sobre erros não tratados e fornecer mais informações ou suporte.",
        [_.optionTheme]: "Tema",
        [_.optionThemeDescription]: "Defina o tema do Bravo. Defina <em>Sistema</em> para deixar que o SO escolha.",
        [_.optionThemeValueAuto]: "Sistema",
        [_.optionThemeValueDark]: "Escuro",
        [_.optionThemeValueLight]: "Claro",
        [_.otherColumnsRowName]: "Colunas mais pequenas...",
        [_.paste]: "Colar",
        [_.powerBiObserving]: "A aguardar que o ficheiro abra no Power BI Desktop...",
        [_.powerBiObservingCancel]: "Cancelar",
        [_.powerBiSigninDescription]: "Inicie sessão no Power BI Service para ligar o Bravo a conjuntos de dados online.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Associa a Power BI Desktop",
        [_.quickActionConnectPBITitle]: "Ligar a Power BI Service",
        [_.quickActionOpenVPXTitle]: "Abrir um ficheiro Vertipaq Analyzer",
        [_.refreshCtrlTitle]: "Atualizar",
        [_.refreshPreviewCtrlTitle]: "Atualizar pré-visualização",
        [_.saveVpaxCtrlTile]: "Gravar como VPAX",
        [_.savingVpax]: "A gerar VPAX...",
        [_.sceneUnsupportedReason]: "Esta funcionalidade não está disponível para esta origem de dados.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `Modelos de dados com a opção data/hora automáticas ativa, não são suportados.<br><span class="link" href="https://www.sqlbi.com/tv/disabling-auto-date-time-in-power-bi/">Desabilitar data/hora automáticas no Power BI (video)</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "Esta funcionalidade é suportada apenas por bases de dados que contém pelo menos uma tabela.",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "Esta funcionalidade é suportada apenas por modelos de dados no modo Power BI Desktop.",
        [_.sceneUnsupportedReasonMetadataOnly]: "A base de dados foi gerada a partir de um ficheiro VPAX, que inclui apenas metadados.",
        [_.sceneUnsupportedReasonReadOnly]: "A ligação a esta base de dados é apenas de leitura.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "O ponto final XMLA não é suportado para este conjunto de dados.",
        [_.sceneUnsupportedTitle]: "Não Suportado",
        [_.searchColumnPlaceholder]: "Procurar Coluna",
        [_.searchDatasetPlaceholder]: "Procurar Conjunto de Dados",
        [_.searchEntityPlaceholder]: "Produrar Tabela/Coluna",
        [_.searchMeasurePlaceholder]: "Procurar Medida",
        [_.searchPlaceholder]: "Procurar",
        [_.searchTablePlaceholder]: "Procura Tabela",
        [_.settingsCtrlTitle]: "Opções",
        [_.sheetOrphan]: "Não disponível",
        [_.sheetOrphanPBIXTooltip]: "O relatório foi fechado no Power BI Desktop. Nenhuma operação de escrita é permitida.",
        [_.sheetOrphanTooltip]: "Este modelo já não está disponível. Nenhuma operação de escrita é permitida.",
        [_.showDiagnosticPane]: "Mostrar Detalhes",
        [_.sideCtrlTitle]: "Alternar vista lado-a-lado",
        [_.signedInCtrlTitle]: "Sessão iniciada como {name}",
        [_.signIn]: "Iniciar Sessão",
        [_.signInCtrlTitle]: "Iniciar Sessão",
        [_.signOut]: "Terminar Sessão",
        [_.sqlbiPayoff]: "O Bravo é um projeto SQLBI.",
        [_.syncCtrlTitle]: "Sincronizar",
        [_.tableColCardinality]: "Cardinalidade",
        [_.tableColCardinalityTooltip]: "Número de elementos únicos",
        [_.tableColColumn]: "Coluna",
        [_.tableColColumns]: "Colunas",
        [_.tableColMeasure]: "Medida",
        [_.tableColPath]: "Tabela \\ Coluna",
        [_.tableColRows]: "Linhas",
        [_.tableColSize]: "Tamanho",
        [_.tableColTable]: "Tabela",
        [_.tableColWeight]: "Peso",
        [_.tableSelectedCount]: "{count} Selecionada(s)",
        [_.tableValidationInvalid]: "Este nome não pode ser usado.",
        [_.tableValidationValid]: "Este nome é válido.",
        [_.themeCtrlTitle]: "Alterar Tema",
        [_.toggleTree]: "Alternar Árvore",
        [_.traceId]: "Id de Rastreio",
        [_.unknownMessage]: "Recebida Mensagem Inválida",
        [_.updateChannelBeta]: "Beta",
        [_.updateChannelCanary]: "Canary",
        [_.updateChannelDev]: "Dev",
        [_.updateChannelStable]: "Estável", 
        [_.updateMessage]: "Está disponível uma nova versão do Bravo: {version}",
        [_.validating]: "A validar...",
        [_.version]: "Versão",
        [_.welcomeHelpText]: "Veja os vídeos abaixo para aprender a usar o Bravo:",
        [_.welcomeHelpTitle]: "Como usar o Bravo?",
        [_.welcomeText]: "O Bravo é um conjunto de ferramentas úteis para Power BI, que pode usar para analisar os seus modelos, formatar medidas, criar tabelas de datas e exportar dados.",
        [_.whitespacesTitle]: "Espaços em branco",
        [_.wrappingTitle]: "Quebra de linhas automática",
    }
}
export default locale;

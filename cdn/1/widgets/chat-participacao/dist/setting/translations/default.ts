export default {
  _widgetLabel: 'Chat IA - Participação Social',
  _widgetDescription: 'Widget de chat inteligente para análise de dados de participação social',
  
  // Mensagens gerais
  welcomeMessage: 'Olá! Sou seu assistente de análise de participação social.',
  placeholder: 'Digite sua pergunta...',
  send: 'Enviar',
  
  // Sugestões
  quickSuggestions: 'Sugestões rápidas:',
  suggestion1: 'Mostre apenas oficinas',
  suggestion2: 'Qual o total de público estimado?',
  suggestion3: 'Liste as categorias',
  suggestion4: 'Mostre todos os eventos',
  
  // Configurações
  settings: {
    mapConfiguration: 'Configuração do Mapa',
    selectMapWidget: 'Selecione o widget de mapa:',
    dataSource: 'Fonte de Dados',
    selectLayer: 'Selecione a camada de participação social:',
    language: 'Idioma e Localização',
    defaultLanguage: 'Idioma padrão:',
    appearance: 'Aparência',
    avatarType: 'Tipo de avatar padrão:',
    theme: 'Tema:',
    primaryColor: 'Cor primária:',
    features: 'Funcionalidades',
    showSuggestions: 'Mostrar sugestões rápidas:',
    enableVoice: 'Habilitar entrada por voz:',
    advanced: 'Avançado',
    maxMessages: 'Máximo de mensagens no histórico:'
  },
  
  // Erros
  errors: {
    noDataSource: 'Nenhuma fonte de dados configurada',
    processingError: 'Erro ao processar sua solicitação',
    noResults: 'Nenhum resultado encontrado',
    connectionError: 'Erro de conexão com a camada'
  },
  
  // Respostas do bot
  bot: {
    filterApplied: 'Filtrei os dados para "{value}". Encontrei {count} registro(s).',
    filtersCleared: 'Filtros removidos. Exibindo todos os registros.',
    calculationResult: 'Resultado: {result}',
    noDataFound: 'Nenhum dado encontrado.',
    unknownCommand: 'Não entendi sua solicitação. Tente comandos como:\n• Mostre apenas oficinas\n• Qual o total de público estimado?\n• Liste as categorias'
  }
};
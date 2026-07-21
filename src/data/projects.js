// ─────────────────────────────────────────────────────────────
// EDITE AQUI. Todo o conteúdo dos cases vive neste arquivo.
// Cada projeto vira uma página automática em /projetos/[slug].
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'radar-legislativo',
    index: '01',
    name: 'radar_legislativo',
    segment: 'data-engineering',
    status: 'em produção',
    tagline:
      'Pipeline de dados da Câmara dos Deputados com arquitetura Medallion, IA (OpenAI) e automação n8n. Projeto acadêmico em grupo.',
    problem:
      'Os dados de proposições e atividade legislativa da Câmara dos Deputados estão disponíveis, mas dispersos e sem uma camada analítica pronta para consumo. O objetivo do projeto: ingerir esses dados de forma automatizada, tratá-los em camadas (Medallion) e entregar uma base confiável — com apoio de IA para sumarização e classificação das proposições.',
    // Camadas do pipeline — a assinatura visual do site.
    layers: [
      {
        tier: 'BRONZE',
        label: 'raw',
        tone: 'bronze',
        tools: 'n8n → PostgreSQL',
        desc: 'Ingestão automatizada via workflows n8n. Dados brutos persistidos sem transformação, preservando a fonte original para reprocessamento.',
      },
      {
        tier: 'SILVER',
        label: 'tratado',
        tone: 'silver',
        tools: 'Python · SQL',
        desc: 'Limpeza, deduplicação e modelagem. Padronização de schema e normalização dos campos legislativos para consultas consistentes.',
      },
      {
        tier: 'GOLD',
        label: 'analítico',
        tone: 'gold',
        tools: 'OpenAI · agregações',
        desc: 'Camada de consumo: agregações prontas e enriquecimento com IA (sumarização e classificação de proposições) para análise e dashboards.',
      },
    ],
    decisions: [
      {
        icon: 'branch',
        title: 'Medallion sobre ETL monolítico',
        desc: 'Separar raw/tratado/analítico dá rastreabilidade e permite reprocessar sem reingerir da fonte.',
      },
      {
        icon: 'plug',
        title: 'n8n para orquestração de ingestão',
        desc: 'Workflows visuais e agendáveis reduzem código boilerplate na camada de coleta e facilitam manutenção.',
      },
      {
        icon: 'spark',
        title: 'IA só na camada Gold',
        desc: 'Enriquecimento com OpenAI fica no fim do fluxo — dados brutos permanecem auditáveis e o custo de IA é controlado.',
      },
      {
        icon: 'lock',
        title: 'Gestão de segredos',
        desc: 'Credenciais fora do versionamento, injetadas via ambiente — prática incorporada após revisão de segurança.',
      },
    ],
    stack: ['Python', 'n8n', 'PostgreSQL', 'OpenAI', 'Medallion'],
    // Preencha com números reais quando tiver.
    metrics: [
      { label: 'camadas', value: '3' },
      { label: 'orquestração', value: 'auto' },
      { label: 'fonte', value: 'Câmara' },
    ],
    // GALERIA — coloque as imagens em /public/shots/ e referencie aqui.
    // Ex.: { src: '/shots/radar-n8n.png', caption: 'Workflow n8n em execução' }
    // Deixe [] para mostrar placeholders "em breve".
    shots: [
      { src: '', caption: 'Workflow n8n em execução' },
      { src: '', caption: 'Dados na camada Gold (PostgreSQL)' },
    ],
    repo: 'https://github.com/Ferreira0826/radar_legislativo',
  },

  {
    slug: 'assistente-rag',
    index: '02',
    name: 'assistente_rag',
    segment: 'ai / llm',
    status: 'concluído',
    tagline:
      'Assistente RAG local — busca semântica sobre documentos com LLM rodando na própria máquina, construído como preparação para uma vaga de AI Solutions Analyst.',
    problem:
      'Consultar informação dispersa em documentos (inclusive digitalizados) exige leitura manual e não permite perguntas em linguagem natural. A proposta: um assistente que ingere documentos, extrai texto — inclusive via OCR — indexa em um banco vetorial e responde perguntas com um LLM local, sem depender de API paga nem enviar dados sensíveis para fora.',
    layers: [
      {
        tier: 'INGESTÃO',
        label: 'documentos',
        tone: 'bronze',
        tools: 'Tesseract · Poppler',
        desc: 'Extração de texto de PDFs e imagens via OCR, normalizando o conteúdo bruto para indexação.',
      },
      {
        tier: 'ÍNDICE',
        label: 'vetorial',
        tone: 'silver',
        tools: 'ChromaDB',
        desc: 'Chunking e embedding dos documentos em um banco vetorial para recuperação por similaridade semântica.',
      },
      {
        tier: 'RESPOSTA',
        label: 'geração',
        tone: 'gold',
        tools: 'Ollama · llama3.2',
        desc: 'Recuperação do contexto relevante e geração da resposta com LLM local, exposta em interface Streamlit.',
      },
    ],
    decisions: [
      {
        icon: 'lock',
        title: 'LLM local com Ollama',
        desc: 'Rodar llama3.2 na máquina mantém dados sensíveis privados e elimina custo por token — decisão-chave para o caso de uso.',
      },
      {
        icon: 'layers',
        title: 'ChromaDB como store vetorial',
        desc: 'Setup leve e sem infraestrutura externa, ideal para prototipar RAG rápido sem provisionar serviços.',
      },
      {
        icon: 'spark',
        title: 'OCR na entrada',
        desc: 'Tesseract + Poppler ampliam a base de fontes: documentos escaneados entram no índice como texto pesquisável.',
      },
      {
        icon: 'branch',
        title: 'Streamlit para a interface',
        desc: 'UI funcional em pouco código, focando o esforço na qualidade da recuperação e não no frontend.',
      },
    ],
    stack: ['Python', 'ChromaDB', 'Ollama', 'llama3.2', 'Streamlit', 'Tesseract'],
    metrics: [
      { label: 'infra', value: '100% local' },
      { label: 'custo/token', value: 'R$0' },
      { label: 'fontes', value: 'PDF+OCR' },
    ],
    shots: [
      { src: '/shots/rag-streamlit.png', caption: 'Interface Streamlit — pergunta sobre o SISAB respondida a partir dos documentos indexados' },
    ],
    // TODO: subir o repo e conferir o link abaixo
    repo: 'https://github.com/Ferreira0826/assistente_rag',
  },

  {
    slug: 'projeto-vendas-dashboard',
    index: '03',
    name: 'vendas_dashboard',
    segment: 'full-stack / data-app',
    status: 'em produção',
    tagline:
      'Dashboard de vendas full-stack — API em Django, frontend reativo em React e deploy contínuo no Vercel.',
    problem:
      'Dados de vendas sem uma camada de visualização acessível forçam análise em planilhas soltas. O objetivo: uma aplicação web que sirva os dados via API, apresente métricas e visualizações de forma interativa, e esteja sempre disponível — com deploy automatizado.',
    layers: [
      {
        tier: 'DADOS',
        label: 'persistência',
        tone: 'bronze',
        tools: 'Supabase',
        desc: 'Base de dados gerenciada como fonte única, servindo os dados de vendas para a camada de API.',
      },
      {
        tier: 'API',
        label: 'backend',
        tone: 'silver',
        tools: 'Django',
        desc: 'Camada de serviço que expõe os dados de forma estruturada, com a lógica de negócio isolada do frontend.',
      },
      {
        tier: 'UI',
        label: 'frontend',
        tone: 'gold',
        tools: 'React · TanStack · Vite',
        desc: 'Interface reativa com data-fetching gerenciado por TanStack Query, build com Vite e estilo com Tailwind.',
      },
    ],
    decisions: [
      {
        icon: 'layers',
        title: 'Separação API / frontend',
        desc: 'Django serve dados, React consome. Desacoplar backend e frontend permite evoluir cada camada de forma independente.',
      },
      {
        icon: 'plug',
        title: 'TanStack Query para estado de servidor',
        desc: 'Cache, revalidação e estados de carregamento gerenciados na fonte — menos código manual e UI mais consistente.',
      },
      {
        icon: 'branch',
        title: 'Deploy contínuo no Vercel',
        desc: 'Cada push publica automaticamente. Aplicação sempre no ar, sem processo manual de release.',
      },
      {
        icon: 'lock',
        title: 'Higiene de repositório',
        desc: 'node_modules fora do versionamento e variáveis de ambiente protegidas — corrigido após revisão de segurança.',
      },
    ],
    stack: ['Django', 'React', 'TanStack', 'Vite', 'Tailwind', 'Supabase', 'Vercel'],
    metrics: [
      { label: 'arquitetura', value: 'API+SPA' },
      { label: 'deploy', value: 'contínuo' },
      { label: 'uptime', value: 'sempre' },
    ],
    shots: [
      { src: '/shots/dashboard-vercel.png', caption: 'Dashboard executivo no ar — KPIs, filtros e insights automáticos' },
    ],
    liveUrl: 'https://projeto-vendas-dashboard.vercel.app',
    repo: 'https://github.com/Ferreira0826/projeto_vendas_dashboard',
  },

  {
    slug: 'automacao-egestor-aps',
    index: '04',
    name: 'automacao_egestor_aps',
    segment: 'automação / rpa',
    status: 'concluído',
    tagline:
      'Pipeline RPA em Python para automatizar a coleta de dados do e-Gestor APS, com integração ao Google Sheets e upload no sistema interno eCIEGES.',
    problem:
      'A coleta de dados do e-Gestor APS era feita manualmente — acessar o portal, extrair os relatórios e transportar os dados para as ferramentas internas consome tempo e é propenso a erro. O objetivo: automatizar todo o fluxo, do acesso ao portal até a entrega dos dados no destino, liberando a equipe de um trabalho repetitivo e recorrente.',
    layers: [
      {
        tier: 'COLETA',
        label: 'e-Gestor APS',
        tone: 'bronze',
        tools: 'Python · RPA',
        desc: 'Automação de acesso ao portal e extração dos relatórios do e-Gestor APS, sem intervenção manual.',
      },
      {
        tier: 'INTEGRAÇÃO',
        label: 'planilhas',
        tone: 'silver',
        tools: 'Google Sheets',
        desc: 'Os dados coletados são consolidados e escritos automaticamente em planilhas do Google Sheets para acompanhamento.',
      },
      {
        tier: 'CARGA',
        label: 'eCIEGES',
        tone: 'gold',
        tools: 'upload interno',
        desc: 'Upload dos dados tratados no sistema interno eCIEGES, fechando o fluxo de ponta a ponta.',
      },
    ],
    decisions: [
      {
        icon: 'plug',
        title: 'RPA para um portal sem API',
        desc: 'Sem interface programática oficial, a automação de interface (RPA) foi o caminho para extrair os dados de forma confiável e repetível.',
      },
      {
        icon: 'layers',
        title: 'Google Sheets como camada intermediária',
        desc: 'Usar planilha como ponto de consolidação dá visibilidade humana ao dado antes da carga final e facilita conferência.',
      },
      {
        icon: 'branch',
        title: 'Fluxo de ponta a ponta',
        desc: 'Automatizar do acesso ao upload — e não só um trecho — elimina o trabalho manual recorrente por completo.',
      },
      {
        icon: 'lock',
        title: 'Credenciais protegidas',
        desc: 'Acessos aos sistemas mantidos fora do código, tratados como configuração de ambiente.',
      },
    ],
    stack: ['Python', 'RPA', 'Google Sheets', 'e-Gestor APS', 'eCIEGES'],
    metrics: [
      { label: 'fluxo', value: 'ponta a ponta' },
      { label: 'execução', value: 'automática' },
      { label: 'destino', value: 'eCIEGES' },
    ],
    shots: [
      { src: '/shots/egestor-terminal.png', caption: 'Robô em execução: baixa a parcela, integra no Google Sheets e faz upload no eCIEGES' },
    ],
    repo: 'https://github.com/Ferreira0826/automacao-egestor-aps',
  },

  {
    slug: 'automacao-sisab-aps',
    index: '05',
    name: 'automacao_sisab_aps',
    segment: 'automação / rpa',
    status: 'concluído',
    tagline:
      'Automação em Python para coleta de dados do SISAB, reduzindo o esforço manual de extração de indicadores da Atenção Primária.',
    problem:
      'Extrair indicadores do SISAB manualmente é repetitivo e toma tempo da equipe — cada consulta exige navegar o portal e baixar relatórios um a um. O objetivo: automatizar a coleta desses dados para que os indicadores fiquem disponíveis de forma rápida e consistente, sem o gargalo do trabalho manual.',
    layers: [
      {
        tier: 'ACESSO',
        label: 'SISAB',
        tone: 'bronze',
        tools: 'Python',
        desc: 'Automação de navegação e consulta ao portal SISAB para chegar aos relatórios de interesse.',
      },
      {
        tier: 'EXTRAÇÃO',
        label: 'indicadores',
        tone: 'silver',
        tools: 'scraping',
        desc: 'Coleta dos indicadores da Atenção Primária de forma estruturada, pronta para uso posterior.',
      },
      {
        tier: 'SAÍDA',
        label: 'dados',
        tone: 'gold',
        tools: 'arquivos',
        desc: 'Os dados extraídos são organizados e salvos para consumo em análises e relatórios.',
      },
    ],
    decisions: [
      {
        icon: 'plug',
        title: 'Automação da coleta no SISAB',
        desc: 'Substituir a extração manual por um processo automatizado torna a obtenção dos indicadores rápida e reproduzível.',
      },
      {
        icon: 'layers',
        title: 'Saída estruturada',
        desc: 'Organizar os dados em formato consistente na saída facilita reaproveitá-los em análises sem retrabalho.',
      },
      {
        icon: 'branch',
        title: 'Foco na Atenção Primária',
        desc: 'Automação desenhada em torno dos indicadores da APS, alinhada ao trabalho real com sistemas de saúde pública.',
      },
      {
        icon: 'lock',
        title: 'Acessos protegidos',
        desc: 'Credenciais de acesso mantidas fora do versionamento.',
      },
    ],
    stack: ['Python', 'SISAB', 'RPA', 'Atenção Primária'],
    metrics: [
      { label: 'coleta', value: 'automática' },
      { label: 'domínio', value: 'APS' },
      { label: 'fonte', value: 'SISAB' },
    ],
    shots: [
      { src: '/shots/sisab-terminal.png', caption: 'Execução do robô SISAB — detecção de CSV, verificação de competência e status por e-mail' },
    ],
    repo: 'https://github.com/Ferreira0826/automacao-sisab-aps',
  },
];

export const profile = {
  name: 'Gabriel Ferreira',
  role: 'Analista de Dados',
  focus: 'transição para Engenharia de Dados',
  location: 'Brasília, DF',
  intro:
    'Analista de Dados trabalhando diariamente com pipelines ETL, PostgreSQL, Power BI e Python em sistemas de saúde pública. Em transição para Engenharia de Dados, construo projetos que vão da ingestão bruta ao consumo analítico — sempre pensando em rastreabilidade, arquitetura e dado confiável.',
  // Texto da seção SOBRE — mais pessoal, sobre trajetória. Personalize à vontade.
  about:
    'Meu trabalho no dia a dia é transformar dados dispersos de saúde pública em informação confiável: extraio, trato e modelo dados de sistemas como SISAB, e-SUS APS e DATASUS para que virem decisão. Foi aí que a Engenharia de Dados deixou de ser tarefa e virou direção — passei a me interessar menos pelo relatório final e mais pela arquitetura que garante que o dado chegue íntegro até ele.',
  aboutExtra:
    'Hoje construo projetos que exercitam esse caminho de ponta a ponta: pipelines com arquitetura Medallion, orquestração, automações RPA e aplicações de dados. A pós em Engenharia de Dados & IA (conclusão em fevereiro de 2027) formaliza o que já venho praticando nos projetos aqui do portfólio.',
  daily: ['PostgreSQL', 'Python', 'Power BI', 'ETL'],
  study:
    'Pós-graduação em Engenharia de Dados & IA, com conclusão prevista para fevereiro de 2027.',
  github: 'https://github.com/Ferreira0826',
};

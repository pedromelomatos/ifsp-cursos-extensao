export const courses = [
  {
    id: 1,
    name: 'Introdução ao Desenvolvimento Web',
    campus: 'Guarulhos',
    modality: 'Presencial',
    workload: 40,
    vacancies: 30,
    status: 'open',
    statusLabel: 'Inscrições abertas',
    registrationPeriod: '10/08/2026 até 25/08/2026',
    executionPeriod: '01/09/2026 até 30/09/2026',
    schedule: 'Terças e quintas-feiras, das 19h às 21h',
    summary:
      'Aprenda os fundamentos de HTML, CSS e JavaScript para criar páginas web simples e acessíveis.',
    description:
      'Curso introdutório voltado à construção de páginas para a internet, com atividades práticas sobre estrutura, estilos, interatividade básica e publicação de conteúdos.',
    objective:
      'Apresentar os conceitos essenciais do desenvolvimento web e apoiar participantes na criação de uma primeira página funcional.',
    audience:
      'Pessoas da comunidade interessadas em iniciar estudos na área de tecnologia, estudantes do ensino médio e trabalhadores que desejam atualizar conhecimentos.',
    requirements: ['Conhecimentos básicos de informática', 'Disponibilidade para atividades práticas em laboratório'],
    documents: ['Documento de identificação com foto', 'CPF', 'Comprovante de escolaridade ou autodeclaração'],
    coordinator: 'Prof. Marcos Almeida',
    contact: 'extensao.guarulhos@ifsp.edu.br',
  },
  {
    id: 2,
    name: 'Excel para o Mercado de Trabalho',
    campus: 'São Paulo',
    modality: 'Presencial',
    workload: 20,
    vacancies: 35,
    status: 'open',
    statusLabel: 'Inscrições abertas',
    registrationPeriod: '12/08/2026 até 28/08/2026',
    executionPeriod: '05/09/2026 até 26/09/2026',
    schedule: 'Sábados, das 8h30 às 12h30',
    summary:
      'Utilize planilhas para organizar dados, criar fórmulas e preparar relatórios simples para o ambiente profissional.',
    description:
      'Formação prática para uso de planilhas eletrônicas em atividades administrativas, financeiras e de acompanhamento de rotinas de trabalho.',
    objective:
      'Desenvolver autonomia no uso de fórmulas, filtros, formatação e gráficos básicos em planilhas.',
    audience:
      'Jovens e adultos que buscam inserção ou recolocação profissional e desejam melhorar habilidades digitais.',
    requirements: ['Conhecimentos básicos de computador', 'Não é necessário conhecimento prévio em Excel'],
    documents: ['Documento de identificação com foto', 'CPF'],
    coordinator: 'Profa. Renata Campos',
    contact: 'extensao.spo@ifsp.edu.br',
  },
  {
    id: 3,
    name: 'Introdução à Programação com Python',
    campus: 'Campinas',
    modality: 'Online',
    workload: 30,
    vacancies: 40,
    status: 'soon',
    statusLabel: 'Inscrições em breve',
    registrationPeriod: '01/09/2026 até 15/09/2026',
    executionPeriod: '22/09/2026 até 22/10/2026',
    schedule: 'Aulas online às quartas-feiras, das 19h às 21h30',
    summary:
      'Conheça lógica de programação e escreva primeiros programas usando a linguagem Python.',
    description:
      'Curso online com atividades guiadas para apresentação de variáveis, estruturas de decisão, repetição, listas e funções.',
    objective:
      'Introduzir o pensamento computacional e a resolução de problemas por meio de pequenos programas em Python.',
    audience:
      'Pessoas iniciantes em programação, estudantes e profissionais interessados em automação de tarefas simples.',
    requirements: ['Acesso à internet', 'Computador para acompanhar as atividades', 'E-mail ativo'],
    documents: ['Documento de identificação com foto', 'CPF'],
    coordinator: 'Prof. Daniel Martins',
    contact: 'extensao.cmp@ifsp.edu.br',
  },
  {
    id: 4,
    name: 'Educação Financeira',
    campus: 'Guarulhos',
    modality: 'Híbrido',
    workload: 16,
    vacancies: 25,
    status: 'closed',
    statusLabel: 'Inscrições encerradas',
    registrationPeriod: '01/07/2026 até 18/07/2026',
    executionPeriod: '03/08/2026 até 24/08/2026',
    schedule: 'Segundas-feiras, das 18h30 às 20h30, com encontros presenciais alternados',
    summary:
      'Organize orçamento pessoal, compreenda juros e planeje decisões financeiras do dia a dia.',
    description:
      'Atividade de extensão sobre planejamento financeiro, consumo consciente, crédito, dívidas e metas familiares.',
    objective:
      'Apoiar participantes na tomada de decisões financeiras mais informadas e no uso de ferramentas simples de controle.',
    audience:
      'Comunidade em geral, especialmente pessoas interessadas em melhorar o planejamento do orçamento familiar.',
    requirements: ['Interesse pelo tema', 'Disponibilidade para encontros presenciais e atividades online'],
    documents: ['Documento de identificação com foto'],
    coordinator: 'Profa. Helena Ribeiro',
    contact: 'extensao.guarulhos@ifsp.edu.br',
  },
  {
    id: 5,
    name: 'Informática Básica para a Comunidade',
    campus: 'Bragança Paulista',
    modality: 'Presencial',
    workload: 24,
    vacancies: 28,
    status: 'open',
    statusLabel: 'Inscrições abertas',
    registrationPeriod: '15/08/2026 até 05/09/2026',
    executionPeriod: '12/09/2026 até 24/10/2026',
    schedule: 'Sábados, das 9h às 12h',
    summary:
      'Aprenda a utilizar computador, internet, e-mail e ferramentas digitais em atividades cotidianas.',
    description:
      'Curso presencial para desenvolver habilidades básicas de uso do computador, navegação segura, criação de documentos e comunicação digital.',
    objective:
      'Promover inclusão digital e ampliar a autonomia da comunidade no uso de serviços e ferramentas online.',
    audience:
      'Adultos, idosos e demais pessoas com pouca familiaridade com computadores e internet.',
    requirements: ['Não é necessário conhecimento prévio', 'Vontade de aprender no próprio ritmo'],
    documents: ['Documento de identificação com foto', 'CPF', 'Comprovante de residência'],
    coordinator: 'Profa. Camila Nogueira',
    contact: 'extensao.bra@ifsp.edu.br',
  },
  {
    id: 6,
    name: 'Introdução à Inteligência Artificial',
    campus: 'São José dos Campos',
    modality: 'Online',
    workload: 20,
    vacancies: 50,
    status: 'soon',
    statusLabel: 'Inscrições em breve',
    registrationPeriod: '20/09/2026 até 04/10/2026',
    executionPeriod: '13/10/2026 até 10/11/2026',
    schedule: 'Terças-feiras, das 19h às 21h',
    summary:
      'Entenda conceitos básicos de inteligência artificial, aplicações atuais e cuidados no uso dessas tecnologias.',
    description:
      'Curso introdutório sobre conceitos, exemplos de aplicação, impactos sociais e uso responsável de ferramentas baseadas em IA.',
    objective:
      'Oferecer uma visão inicial sobre inteligência artificial e apoiar o uso crítico de ferramentas digitais emergentes.',
    audience:
      'Comunidade em geral, professores, estudantes e profissionais interessados em compreender aplicações de IA.',
    requirements: ['Acesso à internet', 'Conhecimentos básicos de navegação na web'],
    documents: ['Documento de identificação com foto', 'CPF'],
    coordinator: 'Prof. Felipe Andrade',
    contact: 'extensao.sjc@ifsp.edu.br',
  },
];

export const campusOptions = [
  'Todos os campi',
  'Guarulhos',
  'São Paulo',
  'Campinas',
  'Bragança Paulista',
  'São José dos Campos',
];

export const modalityOptions = ['Todas', 'Presencial', 'Online', 'Híbrido'];

export const statusOptions = [
  'Todos',
  'Inscrições abertas',
  'Inscrições em breve',
  'Inscrições encerradas',
];

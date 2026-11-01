export type Locale = 'pt' | 'en'

export const locales: Locale[] = ['pt', 'en']

const pt = {
  meta: {
    title: 'ORVIO Studio — Design e desenvolvimento',
    description:
      'Estúdio independente especializado em landing pages premium para marcas que já existem.',
  },
  skip: 'Pular para o conteúdo',
  nav: {
    label: 'Navegação principal',
    home: 'ORVIO, página inicial',
    work: 'Projetos',
    studio: 'Estúdio',
    services: 'Serviços',
    contact: 'Contato',
    cta: 'Vamos conversar',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    menuTitle: 'Menu',
  },
  language: {
    label: 'Idioma',
    pt: 'Português',
    en: 'English',
  },
  hero: {
    eyebrow: 'Estúdio independente de landing pages premium',
    lines: [
      ['Presença', 'que marca.'],
      ['Experiências', 'que movem.'],
    ],
    supporting: 'Criamos landing pages premium a partir da marca que sua empresa já construiu.',
    cta: 'Ver projetos selecionados',
    disciplines: 'Estratégia — Design — Desenvolvimento',
    featured: 'Em destaque',
    scroll: 'Role',
  },
  work: {
    label: 'Projetos selecionados',
    title: ['Trabalho', 'em foco'],
    intro:
      'Três estudos conceituais de landing pages premium para marcas que já existem.',
    concept: 'Projeto conceitual',
    view: 'Ver estudo de caso',
    total: 'projetos',
  },
  studio: {
    label: 'Estúdio',
    statement: [
      'Conteúdo para dar direção.',
      'Design para criar presença.',
      'Front-end para fazer acontecer.',
    ],
    body: [
      'A ORVIO é um estúdio independente focado em landing pages premium. Trabalhamos a partir da marca e dos materiais que cada negócio já construiu.',
      'Organizamos a mensagem, desenhamos a página e desenvolvemos uma experiência rápida e responsiva. O resultado apresenta o negócio com clareza e conduz o visitante ao próximo passo, sem exigir uma plataforma ou sistema complexo.',
      'Trabalhamos com negócios no Brasil e no exterior, em português ou inglês.',
    ],
    axis: [
      { term: 'Conteúdo', role: 'Direção' },
      { term: 'Design web', role: 'Presença' },
      { term: 'Front-end', role: 'Entrega' },
    ],
  },
  services: {
    label: 'Serviços',
    title: 'O que fazemos',
    intro: 'Landing pages premium, feitas para apresentar negócios com clareza e personalidade.',
    deliverables: 'O que está incluído',
    items: [
      { title: 'Estratégia e conteúdo', summary: 'Uma estrutura clara, construída em torno do que o cliente precisa comunicar.', deliverables: ['Arquitetura da página', 'Hierarquia de informação', 'Organização do conteúdo', 'Chamadas para ação', 'Direção de conteúdo', 'Adaptação para celular'] },
      { title: 'Design de landing page', summary: 'Um site marcante que parte da identidade visual que sua empresa já tem.', deliverables: ['Layout exclusivo', 'Uso da marca existente', 'Tipografia e cores da marca', 'Direção visual para imagens', 'Interface responsiva', 'Protótipo navegável'] },
      { title: 'Desenvolvimento front-end', summary: 'Uma página rápida, responsiva e pronta para apresentar seu negócio.', deliverables: ['Implementação da página', 'Animações sutis', 'Acessibilidade', 'SEO técnico básico', 'Otimização de performance', 'Publicação do site'] },
    ],
  },
  process: {
    label: 'Processo',
    title: 'Como nasce uma landing page',
    steps: [
      {
        title: 'Descoberta',
        body: 'Conversas, materiais existentes e objetivos. Saímos com escopo claro e cronograma combinado.',
      },
      {
        title: 'Direção',
        body: 'Posicionamento, referências e território visual. É aqui que as escolhas importantes são feitas.',
      },
      {
        title: 'Criação',
        body: 'Design e desenvolvimento avançam juntos, com revisões frequentes em ambiente real, não só em imagens.',
      },
      {
        title: 'Lançamento',
        body: 'Publicação, testes finais e entrega de arquivos e guias. Se fizer sentido, seguimos evoluindo.',
      },
    ],
  },
  contact: {
    label: 'Contato',
    title: ['Seu próximo', 'capítulo começa', 'com uma conversa.'],
    intro:
      'Conte um pouco sobre o projeto. Respondemos com perguntas, uma conversa inicial e, quando fizer sentido, uma proposta.',
    emailLabel: 'E-mail',
    emailPending: 'E-mail de contato em breve',
    formLabel: 'Formulário de contato',
  },
  form: {
    name: 'Nome',
    email: 'E-mail',
    company: 'Empresa',
    optional: 'opcional',
    type: 'Tipo de projeto',
    types: [
      'Landing page premium',
      'Página para campanha',
      'Site de apresentação',
      'Atualização de landing page',
      'Ainda não sei'
    ],
    message: 'Breve descrição',
    messageHint: 'Objetivos, prazos ou referências. Algumas linhas bastam.',
    submit: 'Enviar mensagem',
    submitting: 'Verificando…',
    demoBadge: 'Modo demonstração',
    demoNotice:
      'O envio deste formulário ainda não está conectado. Você pode testar o preenchimento, mas nenhuma mensagem será enviada.',
    demoResultTitle: 'Envio não conectado',
    demoResult:
      'Seu preenchimento está correto, mas nenhuma mensagem foi enviada: o formulário ainda está em modo demonstração.',
    sentTitle: 'Mensagem enviada',
    sent: 'Obrigado. Respondemos em breve.',
    errorTitle: 'Não foi possível enviar',
    error: 'Algo deu errado. Tente novamente em instantes.',
    errorSummary: 'Revise os campos destacados antes de continuar.',
    errors: {
      nameRequired: 'Informe seu nome.',
      emailRequired: 'Informe um e-mail para resposta.',
      emailInvalid: 'Use um e-mail válido, como nome@empresa.com.',
      typeRequired: 'Escolha o tipo de projeto.',
      messageRequired: 'Descreva brevemente o projeto.',
      messageShort: 'Escreva pelo menos 20 caracteres.',
    },
    characters: 'caracteres',
  },
  footer: {
    nav: 'Navegação',
    language: 'Idioma',
    localTime: 'Horário local',
    timezone: 'Horário de Brasília (UTC−3)',
    rights: 'Todos os direitos reservados.',
    note: 'Os projetos apresentados são conceituais.',
    top: 'Voltar ao topo',
  },
  caseStudy: {
    back: 'Todos os projetos',
    concept: 'Projeto conceitual',
    conceptNote:
      'Estudo conceitual criado pela ORVIO para demonstrar processo e linguagem. Não representa um cliente nem resultados reais.',
    services: 'Serviços',
    sector: 'Setor',
    status: 'Status',
    challenge: 'Desafio',
    approach: 'Abordagem',
    applications: 'Aplicações',
    next: 'Próximo projeto',
    project: 'Projeto',
    of: 'de',
  },
  notFound: {
    title: 'Página não encontrada',
    body: 'O endereço pode ter mudado. Volte ao início para ver os projetos.',
    cta: 'Voltar ao início',
  },
}

export type Dictionary = typeof pt

const en: Dictionary = {
  meta: {
    title: 'ORVIO Studio — Design and development',
    description:
      'An independent studio creating premium landing pages for brands that are already established.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main navigation',
    home: 'ORVIO, home',
    work: 'Work',
    studio: 'Studio',
    services: 'Services',
    contact: 'Contact',
    cta: "Let's talk",
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuTitle: 'Menu',
  },
  language: {
    label: 'Language',
    pt: 'Português',
    en: 'English',
  },
  hero: {
    eyebrow: 'Independent premium landing page studio',
    lines: [
      ['A distinct', 'presence.'],
      ['An experience', 'that moves.'],
    ],
    supporting: 'We create premium landing pages around the brand your business has already built.',
    cta: 'See selected work',
    disciplines: 'Strategy — Design — Development',
    featured: 'Featured',
    scroll: 'Scroll',
  },
  work: {
    label: 'Selected work',
    title: ['Work', 'in focus'],
    intro:
      'Three premium landing page concepts for businesses with an established brand.',
    concept: 'Concept project',
    view: 'View case study',
    total: 'projects',
  },
  studio: {
    label: 'Studio',
    statement: [
      'Strategy to set direction.',
      'Design to create presence.',
      'Front-end to make it real.',
    ],
    body: [
      'ORVIO is an independent studio focused on premium landing pages. We work with the brand and materials each business has already built.',
      "We organize the message, design the page, and build a fast, responsive experience. The result presents the business clearly and guides visitors to the next step without requiring a complex platform or system.",
      'We work with businesses in Brazil and abroad, in Portuguese or English.',
    ],
    axis: [
      { term: 'Content', role: 'Direction' },
      { term: 'Web design', role: 'Presence' },
      { term: 'Front end', role: 'Delivery' },
    ],
  },
  services: {
    label: 'Services',
    title: 'What we do',
    intro: 'Premium landing pages built to present businesses with clarity and character.',
    deliverables: 'What is included',
    items: [
      { title: 'Page strategy and content', summary: 'A clear structure built around what the business needs to communicate.', deliverables: ['Page architecture', 'Information hierarchy', 'Content organization', 'Calls to action', 'Content direction', 'Mobile adaptation'] },
      { title: 'Landing page design', summary: 'A distinctive website built around the visual identity your business already has.', deliverables: ['Custom layout', 'Existing brand assets', 'Brand typography and colors', 'Image art direction', 'Responsive interface', 'Clickable prototype'] },
      { title: 'Front-end development', summary: 'A fast, responsive page that is ready to present your business.', deliverables: ['Page implementation', 'Subtle motion', 'Accessibility', 'Core technical SEO', 'Performance optimization', 'Website launch'] },
    ],
  },
  process: {
    label: 'Process',
    title: 'How a landing page takes shape',
    steps: [
      {
        title: 'Discovery',
        body: 'Conversations, existing materials, and goals. We leave with a clear scope and an agreed timeline.',
      },
      {
        title: 'Direction',
        body: 'Positioning, references, and a visual territory. This is where the important choices are made.',
      },
      {
        title: 'Creation',
        body: 'Design and development move together, with frequent reviews in a real environment, not just images.',
      },
      {
        title: 'Launch',
        body: 'Deployment, final testing, and handover of files and guides. If it makes sense, we keep evolving it.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: ['Your next', 'chapter starts', 'with a conversation.'],
    intro:
      'Tell us a little about the project. We reply with questions, an initial call and, when it makes sense, a proposal.',
    emailLabel: 'Email',
    emailPending: 'Contact email coming soon',
    formLabel: 'Contact form',
  },
  form: {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    optional: 'optional',
    type: 'Project type',
    types: [
      'Premium landing page',
      'Campaign page',
      'Business landing page',
      'Landing page refresh',
      'Not sure yet'
    ],
    message: 'Short description',
    messageHint: 'Goals, timing, or references. A few lines are enough.',
    submit: 'Send message',
    submitting: 'Checking…',
    demoBadge: 'Demo mode',
    demoNotice:
      "Submission for this form isn't connected yet. You can try filling it in, but no message will be sent.",
    demoResultTitle: 'Submission not connected',
    demoResult:
      'Everything is filled in correctly, but no message was sent: the form is still in demo mode.',
    sentTitle: 'Message sent',
    sent: "Thank you. We'll be in touch soon.",
    errorTitle: "Couldn't send",
    error: 'Something went wrong. Please try again in a moment.',
    errorSummary: 'Please review the highlighted fields before continuing.',
    errors: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter an email we can reply to.',
      emailInvalid: 'Use a valid email, like name@company.com.',
      typeRequired: 'Choose a project type.',
      messageRequired: 'Briefly describe the project.',
      messageShort: 'Write at least 20 characters.',
    },
    characters: 'characters',
  },
  footer: {
    nav: 'Navigation',
    language: 'Language',
    localTime: 'Local time',
    timezone: 'Brasília time (UTC−3)',
    rights: 'All rights reserved.',
    note: 'The projects shown are concept work.',
    top: 'Back to top',
  },
  caseStudy: {
    back: 'All work',
    concept: 'Concept project',
    conceptNote:
      'A concept study created by ORVIO to demonstrate process and visual language. It does not represent a real client or real results.',
    services: 'Services',
    sector: 'Sector',
    status: 'Status',
    challenge: 'Challenge',
    approach: 'Approach',
    applications: 'Applications',
    next: 'Next project',
    project: 'Project',
    of: 'of',
  },
  notFound: {
    title: 'Page not found',
    body: 'The address may have changed. Head back to the start to see the work.',
    cta: 'Back to home',
  },
}

export const dictionaries: Record<Locale, Dictionary> = { pt, en }

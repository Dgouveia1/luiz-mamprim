export type CityPage = {
  slug: string;
  name: string;
  state: string;
  distance: string;
  comarca: string;
  forum?: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string[];
  about: string[];
  attendance: string[];
  forumInfo?: string[];
  remoteSupport?: string[];
  faq: { q: string; a: string }[];
};

export const cityPages: CityPage[] = [
  {
    slug: "advogado-em-votuporanga",
    name: "Votuporanga",
    state: "SP",
    distance: "~50 km de Fernandópolis",
    comarca: "Comarca de Votuporanga",
    forum: "Fórum da Comarca de Votuporanga (Rua Paraíba, 3.066 — Centro)",
    h1: "Advogado em Votuporanga — Direito Penal e Família",
    title: "Advogado em Votuporanga | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Votuporanga/SP. Defesa em flagrante, divórcio, guarda e pensão. Audiências no Fórum local. WhatsApp (17) 99632-4627.",
    intro: [
      "Atendimento em Votuporanga e em toda a comarca, com presença em audiências no Fórum local e atuação criminal e de família em toda a região noroeste paulista. A distância de cerca de 50 km de Fernandópolis permite resposta rápida tanto presencial quanto on-line.",
      "Direito Penal — flagrante, habeas corpus, processos criminais, Tribunal do Júri, recursos. Direito de Família — divórcio, guarda compartilhada, pensão, inventário, medidas protetivas pela Lei Maria da Penha.",
    ],
    about: [
      "Votuporanga é um dos principais polos da região noroeste paulista, com aproximadamente 95 mil habitantes (Censo IBGE 2022) e estrutura forense consolidada. A comarca conta com Vara Criminal, Varas de Família e Sucessões e Juizado Especial Criminal — todos atendidos pelo escritório, com deslocamento a partir de Fernandópolis para audiências, sustentações orais e atendimentos presenciais quando necessários.",
      "Casos criminais urgentes — prisões em flagrante, mandados expedidos, audiências de custódia — são atendidos com deslocamento imediato. Em casos de família, a maior parte das consultas pode ser feita on-line, com presença reservada para audiências e atos solenes.",
    ],
    attendance: [
      "Defesa criminal completa (flagrante, audiência de custódia, processo penal, recursos)",
      "Habeas corpus em casos urgentes",
      "Tribunal do Júri",
      "Divórcio consensual em cartório e judicial",
      "Divórcio litigioso e partilha de bens",
      "Guarda, pensão e regulamentação de visitas",
      "Inventário judicial e extrajudicial",
      "Medidas protetivas — Lei Maria da Penha",
      "Atendimento on-line para acompanhamento processual",
    ],
    forumInfo: [
      "O Fórum de Votuporanga concentra a Vara Criminal, as Varas de Família e Sucessões e o Juizado Especial. Para qualquer ato, a comunicação do advogado é feita pelo sistema e-SAJ do TJSP, com sustentações orais e audiências realizadas presencial ou por videoconferência conforme a pauta da Vara.",
      "Em casos de prisão em flagrante na delegacia de Votuporanga, o auto é encaminhado à autoridade plantonista, e a audiência de custódia ocorre, em regra, na manhã seguinte — janela crítica para acionar a defesa.",
    ],
    remoteSupport: [
      "Reunião inicial por WhatsApp ou videochamada",
      "Envio de documentos por canal seguro",
      "Acompanhamento processual diário pelo e-SAJ",
      "Audiências por videoconferência (quando autorizadas pelo juízo)",
      "Deslocamento ao Fórum de Votuporanga para audiências presenciais",
    ],
    faq: [
      {
        q: "O escritório atende presencialmente em Votuporanga?",
        a: "Sim. Audiências no Fórum de Votuporanga são acompanhadas pessoalmente, e reuniões iniciais podem ser feitas no escritório de Fernandópolis, em Votuporanga sob agendamento, ou on-line — conforme a preferência do cliente.",
      },
      {
        q: "Atendem urgência criminal em Votuporanga?",
        a: "Sim. Prisões em flagrante e audiências de custódia em Votuporanga são atendidas com resposta rápida pelo WhatsApp (17) 99632-4627, 24 horas — com deslocamento imediato à delegacia ou ao Fórum, conforme o caso.",
      },
      {
        q: "Posso fazer divórcio em Votuporanga sem comparecer ao Fórum?",
        a: "Em divórcios consensuais sem filhos menores, sim — todo o procedimento pode ser feito em cartório, com lavratura presencial rápida (poucas horas). Em divórcios judiciais, eventuais audiências podem ser por videoconferência.",
      },
      {
        q: "Inventário em Votuporanga: cartório ou Fórum?",
        a: "Depende do caso. Havendo consenso entre herdeiros maiores e capazes, sem testamento, o inventário pode ser feito em cartório de Votuporanga — em 30 a 90 dias. Havendo menores, testamento ou litígio, vai para o Fórum.",
      },
    ],
  },
  {
    slug: "advogado-em-jales",
    name: "Jales",
    state: "SP",
    distance: "~70 km de Fernandópolis",
    comarca: "Comarca de Jales",
    forum: "Fórum da Comarca de Jales",
    h1: "Advogado em Jales — Direito Penal e Família",
    title: "Advogado em Jales | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Jales/SP. Defesa em flagrante, divórcio, guarda e inventário. Audiências no Fórum de Jales. WhatsApp (17) 99632-4627.",
    intro: [
      "Atuação em Jales e região, com atendimento criminal e de família. A comarca de Jales é uma das maiores da região noroeste paulista, com Varas Criminais e de Família estruturadas e demanda significativa.",
      "Atendimento presencial em audiências e atendimento on-line para consultas, envio de documentos e acompanhamento processual diário.",
    ],
    about: [
      "Jales abriga uma das comarcas mais movimentadas da microrregião, com fluxo significativo de processos criminais e de família. A proximidade com a divisa de Minas Gerais traz peculiaridades em casos de competência cruzada — algo que demanda atenção técnica especial, especialmente em casos de família com guarda compartilhada e mudança de domicílio entre estados.",
      "Casos criminais com prisão em flagrante na delegacia de Jales são atendidos com deslocamento imediato. Em audiências de custódia, a tese inicial costuma ser o foco do trabalho: relaxamento (vício formal no flagrante), medidas cautelares diversas da prisão (art. 319 do CPP) ou conversão em prisão domiciliar.",
    ],
    attendance: [
      "Defesa criminal completa (flagrante a recursos)",
      "Tribunal do Júri",
      "Habeas corpus",
      "Divórcio em cartório e judicial",
      "Guarda compartilhada e pensão alimentícia",
      "Inventário e planejamento sucessório",
      "Medida protetiva — Maria da Penha",
      "Execução penal — progressão, livramento, remição",
    ],
    forumInfo: [
      "O Fórum de Jales centraliza as Varas Criminais e de Família. Para processos eletrônicos, o sistema é o e-SAJ do TJSP. Sustentações orais e audiências podem ser presenciais ou por videoconferência conforme a pauta da Vara e a complexidade do caso.",
      "Jales possui delegacia 24h e delegacia de defesa da mulher — relevantes em casos de violência doméstica e medidas protetivas, onde o tempo de resposta inicial costuma fazer diferença.",
    ],
    remoteSupport: [
      "Consultas iniciais por WhatsApp ou videochamada",
      "Envio de documentos por canal seguro",
      "Acompanhamento processual diário",
      "Deslocamento ao Fórum de Jales para audiências",
      "Sustentações orais presenciais em segundo grau (TJSP) quando necessário",
    ],
    faq: [
      {
        q: "Atendem em audiências no Fórum de Jales?",
        a: "Sim. Audiências criminais e de família em Jales são acompanhadas pessoalmente.",
      },
      {
        q: "Posso conversar antes sem sair de Jales?",
        a: "Sim. A primeira conversa pode ser por WhatsApp ou videochamada, com a mesma seriedade do presencial. Caso prefira, o atendimento presencial é feito em Fernandópolis ou em Jales sob agendamento.",
      },
      {
        q: "Como funciona em casos de mudança de SP para MG (filhos)?",
        a: "Mudança de cidade ou estado pelo genitor guardião precisa de concordância do outro ou autorização judicial. Em casos com divisa Jales/MG, costuma envolver as duas comarcas — exigindo coordenação processual cuidadosa.",
      },
      {
        q: "Atendem progressão de regime na execução penal?",
        a: "Sim. Pedidos de progressão (do fechado ao semiaberto, do semiaberto ao aberto), livramento condicional, remição por estudo/trabalho e indulto são acompanhados na Vara de Execuções da comarca de origem.",
      },
    ],
  },
  {
    slug: "advogado-em-estrela-doeste",
    name: "Estrela d'Oeste",
    state: "SP",
    distance: "~25 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis (Foro Distrital de Estrela d'Oeste)",
    forum: "Foro Distrital de Estrela d'Oeste, vinculado à Comarca de Fernandópolis",
    h1: "Advogado em Estrela d'Oeste — Direito Penal e Família",
    title: "Advogado em Estrela d'Oeste | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Estrela d'Oeste/SP. Defesa em flagrante, divórcio, guarda e pensão. WhatsApp (17) 99632-4627.",
    intro: [
      "Estrela d'Oeste integra a comarca de Fernandópolis e é atendida diretamente pelo escritório, com acesso rápido a Fórum, delegacia e cartórios da região. A proximidade de ~25 km permite atendimento ágil para urgências e acompanhamento processual contínuo.",
      "Atuação criminal e de família, com atendimento presencial e on-line.",
    ],
    about: [
      "Estrela d'Oeste possui foro distrital, mas a tramitação de casos criminais e de família costuma se concentrar no Fórum de Fernandópolis, sede da comarca. Isso, na prática, facilita o trabalho do escritório: um único Fórum, um único sistema, um único conjunto de pautas a observar.",
      "Em urgências penais — flagrante, audiência de custódia — o atendimento é rápido a partir de Fernandópolis, com deslocamento direto à delegacia local ou à carceragem do Fórum.",
    ],
    attendance: [
      "Flagrante e urgências criminais (24h)",
      "Habeas corpus",
      "Defesa criminal completa",
      "Divórcio em cartório e judicial",
      "Guarda, pensão e visitas",
      "Inventário extrajudicial e judicial",
      "Medida protetiva — Maria da Penha",
      "Execução penal",
    ],
    forumInfo: [
      "A comarca matriz é Fernandópolis, onde tramitam todos os feitos da região. O Foro Distrital de Estrela d'Oeste atende atos administrativos menores; processos contenciosos correm na sede.",
      "Para registros (casamento, óbito, imóveis, escrituras), os cartórios de Estrela d'Oeste atendem normalmente, inclusive divórcios consensuais extrajudiciais.",
    ],
    remoteSupport: [
      "Consultas por WhatsApp e videochamada",
      "Envio de documentos digital",
      "Acompanhamento processual diário no e-SAJ",
      "Deslocamento imediato a Estrela d'Oeste para urgências",
    ],
    faq: [
      {
        q: "Estrela d'Oeste pertence a qual comarca?",
        a: "Pertence à comarca de Fernandópolis. Toda a tramitação processual contenciosa ocorre no Fórum de Fernandópolis, com cartórios e delegacia próprias na cidade.",
      },
      {
        q: "Em quanto tempo o advogado chega em caso de urgência?",
        a: "A distância é de ~25 km. Em urgências criminais, o deslocamento é imediato após o acionamento — em geral, em até 30 a 40 minutos.",
      },
      {
        q: "Posso fazer divórcio em cartório de Estrela d'Oeste?",
        a: "Sim, se for consensual e sem filhos menores. Os cartórios da cidade lavram a escritura de divórcio e partilha, com a presença de advogado.",
      },
    ],
  },
  {
    slug: "advogado-em-meridiano",
    name: "Meridiano",
    state: "SP",
    distance: "~20 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    forum: "Vinculado ao Fórum de Fernandópolis",
    h1: "Advogado em Meridiano — Direito Penal e Família",
    title: "Advogado em Meridiano | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Meridiano/SP. Atendimento presencial e on-line. WhatsApp (17) 99632-4627.",
    intro: [
      "Meridiano fica a aproximadamente 20 km de Fernandópolis e integra a mesma comarca, o que viabiliza atendimento rápido em casos criminais urgentes e em ações de família — sem perda de tempo com mudanças de jurisdição.",
      "Atuação completa em Direito Penal e Direito de Família, com foco em prazo de resposta curto e acompanhamento próximo.",
    ],
    about: [
      "Por integrar a comarca de Fernandópolis, todos os processos envolvendo moradores de Meridiano tramitam no Fórum local de Fernandópolis. Isso facilita a continuidade do trabalho do escritório, com participação direta em audiências, sustentações orais e acompanhamento próximo de cada caso.",
      "Em casos criminais, a delegacia de Fernandópolis costuma atender Meridiano em ocorrências que extrapolam o policiamento local. Para urgências penais, o acionamento direto pelo WhatsApp do escritório acelera o atendimento.",
    ],
    attendance: [
      "Flagrante e defesa criminal",
      "Habeas corpus preventivo e liberatório",
      "Tribunal do Júri",
      "Divórcio, guarda e pensão",
      "Inventário e partilha",
      "Medida protetiva — Maria da Penha",
      "Execução penal",
    ],
    forumInfo: [
      "Comarca matriz: Fernandópolis. Todos os processos tramitam no Fórum local, com pauta unificada de audiências. Em casos de família com criança, há intervenção obrigatória do Ministério Público.",
    ],
    remoteSupport: [
      "Reuniões on-line iniciais",
      "Envio de documentos digital",
      "Acompanhamento processual diário",
      "Deslocamento imediato à cidade em urgências",
    ],
    faq: [
      {
        q: "Como funciona o atendimento em Meridiano?",
        a: "Reuniões podem ser feitas no escritório de Fernandópolis, on-line ou em deslocamento à cidade quando necessário. Audiências são acompanhadas pessoalmente em Fernandópolis.",
      },
      {
        q: "Atendem urgência criminal em Meridiano fora do horário comercial?",
        a: "Sim. Atendimento 24h pelo WhatsApp para flagrante e situações de urgência penal.",
      },
      {
        q: "Posso registrar divórcio consensual em cartório de Meridiano?",
        a: "Sim, se não houver filhos menores e houver acordo total. A escritura é lavrada em cartório local com presença de advogado.",
      },
    ],
  },
  {
    slug: "advogado-em-pedranopolis",
    name: "Pedranópolis",
    state: "SP",
    distance: "~30 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    forum: "Vinculado ao Fórum de Fernandópolis",
    h1: "Advogado em Pedranópolis — Direito Penal e Família",
    title: "Advogado em Pedranópolis | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Pedranópolis/SP. Flagrante, divórcio, inventário. WhatsApp (17) 99632-4627.",
    intro: [
      "Pedranópolis pertence à comarca de Fernandópolis, com acesso direto ao Fórum, à delegacia e aos serviços cartoriais centralizados. O escritório atende toda a demanda criminal e de família da região, com presença em audiências e suporte on-line contínuo.",
    ],
    about: [
      "Casos criminais com origem em Pedranópolis tramitam no Fórum de Fernandópolis. Em audiências de custódia, a presença do advogado nas primeiras horas é determinante — e o deslocamento é imediato a partir do escritório, em geral em menos de 45 minutos.",
      "Em casos de família, a Vara de Família de Fernandópolis atende todos os feitos relacionados a moradores de Pedranópolis, incluindo divórcio, guarda, pensão e inventário judicial.",
    ],
    attendance: [
      "Flagrante e audiência de custódia",
      "Habeas corpus",
      "Defesa criminal completa",
      "Divórcio, guarda e pensão",
      "Inventário",
      "Medida protetiva",
    ],
    forumInfo: [
      "Fórum de referência: Fernandópolis. Todos os atos contenciosos correm pela sede da comarca.",
    ],
    remoteSupport: [
      "Consulta on-line por WhatsApp ou videochamada",
      "Documentos digitais",
      "Acompanhamento de processo diário",
      "Deslocamento à cidade em urgências",
    ],
    faq: [
      {
        q: "Atendem urgência criminal em Pedranópolis?",
        a: "Sim. Urgências penais são atendidas 24h pelo WhatsApp (17) 99632-4627, com deslocamento imediato à delegacia ou ao Fórum de Fernandópolis.",
      },
      {
        q: "Onde tramita o processo de quem mora em Pedranópolis?",
        a: "No Fórum de Fernandópolis, sede da comarca. Toda a tramitação eletrônica é feita pelo e-SAJ do TJSP.",
      },
    ],
  },
  {
    slug: "advogado-em-macedonia",
    name: "Macedônia",
    state: "SP",
    distance: "~35 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    forum: "Vinculado ao Fórum de Fernandópolis",
    h1: "Advogado em Macedônia — Direito Penal e Família",
    title: "Advogado em Macedônia | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Macedônia/SP. Atendimento presencial e on-line. WhatsApp (17) 99632-4627.",
    intro: [
      "Macedônia integra a comarca de Fernandópolis. Atendimento criminal e de família com presença em audiências, suporte processual contínuo e atendimento on-line para a maior parte das consultas iniciais.",
    ],
    about: [
      "Por estar na mesma comarca de Fernandópolis, todos os procedimentos contenciosos de Macedônia correm no Fórum local. Isso simplifica significativamente o acompanhamento do caso pelo escritório — mesmo sistema, mesma pauta, mesmo conjunto de Varas.",
      "Para urgências criminais, o atendimento 24h pelo WhatsApp permite acionamento imediato e deslocamento direto à delegacia.",
    ],
    attendance: [
      "Defesa criminal",
      "Habeas corpus",
      "Tribunal do Júri",
      "Divórcio, guarda, pensão",
      "Inventário e partilha",
      "Medida protetiva",
    ],
    forumInfo: [
      "Fórum competente: Fernandópolis. Todos os processos eletrônicos pelo e-SAJ.",
    ],
    remoteSupport: [
      "Consultas on-line",
      "Documentos digitais",
      "Acompanhamento processual diário",
      "Deslocamento à cidade em urgências",
    ],
    faq: [
      {
        q: "Posso resolver tudo on-line?",
        a: "Boa parte sim — consultas iniciais, envio de documentos, acompanhamento. Audiências são acompanhadas pessoalmente em Fernandópolis.",
      },
      {
        q: "Atendem urgência fora do horário comercial em Macedônia?",
        a: "Sim. WhatsApp 24h para urgências penais, com deslocamento imediato.",
      },
    ],
  },
  {
    slug: "advogado-em-mira-estrela",
    name: "Mira Estrela",
    state: "SP",
    distance: "~40 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    forum: "Vinculado ao Fórum de Fernandópolis",
    h1: "Advogado em Mira Estrela — Direito Penal e Família",
    title: "Advogado em Mira Estrela | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Mira Estrela/SP. Flagrante, divórcio, guarda e pensão. WhatsApp (17) 99632-4627.",
    intro: [
      "Mira Estrela integra a comarca de Fernandópolis. O escritório atende a cidade com a mesma estrutura disponível em Fernandópolis, com deslocamento para casos urgentes e suporte on-line para o restante das tarefas.",
    ],
    about: [
      "Casos criminais e de família tramitam no Fórum de Fernandópolis. Em situações de flagrante, urgência médica relacionada à execução penal ou ameaça à integridade física, há atendimento imediato pelo WhatsApp 24 horas.",
      "Para casos de inventário e divórcio sem litígio, há possibilidade de procedimento extrajudicial — em cartório — com bastante economia de tempo.",
    ],
    attendance: [
      "Flagrante e defesa criminal",
      "Habeas corpus",
      "Execução penal",
      "Divórcio, guarda e pensão",
      "Inventário",
      "Medida protetiva — Maria da Penha",
    ],
    forumInfo: [
      "Fórum competente: Fernandópolis. Tramitação eletrônica via e-SAJ do TJSP.",
    ],
    remoteSupport: [
      "Atendimento inicial on-line",
      "Documentos digitais",
      "Acompanhamento processual contínuo",
      "Deslocamento à cidade em urgências",
    ],
    faq: [
      {
        q: "Mira Estrela tem comarca própria?",
        a: "Não. A cidade integra a comarca de Fernandópolis, e os processos tramitam no Fórum de Fernandópolis.",
      },
      {
        q: "Posso fazer inventário extrajudicial morando em Mira Estrela?",
        a: "Sim, desde que herdeiros sejam maiores e capazes, haja consenso e não exista testamento. O procedimento pode ser concluído em 30 a 90 dias.",
      },
      {
        q: "Como funciona o atendimento 24h em casos de urgência?",
        a: "Acionamento pelo WhatsApp (17) 99632-4627. Em flagrante, deslocamento imediato à delegacia. Em ameaça/violência doméstica, orientação imediata + pedido de medida protetiva no plantão judicial.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}

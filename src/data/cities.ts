export type CityPage = {
  slug: string;
  name: string;
  state: string;
  distance: string;
  comarca: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string[];
  about: string[];
  attendance: string[];
  faq: { q: string; a: string }[];
};

export const cityPages: CityPage[] = [
  {
    slug: "advogado-em-votuporanga",
    name: "Votuporanga",
    state: "SP",
    distance: "~50 km de Fernandópolis",
    comarca: "Comarca de Votuporanga (Foro Distrital)",
    h1: "Advogado em Votuporanga — Direito Penal e Família",
    title: "Advogado em Votuporanga | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Votuporanga/SP. Defesa em flagrante, divórcio, guarda e pensão. WhatsApp (17) 99632-4627.",
    intro: [
      "Atendimento em Votuporanga e comarca, com presença em audiências no Fórum local e atuação criminal e de família em toda a região. A distância de cerca de 50 km de Fernandópolis permite resposta rápida tanto presencial quanto online.",
      "Direito Penal — flagrante, habeas corpus, processos criminais, Tribunal do Júri. Direito de Família — divórcio, guarda, pensão, inventário, medidas protetivas.",
    ],
    about: [
      "Votuporanga é um dos principais polos da região noroeste paulista e conta com Vara Criminal, Varas de Família e Sucessões e Juizado Especial Criminal. A rotina forense local segue o padrão da 4ª Região Administrativa do TJSP, com pautas próprias de audiência.",
      "Casos criminais urgentes — prisões em flagrante, mandados expedidos, audiências de custódia — são atendidos com deslocamento imediato a partir de Fernandópolis.",
    ],
    attendance: [
      "Defesa criminal (flagrante, audiência de custódia, processo penal)",
      "Habeas corpus em casos urgentes",
      "Divórcio consensual e litigioso",
      "Guarda, pensão e regulamentação de visitas",
      "Inventário judicial e extrajudicial",
      "Medidas protetivas — Lei Maria da Penha",
      "Atendimento on-line para acompanhamento processual",
    ],
    faq: [
      {
        q: "O escritório atende presencialmente em Votuporanga?",
        a: "Sim. Audiências no Fórum de Votuporanga são acompanhadas pessoalmente, e reuniões iniciais podem ser feitas no escritório de Fernandópolis ou on-line, conforme a preferência do cliente.",
      },
      {
        q: "Atendem urgência criminal em Votuporanga?",
        a: "Sim. Prisões em flagrante e audiências de custódia em Votuporanga são atendidas com resposta rápida pelo WhatsApp (17) 99632-4627, 24 horas.",
      },
    ],
  },
  {
    slug: "advogado-em-jales",
    name: "Jales",
    state: "SP",
    distance: "~70 km de Fernandópolis",
    comarca: "Comarca de Jales",
    h1: "Advogado em Jales — Direito Penal e Família",
    title: "Advogado em Jales | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Jales/SP. Defesa em flagrante, divórcio, guarda e inventário. WhatsApp (17) 99632-4627.",
    intro: [
      "Atuação em Jales e região, com atendimento criminal e de família. A comarca de Jales é uma das maiores da região noroeste, com Varas Criminais e de Família estruturadas.",
      "Atendimento presencial em audiências e atendimento on-line para consultas e acompanhamento processual.",
    ],
    about: [
      "Jales abriga uma das comarcas mais movimentadas da microrregião, com fluxo significativo de processos criminais e de família. A proximidade com a divisa de Minas Gerais traz peculiaridades em casos de competência cruzada — algo que demanda atenção técnica especial.",
      "Casos criminais com prisão em flagrante na delegacia de Jales são atendidos com deslocamento imediato. Em audiências de custódia, a tese inicial costuma ser o foco — relaxamento, medidas cautelares diversas da prisão ou conversão em domiciliar.",
    ],
    attendance: [
      "Defesa criminal completa (flagrante a recursos)",
      "Tribunal do Júri",
      "Habeas corpus",
      "Divórcio e partilha",
      "Guarda compartilhada e pensão alimentícia",
      "Inventário e planejamento sucessório",
      "Medida protetiva — Maria da Penha",
    ],
    faq: [
      {
        q: "Atendem em audiências no Fórum de Jales?",
        a: "Sim. Audiências criminais e de família em Jales são acompanhadas pessoalmente.",
      },
      {
        q: "Posso conversar antes sem sair de Jales?",
        a: "Sim. A primeira conversa pode ser por WhatsApp ou videochamada, com a mesma seriedade do presencial.",
      },
    ],
  },
  {
    slug: "advogado-em-estrela-doeste",
    name: "Estrela d'Oeste",
    state: "SP",
    distance: "~25 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis (Foro Distrital de Estrela d'Oeste)",
    h1: "Advogado em Estrela d'Oeste — Direito Penal e Família",
    title: "Advogado em Estrela d'Oeste | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Estrela d'Oeste/SP. Defesa em flagrante, divórcio, guarda e pensão. WhatsApp (17) 99632-4627.",
    intro: [
      "Estrela d'Oeste integra a comarca de Fernandópolis e é atendida diretamente pelo escritório, com acesso rápido a Fórum, delegacia e cartórios da região.",
      "Atuação criminal e de família, com atendimento presencial e on-line.",
    ],
    about: [
      "A proximidade de Estrela d'Oeste com Fernandópolis (cerca de 25 km) torna possível atendimento ágil tanto para urgências criminais quanto para acompanhamento processual em casos de família. Toda a tramitação ocorre no Fórum de Fernandópolis.",
    ],
    attendance: [
      "Flagrante e urgências criminais",
      "Divórcio em cartório e judicial",
      "Guarda, pensão e visitas",
      "Inventário",
      "Medida protetiva",
    ],
    faq: [
      {
        q: "Estrela d'Oeste pertence a qual comarca?",
        a: "Pertence à comarca de Fernandópolis. Toda a tramitação processual ocorre no Fórum de Fernandópolis, com cartórios e delegacia próprias na cidade.",
      },
    ],
  },
  {
    slug: "advogado-em-meridiano",
    name: "Meridiano",
    state: "SP",
    distance: "~20 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    h1: "Advogado em Meridiano — Direito Penal e Família",
    title: "Advogado em Meridiano | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Meridiano/SP. Atendimento presencial e on-line. WhatsApp (17) 99632-4627.",
    intro: [
      "Meridiano fica a aproximadamente 20 km de Fernandópolis e integra a mesma comarca, o que viabiliza atendimento rápido em casos criminais urgentes e em ações de família.",
    ],
    about: [
      "Por integrar a comarca de Fernandópolis, todos os processos envolvendo moradores de Meridiano tramitam no Fórum de Fernandópolis. Isso facilita a continuidade do trabalho do escritório, com participação direta em audiências e acompanhamento próximo de cada caso.",
    ],
    attendance: [
      "Flagrante e defesa criminal",
      "Habeas corpus",
      "Divórcio, guarda e pensão",
      "Inventário e partilha",
      "Medida protetiva — Maria da Penha",
    ],
    faq: [
      {
        q: "Como funciona o atendimento em Meridiano?",
        a: "Reuniões podem ser feitas no escritório de Fernandópolis, on-line ou em deslocamento à cidade quando necessário. Audiências são acompanhadas pessoalmente.",
      },
    ],
  },
  {
    slug: "advogado-em-pedranopolis",
    name: "Pedranópolis",
    state: "SP",
    distance: "~30 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    h1: "Advogado em Pedranópolis — Direito Penal e Família",
    title: "Advogado em Pedranópolis | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Pedranópolis/SP. Flagrante, divórcio, inventário. WhatsApp (17) 99632-4627.",
    intro: [
      "Pedranópolis pertence à comarca de Fernandópolis, com acesso direto ao Fórum, à delegacia e aos serviços cartoriais centralizados. O escritório atende toda a demanda criminal e de família da região.",
    ],
    about: [
      "Casos criminais com origem em Pedranópolis tramitam no Fórum de Fernandópolis. Em audiências de custódia, a presença do advogado nas primeiras horas é determinante — e o deslocamento é imediato a partir do escritório.",
    ],
    attendance: [
      "Flagrante e audiência de custódia",
      "Habeas corpus",
      "Defesa criminal completa",
      "Divórcio, guarda e pensão",
      "Inventário",
      "Medida protetiva",
    ],
    faq: [
      {
        q: "Atendem urgência criminal em Pedranópolis?",
        a: "Sim. Urgências penais são atendidas 24h pelo WhatsApp (17) 99632-4627, com deslocamento imediato à delegacia ou ao Fórum.",
      },
    ],
  },
  {
    slug: "advogado-em-macedonia",
    name: "Macedônia",
    state: "SP",
    distance: "~35 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    h1: "Advogado em Macedônia — Direito Penal e Família",
    title: "Advogado em Macedônia | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Macedônia/SP. Atendimento presencial e on-line. WhatsApp (17) 99632-4627.",
    intro: [
      "Macedônia integra a comarca de Fernandópolis. Atendimento criminal e de família com presença em audiências e suporte processual contínuo.",
    ],
    about: [
      "Por estar na mesma comarca, todos os procedimentos de Macedônia correm no Fórum de Fernandópolis, o que simplifica o acompanhamento do caso pelo escritório.",
    ],
    attendance: [
      "Defesa criminal",
      "Habeas corpus",
      "Divórcio, guarda, pensão",
      "Inventário e partilha",
      "Medida protetiva",
    ],
    faq: [
      {
        q: "Posso resolver tudo on-line?",
        a: "Boa parte sim — consultas iniciais, envio de documentos, acompanhamento. Audiências são acompanhadas pessoalmente.",
      },
    ],
  },
  {
    slug: "advogado-em-mira-estrela",
    name: "Mira Estrela",
    state: "SP",
    distance: "~40 km de Fernandópolis",
    comarca: "Comarca de Fernandópolis",
    h1: "Advogado em Mira Estrela — Direito Penal e Família",
    title: "Advogado em Mira Estrela | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista e de família atendendo Mira Estrela/SP. Flagrante, divórcio, guarda e pensão. WhatsApp (17) 99632-4627.",
    intro: [
      "Mira Estrela integra a comarca de Fernandópolis. O escritório atende a cidade com a mesma estrutura disponível em Fernandópolis, com deslocamento para casos urgentes e suporte on-line para o restante.",
    ],
    about: [
      "Casos criminais e de família tramitam no Fórum de Fernandópolis. Em situações de flagrante, urgência médica ou ameaça à integridade física, há atendimento imediato pelo WhatsApp 24 horas.",
    ],
    attendance: [
      "Flagrante e defesa criminal",
      "Habeas corpus",
      "Divórcio, guarda e pensão",
      "Inventário",
      "Medida protetiva — Maria da Penha",
    ],
    faq: [
      {
        q: "Mira Estrela tem comarca própria?",
        a: "Não. A cidade integra a comarca de Fernandópolis, e os processos tramitam no Fórum de Fernandópolis.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}

export type BlogPost = {
  slug: "flagrante" | "divorcio" | "guarda";
  category: "Penal" | "Família";
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  body: BlogBlock[];
};

export type BlogBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "hr" };

export const blogPosts: BlogPost[] = [
  {
    slug: "flagrante",
    category: "Penal",
    tag: "Guia",
    title: "O que fazer quando preso em flagrante: guia completo",
    excerpt:
      "Da abordagem policial até a audiência de custódia — o que você pode e o que não pode fazer, e como buscar defesa imediata.",
    readTime: "10 min de leitura",
    publishedAt: "2026-04-12",
    body: [
      {
        kind: "p",
        text: "A prisão em flagrante é uma das situações mais críticas que alguém pode enfrentar. Nas primeiras horas, o que se faz — e, sobretudo, o que não se faz — pode definir o rumo de todo o processo: relaxamento da prisão, conversão em medidas cautelares mais leves ou prisão preventiva prolongada. Este guia foi escrito para que você (ou alguém próximo) saiba exatamente como agir nas situações em que cada hora pesa.",
      },
      {
        kind: "p",
        text: "O conteúdo é baseado nas regras do Código de Processo Penal, na Resolução 213/2015 do CNJ (audiência de custódia) e na rotina dos Fóruns paulistas — especialmente o da comarca de Fernandópolis e adjacências.",
      },
      { kind: "h2", text: "1. O que caracteriza uma prisão em flagrante" },
      {
        kind: "p",
        text: "O artigo 302 do Código de Processo Penal define quatro hipóteses de flagrante: estar cometendo a infração, acabar de cometê-la, ser perseguido logo após (em situação que faça presumir ser o autor), ou ser encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir a autoria do crime.",
      },
      {
        kind: "p",
        text: "Fora dessas hipóteses, a prisão é ilegal — e isso pode ser arguido imediatamente, com pedido de relaxamento na própria audiência de custódia. Vícios de natureza formal (falta de testemunhas, falha na apresentação do nota de culpa, demora na comunicação ao juiz) também derrubam o flagrante, ainda que a hipótese material exista.",
      },
      { kind: "h2", text: "2. Seus direitos no momento da abordagem" },
      {
        kind: "p",
        text: "Esses direitos são constitucionais (art. 5º da CF) e não dependem de o policial estar de bom humor. Você pode — e deve — invocá-los com calma, sem confronto.",
      },
      {
        kind: "ul",
        items: [
          "Permanecer em silêncio — o silêncio é direito (art. 5º, LXIII) e não pode ser interpretado como confissão.",
          "Não assinar nada sem ler com atenção. Termos circunstanciados, declarações de pertences ou de adesão ao auto podem ser usados contra você.",
          "Ser informado, de forma clara, de quais crimes está sendo imputado e quais são os direitos disponíveis.",
          "Comunicar imediatamente a família e o advogado de sua escolha. Esse direito existe desde o primeiro momento da detenção.",
          "Não sofrer violência física ou psicológica. Em caso de lesão, o exame de corpo de delito deve ser feito o quanto antes (e a defesa precisa pedir cópia).",
          "Tratamento digno, inclusive em relação a algemas — que só podem ser usadas com justificativa formal, conforme Súmula Vinculante 11 do STF.",
        ],
      },
      { kind: "h2", text: "3. As primeiras 24 horas: o relógio mais importante do processo" },
      {
        kind: "p",
        text: "Após a prisão, o auto de prisão em flagrante (APF) precisa ser lavrado pela autoridade policial, e a comunicação ao juiz competente — em Fernandópolis, ao Fórum local — deve ocorrer em até 24 horas. Nesse mesmo prazo, a família tem direito de saber para onde o preso foi levado, e o advogado tem direito a acesso aos autos.",
      },
      {
        kind: "p",
        text: "O CNJ, por meio da Resolução 213/2015, determina que toda pessoa presa em flagrante seja apresentada pessoalmente ao juiz, na chamada audiência de custódia. É um dos momentos mais decisivos do processo — e onde, em geral, a defesa começa a construir o cenário.",
      },
      { kind: "h2", text: "4. Audiência de custódia: o que esperar" },
      {
        kind: "p",
        text: "Na audiência de custódia, em até 24 horas após o flagrante (em alguns casos, 48h, dependendo da estrutura local), você é apresentado ao juiz, ao promotor de Justiça e ao seu defensor. O juiz pode:",
      },
      {
        kind: "ul",
        items: [
          "Relaxar a prisão — quando há vício formal ou material no flagrante. Liberdade imediata.",
          "Conceder liberdade provisória, com ou sem fiança e com ou sem medidas cautelares alternativas.",
          "Aplicar medidas cautelares diversas da prisão — tornozeleira, comparecimento periódico, proibição de frequentar locais, recolhimento domiciliar noturno (art. 319 do CPP).",
          "Converter o flagrante em prisão preventiva — quando presentes os requisitos do art. 312 (garantia da ordem pública, da instrução criminal ou para aplicação da lei penal).",
        ],
      },
      {
        kind: "p",
        text: "É nessa audiência que boa parte das prisões pode ser revertida. A presença de um advogado, com tese clara e prova documental (vínculo familiar, trabalho, residência fixa, primariedade), faz diferença concreta — não é exagero retórico, é o que está no relatório de pesquisas do CNJ sobre o impacto da custódia.",
      },
      {
        kind: "quote",
        text: "Tempo é o fator mais decisivo em casos criminais urgentes. Cada hora dificulta a tese de relaxamento ou de medidas cautelares mais leves.",
      },
      { kind: "h2", text: "5. O que NÃO fazer (mesmo em pânico)" },
      {
        kind: "ul",
        items: [
          "Não preste depoimento sem advogado — é direito constitucional. \"Não vou falar até falar com meu advogado\" é frase válida e suficiente.",
          "Não confronte fisicamente os agentes. Resistência cria novo crime (desacato, resistência) e prejudica qualquer tese futura.",
          "Não tente fugir, mesmo se considerar a prisão injusta. Fuga é também crime autônomo.",
          "Não assine termos sem ler ou sem entender o conteúdo. Leia tudo, peça tempo, peça explicação.",
          "Não destrua provas (apagar mensagens, jogar fora objetos). Isso pode configurar fraude processual.",
          "Não dê entrevistas. Falar com a imprensa, mesmo \"para se defender\", quase sempre piora o caso.",
        ],
      },
      { kind: "h2", text: "6. Quando o flagrante é nulo" },
      {
        kind: "p",
        text: "Algumas hipóteses recorrentes em que o juiz costuma relaxar a prisão:",
      },
      {
        kind: "ul",
        items: [
          "Ausência de duas testemunhas da apreensão (art. 304 do CPP).",
          "Falta de nota de culpa em até 24h.",
          "Comunicação tardia ao juiz (depois das 24 horas).",
          "Flagrante preparado (provocado por agente policial sem oportunidade real de não cometer o crime — Súmula 145 do STF).",
          "Ausência dos pressupostos materiais (não se enquadra em nenhuma das hipóteses do art. 302).",
          "Violência ou tortura no momento da prisão.",
        ],
      },
      { kind: "h2", text: "7. Prisão domiciliar humanitária" },
      {
        kind: "p",
        text: "Em alguns casos, mesmo havendo flagrante válido, a prisão pode ser substituída por domiciliar (art. 318 do CPP): maior de 80 anos; pessoa com doença grave; gestante; mãe ou pai de criança com menos de 12 anos. O pedido pode ser feito na própria audiência de custódia, com prova documental (atestado médico, certidão de nascimento dos filhos).",
      },
      { kind: "h2", text: "8. Como acionar a defesa de forma eficaz" },
      {
        kind: "p",
        text: "Tenha um contato de advogado de confiança salvo na agenda — e diga aos familiares mais próximos onde encontrar esse contato em caso de emergência. Quando ligar:",
      },
      {
        kind: "ul",
        items: [
          "Diga o nome completo do preso, RG e CPF (se souber).",
          "Informe a delegacia e a hora aproximada do flagrante.",
          "Descreva, em uma frase, do que se trata (\"foi preso suspeito de furto\", \"trânsito\", \"violência doméstica\").",
          "Se houver lesões, mencione — pode mudar a estratégia da custódia.",
        ],
      },
      {
        kind: "p",
        text: "Em casos criminais urgentes na região de Fernandópolis, Votuporanga, Jales e adjacências, o escritório do Dr. Luiz Mamprin atende 24h pelo WhatsApp (17) 99632-4627. Quanto antes a defesa é acionada, maiores as chances de relaxamento da prisão ou conversão em medidas alternativas.",
      },
      { kind: "h2", text: "9. E depois da custódia?" },
      {
        kind: "p",
        text: "Mesmo solto, o processo penal continua. Vai começar a fase de inquérito (ou já há denúncia, dependendo do crime), oitiva de testemunhas, interrogatório, alegações finais e sentença. O acompanhamento próximo do advogado é importante em cada etapa — perder prazos pode comprometer permanentemente a defesa.",
      },
      {
        kind: "p",
        text: "Se a prisão preventiva foi mantida, ainda há o habeas corpus como ferramenta para tentar reverter a situação — em geral, no TJSP. A jurisprudência atual privilegia medidas cautelares alternativas em vez de prisão, especialmente em casos sem violência, sem antecedentes e com vínculos sociais demonstrados.",
      },
      { kind: "hr" },
      {
        kind: "p",
        text: "Este conteúdo é informativo e não substitui orientação profissional para o seu caso específico. Cada situação tem detalhes próprios que precisam de análise técnica individualizada.",
      },
    ],
  },
  {
    slug: "divorcio",
    category: "Família",
    tag: "Passo a passo",
    title: "Como pedir divórcio consensual em 2026",
    excerpt:
      "Quando dá pra fazer em cartório, quando precisa de juiz, documentos exigidos, prazos e o que muda quando há filhos menores.",
    readTime: "6 min de leitura",
    publishedAt: "2026-03-08",
    body: [
      {
        kind: "p",
        text: "O divórcio consensual é, hoje, um dos procedimentos mais rápidos do Direito de Família — desde que cumpridos certos requisitos. Veja o passo a passo atualizado para 2026.",
      },
      { kind: "h2", text: "Quando é possível fazer em cartório" },
      {
        kind: "ul",
        items: [
          "Ambos os cônjuges estão de acordo com o divórcio.",
          "Não há filhos menores ou incapazes.",
          "Ambos comparecem com advogado (pode ser o mesmo para os dois).",
          "Há acordo sobre partilha de bens e, se for o caso, sobre o nome de casado.",
        ],
      },
      { kind: "h2", text: "Documentos necessários" },
      {
        kind: "ul",
        items: [
          "RG e CPF de ambos.",
          "Certidão de casamento atualizada (até 90 dias).",
          "Pacto antenupcial, se houver.",
          "Documentos dos bens a serem partilhados (matrículas de imóveis, documentos de veículos).",
          "Acordo escrito sobre os termos.",
        ],
      },
      { kind: "h2", text: "Quando precisa de processo judicial" },
      {
        kind: "p",
        text: "Se há filhos menores ou incapazes, o divórcio precisa correr na Justiça — ainda que consensual. Nesses casos, a guarda, pensão e visitas são definidas em conjunto, com manifestação do Ministério Público.",
      },
      {
        kind: "quote",
        text: "Divórcio consensual em cartório pode ser resolvido em poucos dias. Vale a pena conversar antes de litigar.",
      },
      { kind: "h2", text: "Prazos médios" },
      {
        kind: "ul",
        items: [
          "Cartório: 5 a 15 dias úteis após apresentação da documentação completa.",
          "Judicial consensual: 30 a 90 dias, dependendo da comarca.",
          "Litigioso: pode levar anos — por isso o esforço pra encontrar acordo.",
        ],
      },
      { kind: "hr" },
      {
        kind: "p",
        text: "Este conteúdo é informativo e não substitui orientação profissional para o seu caso específico.",
      },
    ],
  },
  {
    slug: "guarda",
    category: "Família",
    tag: "FAQ",
    title: "Guarda compartilhada: como funciona na prática",
    excerpt:
      "Mitos, regras, divisão de tempo, decisões em conjunto e o que fazer quando um dos pais descumpre o acordo.",
    readTime: "7 min de leitura",
    publishedAt: "2026-02-22",
    body: [
      {
        kind: "p",
        text: "A guarda compartilhada é a regra no Brasil desde 2014, mas ainda gera muita confusão na prática. Aqui estão as perguntas mais frequentes que recebemos no escritório.",
      },
      { kind: "h2", text: "Guarda compartilhada significa tempo igual?" },
      {
        kind: "p",
        text: "Não necessariamente. Guarda compartilhada é sobre tomada de decisão conjunta — escola, saúde, viagens. A divisão do tempo de convivência pode ser diferente, e geralmente reflete a rotina prática dos pais e da criança.",
      },
      { kind: "h2", text: "E a pensão alimentícia?" },
      {
        kind: "p",
        text: "Continua existindo. A guarda compartilhada não elimina a pensão — apenas a forma de pagamento e o valor podem ser ajustados conforme a participação de cada um nos custos diretos da criança.",
      },
      { kind: "h2", text: "O que NÃO é guarda compartilhada" },
      {
        kind: "ul",
        items: [
          "Não é desculpa pra não pagar pensão.",
          "Não significa que um dos pais perde o poder familiar.",
          "Não é a mesma coisa que guarda alternada (revezamento de moradia).",
          "Não impede mudança de cidade — mas exige autorização do outro pai.",
        ],
      },
      { kind: "h2", text: "Quando um descumpre o acordo" },
      {
        kind: "p",
        text: "Descumprimento sistemático pode levar a multa, perda de tempo de convivência e até modificação da guarda. O caminho é judicial — e quanto mais documentado o descumprimento (mensagens, registros, datas), mais sólido o pedido.",
      },
      {
        kind: "quote",
        text: "Filhos não são moeda de troca, e bens não valem mais do que a saúde mental das pessoas envolvidas.",
      },
      { kind: "hr" },
      {
        kind: "p",
        text: "Este conteúdo é informativo e não substitui orientação profissional para o seu caso específico.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

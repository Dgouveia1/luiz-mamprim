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
    readTime: "8 min de leitura",
    publishedAt: "2026-04-12",
    body: [
      {
        kind: "p",
        text: "A prisão em flagrante é uma das situações mais críticas que alguém pode enfrentar. Nas primeiras horas, o que se faz — e o que não se faz — pode definir o rumo de todo o processo. Este guia foi escrito para que você (ou alguém próximo) saiba exatamente como agir.",
      },
      { kind: "h2", text: "1. O que caracteriza um flagrante" },
      {
        kind: "p",
        text: "O Código de Processo Penal define quatro hipóteses: estar cometendo a infração, acabar de cometê-la, ser perseguido logo após, ou ser encontrado, logo depois, com objetos que façam presumir a autoria. Fora dessas hipóteses, a prisão é ilegal — e isso pode ser arguido imediatamente.",
      },
      { kind: "h2", text: "2. Seus direitos no momento da abordagem" },
      {
        kind: "ul",
        items: [
          "Permanecer em silêncio — o silêncio não é confissão e não pode prejudicar a defesa.",
          "Não assinar nada sem ler com atenção.",
          "Ser informado de quais crimes está sendo imputado.",
          "Comunicar imediatamente a família e o advogado de sua escolha.",
          "Não sofrer violência física ou psicológica.",
        ],
      },
      { kind: "h2", text: "3. Audiência de custódia" },
      {
        kind: "p",
        text: "Em até 24 horas após o flagrante, você deve ser apresentado a um juiz. É nessa audiência que se decide se a prisão será mantida, convertida em preventiva ou relaxada. A presença de um advogado é essencial — boa parte das prisões pode ser revertida aqui.",
      },
      {
        kind: "quote",
        text: "Tempo é o fator mais decisivo em casos criminais urgentes. Cada hora conta.",
      },
      { kind: "h2", text: "4. O que NÃO fazer" },
      {
        kind: "ul",
        items: [
          "Não preste depoimento sem advogado — é seu direito constitucional.",
          "Não confronte fisicamente os agentes.",
          "Não tente fugir, mesmo se considerar a prisão injusta.",
          "Não assine termos sem ler ou sem entender o conteúdo.",
        ],
      },
      { kind: "h2", text: "5. Como acionar a defesa" },
      {
        kind: "p",
        text: "Tenha um contato de advogado de confiança salvo. Em casos criminais urgentes, atendemos 24h pelo WhatsApp (17) 99632-4627. Quanto antes a defesa é acionada, maiores as chances de relaxamento da prisão ou conversão em medidas alternativas.",
      },
      { kind: "hr" },
      {
        kind: "p",
        text: "Este conteúdo é informativo e não substitui orientação profissional para o seu caso específico.",
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

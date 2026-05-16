export type ServiceSection = {
  h2: string;
  body: string[];
  list?: string[];
};

export type ServicePage = {
  slug: string;
  area: "penal" | "familia";
  navLabel: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string[];
  sections: ServiceSection[];
  faq: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "advogado-criminalista-fernandopolis",
    area: "penal",
    navLabel: "Advogado criminalista",
    h1: "Advogado criminalista em Fernandópolis — Direito Penal estratégico",
    title: "Advogado Criminalista em Fernandópolis | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado criminalista em Fernandópolis/SP. Defesa em flagrante, habeas corpus, Tribunal do Júri e recursos. Atendimento 24h para urgências penais. WhatsApp (17) 99632-4627.",
    intro: [
      "Atuação criminal em Fernandópolis e região noroeste paulista, com presença imediata em prisões em flagrante, audiências de custódia, inquéritos policiais e processos criminais no Fórum local e comarcas vizinhas.",
      "Defesa técnica significa estratégia construída desde a primeira hora — leitura cuidadosa do auto de prisão, intervenção em delegacia, pedidos de relaxamento, habeas corpus e, quando o caso pede, sustentação oral em segunda instância.",
    ],
    sections: [
      {
        h2: "Como funciona a defesa criminal em Fernandópolis",
        body: [
          "Casos criminais correm sob ritmo próprio. Em Fernandópolis, o Fórum atende as comarcas da região e a primeira audiência de custódia geralmente acontece em até 24 horas após a prisão. Por isso, o tempo de resposta é o fator mais decisivo: quanto mais cedo o advogado é acionado, maiores as chances de relaxamento ou de medidas cautelares alternativas à prisão preventiva.",
          "A defesa começa antes do interrogatório, com orientação sobre o direito ao silêncio e o que pode (e o que não pode) ser dito. Em seguida, vem o acompanhamento de toda a instrução — denúncia, produção de provas, alegações finais, sentença e, se necessário, recursos para o Tribunal de Justiça de São Paulo.",
        ],
      },
      {
        h2: "Tipos de caso atendidos",
        body: [
          "A atuação penal cobre todas as fases do processo, desde a investigação até a execução da pena.",
        ],
        list: [
          "Prisão em flagrante e audiência de custódia",
          "Habeas corpus (preventivo e liberatório)",
          "Inquéritos policiais e indiciamentos",
          "Crimes patrimoniais (furto, roubo, estelionato, receptação)",
          "Crimes contra a pessoa e Tribunal do Júri",
          "Crimes de trânsito (embriaguez ao volante, homicídio culposo)",
          "Lei de Drogas — tráfico e uso",
          "Violência doméstica e medidas protetivas",
          "Recursos para o TJSP, STJ e STF",
          "Execução penal (progressão de regime, livramento condicional, remição)",
        ],
      },
      {
        h2: "Urgência penal: o que fazer nas primeiras horas",
        body: [
          "Se você ou alguém próximo foi preso em flagrante, três coisas precisam acontecer imediatamente: comunicar a família, comunicar um advogado de confiança e exercer o direito ao silêncio até que o defensor esteja presente. O Código de Processo Penal garante a presença do advogado em qualquer interrogatório, e qualquer ato realizado sem essa presença pode ser questionado depois.",
          "O escritório atende urgências penais 24 horas pelo WhatsApp (17) 99632-4627. Em casos críticos, há acionamento direto na delegacia de Fernandópolis ou comarca de origem, com pedido imediato de relaxamento sempre que houver vício formal na prisão.",
        ],
      },
      {
        h2: "Por que escolher um advogado criminalista em Fernandópolis",
        body: [
          "Conhecer a rotina do Fórum local, dos delegados e dos promotores faz diferença em casos criminais. Um pedido de medida cautelar bem fundamentado, protocolado no momento certo, pode evitar meses de prisão preventiva. Esse conhecimento de campo se soma à técnica jurídica que cada caso exige.",
          "A atuação é discreta, ética e respeita rigorosamente o sigilo profissional garantido pelo artigo 7º, II do Estatuto da Advocacia. Cada caso é tratado de forma individual — não há fórmulas prontas em Direito Penal.",
        ],
      },
    ],
    faq: [
      {
        q: "Atendem prisão em flagrante fora do horário comercial?",
        a: "Sim. Urgências penais — especialmente flagrante — são respondidas 24 horas pelo WhatsApp (17) 99632-4627. O tempo de reação é o fator mais decisivo nessas situações.",
      },
      {
        q: "Quanto custa um advogado criminalista em Fernandópolis?",
        a: "Honorários variam conforme a complexidade e a fase do processo (flagrante, instrução, recursos). Em respeito ao Código de Ética da OAB, valores não são publicados — mas são apresentados de forma transparente antes de qualquer compromisso.",
      },
      {
        q: "Atendem apenas em Fernandópolis ou em outras comarcas?",
        a: "Atuamos em Fernandópolis, Votuporanga, Jales, Estrela d'Oeste, Meridiano, Pedranópolis, Macedônia, Mira Estrela e demais comarcas da região noroeste paulista, além de atendimento on-line para casos fora da região.",
      },
      {
        q: "Posso conversar antes de contratar?",
        a: "Sim. A primeira conversa não compromete você a nada — serve para entender o caso, mapear riscos e explicar as alternativas reais antes de qualquer decisão.",
      },
    ],
  },
  {
    slug: "advogado-familia-fernandopolis",
    area: "familia",
    navLabel: "Advogado de família",
    h1: "Advogado de família em Fernandópolis — Direito de Família com escuta",
    title: "Advogado de Família em Fernandópolis | Dr. Luiz Mamprin",
    metaDescription:
      "Advogado de família em Fernandópolis/SP. Divórcio, guarda, pensão alimentícia, inventário e medidas protetivas. Atendimento humano e estratégico. WhatsApp (17) 99632-4627.",
    intro: [
      "Direito de Família em Fernandópolis e região, com atuação que combina escuta, técnica e estratégia patrimonial — divórcios, guarda, pensão, união estável, inventários, alienação parental e medidas protetivas.",
      "Cada família tem uma história. O trabalho começa em ouvir, mapear o que está em jogo e construir o caminho menos doloroso para o cliente e para as crianças envolvidas, sempre que houver acordo possível.",
    ],
    sections: [
      {
        h2: "Como atuamos em Direito de Família",
        body: [
          "A maioria dos casos de família tem uma versão consensual e uma versão litigiosa. Quando há margem para acordo, o resultado é mais rápido, menos custoso e menos desgastante — e essa é sempre a primeira tentativa. Quando não há, a defesa em juízo é firme, técnica e sem promessas vazias.",
          "A Vara de Família de Fernandópolis atende casos da comarca e tem rotina própria de audiências de tentativa de conciliação. O conhecimento dessa rotina ajuda a antecipar prazos, manifestações do Ministério Público e a melhor forma de apresentar cada pedido.",
        ],
      },
      {
        h2: "Casos atendidos",
        body: [],
        list: [
          "Divórcio consensual (em cartório quando possível)",
          "Divórcio litigioso e partilha de bens",
          "Guarda compartilhada e unilateral",
          "Pensão alimentícia (fixação, revisão e exoneração)",
          "Reconhecimento e dissolução de união estável",
          "Inventário e partilha (judicial e extrajudicial)",
          "Planejamento sucessório (testamento, holding familiar)",
          "Medidas protetivas pela Lei Maria da Penha",
          "Alienação parental e regulamentação de visitas",
          "Adoção e investigação de paternidade",
        ],
      },
      {
        h2: "Divórcio, guarda e pensão: o tripé mais comum",
        body: [
          "A maior parte dos casos de família envolve três discussões simultâneas: o fim do casamento (ou da união estável), a guarda dos filhos e a fixação da pensão alimentícia. Em casos consensuais, tudo pode ser resolvido em conjunto — em ação judicial única ou, sem filhos menores, diretamente no cartório.",
          "Quando há litígio, esses três pontos costumam tramitar juntos com pedido de tutela de urgência, justamente para que pensão e guarda provisória sejam definidas logo no início do processo, sem que ninguém — adulto ou criança — fique no limbo.",
        ],
      },
      {
        h2: "Sensibilidade que não tira a técnica",
        body: [
          "Direito de Família lida com momentos de dor. Isso não significa abrir mão da firmeza técnica — significa não tratar o cliente como número e não usar o sofrimento como argumento processual. A condução do caso busca preservar o que pode ser preservado: dinheiro, tempo, vínculos e saúde mental.",
          "O sigilo é absoluto. O que é dito em consulta permanece entre cliente e advogado, garantido pelo artigo 7º, II do Estatuto da OAB.",
        ],
      },
    ],
    faq: [
      {
        q: "Divórcio precisa sempre ir para a Justiça?",
        a: "Não. Se ambos concordam e não há filhos menores ou incapazes, o divórcio pode ser feito em cartório, com assistência de advogado, em poucos dias úteis. Havendo filhos menores, o trâmite é judicial — mas pode ser consensual.",
      },
      {
        q: "Como funciona a pensão alimentícia depois da guarda compartilhada?",
        a: "A guarda compartilhada não elimina a pensão. O valor é calculado com base no binômio possibilidade/necessidade e leva em conta a divisão real de despesas da criança. Pode ser revisado sempre que houver mudança relevante de renda.",
      },
      {
        q: "Em quanto tempo sai um inventário?",
        a: "Inventário extrajudicial em cartório (quando todos os herdeiros são maiores, capazes e há acordo) costuma sair em 30 a 90 dias. Inventário judicial varia conforme a complexidade do patrimônio e a existência de testamento.",
      },
      {
        q: "Atendem casos fora de Fernandópolis?",
        a: "Sim. Atuamos em Votuporanga, Jales, Estrela d'Oeste, Meridiano, Pedranópolis, Macedônia, Mira Estrela e demais comarcas da região, além de atendimento on-line.",
      },
    ],
  },
  {
    slug: "habeas-corpus-fernandopolis",
    area: "penal",
    navLabel: "Habeas Corpus",
    h1: "Habeas Corpus em Fernandópolis — pedido urgente e estratégico",
    title: "Habeas Corpus em Fernandópolis | Advogado Criminalista",
    metaDescription:
      "Pedido de Habeas Corpus em Fernandópolis e região. Análise imediata da legalidade da prisão, prazos e estratégia. Atendimento 24h. WhatsApp (17) 99632-4627.",
    intro: [
      "Habeas corpus é o instrumento mais antigo de proteção da liberdade individual no Direito brasileiro — e também um dos mais técnicos. Acertar a tese, o tribunal competente e o momento processual é o que separa um pedido bem-sucedido de um indeferimento.",
      "Atuação em pedidos de habeas corpus preventivos (quando há ameaça de prisão) e liberatórios (quando a prisão já ocorreu), em primeiro grau, Tribunal de Justiça de São Paulo e tribunais superiores.",
    ],
    sections: [
      {
        h2: "Quando o habeas corpus é cabível",
        body: [
          "O habeas corpus protege contra ilegalidade ou abuso de poder que cerceie a liberdade de locomoção. Isso inclui prisão sem fundamento legal, excesso de prazo na instrução, ausência dos pressupostos da prisão preventiva, constrangimento ilegal em inquérito e até decisões que mantêm o réu preso sem necessidade.",
          "Não é remédio universal — não substitui apelação nem discute mérito amplamente. A escolha pela via do habeas corpus depende de análise técnica caso a caso.",
        ],
      },
      {
        h2: "Hipóteses mais comuns de cabimento",
        body: [],
        list: [
          "Prisão em flagrante sem comunicação ao juiz em 24h",
          "Conversão indevida do flagrante em prisão preventiva",
          "Excesso de prazo na formação da culpa",
          "Falta dos requisitos da preventiva (garantia da ordem pública, conveniência da instrução, aplicação da lei penal)",
          "Possibilidade de medidas cautelares menos gravosas (art. 319 do CPP)",
          "Trancamento de ação penal por atipicidade ou ausência de justa causa",
          "Revogação de prisão preventiva por mudança de circunstâncias",
          "Substituição da prisão por prisão domiciliar (gestante, doente grave, mãe de criança até 12 anos)",
        ],
      },
      {
        h2: "Onde o pedido é feito",
        body: [
          "A competência depende da autoridade coatora. Decisões do juiz da comarca de Fernandópolis são atacadas no Tribunal de Justiça de São Paulo. Decisões de desembargadores e turmas do TJSP vão para o STJ; decisões do STJ podem ir para o STF.",
          "Errar essa competência é motivo automático de não conhecimento — daí a importância de avaliação técnica rápida antes de protocolar.",
        ],
      },
      {
        h2: "Prazos e expectativa",
        body: [
          "Não há prazo formal para impetrar habeas corpus — pode ser feito a qualquer momento enquanto durar a ilegalidade. Em casos com risco iminente de prisão, o pedido preventivo deve ser protocolado o quanto antes, com pedido de liminar.",
          "Liminares em habeas corpus podem ser analisadas em horas. Em prisões já consumadas, o tempo médio até a decisão de mérito varia conforme o tribunal — mas a liminar continua sendo o ponto-chave.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a diferença entre habeas corpus preventivo e liberatório?",
        a: "Preventivo é impetrado quando há ameaça concreta de prisão ilegal (por exemplo, em investigação em curso). Liberatório é impetrado quando a prisão já aconteceu e se busca a soltura imediata.",
      },
      {
        q: "Quanto tempo demora a decisão de um habeas corpus?",
        a: "A liminar pode sair em horas. A decisão de mérito varia: no TJSP, costuma levar de semanas a poucos meses; em tribunais superiores, mais. Em casos urgentes, a estratégia é justamente focar na liminar.",
      },
      {
        q: "Preciso estar preso para pedir habeas corpus?",
        a: "Não. O habeas corpus preventivo existe exatamente para casos em que ainda não houve prisão, mas a ameaça é real — citação para depoimento que pode resultar em prisão, mandado expedido mas não cumprido etc.",
      },
    ],
  },
  {
    slug: "divorcio-fernandopolis",
    area: "familia",
    navLabel: "Divórcio",
    h1: "Divórcio em Fernandópolis — consensual, litigioso e em cartório",
    title: "Divórcio em Fernandópolis | Advogado de Família",
    metaDescription:
      "Advogado para divórcio em Fernandópolis/SP. Cartório, judicial consensual e litigioso. Partilha de bens, guarda e pensão. WhatsApp (17) 99632-4627.",
    intro: [
      "Divórcio em Fernandópolis pode seguir três caminhos: cartório (quando há acordo e não há filhos menores), judicial consensual (quando há acordo mas há menores ou incapazes) ou judicial litigioso (quando não há acordo sobre algum ponto).",
      "A escolha do caminho certo é o primeiro ponto da consulta — define prazo, custo e quanto desgaste o processo vai ter.",
    ],
    sections: [
      {
        h2: "Divórcio em cartório: quando é possível",
        body: [
          "O divórcio extrajudicial, criado pela Lei 11.441/2007, é o caminho mais rápido. Para usá-lo, é preciso que ambos os cônjuges estejam de acordo com o divórcio e com a partilha, que não haja filhos menores ou incapazes, e que estejam assistidos por advogado (pode ser o mesmo para ambos).",
          "Em geral, do agendamento à escritura, o processo leva de cinco a quinze dias úteis em Fernandópolis, contados a partir da entrega da documentação completa.",
        ],
        list: [
          "RG e CPF de ambos",
          "Certidão de casamento atualizada (até 90 dias)",
          "Pacto antenupcial, se houver",
          "Documentos de imóveis, veículos e demais bens a partilhar",
          "Acordo escrito sobre os termos",
        ],
      },
      {
        h2: "Divórcio judicial consensual",
        body: [
          "Quando há filhos menores ou incapazes, o divórcio precisa correr na Vara de Família — mesmo que ambos concordem. A diferença é que, sendo consensual, basta uma audiência (ou nem isso, em muitos casos) e o processo costuma se encerrar em 30 a 90 dias.",
          "Nesses casos, guarda, pensão e visitas precisam ser definidas em conjunto, com manifestação do Ministério Público em defesa dos interesses das crianças.",
        ],
      },
      {
        h2: "Divórcio litigioso",
        body: [
          "Não há acordo sobre partilha, guarda, pensão ou nome. Aqui o processo se desdobra: o divórcio em si pode ser concedido rapidamente (por sentença parcial), e as demais discussões seguem em paralelo — produção de provas, audiências, perícias se houver bens de avaliação complexa.",
          "Em qualquer cenário litigioso, sempre vale fazer uma última tentativa de acordo antes da sentença. Acordos costumam ser melhores que decisões judiciais em Direito de Família — e a porta do entendimento fica aberta até o último minuto.",
        ],
      },
      {
        h2: "Partilha de bens e regime de casamento",
        body: [
          "Como os bens são divididos depende do regime adotado no casamento — comunhão parcial (regra padrão), comunhão universal, separação total ou regime misto. Cada um tem regras próprias sobre o que entra e o que fica fora da partilha.",
          "Em uniões estáveis, salvo contrato escrito, vale o regime da comunhão parcial. Bens adquiridos durante a convivência se comunicam; bens prévios, recebidos por herança ou doação, não.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto tempo leva um divórcio em Fernandópolis?",
        a: "Em cartório, 5 a 15 dias úteis. Judicial consensual, 30 a 90 dias. Judicial litigioso, varia conforme a complexidade — o divórcio em si pode ser concedido em meses, com a partilha seguindo em paralelo.",
      },
      {
        q: "Posso me divorciar sem o outro concordar?",
        a: "Sim. O divórcio é direito potestativo: basta a vontade de um dos cônjuges. O que pode demorar é a discussão sobre partilha, guarda e pensão — mas o divórcio em si é sempre possível.",
      },
      {
        q: "Quanto custa um divórcio?",
        a: "Depende do caminho. Em cartório há emolumentos cartoriais (variáveis conforme o valor dos bens) mais honorários advocatícios. No judicial, custas processuais (que podem ser dispensadas para quem comprova hipossuficiência) e honorários.",
      },
      {
        q: "Quem fica com a casa?",
        a: "Depende do regime de bens e da titularidade. Em comunhão parcial, imóvel adquirido durante o casamento se divide pela metade — mas pode ser objeto de acordo (um fica com o imóvel e compensa o outro em dinheiro ou outros bens).",
      },
    ],
  },
  {
    slug: "guarda-compartilhada-fernandopolis",
    area: "familia",
    navLabel: "Guarda compartilhada",
    h1: "Guarda compartilhada em Fernandópolis — como funciona e como pedir",
    title: "Guarda Compartilhada em Fernandópolis | Advogado de Família",
    metaDescription:
      "Guarda compartilhada em Fernandópolis/SP. Decisão conjunta, divisão de tempo, pensão e descumprimento. Advogado de família. WhatsApp (17) 99632-4627.",
    intro: [
      "Desde 2014, a guarda compartilhada é a regra no Brasil. Mesmo quando os pais se separam em conflito, a tendência é que a tomada de decisão sobre a criança continue conjunta — escola, saúde, viagens, atividades.",
      "O que varia é a divisão de tempo de convivência, e é nesse ponto que a maioria das discussões se concentra na Vara de Família de Fernandópolis.",
    ],
    sections: [
      {
        h2: "O que é guarda compartilhada",
        body: [
          "Guarda compartilhada significa que ambos os pais participam, em igualdade de condições, das decisões importantes sobre a vida da criança. Não significa, necessariamente, tempo igual de convivência — embora seja possível.",
          "Na prática, a criança costuma ter uma residência de referência (a chamada \"lar de convivência principal\") e uma rotina de visitas definida no acordo ou na sentença. O que muda é que escolha de escola, autorização para viagem, tratamento médico e outras decisões grandes passam por ambos.",
        ],
      },
      {
        h2: "Como é fixada",
        body: [
          "Em divórcio consensual ou em ação autônoma, a guarda compartilhada é fixada por acordo homologado pelo juiz, com participação do Ministério Público sempre que houver menor de idade.",
          "Em casos litigiosos, o juiz pode determinar a guarda compartilhada mesmo contra a vontade de um dos pais — desde que ambos tenham condições de exercê-la. A unilateral só é fixada quando há motivo grave (alienação, violência, abandono).",
        ],
      },
      {
        h2: "Pensão alimentícia continua existindo",
        body: [
          "Um dos mitos mais comuns: guarda compartilhada não elimina a pensão. O cálculo continua pelo binômio possibilidade do alimentante x necessidade do alimentado, com ajuste pela participação real de cada um nas despesas diretas da criança.",
          "Se um dos pais tem renda muito maior, a pensão se mantém mesmo na compartilhada — porque o objetivo é manter o padrão de vida da criança nas duas casas.",
        ],
      },
      {
        h2: "Quando o acordo é descumprido",
        body: [
          "Descumprimento sistemático — falta de pagamento, recusa de entrega, mudança unilateral de cidade, alienação parental — autoriza pedido judicial de revisão da guarda ou aplicação de multa. Em casos graves, pode levar até à modificação para guarda unilateral em favor do outro.",
          "Documentar é o pilar central: mensagens, e-mails, datas, testemunhas. Quanto mais sólida a prova, mais rápido o juiz decide a tutela de urgência.",
        ],
      },
    ],
    faq: [
      {
        q: "Guarda compartilhada significa tempo igual de convivência?",
        a: "Não necessariamente. O foco é a tomada de decisão conjunta. A divisão de tempo costuma refletir a rotina prática dos pais e da criança.",
      },
      {
        q: "Posso mudar de cidade com a criança em guarda compartilhada?",
        a: "Não unilateralmente. Mudança de cidade exige concordância do outro genitor (ou autorização judicial). É um dos pontos mais comuns de conflito.",
      },
      {
        q: "O pai que não tem a guarda física precisa pagar pensão?",
        a: "Pensão alimentícia não depende do tipo de guarda — depende da capacidade financeira de cada um e das necessidades da criança. Mesmo em guarda compartilhada, em geral há pensão.",
      },
    ],
  },
  {
    slug: "pensao-alimenticia-fernandopolis",
    area: "familia",
    navLabel: "Pensão alimentícia",
    h1: "Pensão alimentícia em Fernandópolis — fixação, revisão e exoneração",
    title: "Pensão Alimentícia em Fernandópolis | Advogado de Família",
    metaDescription:
      "Pensão alimentícia em Fernandópolis/SP. Fixação, revisão, exoneração, ação de execução. Advogado de família. WhatsApp (17) 99632-4627.",
    intro: [
      "Pensão alimentícia é uma das discussões mais frequentes do Direito de Família — e uma das que mais geram desgaste quando mal conduzidas. A boa notícia é que, na maioria dos casos, há um caminho objetivo: aplicar o binômio possibilidade x necessidade com prova documental sólida.",
      "Atuação em ações de fixação, revisão para mais ou para menos, exoneração quando cabível e execução em caso de inadimplência.",
    ],
    sections: [
      {
        h2: "Como o valor é definido",
        body: [
          "O Código Civil fixa o critério do binômio possibilidade-necessidade. De um lado, o que o alimentado precisa para se manter (escola, saúde, alimentação, lazer, moradia). De outro, o que o alimentante pode pagar sem prejudicar a própria subsistência.",
          "Não existe \"30% obrigatório\" — esse é um número de referência da jurisprudência para casos clássicos com renda formal estável, mas é flexível. Quanto melhor a documentação das necessidades e das rendas, mais previsível é o resultado.",
        ],
      },
      {
        h2: "Casos atendidos",
        body: [],
        list: [
          "Ação de fixação de alimentos (com pedido de alimentos provisórios)",
          "Revisional para aumentar a pensão (mudança de necessidade ou aumento de renda)",
          "Revisional para reduzir a pensão (perda de emprego, doença, novo filho)",
          "Exoneração de alimentos (filhos maiores que concluíram formação)",
          "Execução de alimentos (com pedido de prisão civil em caso de não pagamento)",
          "Alimentos gravídicos (durante a gestação)",
          "Alimentos entre cônjuges e ex-cônjuges",
        ],
      },
      {
        h2: "Execução de alimentos: a via mais rápida do Direito",
        body: [
          "A execução de alimentos é uma das únicas hipóteses constitucionais de prisão civil. Em até três meses de inadimplência, o devedor pode ser preso por até 90 dias — sem que isso o livre da dívida. É uma ferramenta poderosa, que costuma resolver a maioria dos casos no primeiro contato.",
          "Em casos mais antigos, vai-se pelo rito da penhora: bloqueio de contas, salário, veículos e imóveis. A combinação de rito de prisão (para dívidas recentes) e rito de penhora (para dívidas antigas) costuma cobrir todo o histórico.",
        ],
      },
      {
        h2: "Pensão para filho maior de idade",
        body: [
          "A maioridade não extingue automaticamente a pensão. Se o filho estiver cursando ensino superior ou técnico, dependendo financeiramente do alimentante, a pensão continua até a conclusão razoável dos estudos — em geral, até 24 anos.",
          "A exoneração precisa ser pedida em juízo. Não basta parar de pagar quando o filho completa 18 — isso gera execução com pedido de prisão.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso pedir pensão de quem nunca registrou o filho?",
        a: "Sim, mas o caminho começa com investigação de paternidade. Reconhecida a paternidade (judicial ou extrajudicialmente), a pensão é devida desde a citação.",
      },
      {
        q: "Sou autônomo, sem holerite. Como o juiz fixa a pensão?",
        a: "O juiz usa todos os indícios de renda disponíveis: declaração de IR, padrão de vida, gastos com cartão, veículos, atividade profissional. Em última análise, fixa por estimativa razoável — com revisão se houver prova de variação relevante.",
      },
      {
        q: "Posso parar de pagar pensão se não estou vendo o filho?",
        a: "Não. Pensão e convivência são direitos independentes. A negativa de convivência se discute em outra ação; a pensão segue obrigatória.",
      },
      {
        q: "O que acontece se eu não pagar?",
        a: "Em dívida recente (até 3 meses), o rito é o de prisão: até 90 dias de prisão civil, sem extinção da dívida. Em dívida antiga, penhora de bens e contas.",
      },
    ],
  },
  {
    slug: "inventario-fernandopolis",
    area: "familia",
    navLabel: "Inventário",
    h1: "Inventário em Fernandópolis — cartório e judicial",
    title: "Inventário em Fernandópolis | Advogado",
    metaDescription:
      "Inventário em Fernandópolis/SP. Cartório (extrajudicial), judicial, partilha de bens e planejamento sucessório. Advogado. WhatsApp (17) 99632-4627.",
    intro: [
      "O inventário é o procedimento que apura, avalia e divide os bens deixados por quem faleceu. Em Fernandópolis, pode ser feito em cartório (extrajudicial) ou na Vara de Família e Sucessões, dependendo da situação dos herdeiros.",
      "O prazo legal para abertura é de 60 dias contados do óbito — passar desse prazo gera multa estadual sobre o ITCMD em São Paulo. Por isso, a primeira providência prática é abrir o procedimento dentro do prazo, mesmo que a partilha leve mais tempo.",
    ],
    sections: [
      {
        h2: "Inventário em cartório (extrajudicial)",
        body: [
          "Permitido quando todos os herdeiros são maiores e capazes, há consenso sobre a divisão e não há testamento (salvo decisão judicial que dispense). É o caminho mais rápido — de 30 a 90 dias do começo ao fim, em média, em Fernandópolis.",
          "Os herdeiros comparecem ao cartório, assistidos por advogado, e firmam a escritura pública. Em seguida, registra-se nos órgãos competentes (cartório de imóveis, Detran, junta comercial) para transferência efetiva dos bens.",
        ],
      },
      {
        h2: "Inventário judicial",
        body: [
          "Obrigatório quando há herdeiro menor, incapaz, testamento ou divergência entre os herdeiros. Tramita na Vara da Família e Sucessões da comarca onde o falecido tinha último domicílio.",
          "Em casos consensuais, pode terminar em 6 a 12 meses. Em litigiosos (com avaliação de bens, sonegados, herdeiros desconhecidos), pode levar anos — daí a importância de tentar acordo desde o início.",
        ],
      },
      {
        h2: "ITCMD e custos",
        body: [
          "O ITCMD em São Paulo é de 4% sobre o valor venal dos bens. Há isenção para imóveis de baixo valor (limite atualizado periodicamente pela legislação estadual). Atraso na abertura gera multa, e atraso no pagamento do imposto gera juros.",
          "Além do imposto, há emolumentos cartoriais (no extrajudicial) ou custas processuais (no judicial), avaliação de bens e honorários advocatícios. O planejamento dos prazos costuma reduzir custo total significativamente.",
        ],
      },
      {
        h2: "Planejamento sucessório: agir antes",
        body: [
          "Boa parte dos litígios em inventário poderia ser evitada com planejamento — testamento bem feito, doação com reserva de usufruto, holding familiar, regimes patrimoniais ajustados ainda em vida.",
          "Para patrimônios significativos ou famílias com histórico de conflito, vale conversar sobre planejamento sucessório antes que o problema se concretize.",
        ],
      },
    ],
    faq: [
      {
        q: "Em quanto tempo preciso abrir o inventário?",
        a: "Em até 60 dias do óbito, conforme art. 611 do CPC. Passar desse prazo gera multa sobre o ITCMD em São Paulo.",
      },
      {
        q: "Posso fazer inventário em cartório se tem testamento?",
        a: "Por regra não — mas há decisões recentes admitindo a via extrajudicial quando todos os herdeiros são capazes e há acordo, com autorização judicial.",
      },
      {
        q: "E se um herdeiro não concordar com a divisão?",
        a: "Aí o inventário precisa correr pela via judicial. O juiz decide a partilha com base nas regras legais — meação, herança necessária, sonegados se houver.",
      },
    ],
  },
  {
    slug: "tribunal-do-juri-fernandopolis",
    area: "penal",
    navLabel: "Tribunal do Júri",
    h1: "Tribunal do Júri em Fernandópolis — defesa em crimes dolosos contra a vida",
    title: "Tribunal do Júri em Fernandópolis | Advogado Criminalista",
    metaDescription:
      "Defesa no Tribunal do Júri de Fernandópolis. Crimes dolosos contra a vida — homicídio, feminicídio, infanticídio. Atendimento criminal 24h. WhatsApp (17) 99632-4627.",
    intro: [
      "O Tribunal do Júri julga os crimes dolosos contra a vida — homicídio, feminicídio, infanticídio, instigação ao suicídio e aborto. É o único rito do processo penal brasileiro em que quem decide é o povo, não um juiz togado.",
      "Defesa que combina técnica e oratória: a tese precisa estar tecnicamente impecável, mas precisa também ser entendida e acolhida por sete jurados leigos. É um trabalho com duas frentes — a do direito e a da narrativa.",
    ],
    sections: [
      {
        h2: "As duas fases do Júri",
        body: [
          "A primeira fase (judicium accusationis) corre perante o juiz singular. Aqui se discute se o caso tem mesmo elementos para ir a júri ou se há causas de impronúncia, absolvição sumária ou desclassificação para outro crime.",
          "Só os casos pronunciados chegam à segunda fase (judicium causae), onde os sete jurados — cidadãos sorteados — decidem por maioria, em sessão pública. Cada fase exige estratégia própria.",
        ],
      },
      {
        h2: "Teses comuns na primeira fase",
        body: [],
        list: [
          "Impronúncia — ausência de provas suficientes da materialidade ou autoria",
          "Absolvição sumária — causa de exclusão da antijuridicidade (legítima defesa, estado de necessidade)",
          "Desclassificação — o fato é crime, mas não doloso contra a vida (vai para juiz singular)",
          "Negativa de autoria — o acusado não foi o autor do fato",
        ],
      },
      {
        h2: "Plenário do Júri",
        body: [
          "Na sessão de julgamento, sete jurados ouvem testemunhas, o réu e os debates entre acusação e defesa. Depois, votam em sigilo respondendo aos quesitos formulados pelo juiz — sim ou não para cada elemento do crime.",
          "Aqui, a defesa precisa fazer mais que apresentar argumentos: precisa contar uma história coerente, que faça sentido para pessoas leigas. Boa preparação envolve revisão completa dos autos, escolha cuidadosa de testemunhas, antecipação dos pontos da acusação e simulações de plenário.",
        ],
      },
      {
        h2: "Recurso da decisão do Júri",
        body: [
          "Decisões do Júri têm recursos próprios: apelação por nulidade, por contrariedade à prova dos autos, ou por dosimetria. Em alguns casos, é possível pedir novo júri quando a decisão dos jurados se mostra manifestamente contrária à prova produzida.",
          "Em segundo grau, o Tribunal de Justiça de SP examina o cumprimento das regras, não o mérito do veredicto em si — o que reforça a importância de defesa caprichada já na primeira oportunidade.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto tempo demora um processo até o plenário do Júri?",
        a: "Em geral, de 1 a 3 anos da denúncia até o julgamento — dependendo da complexidade da prova, do número de réus e da pauta da Vara do Júri.",
      },
      {
        q: "Posso recorrer da decisão dos jurados?",
        a: "Sim, em hipóteses específicas: nulidade no julgamento, contrariedade manifesta à prova, dosimetria desproporcional. Em alguns casos, há direito a novo júri.",
      },
      {
        q: "Réu preso é levado à sessão do Júri?",
        a: "Sim. O réu pode comparecer e tem direito ao último interrogatório, ouvindo a acusação e a defesa antes de falar. Em alguns casos pode-se pedir presença por videoconferência.",
      },
    ],
  },
  {
    slug: "medida-protetiva-maria-da-penha-fernandopolis",
    area: "familia",
    navLabel: "Medida protetiva",
    h1: "Medida protetiva (Lei Maria da Penha) em Fernandópolis",
    title: "Medida Protetiva — Lei Maria da Penha em Fernandópolis",
    metaDescription:
      "Pedido de medida protetiva pela Lei Maria da Penha em Fernandópolis/SP. Afastamento, proibição de aproximação, proteção da família. WhatsApp (17) 99632-4627.",
    intro: [
      "A Lei Maria da Penha (Lei 11.340/2006) protege mulheres em situação de violência doméstica e familiar. O pedido de medida protetiva é, hoje, uma das ferramentas mais rápidas do sistema de justiça brasileiro — decisão em até 48 horas, em regra.",
      "Atuação tanto na representação da mulher (pedido e renovação das medidas) quanto na defesa em casos de medidas indevidamente aplicadas.",
    ],
    sections: [
      {
        h2: "O que são medidas protetivas",
        body: [
          "Medidas protetivas são determinações judiciais com força imediata, destinadas a interromper o ciclo de violência. Podem incluir afastamento do agressor do lar, proibição de aproximação e de contato, fixação de alimentos provisórios, suspensão de visitas e até apreensão de armas.",
          "São pedidas perante o juízo da Vara de Violência Doméstica (ou Vara Criminal, dependendo da estrutura da comarca de Fernandópolis) e podem ser concedidas em caráter liminar, sem necessidade de ouvir o agressor antes.",
        ],
      },
      {
        h2: "Tipos de medida protetiva",
        body: [],
        list: [
          "Afastamento do agressor do lar, domicílio ou local de convivência",
          "Proibição de aproximação da mulher e de seus familiares",
          "Proibição de contato por qualquer meio (telefone, redes sociais, mensagens)",
          "Suspensão das visitas aos filhos (em casos graves)",
          "Prestação de alimentos provisórios",
          "Encaminhamento da mulher e dos filhos a programa de proteção",
          "Apreensão de arma de fogo, se houver",
          "Restituição de bens indevidamente subtraídos pelo agressor",
        ],
      },
      {
        h2: "Como pedir",
        body: [
          "O pedido começa em delegacia (boletim de ocorrência e formulário próprio de risco) e segue para o juízo competente. Em Fernandópolis, a Delegacia da Mulher (ou a Polícia Civil local) recebe o pedido, e o juiz tem 48 horas para decidir.",
          "Não é necessário processo criminal já em andamento — a medida protetiva é autônoma e existe independentemente da ação penal contra o agressor. Pode ser renovada quantas vezes for necessário enquanto durar o risco.",
        ],
      },
      {
        h2: "Descumprimento e crimes correlatos",
        body: [
          "Descumprir medida protetiva é crime autônomo, com pena de até 2 anos de detenção (art. 24-A da Lei Maria da Penha) — e autoriza prisão em flagrante. Em casos de risco iminente, a pena pode ser cumulada com o flagrante por ameaça ou outros crimes da lei.",
          "Quando há crianças envolvidas, costuma haver pedido paralelo de guarda provisória e definição da pensão — todos no mesmo conjunto de medidas, para evitar o vai-e-vem entre varas.",
        ],
      },
    ],
    faq: [
      {
        q: "Em quanto tempo sai a medida protetiva?",
        a: "A lei prevê até 48 horas para decisão. Na prática, em casos de risco evidente, costuma sair no mesmo dia ou no dia seguinte.",
      },
      {
        q: "Preciso de advogado para pedir medida protetiva?",
        a: "Não é obrigatório no pedido inicial (pode ser feito direto em delegacia). Mas a presença do advogado fortalece o pedido, ajuda em renovações e na ação criminal correlata.",
      },
      {
        q: "Medida protetiva vale para união estável e ex-companheira?",
        a: "Sim. A Lei Maria da Penha protege qualquer mulher em situação de violência doméstica e familiar — incluindo ex-companheiras, conviventes, namoradas e familiares.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

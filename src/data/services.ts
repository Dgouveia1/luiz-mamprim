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

const FORUM_FERNANDOPOLIS =
  "Fórum da Comarca de Fernandópolis (Rua Bahia, 235 — Centro, Fernandópolis/SP)";

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
      "Atuação criminal em Fernandópolis e em toda a região noroeste paulista, com presença imediata em prisões em flagrante, audiências de custódia, inquéritos policiais e processos criminais no Fórum da Comarca de Fernandópolis e nas comarcas vizinhas — Votuporanga, Jales e demais cidades atendidas pelo escritório.",
      "Defesa técnica significa estratégia construída desde a primeira hora — leitura cuidadosa do auto de prisão, intervenção em delegacia, pedidos de relaxamento, habeas corpus e, quando o caso pede, sustentação oral em segunda instância no Tribunal de Justiça de São Paulo.",
    ],
    sections: [
      {
        h2: "Como funciona a defesa criminal em Fernandópolis",
        body: [
          "Casos criminais correm sob ritmo próprio. Em Fernandópolis, o Fórum atende a comarca e as cidades distritais. A primeira audiência de custódia acontece em até 24 horas após a prisão, conforme determinação do CNP — o que torna o tempo de resposta o fator mais decisivo de qualquer defesa criminal. Quanto mais cedo o advogado é acionado, maiores as chances de relaxamento ou de medidas cautelares alternativas à prisão preventiva (uso de tornozeleira, comparecimento periódico, proibição de frequentar determinados locais).",
          "A defesa começa antes do interrogatório, com orientação sobre o direito ao silêncio e o que pode (e o que não pode) ser dito. Em seguida, vem o acompanhamento de toda a instrução — recebimento da denúncia, resposta à acusação, audiência de instrução com oitiva de testemunhas, interrogatório do réu, alegações finais, sentença e, se necessário, recursos para o Tribunal de Justiça de São Paulo, STJ e STF.",
          "Cada uma dessas etapas tem regras processuais próprias, prazos curtos e oportunidades específicas. Perder uma manifestação por intempestividade pode prejudicar permanentemente a defesa. Por isso o acompanhamento próximo dos autos é parte central do trabalho do escritório.",
        ],
      },
      {
        h2: "Tipos de caso atendidos",
        body: [
          "A atuação penal cobre todas as fases do processo, desde a investigação até a execução da pena. Os principais focos do escritório:",
        ],
        list: [
          "Prisão em flagrante e audiência de custódia (atendimento 24h)",
          "Habeas corpus preventivo e liberatório",
          "Inquéritos policiais e indiciamentos",
          "Crimes patrimoniais — furto, roubo, estelionato, receptação, apropriação indébita",
          "Crimes contra a pessoa e Tribunal do Júri (homicídio, feminicídio)",
          "Crimes de trânsito — embriaguez ao volante, homicídio culposo, lesão corporal",
          "Lei de Drogas (Lei 11.343/06) — porte para uso, tráfico, associação",
          "Violência doméstica, descumprimento de medida protetiva e ameaça",
          "Recursos: apelação, RESE, agravo, recurso especial, recurso extraordinário",
          "Execução penal — progressão de regime, livramento condicional, remição, indulto",
          "Revisão criminal e ação rescisória",
        ],
      },
      {
        h2: "Documentos e informações úteis na primeira reunião",
        body: [
          "Para que a análise inicial seja realmente útil, vale chegar com algumas informações em mãos. Nada substitui a conversa, mas alguns documentos aceleram bastante o trabalho:",
        ],
        list: [
          "Boletim de ocorrência ou auto de prisão em flagrante, se houver",
          "Cópia da denúncia (ou intimação para depor / mandado de prisão)",
          "Documento pessoal e comprovante de residência",
          "Lista de testemunhas presentes ao fato",
          "Mensagens, e-mails, fotos ou vídeos que ajudem a contextualizar",
          "Eventuais antecedentes criminais (certidões disponíveis pelo TJSP)",
        ],
      },
      {
        h2: "Urgência penal: o que fazer nas primeiras horas",
        body: [
          "Se você ou alguém próximo foi preso em flagrante, três coisas precisam acontecer imediatamente: comunicar a família, comunicar um advogado de confiança e exercer o direito ao silêncio até que o defensor esteja presente. O Código de Processo Penal garante a presença do advogado em qualquer interrogatório, e qualquer ato realizado sem essa presença pode ser questionado depois.",
          "Não assine nada sem ler. Não confronte fisicamente os agentes. Não tente fugir, mesmo se considerar a prisão injusta. Quanto mais o réu se mantiver em silêncio e quanto mais cedo a defesa for acionada, maior o leque de teses disponíveis na audiência de custódia.",
          "O escritório atende urgências penais 24 horas pelo WhatsApp (17) 99632-4627. Em casos críticos, há acionamento direto na delegacia de Fernandópolis ou comarca de origem, com pedido imediato de relaxamento sempre que houver vício formal na prisão.",
        ],
      },
      {
        h2: "Prazos típicos no processo criminal",
        body: [
          "Os prazos a seguir são referência média do TJSP — variam conforme a complexidade do caso e a pauta do juízo:",
        ],
        list: [
          "Audiência de custódia: até 24h após a prisão em flagrante",
          "Resposta à acusação: 10 dias do recebimento da denúncia",
          "Audiência de instrução e julgamento: 60 a 180 dias",
          "Alegações finais: 5 dias após o encerramento da instrução",
          "Sentença: 10 dias após as alegações (na prática, mais)",
          "Apelação: 5 dias para interpor + 8 dias para razões",
          "Habeas corpus com liminar: análise em horas ou poucos dias",
        ],
      },
      {
        h2: "Por que escolher um advogado criminalista em Fernandópolis",
        body: [
          "Conhecer a rotina do Fórum local, dos delegados e dos promotores faz diferença em casos criminais. Um pedido de medida cautelar bem fundamentado, protocolado no momento certo, pode evitar meses de prisão preventiva. Esse conhecimento de campo se soma à técnica jurídica que cada caso exige.",
          "A atuação é discreta, ética e respeita rigorosamente o sigilo profissional garantido pelo artigo 7º, II do Estatuto da Advocacia (Lei 8.906/94). Cada caso é tratado de forma individual — não há fórmulas prontas em Direito Penal. O acompanhamento dos autos é constante, e cada movimentação relevante é comunicada de forma clara para o cliente e para a família, sem juridiquês.",
          "Para a região, o escritório atende as comarcas de Fernandópolis, Votuporanga, Jales e adjacências, com deslocamento imediato em casos de prisão e atendimento on-line para fases que não exigem presença física.",
        ],
      },
    ],
    faq: [
      {
        q: "Atendem prisão em flagrante fora do horário comercial?",
        a: "Sim. Urgências penais — especialmente flagrante — são respondidas 24 horas pelo WhatsApp (17) 99632-4627. O tempo de reação é o fator mais decisivo nessas situações: cada hora dificulta a tese de relaxamento ou de medidas cautelares alternativas.",
      },
      {
        q: "Quanto custa um advogado criminalista em Fernandópolis?",
        a: "Honorários variam conforme a complexidade e a fase do processo (flagrante, instrução, recursos, Júri). Em respeito ao Código de Ética da OAB, valores não são publicados — mas são apresentados de forma transparente antes de qualquer compromisso, com contrato escrito.",
      },
      {
        q: "Atendem apenas em Fernandópolis ou em outras comarcas?",
        a: "Atuamos em Fernandópolis, Votuporanga, Jales, Estrela d'Oeste, Meridiano, Pedranópolis, Macedônia, Mira Estrela e demais comarcas da região noroeste paulista. Atendimento on-line para casos fora da região, mantendo a mesma seriedade do presencial.",
      },
      {
        q: "Posso conversar antes de contratar?",
        a: "Sim. A primeira conversa não compromete você a nada — serve para entender o caso, mapear riscos e explicar as alternativas reais antes de qualquer decisão. Pode ser presencial no escritório ou on-line.",
      },
      {
        q: "Réu preso pode receber visita do advogado?",
        a: "Sim. O direito de comunicação com o advogado é constitucional (art. 5º, LXIII) e não depende de autorização judicial. As visitas são livres no horário previsto pela unidade prisional.",
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
      "Direito de Família em Fernandópolis e região, com atuação que combina escuta, técnica e estratégia patrimonial — divórcios consensuais e litigiosos, guarda e regulamentação de visitas, pensão alimentícia, união estável, inventários, alienação parental e medidas protetivas pela Lei Maria da Penha.",
      "Cada família tem uma história. O trabalho começa em ouvir, mapear o que está em jogo (filhos, bens, riscos emocionais e financeiros) e construir o caminho menos doloroso para o cliente e para as crianças envolvidas, sempre que houver acordo possível — sem esconder o cenário litigioso quando ele for, de fato, o melhor caminho.",
    ],
    sections: [
      {
        h2: "Como atuamos em Direito de Família",
        body: [
          "A maioria dos casos de família tem uma versão consensual e uma versão litigiosa. Quando há margem para acordo, o resultado é mais rápido, menos custoso e menos desgastante — e essa é sempre a primeira tentativa. Quando não há acordo, a defesa em juízo é firme, técnica e sem promessas vazias.",
          "A Vara de Família de Fernandópolis atende casos da comarca e tem rotina própria de audiências de tentativa de conciliação. O conhecimento dessa rotina ajuda a antecipar prazos, manifestações do Ministério Público (sempre presente em casos com menor de idade) e a melhor forma de apresentar cada pedido — especialmente os pedidos de tutela de urgência, que costumam definir provisoriamente guarda, pensão e direito de convivência.",
        ],
      },
      {
        h2: "Casos atendidos",
        body: [
          "A atuação cobre todo o ciclo do Direito de Família, do início ao fim do processo:",
        ],
        list: [
          "Divórcio consensual em cartório (Lei 11.441/2007)",
          "Divórcio judicial consensual (quando há filhos menores)",
          "Divórcio litigioso e partilha de bens",
          "Guarda compartilhada e unilateral",
          "Regulamentação de convivência e direito de visitas",
          "Pensão alimentícia — fixação, revisão e exoneração",
          "Reconhecimento e dissolução de união estável",
          "Inventário e partilha (judicial e extrajudicial)",
          "Planejamento sucessório (testamento, holding familiar, doações com reserva de usufruto)",
          "Medidas protetivas pela Lei Maria da Penha",
          "Alienação parental — apuração, multa e modificação de guarda",
          "Adoção, investigação de paternidade e reconhecimento de filhos",
          "Mudança de regime de bens e pacto antenupcial",
        ],
      },
      {
        h2: "Divórcio, guarda e pensão: o tripé mais comum",
        body: [
          "A maior parte dos casos de família envolve três discussões simultâneas: o fim do casamento (ou da união estável), a guarda dos filhos e a fixação da pensão alimentícia. Em casos consensuais, tudo pode ser resolvido em conjunto — em ação judicial única ou, sem filhos menores e havendo acordo total, diretamente no cartório, em escritura pública de divórcio e partilha.",
          "Quando há litígio, esses três pontos costumam tramitar juntos com pedido de tutela de urgência. O objetivo é definir, já no início do processo, a pensão provisória e a guarda provisória — para que ninguém (adulto ou criança) fique no limbo durante o tempo necessário à instrução. Esse pedido inicial precisa estar bem documentado: comprovantes de renda, despesas com a criança, fotos, mensagens.",
        ],
      },
      {
        h2: "Documentos que costumam ser pedidos",
        body: [
          "A lista exata depende do caso, mas em geral o escritório solicita:",
        ],
        list: [
          "Certidão de casamento ou contrato de união estável (se houver)",
          "Certidões de nascimento dos filhos",
          "RG, CPF e comprovante de residência das partes",
          "Comprovantes de renda (holerites, declarações de IR, extratos)",
          "Documentos dos bens (matrículas de imóveis, CRLV de veículos, contratos sociais)",
          "Comprovantes de despesas da criança (escola, plano de saúde, atividades)",
          "Mensagens e e-mails relevantes (em caso de litígio)",
        ],
      },
      {
        h2: "Prazos médios",
        body: [
          "Os prazos abaixo são referência típica em Fernandópolis e variam conforme a complexidade:",
        ],
        list: [
          "Divórcio em cartório: 5 a 15 dias úteis após documentação completa",
          "Divórcio judicial consensual: 30 a 90 dias",
          "Divórcio litigioso: 6 a 24 meses (divórcio em si pode ser concedido em sentença parcial)",
          "Ação de alimentos: liminar em dias; sentença em 6 a 12 meses",
          "Inventário extrajudicial: 30 a 90 dias",
          "Inventário judicial consensual: 6 a 12 meses",
        ],
      },
      {
        h2: "Sensibilidade que não tira a técnica",
        body: [
          "Direito de Família lida com momentos de dor. Isso não significa abrir mão da firmeza técnica — significa não tratar o cliente como número e não usar o sofrimento como argumento processual. A condução do caso busca preservar o que pode ser preservado: dinheiro, tempo, vínculos e saúde mental dos envolvidos.",
          "O sigilo é absoluto. O que é dito em consulta permanece entre cliente e advogado, garantido pelo artigo 7º, II do Estatuto da OAB. Em casos sensíveis (violência, abuso, alienação) o cuidado redobra — inclusive na forma como o pedido é redigido, para evitar exposição desnecessária da família e, principalmente, das crianças.",
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
        a: "A guarda compartilhada não elimina a pensão. O valor é calculado com base no binômio possibilidade/necessidade e leva em conta a divisão real de despesas da criança. Pode ser revisado sempre que houver mudança relevante de renda — para mais ou para menos.",
      },
      {
        q: "Em quanto tempo sai um inventário?",
        a: "Inventário extrajudicial em cartório (quando todos os herdeiros são maiores, capazes e há acordo) costuma sair em 30 a 90 dias. Inventário judicial varia conforme a complexidade do patrimônio, a existência de testamento e o número de herdeiros.",
      },
      {
        q: "Atendem casos fora de Fernandópolis?",
        a: "Sim. Atuamos em Votuporanga, Jales, Estrela d'Oeste, Meridiano, Pedranópolis, Macedônia, Mira Estrela e demais comarcas da região, além de atendimento on-line para outros estados.",
      },
      {
        q: "Posso ter o mesmo advogado do meu cônjuge no divórcio consensual?",
        a: "Sim, em divórcios verdadeiramente consensuais o mesmo advogado pode representar ambos os cônjuges, desde que não haja conflito de interesses. É o caminho mais econômico e mais rápido quando há acordo total.",
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
      "Habeas corpus é o instrumento mais antigo de proteção da liberdade individual no Direito brasileiro — e também um dos mais técnicos. Acertar a tese, o tribunal competente e o momento processual é o que separa um pedido bem-sucedido de um indeferimento sumário.",
      "Atuação em pedidos de habeas corpus preventivos (quando há ameaça de prisão) e liberatórios (quando a prisão já ocorreu), em primeiro grau, no Tribunal de Justiça de São Paulo, no Superior Tribunal de Justiça e, em casos relevantes, no Supremo Tribunal Federal.",
    ],
    sections: [
      {
        h2: "Quando o habeas corpus é cabível",
        body: [
          "O habeas corpus protege contra ilegalidade ou abuso de poder que cerceie a liberdade de locomoção. Isso inclui prisão sem fundamento legal, excesso de prazo na instrução, ausência dos pressupostos da prisão preventiva (art. 312 do CPP), constrangimento ilegal em inquérito e até decisões que mantêm o réu preso quando seria possível medida cautelar menos gravosa.",
          "Não é remédio universal — não substitui apelação nem discute mérito de forma ampla. A escolha pela via do habeas corpus depende de análise técnica caso a caso e leva em conta, sobretudo, a existência de prova pré-constituída (já documentada nos autos), porque o procedimento não admite dilação probatória.",
        ],
      },
      {
        h2: "Hipóteses mais comuns de cabimento",
        body: [
          "São situações que, na rotina das delegacias e do Fórum de Fernandópolis, mais frequentemente justificam o pedido:",
        ],
        list: [
          "Prisão em flagrante sem comunicação ao juiz em 24h",
          "Conversão indevida do flagrante em prisão preventiva",
          "Excesso de prazo na formação da culpa",
          "Falta dos requisitos da preventiva (garantia da ordem pública, conveniência da instrução, aplicação da lei penal)",
          "Possibilidade de medidas cautelares menos gravosas (art. 319 do CPP)",
          "Trancamento de ação penal por atipicidade ou ausência de justa causa",
          "Revogação de prisão preventiva por mudança de circunstâncias",
          "Substituição da prisão por prisão domiciliar (gestante, doente grave, mãe de criança até 12 anos)",
          "Sustação de busca e apreensão ou de mandado abusivo",
        ],
      },
      {
        h2: "Onde o pedido é feito",
        body: [
          "A competência depende da autoridade coatora (ou seja, de quem proferiu a decisão que se quer atacar). Decisões do juiz da comarca de Fernandópolis são atacadas no Tribunal de Justiça de São Paulo. Decisões de desembargadores e turmas do TJSP vão para o STJ; decisões do STJ podem ir para o STF.",
          "Errar essa competência é motivo automático de não conhecimento — o tribunal sequer entra no mérito. Por isso, avaliação técnica rápida da via correta antes de protocolar é essencial. Em casos urgentes, é comum que o pedido seja protocolado simultaneamente em mais de uma instância (com cuidado para evitar litispendência).",
        ],
      },
      {
        h2: "O que precisa estar nos autos",
        body: [
          "Como o HC não admite dilação probatória, tudo o que se pretende provar precisa estar pré-constituído. Em geral, vão acompanhar o pedido:",
        ],
        list: [
          "Cópia do auto de prisão em flagrante ou da decisão impugnada",
          "Certidões de antecedentes (ou prova da primariedade)",
          "Comprovantes de residência fixa, vínculo de trabalho e laços familiares",
          "Documentos médicos, em pedidos com fundamento humanitário",
          "Eventuais ofícios e ordens já descumpridos",
        ],
      },
      {
        h2: "Prazos e expectativa",
        body: [
          "Não há prazo formal para impetrar habeas corpus — pode ser feito a qualquer momento enquanto durar a ilegalidade. Em casos com risco iminente de prisão, o pedido preventivo deve ser protocolado o quanto antes, com pedido de liminar.",
          "Liminares em habeas corpus podem ser analisadas em horas, dependendo da urgência e do plantão. Em prisões já consumadas, o tempo médio até a decisão de mérito varia conforme o tribunal — mas a liminar continua sendo o ponto-chave: liminar concedida = liberdade imediata, com mérito julgado depois.",
        ],
      },
      {
        h2: "HC coletivo e habeas corpus de ofício",
        body: [
          "Em algumas hipóteses, o próprio tribunal pode conceder habeas corpus de ofício, sem pedido formal — quando, ao analisar outro recurso, identifica ilegalidade flagrante. Também há a figura do HC coletivo, para grupos em situação idêntica (exemplo clássico: mães presas com filhos pequenos). Ambas as figuras são usadas estrategicamente quando o caso permite.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a diferença entre habeas corpus preventivo e liberatório?",
        a: "Preventivo é impetrado quando há ameaça concreta de prisão ilegal (por exemplo, em investigação em curso, mandado pendente). Liberatório é impetrado quando a prisão já aconteceu e se busca a soltura imediata.",
      },
      {
        q: "Quanto tempo demora a decisão de um habeas corpus?",
        a: "A liminar pode sair em horas. A decisão de mérito varia: no TJSP, costuma levar de semanas a poucos meses; em tribunais superiores, mais. Em casos urgentes, a estratégia é justamente focar na liminar.",
      },
      {
        q: "Preciso estar preso para pedir habeas corpus?",
        a: "Não. O habeas corpus preventivo existe exatamente para casos em que ainda não houve prisão, mas a ameaça é real — citação para depoimento que pode resultar em prisão, mandado expedido mas não cumprido, investigação em curso com risco iminente.",
      },
      {
        q: "Se o HC for negado, posso recorrer?",
        a: "Sim. Da decisão denegatória do TJSP cabe recurso ordinário ao STJ; e do STJ, em casos específicos, ao STF. Também é possível impetrar novo HC, com fundamentos diferentes, se as circunstâncias mudarem.",
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
      "Divórcio em Fernandópolis pode seguir três caminhos: cartório extrajudicial (quando há acordo total e não há filhos menores), judicial consensual (quando há acordo mas há menores ou incapazes) ou judicial litigioso (quando não há acordo sobre algum ponto — partilha, guarda, pensão, nome).",
      "A escolha do caminho certo é o primeiro ponto da consulta — define prazo, custo e quanto desgaste o processo vai ter.",
    ],
    sections: [
      {
        h2: "Divórcio em cartório: quando é possível",
        body: [
          "O divórcio extrajudicial, criado pela Lei 11.441/2007, é o caminho mais rápido e barato em divórcios consensuais. Para usá-lo, é preciso que ambos os cônjuges estejam de acordo com o divórcio e com a partilha, que não haja filhos menores ou incapazes, e que estejam assistidos por advogado (que pode ser o mesmo para ambos, em casos verdadeiramente consensuais).",
          "Em geral, do agendamento à escritura, o processo leva de cinco a quinze dias úteis em Fernandópolis, contados a partir da entrega da documentação completa. A escritura tem força executiva — pode ser registrada diretamente nos cartórios de imóveis para transferência de bens.",
        ],
        list: [
          "RG e CPF de ambos",
          "Certidão de casamento atualizada (emitida em até 90 dias)",
          "Pacto antenupcial, se houver",
          "Documentos dos bens a partilhar — matrículas de imóveis, documentos de veículos, contratos sociais de empresas",
          "Acordo escrito sobre os termos do divórcio",
        ],
      },
      {
        h2: "Divórcio judicial consensual",
        body: [
          "Quando há filhos menores ou incapazes, o divórcio precisa correr na Vara de Família — mesmo que ambos concordem em tudo. A diferença é que, sendo consensual, basta uma audiência (ou nem isso, em muitos casos) e o processo costuma se encerrar em 30 a 90 dias.",
          "Nesses casos, guarda, pensão alimentícia e regulamentação de visitas precisam ser definidas em conjunto, com manifestação obrigatória do Ministério Público em defesa dos interesses das crianças. O juiz pode, ainda que tudo esteja acordado, sugerir ajustes — sobretudo no valor de pensão considerado insuficiente.",
        ],
      },
      {
        h2: "Divórcio litigioso",
        body: [
          "Quando não há acordo sobre algum ponto — partilha, guarda, pensão, nome — o processo é litigioso. Aqui ele se desdobra: o divórcio em si pode ser concedido rapidamente (por sentença parcial, com fundamento no art. 356 do CPC), e as demais discussões seguem em paralelo, com produção de provas, audiências, perícias se houver bens de avaliação complexa.",
          "Em qualquer cenário litigioso, sempre vale fazer uma última tentativa de acordo antes da sentença. Acordos costumam ser melhores que decisões judiciais em Direito de Família — e a porta do entendimento fica aberta até o último minuto, inclusive em audiência de instrução.",
        ],
      },
      {
        h2: "Partilha de bens e regime de casamento",
        body: [
          "Como os bens são divididos depende do regime adotado no casamento: comunhão parcial (regra padrão desde 1977), comunhão universal, separação total, regime de participação final nos aquestos ou regime misto definido em pacto antenupcial. Cada um tem regras próprias sobre o que entra e o que fica fora da partilha.",
          "Em uniões estáveis, salvo contrato escrito em sentido contrário, vale o regime da comunhão parcial. Bens adquiridos durante a convivência se comunicam; bens prévios, recebidos por herança ou doação personalíssima, não. A pré-existência precisa estar documentada — em muitos casos, esse é o ponto central do litígio.",
        ],
      },
      {
        h2: "Pensão alimentícia entre cônjuges",
        body: [
          "Além da pensão para os filhos, em alguns casos cabe pensão alimentícia entre cônjuges — quando um dos dois fica em situação de incapacidade econômica relevante após o divórcio. É uma pensão excepcional, geralmente fixada com prazo determinado (para que o ex-cônjuge se reorganize profissionalmente), mas existe e pode ser pedida.",
        ],
      },
      {
        h2: "E o sobrenome? Continua ou volta?",
        body: [
          "A regra geral é que o cônjuge que adotou o sobrenome do outro pode mantê-lo ou voltar ao de solteiro. Há, no entanto, situações em que o juiz pode autorizar a manutenção mesmo contra a vontade do outro cônjuge — quando, por exemplo, o sobrenome já está integrado à identidade profissional. Esse ponto vale ser discutido logo no início, porque costuma gerar atritos desnecessários.",
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
      {
        q: "Posso me divorciar pela internet?",
        a: "Sim, em divórcios consensuais sem filhos menores, vários cartórios já trabalham com lavratura totalmente on-line. Em divórcios judiciais, as audiências também podem ser por videoconferência, conforme a pauta da Vara.",
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
      "Desde 2014, com a Lei 13.058, a guarda compartilhada é a regra no Brasil. Mesmo quando os pais se separam em conflito, a tendência é que a tomada de decisão sobre a criança continue conjunta — escola, saúde, viagens, atividades extracurriculares.",
      "O que varia é a divisão de tempo de convivência, e é nesse ponto que a maioria das discussões se concentra na Vara de Família de Fernandópolis. Saber como o juízo local costuma decidir essas questões ajuda a ajustar o pedido — ou o acordo proposto — desde o início.",
    ],
    sections: [
      {
        h2: "O que é guarda compartilhada",
        body: [
          "Guarda compartilhada significa que ambos os pais participam, em igualdade de condições, das decisões importantes sobre a vida da criança. Não significa, necessariamente, tempo igual de convivência — embora seja possível, e seja crescente o número de famílias que adotam divisão equilibrada (5×5, 7×7).",
          "Na prática, a criança costuma ter uma residência de referência (o chamado lar de convivência principal) e uma rotina de visitas/convivência definida no acordo ou na sentença. O que muda é que escolha de escola, autorização para viagem ao exterior, tratamento médico relevante e outras decisões grandes passam por ambos.",
        ],
      },
      {
        h2: "Como é fixada",
        body: [
          "Em divórcio consensual ou em ação autônoma, a guarda compartilhada é fixada por acordo homologado pelo juiz, com participação obrigatória do Ministério Público sempre que houver menor de idade.",
          "Em casos litigiosos, o juiz pode determinar a guarda compartilhada mesmo contra a vontade de um dos pais — desde que ambos tenham condições reais de exercê-la. A guarda unilateral só é fixada quando há motivo grave: alienação parental comprovada, violência doméstica, abandono, dependência química, distância geográfica que torne inviável a convivência.",
        ],
      },
      {
        h2: "Pensão alimentícia continua existindo",
        body: [
          "Um dos mitos mais comuns: guarda compartilhada não elimina a pensão. O cálculo continua pelo binômio possibilidade do alimentante x necessidade do alimentado, com ajuste pela participação real de cada um nas despesas diretas da criança (escola, saúde, alimentação).",
          "Se um dos pais tem renda muito maior, a pensão se mantém mesmo na compartilhada — porque o objetivo é manter o padrão de vida da criança nas duas casas. Em algumas famílias com renda equivalente, é possível dispensar pensão em dinheiro, com cada um arcando diretamente com despesas específicas.",
        ],
      },
      {
        h2: "Quando o acordo é descumprido",
        body: [
          "Descumprimento sistemático — falta de pagamento de pensão, recusa de entrega, mudança unilateral de cidade, alienação parental — autoriza pedido judicial de revisão da guarda, aplicação de multa diária (astreintes) e, em casos graves, modificação para guarda unilateral em favor do outro.",
          "Documentar é o pilar central: mensagens preservadas, e-mails, datas, testemunhas, prints de redes sociais. Quanto mais sólida a prova, mais rápido o juiz decide a tutela de urgência. Atos isolados são mais difíceis de reverter; padrão repetido é o que efetivamente muda a guarda.",
        ],
      },
      {
        h2: "Alienação parental",
        body: [
          "A Lei 12.318/2010 trata da alienação parental — quando um dos pais, ou um familiar, tenta minar o vínculo da criança com o outro genitor. As sanções vão de advertência a multa, suspensão da autoridade parental e modificação da guarda. A apuração costuma envolver perícia psicossocial.",
          "Casos de suposta alienação exigem cuidado: nem toda recusa da criança ao convívio é alienação, e diagnóstico precoce é tão importante quanto evitar falsas acusações usadas como ferramenta de litígio.",
        ],
      },
      {
        h2: "Mudança de cidade com a criança",
        body: [
          "Mudança de cidade pelo genitor com a guarda física precisa de concordância do outro genitor (ou de autorização judicial). É um dos pontos mais comuns de conflito — e a decisão judicial leva em conta motivo da mudança, distância, qualidade do convívio com o outro genitor e impacto na rotina escolar.",
        ],
      },
    ],
    faq: [
      {
        q: "Guarda compartilhada significa tempo igual de convivência?",
        a: "Não necessariamente. O foco é a tomada de decisão conjunta. A divisão de tempo costuma refletir a rotina prática dos pais e da criança — pode ser 5×2, 4×3 ou até divisão semanal alternada.",
      },
      {
        q: "Posso mudar de cidade com a criança em guarda compartilhada?",
        a: "Não unilateralmente. Mudança de cidade exige concordância do outro genitor (ou autorização judicial). É um dos pontos mais comuns de conflito.",
      },
      {
        q: "O pai que não tem a guarda física precisa pagar pensão?",
        a: "Pensão alimentícia não depende do tipo de guarda — depende da capacidade financeira de cada um e das necessidades da criança. Mesmo em guarda compartilhada, em geral há pensão.",
      },
      {
        q: "A criança pode escolher com quem morar?",
        a: "Adolescentes maiores de 12 anos costumam ser ouvidos pelo juízo, e a opinião pesa — mas não é determinante. A decisão final leva em conta o melhor interesse, ouvindo psicólogo e Ministério Público.",
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
      "Atuação em ações de fixação inicial, revisão para mais ou para menos, exoneração quando cabível, alimentos provisórios e execução em caso de inadimplência — incluindo pedido de prisão civil.",
    ],
    sections: [
      {
        h2: "Como o valor é definido",
        body: [
          "O Código Civil (art. 1.694) fixa o critério do binômio possibilidade-necessidade. De um lado, o que o alimentado precisa para se manter (escola, saúde, alimentação, moradia, lazer, vestuário). De outro, o que o alimentante pode pagar sem prejudicar a própria subsistência.",
          "Não existe \"30% obrigatório\" — esse é um número de referência da jurisprudência para casos clássicos com renda formal estável (CLT, servidor público), mas é flexível. Quanto melhor a documentação das necessidades e das rendas, mais previsível é o resultado. Em famílias com vários filhos, o limite total da pensão paga pelo alimentante costuma ser observado para não inviabilizar a vida dele.",
        ],
      },
      {
        h2: "Casos atendidos",
        body: [
          "A atuação cobre todo o ciclo da pensão alimentícia:",
        ],
        list: [
          "Ação de fixação de alimentos (com pedido de alimentos provisórios)",
          "Revisional para aumentar a pensão (mudança de necessidade ou aumento de renda)",
          "Revisional para reduzir a pensão (perda de emprego, doença, novo filho)",
          "Exoneração de alimentos (filhos maiores que concluíram formação)",
          "Execução de alimentos (com pedido de prisão civil em caso de não pagamento)",
          "Alimentos gravídicos (durante a gestação, Lei 11.804/2008)",
          "Alimentos entre cônjuges e ex-cônjuges",
          "Alimentos avoengos (avós, quando os pais não podem prover)",
        ],
      },
      {
        h2: "Execução de alimentos: a via mais rápida do Direito",
        body: [
          "A execução de alimentos é uma das únicas hipóteses constitucionais de prisão civil (art. 5º, LXVII da CF). Em até três meses de inadimplência (alimentos correntes), o devedor pode ser preso por até 90 dias, em regime fechado — sem que isso o livre da dívida. É uma ferramenta poderosa, que costuma resolver a maioria dos casos no primeiro contato.",
          "Em casos mais antigos (dívida pretérita), vai-se pelo rito da penhora: bloqueio de contas via Sisbajud, salário (até 50%), veículos, imóveis. A combinação de rito de prisão (para dívidas recentes) e rito de penhora (para dívidas antigas) costuma cobrir todo o histórico em pouco tempo.",
        ],
      },
      {
        h2: "Pensão para filho maior de idade",
        body: [
          "A maioridade não extingue automaticamente a pensão. Se o filho estiver cursando ensino superior ou técnico, dependendo financeiramente do alimentante, a pensão continua até a conclusão razoável dos estudos — em geral, até 24 anos, conforme jurisprudência do STJ.",
          "A exoneração precisa ser pedida em juízo. Não basta parar de pagar quando o filho completa 18 — isso gera execução com pedido de prisão. O caminho correto é ajuizar ação de exoneração, em que se discutirá se o filho ainda precisa da pensão.",
        ],
      },
      {
        h2: "Alimentos gravídicos",
        body: [
          "Durante a gestação, a gestante pode pedir alimentos do suposto pai para custear despesas relacionadas à gravidez — consultas, exames, parto, enxoval. Não exige reconhecimento prévio da paternidade; basta indício suficiente. Depois do nascimento, os alimentos gravídicos convertem-se automaticamente em pensão alimentícia em favor da criança.",
        ],
      },
      {
        h2: "Como provar renda em casos difíceis",
        body: [
          "Em alimentantes autônomos, empresários ou informais, a comprovação de renda é o ponto sensível. Em geral, o escritório trabalha com:",
        ],
        list: [
          "Declaração de Imposto de Renda dos últimos anos",
          "Extratos bancários e movimentações em maquinetas (Pix, cartão)",
          "Padrão de vida (veículos, viagens, redes sociais)",
          "Pesquisa de bens em Detran, Junta Comercial e Receita",
          "Em casos extremos, perícia contábil e quebra de sigilo bancário/fiscal autorizadas judicialmente",
        ],
      },
    ],
    faq: [
      {
        q: "Posso pedir pensão de quem nunca registrou o filho?",
        a: "Sim, mas o caminho começa com investigação de paternidade. Reconhecida a paternidade (judicial ou extrajudicialmente, com exame de DNA), a pensão é devida desde a citação.",
      },
      {
        q: "Sou autônomo, sem holerite. Como o juiz fixa a pensão?",
        a: "O juiz usa todos os indícios de renda disponíveis: declaração de IR, padrão de vida, gastos com cartão, veículos, atividade profissional, redes sociais. Em última análise, fixa por estimativa razoável — com revisão se houver prova de variação relevante.",
      },
      {
        q: "Posso parar de pagar pensão se não estou vendo o filho?",
        a: "Não. Pensão e convivência são direitos independentes. A negativa de convivência se discute em outra ação; a pensão segue obrigatória.",
      },
      {
        q: "O que acontece se eu não pagar?",
        a: "Em dívida recente (até 3 meses), o rito é o de prisão: até 90 dias de prisão civil, sem extinção da dívida. Em dívida antiga, penhora de bens, contas e salário (até 50%).",
      },
      {
        q: "É possível pedir pensão dos avós?",
        a: "Sim, quando os pais não têm condições de prover. É chamada obrigação alimentar avoenga e tem caráter subsidiário e complementar.",
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
      "O prazo legal para abertura é de 60 dias contados do óbito (art. 611 do CPC) — passar desse prazo gera multa estadual sobre o ITCMD em São Paulo. Por isso, a primeira providência prática é abrir o procedimento dentro do prazo, mesmo que a partilha leve mais tempo.",
    ],
    sections: [
      {
        h2: "Inventário em cartório (extrajudicial)",
        body: [
          "Permitido quando todos os herdeiros são maiores e capazes, há consenso sobre a divisão e não há testamento (salvo decisão judicial mais recente que dispense, conforme posição do CNJ e do STJ). É o caminho mais rápido — de 30 a 90 dias do começo ao fim, em média, em Fernandópolis.",
          "Os herdeiros comparecem ao cartório, assistidos por advogado, e firmam a escritura pública de inventário e partilha. Em seguida, registra-se nos órgãos competentes (cartório de imóveis para transferência de matrículas, Detran para veículos, junta comercial para participações societárias) para transferência efetiva dos bens.",
        ],
      },
      {
        h2: "Inventário judicial",
        body: [
          "Obrigatório quando há herdeiro menor, incapaz, testamento (em regra) ou divergência entre os herdeiros. Tramita na Vara da Família e Sucessões da comarca onde o falecido tinha último domicílio — em Fernandópolis, no Fórum local.",
          "Em casos consensuais, pode terminar em 6 a 12 meses. Em litigiosos (com avaliação de bens, sonegados, herdeiros desconhecidos, contestação de testamento), pode levar anos — daí a importância de tentar acordo desde o início. O juiz nomeia um inventariante (em geral, o cônjuge sobrevivente ou um dos herdeiros) para representar o espólio.",
        ],
      },
      {
        h2: "Documentos necessários",
        body: [
          "A lista exata varia conforme o patrimônio, mas em geral inclui:",
        ],
        list: [
          "Certidão de óbito",
          "Certidão de casamento ou nascimento do falecido",
          "RG, CPF e certidões de nascimento/casamento dos herdeiros",
          "Certidões negativas (Receita Federal, FGTS, INSS, estadual)",
          "Matrículas atualizadas dos imóveis",
          "Documentos dos veículos e CRLV recente",
          "Extratos bancários e investimentos",
          "Contratos sociais de empresas (se houver)",
          "Testamento, se houver",
          "Comprovante de pagamento do ITCMD",
        ],
      },
      {
        h2: "ITCMD e custos",
        body: [
          "O ITCMD em São Paulo é de 4% sobre o valor venal dos bens transmitidos (Lei Estadual 10.705/2000). Há isenção para imóveis de baixo valor, conforme limite atualizado periodicamente pela Sefaz/SP. Atraso na abertura do inventário gera multa (de 10% a 20%, dependendo do tempo); atraso no pagamento do imposto gera juros e correção.",
          "Além do imposto, há emolumentos cartoriais (no extrajudicial, conforme tabela do TJSP), custas processuais (no judicial), avaliação de bens (quando exigida) e honorários advocatícios. Em geral, o custo total varia entre 4% e 8% do valor do patrimônio.",
        ],
      },
      {
        h2: "Sonegados e bens não declarados",
        body: [
          "Sonegação no inventário é a omissão dolosa de bens. Quem sonega perde o direito ao bem omitido, que se incorpora à herança dos demais (art. 1.992 do CC). Quando há suspeita, cabe ação de sonegados — com produção de prova pericial, quebras de sigilo bancário e fiscal autorizadas pelo juiz.",
        ],
      },
      {
        h2: "Planejamento sucessório: agir antes",
        body: [
          "Boa parte dos litígios em inventário poderia ser evitada com planejamento — testamento bem feito, doação com reserva de usufruto, holding familiar, regimes patrimoniais ajustados ainda em vida, seguros de vida com beneficiários definidos.",
          "Para patrimônios significativos ou famílias com histórico de conflito, vale conversar sobre planejamento sucessório antes que o problema se concretize. Custo do planejamento costuma ser uma fração do custo (financeiro e emocional) de um inventário litigioso.",
        ],
      },
    ],
    faq: [
      {
        q: "Em quanto tempo preciso abrir o inventário?",
        a: "Em até 60 dias do óbito, conforme art. 611 do CPC. Passar desse prazo gera multa sobre o ITCMD em São Paulo (de 10% a 20% conforme o atraso).",
      },
      {
        q: "Posso fazer inventário em cartório se tem testamento?",
        a: "Por regra não — mas há decisões recentes admitindo a via extrajudicial quando todos os herdeiros são capazes e há acordo, com autorização judicial. Sempre vale a análise técnica para evitar refazer o procedimento.",
      },
      {
        q: "E se um herdeiro não concordar com a divisão?",
        a: "Aí o inventário precisa correr pela via judicial. O juiz decide a partilha com base nas regras legais — meação do cônjuge, herança necessária (50%) e disponível (50%, no caso de testamento), sonegados se houver.",
      },
      {
        q: "Posso vender um imóvel antes de terminar o inventário?",
        a: "Não diretamente. Mas é possível pedir autorização judicial para alienação (alvará) se há necessidade comprovada (pagamento de dívidas do espólio, por exemplo).",
      },
      {
        q: "Os herdeiros respondem pelas dívidas do falecido?",
        a: "Sim, no limite das forças da herança. Ou seja, as dívidas são pagas pelo espólio antes da partilha. Se o passivo supera o ativo, os herdeiros podem renunciar à herança.",
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
      "O Tribunal do Júri julga os crimes dolosos contra a vida — homicídio, feminicídio, infanticídio, instigação ao suicídio e aborto. É o único rito do processo penal brasileiro em que quem decide é o povo, não um juiz togado. Os sete jurados respondem por simples sim ou não aos quesitos formulados pelo juiz.",
      "Defesa que combina técnica e oratória: a tese precisa estar tecnicamente impecável, mas precisa também ser entendida e acolhida por sete jurados leigos. É um trabalho com duas frentes — a do direito e a da narrativa.",
    ],
    sections: [
      {
        h2: "As duas fases do Júri",
        body: [
          "A primeira fase (judicium accusationis) corre perante o juiz singular da Vara do Júri. Aqui se discute se o caso tem mesmo elementos para ir a júri ou se há causas de impronúncia (provas insuficientes), absolvição sumária (legítima defesa, estado de necessidade) ou desclassificação (o crime existe mas não é doloso contra a vida).",
          "Só os casos pronunciados chegam à segunda fase (judicium causae), onde os sete jurados — cidadãos sorteados do alistamento eleitoral — decidem por maioria, em sessão pública. Cada fase exige estratégia própria, e a estratégia da fase 1 já costuma antecipar o discurso para o plenário.",
        ],
      },
      {
        h2: "Teses comuns na primeira fase",
        body: [
          "São as principais saídas técnicas analisadas pela defesa antes da pronúncia:",
        ],
        list: [
          "Impronúncia — ausência de provas suficientes da materialidade ou autoria",
          "Absolvição sumária — causa de exclusão da antijuridicidade (legítima defesa, estado de necessidade) ou da culpabilidade",
          "Desclassificação — o fato é crime, mas não doloso contra a vida (vai para juiz singular)",
          "Negativa de autoria — o acusado não foi o autor do fato",
          "Reconhecimento de qualificadora privilegiada (violenta emoção, motivo de relevante valor)",
          "Nulidade processual — vício formal no inquérito ou na denúncia",
        ],
      },
      {
        h2: "Preparação do plenário",
        body: [
          "Plenário não se improvisa. Boa preparação envolve revisão completa dos autos, escolha cuidadosa de testemunhas, antecipação dos pontos da acusação, montagem de material visual (slides, fotos, mapa do local), entrevistas longas com o réu e com a família, e — quando o caso permite — simulações com colegas atuando como acusação.",
          "É também na preparação que se decide a tese central. Defesa eficaz em Júri é defesa com uma tese principal clara, repetida em todo o discurso, e teses subsidiárias bem amarradas (\"se não absolver, pelo menos desclassifique; se não desclassificar, pelo menos reconheça privilégio\").",
        ],
      },
      {
        h2: "Plenário do Júri",
        body: [
          "Na sessão de julgamento, sete jurados ouvem testemunhas, o réu (interrogatório) e os debates entre acusação e defesa (tempo regulamentar, com possibilidade de réplica e tréplica). Depois, votam em sigilo respondendo aos quesitos formulados pelo juiz — sim ou não para cada elemento do crime.",
          "Aqui, a defesa precisa fazer mais que apresentar argumentos: precisa contar uma história coerente, que faça sentido para pessoas leigas. Linguagem clara, exemplos concretos, controle do ritmo e da emoção, capacidade de devolver os pontos da acusação na réplica e tréplica. É tanto técnica jurídica quanto teatro forense, sem esquecer que o réu — sentado ao lado da defesa — está sendo avaliado o tempo todo.",
        ],
      },
      {
        h2: "Recurso da decisão do Júri",
        body: [
          "Decisões do Júri têm recursos próprios: apelação por nulidade, por contrariedade à prova dos autos, ou por dosimetria. Em alguns casos, é possível pedir novo júri quando a decisão dos jurados se mostra manifestamente contrária à prova produzida — caso clássico de cabimento previsto no CPP (art. 593, III, d).",
          "Em segundo grau, o Tribunal de Justiça de SP examina o cumprimento das regras, não o mérito do veredicto em si (princípio da soberania dos veredictos) — o que reforça a importância de defesa caprichada já na primeira oportunidade.",
        ],
      },
      {
        h2: "Feminicídio e violência doméstica",
        body: [
          "O homicídio qualificado por feminicídio (Lei 13.104/2015) tem pena base mais alta e costuma vir acompanhado de outras qualificadoras (motivo torpe, meio cruel). A defesa nesses casos exige cuidado redobrado tanto técnico (qualificadoras e causas de diminuição) quanto narrativo, especialmente quando há histórico documentado de violência doméstica.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto tempo demora um processo até o plenário do Júri?",
        a: "Em geral, de 1 a 3 anos da denúncia até o julgamento — dependendo da complexidade da prova, do número de réus e da pauta da Vara do Júri de Fernandópolis.",
      },
      {
        q: "Posso recorrer da decisão dos jurados?",
        a: "Sim, em hipóteses específicas: nulidade no julgamento, contrariedade manifesta à prova, dosimetria desproporcional. Em alguns casos, há direito a novo júri.",
      },
      {
        q: "Réu preso é levado à sessão do Júri?",
        a: "Sim. O réu pode comparecer e tem direito ao último interrogatório, ouvindo a acusação e a defesa antes de falar. Em alguns casos pode-se pedir presença por videoconferência.",
      },
      {
        q: "Pode haver acordo no Tribunal do Júri?",
        a: "Para crimes dolosos contra a vida, o ANPP (acordo de não persecução penal) não se aplica. O que pode existir é alguma negociação na fase de pronúncia (reconhecimento de qualificadoras menos graves, por exemplo), mas o julgamento, em regra, vai a júri.",
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
      "A Lei Maria da Penha (Lei 11.340/2006) protege mulheres em situação de violência doméstica e familiar. O pedido de medida protetiva é, hoje, uma das ferramentas mais rápidas do sistema de justiça brasileiro — decisão em até 48 horas, em regra, podendo ser concedida em caráter de urgência ainda no plantão.",
      "Atuação tanto na representação da mulher (pedido inicial, renovação das medidas e acompanhamento da ação penal correlata) quanto na defesa em casos de medidas indevidamente aplicadas, dentro dos limites éticos da advocacia.",
    ],
    sections: [
      {
        h2: "O que são medidas protetivas",
        body: [
          "Medidas protetivas são determinações judiciais com força imediata, destinadas a interromper o ciclo de violência. Podem incluir afastamento do agressor do lar, proibição de aproximação e de contato, fixação de alimentos provisórios para a mulher e os filhos, suspensão de visitas e até apreensão de armas de fogo.",
          "São pedidas perante o juízo da Vara de Violência Doméstica (ou Vara Criminal, conforme a estrutura da comarca de Fernandópolis) e podem ser concedidas em caráter liminar (cautelar), sem necessidade de ouvir o agressor antes — exatamente porque o objetivo é proteger imediatamente a vítima.",
        ],
      },
      {
        h2: "Tipos de medida protetiva (art. 22 da Lei 11.340)",
        body: [
          "A lei prevê um catálogo amplo, do qual o juiz seleciona as medidas adequadas ao caso:",
        ],
        list: [
          "Afastamento do agressor do lar, domicílio ou local de convivência",
          "Proibição de aproximação da mulher e de seus familiares (com distância mínima fixada em metros)",
          "Proibição de contato por qualquer meio (telefone, redes sociais, mensagens, terceiros)",
          "Restrição ou suspensão das visitas aos filhos (em casos graves)",
          "Prestação de alimentos provisórios",
          "Encaminhamento da mulher e dos filhos a programa de proteção",
          "Apreensão imediata de arma de fogo, se houver",
          "Restituição de bens indevidamente subtraídos pelo agressor",
          "Proibição de praticar determinados atos (compra de arma, frequência a determinados locais)",
        ],
      },
      {
        h2: "Como pedir",
        body: [
          "O pedido começa em delegacia (boletim de ocorrência e preenchimento do formulário próprio de avaliação de risco) e segue para o juízo competente. Em Fernandópolis, a Delegacia de Defesa da Mulher (ou a Polícia Civil local) recebe o pedido, e o juiz tem 48 horas para decidir.",
          "Não é necessário processo criminal já em andamento — a medida protetiva é autônoma e existe independentemente da ação penal contra o agressor. Pode ser renovada quantas vezes for necessário enquanto durar o risco. O acompanhamento por advogado, embora não obrigatório no pedido inicial, fortalece a defesa: ajuda na coleta de provas, na petição inicial e nas renovações.",
        ],
      },
      {
        h2: "Documentos úteis",
        body: [
          "Tudo que ajuda a documentar o histórico de violência fortalece o pedido:",
        ],
        list: [
          "Boletins de ocorrência anteriores",
          "Mensagens, áudios e e-mails do agressor",
          "Prints de redes sociais",
          "Laudos médicos e psicológicos",
          "Testemunhas (vizinhos, familiares, colegas de trabalho)",
          "Fotos de lesões corporais ou de patrimônio danificado",
          "Decisões judiciais anteriores envolvendo o agressor",
        ],
      },
      {
        h2: "Descumprimento e crimes correlatos",
        body: [
          "Descumprir medida protetiva é crime autônomo (art. 24-A da Lei Maria da Penha), com pena de 3 meses a 2 anos de detenção, e autoriza prisão em flagrante. Em casos de risco iminente, a pena pode ser cumulada com o flagrante por ameaça, lesão corporal ou outros crimes da lei.",
          "Quando há crianças envolvidas, costuma haver pedido paralelo de guarda provisória e definição da pensão alimentícia — todos no mesmo conjunto de medidas, para evitar o vai-e-vem entre varas (Família e Violência Doméstica).",
        ],
      },
      {
        h2: "Botão do pânico e patrulha Maria da Penha",
        body: [
          "Em Fernandópolis e cidades vizinhas, há programas estaduais de monitoramento de mulheres em situação de risco grave — patrulha Maria da Penha, botão do pânico e monitoramento eletrônico do agressor por tornozeleira. Esses recursos podem ser solicitados ao juiz junto com a medida protetiva e, em casos graves, costumam ser deferidos.",
        ],
      },
    ],
    faq: [
      {
        q: "Em quanto tempo sai a medida protetiva?",
        a: "A lei prevê até 48 horas para decisão. Na prática, em casos de risco evidente, costuma sair no mesmo dia ou no dia seguinte — inclusive em plantão judicial.",
      },
      {
        q: "Preciso de advogado para pedir medida protetiva?",
        a: "Não é obrigatório no pedido inicial (pode ser feito direto em delegacia). Mas a presença do advogado fortalece o pedido, ajuda em renovações e na ação criminal correlata.",
      },
      {
        q: "Medida protetiva vale para união estável e ex-companheira?",
        a: "Sim. A Lei Maria da Penha protege qualquer mulher em situação de violência doméstica e familiar — incluindo ex-companheiras, conviventes, namoradas, familiares (mãe, irmã, filha).",
      },
      {
        q: "Quanto tempo dura a medida protetiva?",
        a: "Tem prazo determinado pelo juiz (em geral, 6 meses), mas pode ser renovada indefinidamente enquanto durar o risco, mediante novo pedido.",
      },
      {
        q: "A medida protetiva pode incluir o agressor que mora em outra cidade?",
        a: "Sim. A proibição de aproximação tem alcance nacional e pode ser cumprida onde quer que o agressor esteja, inclusive com cooperação entre delegacias de cidades diferentes.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export { FORUM_FERNANDOPOLIS };

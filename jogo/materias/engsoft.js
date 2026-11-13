window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['engsoft'] = {
  id: 'engsoft',
  name: 'Engenharia de Software e Ágil',
  npcs: [
    { name: 'Dona Sprint, a Cronometrista', lines: [
      'No Scrum 2020 não existem "papéis": são 3 responsabilidades. Product Owner, Scrum Master e Developers. Sem subtimes, sem hierarquia.',
      'A Sprint dura no máximo 1 mês e contém todos os eventos: Planning, Daily, Review e Retrospective. Refinamento é atividade, não evento!',
      'Cada artefato tem um compromisso: Product Backlog → Meta do Produto; Sprint Backlog → Meta da Sprint; Incremento → Definição de Pronto.',
      'Só o Product Owner pode cancelar uma Sprint, e só quando a Meta da Sprint fica obsoleta. A Daily é dos Developers e dura 15 minutos.'
    ] },
    { name: 'Seu Contador de Pontos', lines: [
      'Na APF, funções de dados são ALI (mantido dentro da fronteira) e AIE (só referenciado, mantido por outra aplicação).',
      'Transações: EE altera dados ou comportamento; SE mostra dados com cálculo ou dado derivado; CE só recupera, sem cálculo.',
      'Pesos baixa/média/alta: ALI 7/10/15, AIE 5/7/10, EE 3/4/6, SE 4/5/7, CE 3/4/6. Some tudo e terá os PF não ajustados.',
      'Complexidade de dados usa TD e TR; de transações usa TD e ALR (arquivos referenciados). APF mede o tamanho funcional, não esforço.'
    ] },
    { name: 'Mestra Spec, a Engenheira', lines: [
      'Requisito funcional diz O QUE o sistema faz; não funcional diz COMO ele deve ser (desempenho, segurança, usabilidade).',
      'Boa história é INVEST: Independente, Negociável, Valiosa, Estimável, Pequena e Testável. Critério de aceite em Dado/Quando/Então.',
      'Verificação: construímos o produto certo do jeito certo? Validação: construímos o produto certo para o usuário?',
      'No SDD a especificação é a fonte da verdade: especificar, planejar, quebrar em tarefas e só então gerar código, inclusive com IA.'
    ] }
  ],
  boss: {
    name: 'Prof. Velocity',
    intro: 'Cascata, Scrum, SAFe, pontos de função e IA no código. Acha que domina a engenharia de software? Prove em 8 questões!',
    questions: [
      { q: 'De acordo com o Guia do Scrum (2020), assinale a afirmativa correta sobre o Time Scrum.',
        options: [
          'É composto por Product Owner, Scrum Master e Time de Desenvolvimento, este último subdividido em especialistas.',
          'O Product Owner pode ser um comitê, desde que represente todas as áreas de negócio.',
          'É composto por um Scrum Master, um Product Owner e Developers, sem subtimes nem hierarquias.',
          'O Scrum Master é o gerente do time e atribui as tarefas aos Developers.',
          'Os Developers respondem pela ordenação do Product Backlog.'
        ], answer: 2,
        explain: 'O Guia 2020 fala em 3 responsabilidades (PO, SM e Developers), sem subtimes nem hierarquia. "Time de Desenvolvimento" saiu do guia; PO é uma pessoa; SM não distribui tarefas; ordenar o backlog é do PO.' },
      { q: 'Relacione corretamente artefato e compromisso no Guia do Scrum 2020.',
        options: [
          'Product Backlog – Definição de Pronto; Sprint Backlog – Meta do Produto; Incremento – Meta da Sprint.',
          'Product Backlog – Meta da Sprint; Sprint Backlog – Definição de Pronto; Incremento – Meta do Produto.',
          'Product Backlog – Meta do Produto; Sprint Backlog – Definição de Pronto; Incremento – Meta da Sprint.',
          'Product Backlog – Visão; Sprint Backlog – Velocidade; Incremento – Critérios de aceite.',
          'Product Backlog – Meta do Produto; Sprint Backlog – Meta da Sprint; Incremento – Definição de Pronto.'
        ], answer: 4,
        explain: 'Cada artefato tem um compromisso: Product Backlog → Meta do Produto; Sprint Backlog → Meta da Sprint; Incremento → Definição de Pronto. As demais trocam os pares ou inventam compromissos.' },
      { q: 'Um sistema de RH mantém o cadastro de servidores. O sistema de diárias do tribunal apenas lê esse cadastro. Na contagem do sistema de diárias, o cadastro é um(a):',
        options: ['AIE', 'ALI', 'EE', 'CE', 'SE'], answer: 0,
        explain: 'AIE é um grupo de dados lógico só referenciado pela aplicação contada e mantido em outra. Seria ALI se o sistema de diárias o mantivesse. EE, SE e CE são transações, não dados.' },
      { q: 'Em APF (IFPUG), uma tela que exibe a lista de processos de um magistrado, sem cálculos, sem dados derivados e sem atualizar arquivos, é classificada como:',
        options: ['Entrada Externa', 'Saída Externa', 'Arquivo Lógico Interno', 'Consulta Externa', 'Arquivo de Interface Externa'], answer: 3,
        explain: 'CE recupera e apresenta dados sem cálculo, sem dado derivado, sem manter ALI e sem alterar comportamento. Com totalização calculada viraria SE. EE tem a intenção de manter dados.' },
      { q: 'Sobre o Kanban aplicado ao desenvolvimento de software, é correto afirmar que:',
        options: [
          'prescreve Sprints de duração fixa e papéis obrigatórios como o Kanban Master.',
          'limita o trabalho em progresso (WIP) e usa o sistema puxado para melhorar o fluxo.',
          'proíbe métricas de fluxo, pois o foco é apenas visual.',
          'exige que todo item passe por Sprint Review antes de ser entregue.',
          'aumentar o WIP sempre reduz o tempo de ciclo.'
        ], answer: 1,
        explain: 'Kanban visualiza o fluxo, limita o WIP e puxa trabalho. Não prescreve sprints nem papéis. Usa métricas como lead time e throughput. Pela Lei de Little, mais WIP com a mesma vazão aumenta o tempo de ciclo.' },
      { q: 'No SAFe, o evento em que todos os times de um Agile Release Train planejam juntos o próximo incremento, alinhando objetivos e dependências, é o(a):',
        options: ['Daily Scrum', 'Sprint Review', 'PI Planning', 'Inspect and Adapt de portfólio', 'Retrospectiva de time'], answer: 2,
        explain: 'O PI Planning reúne todo o ART, presencial ou remoto, para planejar o PI (em geral 8 a 12 semanas). Daily, Review e Retrospectiva são eventos de cada time, não do trem inteiro.' },
      { q: 'Assinale a história de usuário que melhor atende ao critério INVEST.',
        options: [
          'Como sistema, quero usar PostgreSQL 16 para armazenar dados.',
          'Implementar todo o módulo de processos eletrônicos do tribunal.',
          'Como servidor, quero tudo mais rápido para trabalhar melhor.',
          'Como advogado, quero receber e-mail quando houver nova intimação, para não perder prazos.',
          'Melhorar a usabilidade geral do portal.'
        ], answer: 3,
        explain: 'A D tem papel, objetivo e benefício, é pequena e testável. A A é tarefa técnica sem valor ao usuário; B e E são épicos vagos; C não é testável ("mais rápido" sem critério).' },
      { q: 'No desenvolvimento orientado a especificações (SDD) com apoio de IA, a prática mais adequada é:',
        options: [
          'gerar o código primeiro e escrever a especificação depois, para documentar.',
          'tratar a especificação como fonte da verdade, derivar plano e tarefas dela e validar o código gerado com testes e revisão humana.',
          'dispensar testes, pois o código gerado por modelos de linguagem é determinístico.',
          'colocar credenciais de produção no prompt para que o agente teste melhor.',
          'aceitar o código gerado sem revisão quando compila sem erros.'
        ], answer: 1,
        explain: 'No SDD a especificação vem antes e guia plano, tarefas e código. LLMs não são determinísticos e podem alucinar: teste e revisão continuam obrigatórios. Segredos nunca vão para o prompt. Compilar não prova correção.' }
    ]
  },
  match: {
    title: 'Ligue o conceito',
    pairs: [
      ['Incremento', 'Compromisso: Definição de Pronto'],
      ['ALI', 'Dados mantidos dentro da fronteira'],
      ['Limite de WIP', 'Teto de itens em andamento'],
      ['INVEST', 'Checklist de boa história de usuário'],
      ['PI Planning', 'Planejamento conjunto do ART no SAFe'],
      ['Validação', 'Construir o produto certo']
    ]
  },
  quick: [
    { q: 'Duração máxima da Sprint no Guia do Scrum?', options: ['1 mês', '2 semanas', '6 semanas', '3 meses'], answer: 0, explain: 'Sprint: até um mês, com duração consistente.' },
    { q: 'Quem pode cancelar a Sprint?', options: ['Scrum Master', 'Developers', 'Stakeholders', 'Product Owner'], answer: 3, explain: 'Só o PO, se a Meta da Sprint ficar obsoleta.' },
    { q: 'Peso de um ALI de complexidade baixa?', options: ['3 PF', '5 PF', '7 PF', '10 PF'], answer: 2, explain: 'ALI: 7 / 10 / 15 (baixa / média / alta).' },
    { q: 'Modelo de ciclo de vida guiado por análise de riscos?', options: ['Cascata', 'Espiral', 'Modelo V', 'Codifica-corrige'], answer: 1, explain: 'O espiral de Boehm gira em torno de riscos.' },
    { q: 'Ciclo do TDD?', options: ['Verde-vermelho', 'Testar no fim', 'Vermelho-verde-refatorar', 'Refatorar-codificar'], answer: 2, explain: 'Teste falha, código mínimo passa, depois refatora.' },
    { q: '"O sistema deve responder em até 2 s" é requisito:', options: ['Funcional', 'Não funcional', 'Regra de negócio', 'De domínio'], answer: 1, explain: 'Desempenho é qualidade: não funcional.' }
  ],
  study: {
    title: 'Biblioteca de Engenharia de Software',
    chapters: [
      { title: 'Ciclo de vida: cascata, iterativo e ágil',
        pages: [
          'CASCATA (sequencial)\n• Fases em ordem: requisitos → projeto → implementação → testes → implantação/manutenção.\n• Cada fase termina com documentos aprovados.\n• Bom quando requisitos são estáveis e bem conhecidos.\n• Problema: o cliente só vê software no fim; mudança tardia custa caro.\n• Royce (1970) já alertava para os riscos do modelo puramente sequencial.',
          'INCREMENTAL × ITERATIVO\n• Incremental: entrega o sistema em fatias que somam funcionalidades.\n• Iterativo: repete ciclos para refinar o que já existe.\n• Espiral (Boehm): ciclos guiados por ANÁLISE DE RISCOS.\n• RUP: fases Concepção, Elaboração, Construção e Transição, com iterações em todas.\n• Modelo V: cada fase de construção tem um nível de teste correspondente.',
          'ÁGIL\n• Manifesto Ágil (2001): indivíduos e interações > processos e ferramentas; software em funcionamento > documentação abrangente; colaboração com o cliente > negociação de contratos; responder a mudanças > seguir um plano.\n• "Mais valor à esquerda", sem desprezar a direita.\n• 12 princípios. XP: TDD, programação em par, integração contínua, refatoração.'
        ],
        tip: 'Espiral = risco. RUP = 4 fases iterativas. Manifesto: valoriza mais a esquerda, mas não joga fora a direita.',
        quiz: [
          { q: 'O modelo de processo em que cada volta envolve objetivos, avaliação e redução de riscos, desenvolvimento e planejamento da próxima volta é o:',
            options: ['RAD', 'cascata', 'modelo V', 'codifica-corrige', 'espiral'], answer: 4,
            explain: 'O espiral de Boehm é orientado a riscos. Cascata é sequencial; o V liga fases a níveis de teste; codifica-corrige não tem processo; RAD foca em ciclos muito curtos.' },
          { q: 'Segundo o Manifesto Ágil, é correto afirmar que:',
            options: [
              'documentação deve ser abolida.',
              'planos não têm valor em projetos ágeis.',
              'há valor nos itens da direita, mas os da esquerda são mais valorizados.',
              'contratos são proibidos em projetos ágeis.',
              'processos e ferramentas valem mais que indivíduos e interações.'
            ], answer: 2,
            explain: 'O próprio manifesto diz: "embora haja valor nos itens à direita, valorizamos mais os itens à esquerda". Nada é abolido ou proibido, e a E inverte a ordem.' }
        ] },
      { title: 'Scrum, Kanban, Lean e SAFe',
        pages: [
          'SCRUM (Guia 2020)\n• Pilares: transparência, inspeção, adaptação.\n• Valores: compromisso, foco, abertura, respeito, coragem.\n• Responsabilidades: Product Owner (valor, Product Backlog), Scrum Master (eficácia do time), Developers (Incremento utilizável a cada Sprint).\n• Time pequeno, normalmente 10 pessoas ou menos, sem subtimes.',
          'EVENTOS E ARTEFATOS\n• Sprint ≤ 1 mês contém tudo. Planning ≤ 8 h; Daily 15 min; Review ≤ 4 h; Retro ≤ 3 h (limites para Sprint de 1 mês).\n• Product Backlog → Meta do Produto.\n• Sprint Backlog → Meta da Sprint.\n• Incremento → Definição de Pronto.\n• Refinamento é atividade contínua, não evento.',
          'KANBAN, LEAN, SAFe\n• Kanban: visualizar fluxo, limitar WIP, sistema puxado, políticas explícitas, medir lead time e vazão.\n• Lei de Little: tempo de ciclo médio = WIP ÷ vazão.\n• Lean: eliminar desperdício, qualidade embutida, entregar rápido, otimizar o todo.\n• SAFe: times → Agile Release Train (ART) → PI Planning a cada PI; RTE facilita o trem; WSJF prioriza.'
        ],
        tip: 'Artefato → compromisso: PB→Meta do Produto, SB→Meta da Sprint, Incremento→DoD. Kanban não tem sprint.',
        quiz: [
          { q: 'Segundo o Guia do Scrum 2020, a Daily Scrum:',
            options: [
              'é uma reunião de status para o Scrum Master cobrar os Developers.',
              'dura até 15 minutos e é um evento dos Developers para inspecionar o progresso rumo à Meta da Sprint.',
              'deve obrigatoriamente responder às três perguntas clássicas.',
              'pode ser pulada quando a Sprint tem menos de duas semanas.',
              'é conduzida pelo Product Owner, que redefine as prioridades do dia.'
            ], answer: 1,
            explain: 'A Daily é para os Developers, em até 15 minutos, inspecionando o progresso rumo à Meta da Sprint. O guia 2020 deixou de exigir as três perguntas; não é cobrança de status nem do PO.' },
          { q: 'Um time Kanban tem WIP médio de 12 itens e vazão de 4 itens por semana. Pela Lei de Little, o tempo médio de ciclo é:',
            options: ['48 semanas', '16 semanas', '8 semanas', '3 semanas', '0,33 semana'], answer: 3,
            explain: 'Tempo de ciclo = WIP ÷ vazão = 12 ÷ 4 = 3 semanas. Multiplicar (48) ou dividir ao contrário (0,33) são os erros clássicos.' }
        ] },
      { title: 'Engenharia de requisitos e histórias de usuário',
        pages: [
          'PROCESSO\n• Elicitação (descobrir): entrevistas, workshops, observação, prototipação, questionários, análise de documentos.\n• Análise: organizar, negociar conflitos, priorizar.\n• Especificação: escrever de forma clara e verificável.\n• Validação: conferir com o cliente (revisões, protótipos, casos de teste).\n• Gerenciamento: rastrear e controlar mudanças.',
          'TIPOS\n• Funcional: o que o sistema faz ("emitir certidão").\n• Não funcional: qualidade/restrição (desempenho, segurança, usabilidade, disponibilidade).\n• Regra de negócio: política do domínio ("prazo em dobro para a Fazenda Pública", conforme a lei).\n• Requisito bom é claro, completo, consistente, verificável e rastreável.',
          'HISTÓRIAS\n• Formato: Como <papel>, quero <objetivo>, para <benefício>.\n• 3 Cs: Cartão, Conversa, Confirmação.\n• INVEST: Independente, Negociável, Valiosa, Estimável, Pequena (Small), Testável.\n• Critérios de aceite: Dado / Quando / Então (Gherkin).\n• Critério de aceite vale para UMA história; Definição de Pronto vale para TODAS.\n• Épico = história grande demais, a ser quebrada.'
        ],
        tip: 'Validação: produto certo. Verificação: produto feito certo. Critério de aceite é por história; DoD é para todas.',
        quiz: [
          { q: '"O sistema deve estar disponível 99,5% do tempo em horário de expediente" é exemplo de requisito:',
            options: ['funcional', 'não funcional', 'de usuário funcional', 'regra de negócio', 'de domínio funcional'], answer: 1,
            explain: 'Disponibilidade é atributo de qualidade, logo não funcional. Funcional descreve um serviço; regra de negócio é política do domínio, não meta de disponibilidade.' },
          { q: 'Sobre critérios de aceitação e Definição de Pronto (DoD), é correto afirmar:',
            options: [
              'são sinônimos no Scrum.',
              'a DoD é específica de cada história; critérios de aceitação valem para todo o produto.',
              'critérios de aceitação são específicos de cada item; a DoD é o padrão de qualidade que vale para todo Incremento.',
              'a DoD é definida apenas pelo Product Owner a cada Sprint.',
              'critérios de aceitação substituem os testes automatizados.'
            ], answer: 2,
            explain: 'Critérios de aceite são do item; a DoD é a descrição formal do estado do Incremento quando atende às medidas de qualidade, comum a todos os itens. A B inverte; não são sinônimos.' }
        ] },
      { title: 'Análise de Pontos de Função e estimativas',
        pages: [
          'APF (IFPUG/CPM)\n• Mede o TAMANHO FUNCIONAL pela visão do usuário, independente de linguagem.\n• Dados: ALI (mantido dentro da fronteira) e AIE (só referenciado, mantido por outra aplicação).\n• Transações: EE (mantém ALI ou altera comportamento), SE (apresenta com cálculo, dado derivado, ou atualiza ALI), CE (só recupera e apresenta).',
          'PESOS (baixa/média/alta)\n• ALI 7/10/15 · AIE 5/7/10\n• EE 3/4/6 · SE 4/5/7 · CE 3/4/6\n• Complexidade dos dados: TD (tipos de dados) × TR (tipos de registro).\n• Transações: TD × ALR (arquivos referenciados).\n• Soma = PF não ajustados. O fator de ajuste (14 características gerais) é opcional nas versões recentes.',
          'ESTIMATIVAS\n• Esforço = tamanho × produtividade (ex.: 100 PF × 8 h/PF = 800 h).\n• NESMA indicativa: 35 PF por ALI, 15 por AIE.\n• Ágil: story points (tamanho relativo), Planning Poker com sequência tipo Fibonacci, velocidade = pontos entregues por Sprint.\n• Cone da incerteza: estimativas iniciais erram muito; melhoram com o tempo.'
        ],
        tip: 'Pesos "7-5-3-4-3" para baixa: ALI 7, AIE 5, EE 3, SE 4, CE 3. Cálculo ou dado derivado na saída? Então é SE.',
        quiz: [
          { q: 'Uma aplicação tem 1 ALI de complexidade baixa, 1 AIE baixa, 2 EE baixas e 1 SE média. O total de PF não ajustados é:',
            options: ['23', '18', '20', '25', '27'], answer: 0,
            explain: 'ALI baixa 7 + AIE baixa 5 + 2 × EE baixa 3 (=6) + SE média 5 = 23. Quem usa o peso do ALI no AIE chega a 25; quem usa SE baixa (4) chega a 22.' },
          { q: 'Sobre story points, é correto afirmar que:',
            options: [
              'equivalem sempre a 8 horas de trabalho.',
              'representam tamanho relativo e permitem calcular a velocidade do time ao longo das Sprints.',
              'são padronizados entre times diferentes, permitindo comparar produtividade.',
              'são definidos pelo Product Owner sem participação dos Developers.',
              'medem o tamanho funcional conforme o manual do IFPUG.'
            ], answer: 1,
            explain: 'Story points são relativos (comparação entre itens) e alimentam a velocidade. Não são horas, não se comparam entre times, quem estima são os Developers e não seguem o IFPUG.' }
        ] },
      { title: 'Qualidade, testes, SDD e engenharia assistida por IA',
        pages: [
          'QUALIDADE\n• Verificação: "estamos construindo o produto corretamente?" Validação: "estamos construindo o produto correto?"\n• ISO/IEC 25010 (2011): adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança, manutenibilidade, portabilidade. Revisão 2023 mudou nomes: confira.\n• Erro (humano) → defeito (no código) → falha (em execução).',
          'TESTES\n• Níveis: unidade → integração → sistema → aceitação.\n• Caixa-preta (pela especificação): partição de equivalência, valor-limite. Caixa-branca (pela estrutura): cobertura de comandos e de decisões.\n• Regressão: reexecuta testes após mudança.\n• Pirâmide: muitos testes de unidade, poucos de ponta a ponta.\n• TDD: vermelho → verde → refatorar.',
          'SDD E IA\n• SDD: especificação é a fonte da verdade. Fluxo: especificar → planejar → tarefas → implementar → verificar.\n• IA (assistentes e agentes) acelera, mas pode alucinar, gerar código inseguro e vazar dados.\n• Guardrails: testes automatizados, revisão humana, SAST, contexto mínimo, nada de segredos no prompt, responsabilidade do humano.'
        ],
        tip: 'Valor-limite: teste nas bordas (mín-1, mín, máx, máx+1). IA escreve, mas teste e revisão humana decidem.',
        quiz: [
          { q: 'Um campo aceita idades de 18 a 65 anos. Pela análise de valor-limite (dois valores por fronteira), o melhor conjunto de testes é:',
            options: ['18 e 65', '0, 40 e 100', '19, 40 e 64', '20, 30, 40, 50 e 60', '17, 18, 65 e 66'], answer: 4,
            explain: 'Valor-limite testa cada borda e seu vizinho de fora: 17/18 e 65/66. A A não testa os inválidos; B e D são partições ou valores soltos; C fica longe das bordas.' },
          { q: 'Sobre o uso de assistentes de IA generativa no desenvolvimento, assinale a correta.',
            options: [
              'O código gerado dispensa revisão, pois é sempre correto quando compila.',
              'Por serem determinísticos, os modelos produzem a mesma resposta para o mesmo prompt em qualquer configuração.',
              'A responsabilidade pelo código gerado passa a ser do fornecedor do modelo.',
              'O código sugerido pode conter vulnerabilidades e erros plausíveis, exigindo testes, análise estática e revisão humana.',
              'Testes automatizados tornam-se desnecessários em projetos com SDD.'
            ], answer: 3,
            explain: 'LLMs podem alucinar e sugerir código inseguro; por isso testes, SAST e revisão humana. Compilar não prova correção, saídas variam e a responsabilidade continua do time.' }
        ] }
    ]
  }
};

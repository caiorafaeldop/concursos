window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['linguagens'] = {
  id: 'linguagens',
  name: 'Linguagens e Frameworks',
  npcs: [
    {
      name: 'Mestre Java & Spring',
      lines: [
        'Java 16 trouxe records finais; Java 17, sealed classes; Java 21, virtual threads!',
        'Stream é preguiçoso: só executa quando encontra uma operação terminal como toList().',
        'No JPA, FetchType.LAZY pode gerar N+1 queries ou LazyInitializationException fora da sessão.',
        'Spring @Transactional só intercepta chamadas externas via proxy; chamada interna (this) ignora!'
      ]
    },
    {
      name: 'Dona TypeScript & Web',
      lines: [
        'No Event Loop do JS, microtasks (Promise.then) rodam antes da próxima macrotask (setTimeout).',
        'TypeScript faz checagem estática em compilação; em runtime os tipos somem no JS gerado.',
        'No Angular, @Input chega a partir de ngOnChanges/ngOnInit, nunca no construtor!',
        'No React, useState agenda atualização: para depender do valor anterior, use setN(c => c + 1).'
      ]
    },
    {
      name: 'Guia Python & Flutter',
      lines: [
        'No Django MTV, View é o controlador (lógica) e Template é a camada de apresentação (HTML).',
        'FastAPI usa type hints + Pydantic para validar dados e gerar OpenAPI automaticamente.',
        'Em Dart, final é definido em execução; const é constante em tempo de compilação.',
        'No Flutter, initState() inicializa uma vez, build() redesenha N vezes e dispose() limpa.'
      ]
    }
  ],
  boss: {
    name: 'Prof. Compilador',
    intro: 'Mostre que domina Java, Web, Python e Flutter sem cair nas pegadinhas da FGV!',
    questions: [
      {
        q: 'Em Java moderno, qual recurso tornou-se definitivo (não preview) apenas no Java 21 LTS, permitindo alta escalabilidade em tarefas bloqueantes de I/O com baixo custo de memória?',
        options: [
          'Records para classes de dados imutáveis',
          'Expressões lambda e API de Streams',
          'Virtual Threads (Project Loom)',
          'Classes seladas (sealed classes)',
          'Inferência de tipo local com var'
        ],
        answer: 2,
        explain: 'Virtual Threads foram preview no 19/20 e ficaram finais no Java 21 LTS. Records (16), sealed (17), var (10), lambdas/Streams (8).'
      },
      {
        q: 'No Spring Data JPA / Hibernate, uma entidade Pedido possui associação @ManyToOne com Cliente configurada como FetchType.LAZY. Ao listar 50 pedidos e acessar pedido.getCliente().getNome() dentro de um laço com sessão aberta, o que ocorre por padrão?',
        options: [
          'O Hibernate executa 1 consulta com INNER JOIN automaticamente na listagem inicial',
          'Ocorre o problema N+1: 1 SELECT para os pedidos e até 50 SELECTs extras para os clientes',
          'É lançada LazyInitializationException imediatamente no primeiro acesso ao cliente',
          'O campo cliente retorna null porque LAZY impede qualquer carregamento posterior',
          'O Spring Boot converte @ManyToOne para EAGER apenas em métodos @Transactional'
        ],
        answer: 1,
        explain: 'Com sessão aberta e LAZY, cada acesso ao proxy dispara um SELECT individual (1 + N). Solução: JOIN FETCH ou @EntityGraph.'
      },
      {
        q: 'No JavaScript (Node.js ou navegador), um trecho executa em sequência: console.log("A"); setTimeout(() => console.log("B"), 0); Promise.resolve().then(() => console.log("C")); console.log("D");. Qual é a ordem exata da saída?',
        options: [
          'A, B, C, D',
          'A, D, B, C',
          'A, D, C, B',
          'A, C, D, B',
          'C, A, D, B'
        ],
        answer: 2,
        explain: 'Código síncrono roda primeiro (A, D). Ao esvaziar a Call Stack, o Event Loop drena toda a fila de microtasks (Promise -> C) antes da macrotask (setTimeout -> B).'
      },
      {
        q: 'Em uma aplicação Angular, um desenvolvedor precisa executar uma chamada HTTP inicial assim que os valores recebidos via @Input() do componente pai estiverem disponíveis. Qual gancho de ciclo de vida é o mais adequado?',
        options: [
          'constructor(), pois executa antes de qualquer renderização e já possui os @Input()',
          'ngOnInit(), pois executa uma vez após a primeira definição dos @Input()',
          'ngOnDestroy(), pois garante que todas as dependências já foram resolvidas',
          'ngDoCheck(), pois só executa uma única vez durante toda a vida do componente',
          'AfterViewInit(), pois é o único método onde serviços injetados ficam acessíveis'
        ],
        answer: 1,
        explain: 'No Angular, @Input() ainda é undefined no constructor(). ngOnInit() roda uma vez logo após o primeiro ngOnChanges(), com os inputs já preenchidos.'
      },
      {
        q: 'Em React, um componente renderiza uma lista de processos que permite inserção no topo e reordenação, usando o índice do array como prop key (<Item key={index} />). Qual é a consequência técnica dessa prática?',
        options: [
          'Erro de compilação no JSX, pois key exige obrigatoriamente um UUID',
          'A lista não renderiza novos elementos adicionados após a montagem inicial',
          'O React pode associar o estado interno de um item ao item errado na reconciliação',
          'O Virtual DOM é desativado e cada alteração recarrega a página inteira',
          'Todos os hooks useEffect dos filhos passam a rodar em loop infinito'
        ],
        answer: 2,
        explain: 'A key identifica o item entre renderizações. Se o índice muda de posição (inserção no topo/reordenação), o React reaproveita estado e DOM do índice no item errado.'
      },
      {
        q: 'No framework Django (arquitetura MTV), qual componente assume o papel equivalente ao Controller do padrão MVC clássico, recebendo a requisição roteada e coordenando dados e resposta?',
        options: [
          'Template',
          'Model',
          'View',
          'Migration',
          'Serializer'
        ],
        answer: 2,
        explain: 'No MTV do Django: Model = dados/ORM; Template = apresentação (equivale à View do MVC); View = lógica de controle da requisição (equivale ao Controller).'
      },
      {
        q: 'Em uma API escrita com FastAPI, um endpoint declarado com "async def" realiza uma consulta usando um driver de banco de dados estritamente síncrono e bloqueante. Qual é o impacto desse desenho?',
        options: [
          'O FastAPI converte automaticamente drivers síncronos em corrotinas não bloqueantes',
          'A execução bloqueia o event loop principal, degradando a concorrência de outras requisições',
          'O Pydantic rejeita a resposta em runtime lançando ValidationError',
          'A rota passa a rodar em um processo separado por requisição (fork)',
          'O servidor Uvicorn ignora o async e executa a função em threadpool automaticamente'
        ],
        answer: 1,
        explain: 'Rotas async def rodam direto no event loop. I/O bloqueante lá dentro trava o loop inteiro; para libs síncronas, declare "def" normal (threadpool).'
      },
      {
        q: 'No ecossistema Flutter/Dart, comparando as abordagens de gerenciamento de estado BLoC e Cubit, assinale a afirmação correta.',
        options: [
          'O BLoC dispensa a criação de classes de estado, emitindo apenas valores primitivos',
          'O Cubit exige que toda mudança de estado seja disparada por um objeto Event via add()',
          'O Cubit simplifica o BLoC expondo métodos que chamam emit() diretamente, sem camada de Eventos',
          'Ambos exigem obrigatoriamente o uso de context.watch() dentro de callbacks onPressed',
          'O Riverpod é o único gerenciador que funciona sobre StatefulWidget sem RenderObject'
        ],
        answer: 2,
        explain: 'BLoC recebe Eventos e emite Estados via streams; Cubit elimina os Eventos e expõe métodos diretos que emitem novos Estados com emit().'
      }
    ]
  },
  match: {
    title: 'Ligue o conceito à tecnologia',
    pairs: [
      ['Virtual Threads', 'Concorrência leve final no Java 21'],
      ['@Transactional', 'Proxy Spring que abre/commita transação'],
      ['Microtask Queue', 'Fila de Promises com prioridade no Event Loop'],
      ['Pydantic + type hints', 'Validação automática de dados no FastAPI'],
      ['select_related()', 'JOIN SQL em relações 1:1/FK no Django ORM'],
      ['Cubit', 'Emite estados via métodos sem classe de Eventos']
    ]
  },
  quick: [
    {
      q: 'Qual coleção Java garante ordem de inserção e aceita elementos duplicados?',
      options: ['ArrayList', 'HashSet', 'TreeSet', 'HashMap'],
      answer: 0,
      explain: 'List (ArrayList) mantém ordem de inserção e permite duplicatas; Set não permite duplicatas.'
    },
    {
      q: 'No Spring Boot, qual escopo padrão de um @Bean / @Service?',
      options: ['Prototype', 'Singleton', 'Request', 'Session'],
      answer: 1,
      explain: 'Por padrão, todo bean gerenciado pelo container IoC do Spring tem escopo Singleton.'
    },
    {
      q: 'Em TypeScript, qual tipo exige checagem antes de usar métodos?',
      options: ['any', 'unknown', 'var', 'dynamic'],
      answer: 1,
      explain: 'unknown é a alternativa segura ao any: obriga narrowing/validação antes de operar.'
    },
    {
      q: 'Em Angular, qual sintaxe faz event binding (template para classe)?',
      options: ['{{valor}}', '[disabled]', '(click)', '[(ngModel)]'],
      answer: 2,
      explain: 'Parênteses (evento) enviam eventos do template para a classe; colchetes [prop] descem dados.'
    },
    {
      q: 'Em Dart, qual palavra define constante em tempo de compilação?',
      options: ['final', 'const', 'var', 'late'],
      answer: 1,
      explain: 'const é avaliado em tempo de compilação e é profundamente imutável; final é em runtime.'
    },
    {
      q: 'No Flutter, onde devemos liberar TextEditingController e Streams?',
      options: ['build()', 'initState()', 'createState()', 'dispose()'],
      answer: 3,
      explain: 'dispose() é chamado quando o State é removido definitivamente da árvore.'
    }
  ],
  study: {
    title: 'Biblioteca de Linguagens e Frameworks',
    chapters: [
      {
        title: 'Java moderno: Collections, Streams, lambdas, records, sealed e virtual threads',
        pages: [
          'Collections no Java:\n• List (ArrayList, LinkedList): ordenada e aceita duplicados.\n• Set (HashSet, LinkedHashSet, TreeSet): sem duplicados; HashSet é O(1) médio sem ordem; TreeSet ordena O(log n).\n• Map (HashMap, TreeMap): chave → valor; chave única.\n• Queue/Deque (ArrayDeque): fila FIFO / pilha.',
          'Lambdas, Streams e Optional:\n• Streams são preguiçosos (lazy): filter/map são intermediárias; collect/toList/count são terminais.\n• Stream não altera a coleção original.\n• Optional evita NullPointerException explícito; prefira orElseGet() a orElse() se o fallback for custoso (orElse sempre avalia o argumento).',
          'Recursos modernos (versão final):\n• Java 10: var (variável local).\n• Java 16: records (imutáveis, gera equals/hashCode/toString/acessores) e instanceof com pattern.\n• Java 17 LTS: sealed classes (permits restringe quem herda).\n• Java 21 LTS: virtual threads (milhares de tarefas de I/O sem travar threads do SO).'
        ],
        tip: 'Memorize as versões finais: Records = 16, Sealed = 17 LTS, Virtual Threads = 21 LTS!',
        quiz: [
          {
            q: 'Sobre a API de Streams do Java, assinale a alternativa correta.',
            options: [
              'Operações intermediárias como filter() executam imediatamente sobre a lista original',
              'Um mesmo Stream pode ser reutilizado para múltiplas operações terminais',
              'Streams são lazy e só processam elementos quando uma operação terminal é invocada',
              'O método map() altera os objetos diretamente na coleção de origem sem criar fluxo',
              'orElse() só avalia a expressão padrão quando o Optional está vazio'
            ],
            answer: 2,
            explain: 'Streams são preguiçosos (só rodam na operação terminal), não podem ser reutilizados após o consumo e não mutam a coleção fonte.'
          },
          {
            q: 'Qual recurso permite restringir explicitamente quais subclasses podem estender uma classe ou implementar uma interface em Java 17?',
            options: [
              'record',
              'sealed com cláusula permits',
              'virtual thread',
              'var',
              'transient'
            ],
            answer: 1,
            explain: 'Classes/interfaces sealed (final no Java 17) usam permits para fechar a hierarquia de herança.'
          }
        ]
      },
      {
        title: 'Jakarta EE, Spring Boot e JPA/Hibernate',
        pages: [
          'Inversão de Controle (IoC) e Spring Boot:\n• Container IoC cria e injeta beans (@Component, @Service, @Repository, @RestController).\n• Escopo padrão: Singleton (1 instância por container).\n• Prefira injeção por construtor (facilita testes e imutabilidade).\n• Starters + AutoConfiguration reduzem boilerplate; Actuator expõe saúde/métricas.',
          'Transações (@Transactional):\n• Spring usa Proxy AOP ao redor do bean.\n• Chamada interna na mesma classe (this.metodo()) NÃO passa pelo proxy e ignora @Transactional!\n• Por padrão, faz rollback apenas em RuntimeException e Error (unchecked); para checked exceptions exige rollbackFor.',
          'JPA / Hibernate e armadilhas:\n• Estados da entidade: Transient → Managed (persist) → Detached → Removed.\n• @ManyToOne/@OneToOne são EAGER por padrão; @OneToMany/@ManyToMany são LAZY.\n• N+1 queries: LAZY em laço dispara 1+N SELECTs. Resolva com JOIN FETCH ou @EntityGraph.'
        ],
        tip: 'Chamada this.metodo() pula o proxy do Spring e anula @Transactional e @Async!',
        quiz: [
          {
            q: 'No Spring Framework, por padrão, uma exceção verificada (checked exception) lançada dentro de um método @Transactional:',
            options: [
              'Sempre provoca rollback imediato da transação',
              'Não provoca rollback automático, a menos que configurado com rollbackFor',
              'Encerra o container IoC e reinicia o pool de conexões',
              'Converte a transação automaticamente para READ_UNCOMMITTED',
              'É ignorada pelo compilador Java quando há proxy AOP'
            ],
            answer: 1,
            explain: 'Por padrão no Spring, @Transactional só faz rollback em unchecked exceptions (RuntimeException e Error). Checked exige rollbackFor.'
          },
          {
            q: 'No JPA, qual é o fetch padrão da anotação @OneToMany e qual problema comum ocorre ao acessá-la fora da sessão/transação?',
            options: [
              'EAGER; StackOverflowError',
              'LAZY; LazyInitializationException',
              'EAGER; OptimisticLockException',
              'LAZY; EntityNotFoundException',
              'NONE; TransactionRequiredException'
            ],
            answer: 1,
            explain: '@OneToMany é LAZY por padrão; acessar a coleção após fechar o EntityManager/sessão lança LazyInitializationException.'
          }
        ]
      },
      {
        title: 'JavaScript, TypeScript e Node.js',
        pages: [
          'JavaScript e Event Loop:\n• JS é single-threaded na Call Stack, com I/O assíncrono não bloqueante.\n• Ordem de prioridade: 1) Código síncrono na Call Stack; 2) Toda a fila de Microtasks (Promise.then, queueMicrotask); 3) Uma Macrotask (setTimeout, setInterval, I/O).\n• const impede reatribuição da variável, mas NÃO torna objetos/arrays imutáveis.',
          'Escopo, Closures e Igualdade:\n• var tem escopo de função e sofre hoisting inicializado como undefined.\n• let e const têm escopo de bloco e ficam na Temporal Dead Zone (TDZ) antes da declaração.\n• Sempre prefira === (compara valor e tipo) a == (faz coerção de tipos).',
          'TypeScript e Node.js:\n• TS adiciona tipagem estática em compilação (apagada no JS final).\n• any desliga a checagem de tipos; unknown obriga validar/estreitar o tipo antes de usar.\n• Node.js: CommonJS (require/module.exports) vs ES Modules (import/export).'
        ],
        tip: 'Event Loop: Síncrono → TODAS as Microtasks (Promises) → 1 Macrotask (setTimeout).',
        quiz: [
          {
            q: 'Em JavaScript, qual é a diferença prática entre declarar uma variável com "let" e com "var" dentro de um bloco if?',
            options: [
              'var tem escopo de bloco; let tem escopo global',
              'let tem escopo de bloco e gera ReferenceError na TDZ antes da linha de declaração; var vaza para o escopo da função',
              'let impede que o valor seja alterado posteriormente; var permite reatribuição',
              'Não há diferença em runtime, apenas em compilação TypeScript',
              'var só aceita tipos primitivos e let aceita apenas objetos'
            ],
            answer: 1,
            explain: 'var ignora blocos if/for (escopo de função/global) e é içado como undefined. let respeita bloco e lança ReferenceError na Temporal Dead Zone.'
          },
          {
            q: 'Em TypeScript, qual tipo representa um valor de tipo desconhecido de forma segura, exigindo type narrowing antes de acessar propriedades?',
            options: [
              'any',
              'never',
              'unknown',
              'void',
              'object'
            ],
            answer: 2,
            explain: 'unknown aceita qualquer valor na entrada, mas proíbe operações sobre ele até que seja validado (typeof, instanceof etc.).'
          }
        ]
      },
      {
        title: 'Angular e React',
        pages: [
          'Angular (framework completo em TS):\n• Possui DI nativo (providedIn: "root" = singleton), Router, Forms e HttpClient (retorna Observable frio — só dispara no subscribe/async pipe).\n• Data binding: {{ }} interpolação, [prop] desce, (evento) sobe, [(ngModel)] two-way.\n• Ciclo: ngOnChanges → ngOnInit (1x, @Input já existe) → … → ngOnDestroy.',
          'React (biblioteca de UI):\n• JSX + componentes funcionais; props são somente leitura (descem); callbacks sobem.\n• Estado com useState: setState agenda atualização; use forma funcional setN(c => c + 1) quando depender do valor anterior. Nunca mute estado diretamente.',
          'Hooks e Reconciliação no React:\n• useEffect: sem array (toda render), [] (montagem + retorno na desmontagem), [a, b] (quando a ou b mudam).\n• Regras dos Hooks: só no nível superior (nunca em if/loop) e só em componentes/hooks customizados.\n• Keys em listas: devem ser únicas entre irmãos e estáveis (evite índice em listas que reordenam).'
        ],
        tip: 'Angular HttpClient = Observable frio (só chama no subscribe). React = nunca mute estado e evite índice como key!',
        quiz: [
          {
            q: 'Em Angular, um serviço decorado com @Injectable({ providedIn: "root" }) que utiliza HttpClient retorna um Observable. Quando a requisição HTTP é efetivamente disparada?',
            options: [
              'No momento em que o serviço é injetado no construtor',
              'Assim que o método this.http.get() é chamado, mesmo sem retorno',
              'Somente quando há uma inscrição via .subscribe() ou pipe async',
              'Apenas durante o ngOnDestroy() do componente',
              'Automaticamente na inicialização do AppModule'
            ],
            answer: 2,
            explain: 'HttpClient retorna Observables frios (cold): a requisição HTTP só é executada quando alguém se inscreve (.subscribe ou async pipe).'
          },
          {
            q: 'Sobre o hook useEffect no React, passar um array de dependências vazio [] faz com que o efeito execute:',
            options: [
              'A cada nova renderização do componente',
              'Apenas uma vez após a montagem inicial (em produção), e sua função de limpeza na desmontagem',
              'Somente quando todas as props forem null',
              'Antes da primeira pintura do DOM de forma síncrona',
              'Apenas quando o componente pai sofre erro'
            ],
            answer: 1,
            explain: 'useEffect(fn, []) roda após a montagem inicial; a função retornada por fn roda na desmontagem (cleanup).'
          }
        ]
      },
      {
        title: 'Python Moderno, FastAPI e Django (MTV e ORM)',
        pages: [
          'Python no Edital:\n• Nunca use lista/dict mutável como argumento default (def f(x, l=[])) — ele é criado uma única vez e vaza entre chamadas! Use l=None.\n• Decoradores (@login_required, @lru_cache) envolvem funções; list comprehensions simplificam transformações.\n• Concorrência: asyncio/event loop para I/O; multiprocessing para CPU (contorna o GIL).',
          'Django (MTV):\n• Model = dados/ORM/migrations (makemigrations + migrate); Template = HTML (equivale à View do MVC); View = lógica da requisição (equivale ao Controller!).\n• QuerySet é LAZY: filter() monta a consulta sem ir ao banco; select_related() faz SQL JOIN (FK/1:1); prefetch_related() faz 2 queries (M2M/reverso) e evita N+1.',
          'FastAPI (ASGI):\n• Roda sobre Starlette + Uvicorn, valida schemas com Pydantic + type hints, gera OpenAPI/Swagger automático e injeta dependências com Depends().\n• ARMADILHA: I/O bloqueante (driver síncrono, requests) dentro de "async def" trava o event loop inteiro! Use "def" normal para libs síncronas (threadpool).'
        ],
        tip: 'Django View = Controller! select_related = JOIN (1:1/FK); prefetch_related = M2M. FastAPI I/O bloqueante vai em def!',
        quiz: [
          {
            q: 'No Django ORM, qual método deve ser utilizado para otimizar consultas em relacionamentos Many-to-Many ou reversos evitando o problema N+1?',
            options: [
              'select_related(), pois realiza sempre múltiplas consultas separadas',
              'prefetch_related(), pois executa consulta separada para a coleção e faz o join em Python',
              'atomic(), pois desativa o lazy loading global do banco',
              'defer(), pois carrega antecipadamente todas as tabelas relacionadas',
              'values_list(), pois cria índices automáticos no PostgreSQL'
            ],
            answer: 1,
            explain: 'select_related() faz SQL JOIN (ideal para ForeignKey/OneToOne). prefetch_related() faz consultas separadas e associa em memória (ideal para ManyToMany e reversos).'
          },
          {
            q: 'Em uma função Python "def anexar(item, caixa=[]):", chamadas sucessivas sem passar o segundo argumento causam:',
            options: [
              'Erro de sintaxe na compilação do módulo.',
              'Compartilhamento da mesma lista mutável entre todas as chamadas subsequentes.',
              'Criação automática de cópia profunda a cada execução.',
              'Conversão automática da lista em tupla imutável.',
              'Execução paralela em processo separado para escapar do GIL.'
            ],
            answer: 1,
            explain: 'Valores padrão em Python são avaliados uma única vez na definição da função. Usar None e inicializar dentro da função evita esse bug clássico.'
          }
        ]
      },
      {
        title: 'Dart Moderno e Arquitetura Flutter (Widgets, Ciclo e Navegação)',
        pages: [
          'Dart Essencial:\n• Null safety: String não aceita null; String? aceita. Operadores ?. (acesso seguro), ?? (fallback) e ! (assert não nulo).\n• final = atribuído 1x em runtime; const = constante em tempo de compilação e profundamente imutável.\n• Future<T> (async/await) entrega 1 valor futuro; Stream<T> (async*/yield) entrega múltiplos valores ao longo do tempo.',
          'As 3 Árvores e Ciclo de Vida:\n• Widgets (configuração imutável leve) → Elements (ciclo de vida/State + Keys) → RenderObjects (layout/pintura).\n• Ciclo do State: createState → initState (1x) → didChangeDependencies → build (Nx) → didUpdateWidget → dispose (limpa controllers/streams).\n• NUNCA coloque chamadas de API dentro de build()!',
          'Layout e Navegação:\n• Regra de ouro: "Constraints go down, sizes go up, parent sets position". ListView/TextField dentro de Column/Row pede Expanded/SizedBox.\n• ListView.builder constrói itens sob demanda.\n• Navigator 1.0 (pilha push/pop) vs Router/go_router (declarativo por URL e deep linking); Material vs Cupertino.'
        ],
        tip: 'Dart: final é runtime, const é compile-time. Flutter: initState inicia 1x, dispose limpa, build só desenha!',
        quiz: [
          {
            q: 'Em Dart, ao tentar inicializar uma variável "const hora = DateTime.now();", o compilador rejeita a linha porque:',
            options: [
              'const só pode ser usado para números inteiros.',
              'const exige valor conhecido em tempo de compilação; para valor calculado 1 vez em execução deve-se usar final.',
              'DateTime.now() retorna sempre um Stream assíncrono.',
              'Variáveis imutáveis exigem a palavra-chave dynamic em Dart.',
              'O operador null safety exige ? em todo const.'
            ],
            answer: 1,
            explain: 'const é avaliado em tempo de compilação. Valores obtidos em execução (como DateTime.now()) que não devem ser reatribuídos usam final.'
          },
          {
            q: 'No ciclo de vida de um StatefulWidget em Flutter, o método adequado para inicializar um TextEditingController uma única vez e o método para liberá-lo ao destruir a tela são:',
            options: [
              'build() e setState()',
              'initState() e dispose()',
              'didUpdateWidget() e createState()',
              'main() e runApp()',
              'onPressed() e build()'
            ],
            answer: 1,
            explain: 'initState() executa uma única vez na inserção do State na árvore e dispose() executa na remoção permanente, evitando memory leaks.'
          }
        ]
      },
      {
        title: 'Gerência de Estado no Flutter (Provider, Riverpod, Cubit e BLoC)',
        pages: [
          'Provider vs Riverpod:\n• setState() resolve estado local simples.\n• Provider encapsula InheritedWidget + ChangeNotifier: use context.watch<T>() no build (reconstrói ao mudar), context.select() para campo específico e context.read<T>() dentro de callbacks (onPressed).\n• Riverpod elimina dependência de BuildContext e erros de runtime usando ProviderScope + WidgetRef (ref.watch / ref.read).',
          'Cubit e BLoC:\n• Cubit é a versão simplificada: expõe métodos diretos (ex.: carregar()) que emitem estados com emit(novoEstado).\n• BLoC recebe objetos de Evento via add(Evento) e transforma em fluxo de Estados imutáveis.\n• BlocBuilder reconstrói widgets; BlocListener executa efeitos colaterais únicos (SnackBar, navegação); BlocConsumer une ambos.',
          'Qualidade e Testes no Flutter:\n• Unit Tests (test / blocTest): testam regras, Cubit e BLoC em Dart puro sem interface gráfica.\n• Widget Tests (testWidgets + WidgetTester + pumpWidget): verificam árvore de widgets sem dispositivo real.\n• Integration Tests: fluxo completo ponta a ponta.'
        ],
        tip: 'No Provider: watch() no build, read() no onPressed! BlocBuilder desenha tela; BlocListener navega/mostra SnackBar.',
        quiz: [
          {
            q: 'No Flutter utilizando o pacote Provider, qual é a forma correta de disparar uma ação de um controller dentro do callback onPressed de um botão sem escutar reconstruções?',
            options: [
              'context.watch<MeuController>().salvar()',
              'context.read<MeuController>().salvar()',
              'initState<MeuController>().salvar()',
              'setState(() => MeuController)',
              'Navigator.of(context).watch()'
            ],
            answer: 1,
            explain: 'Dentro de callbacks (onPressed), usa-se context.read<T>() para apenas ler/chamar o método sem inscrever o widget para rebuild. context.watch<T>() é usado dentro do build().'
          },
          {
            q: 'Ao exibir uma notificação temporária (SnackBar) ou navegar para outra tela apenas quando um Cubit/BLoC emite o estado "SalvoComSucesso", qual widget do pacote flutter_bloc é o indicado para essa reação lateral?',
            options: [
              'MaterialApp',
              'BlocListener (ou listener dentro de BlocConsumer)',
              'StatelessWidget puro sem Provider',
              'const SizedBox',
              'InheritedModel estático'
            ],
            answer: 1,
            explain: 'BlocListener dispara ações únicas por transição de estado (navegação, SnackBar, diálogo) sem reconstruir os filhos visuais.'
          }
        ]
      }
    ]
  }
};

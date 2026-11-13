window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['arqsoft'] = {
  id: 'arqsoft',
  name: 'Arquitetura de Software e Padrões',
  npcs: [
    { name: 'Gangue dos Quatro (GoF)', lines: [
      'O livro GoF (1994) traz 23 padrões: 5 criacionais, 7 estruturais e 11 comportamentais.',
      'Criacional decide COMO o objeto nasce; estrutural, COMO as peças se encaixam; comportamental, QUEM faz o quê e como conversam.',
      'Adapter muda a interface; Decorator mantém a interface e acrescenta comportamento; Proxy mantém e controla o acesso.',
      'Strategy troca o algoritmo por composição; Template Method fixa o esqueleto na superclasse e deixa passos para as subclasses.'
    ] },
    { name: 'Dona Injeção', lines: [
      'IoC é o princípio de Hollywood: não nos chame, nós chamamos você. Quem monta os objetos é o contêiner, não a classe.',
      'Injeção de dependência é uma forma de IoC: a classe recebe o que precisa (construtor, setter ou interface) em vez de dar new.',
      'Injeção por construtor é a preferida: dependências obrigatórias, campos final e testes fáceis com mocks.',
      'Microsserviço tem banco próprio, deploy independente e é recortado por capacidade de negócio, não por camada técnica.'
    ] },
    { name: 'Capitão Evento', lines: [
      'No Kafka o consumidor lê do log pelo offset e a mensagem continua lá; no RabbitMQ a fila entrega e apaga após o ack.',
      'Regra da Dependência da Clean Architecture: o código-fonte só aponta para dentro, rumo às entidades e casos de uso.',
      'No DDD, o agregado tem uma raiz: de fora, só se referencia a raiz, e cada transação altera um agregado.',
      'DORA mede entrega com 4 chaves: frequência de deploy, lead time de mudanças, taxa de falha de mudança e tempo de restauração.'
    ] }
  ],
  boss: {
    name: 'Prof. Arquimedes Padrão',
    intro: 'Padrões decorados não bastam: quero ver você reconhecer cada um no código. Valendo!',
    questions: [
      { q: 'Um sistema precisa criar famílias de objetos relacionados (botão, janela e menu de um mesmo tema visual) sem acoplar o cliente às classes concretas. O padrão GoF mais adequado é:',
        options: ['Factory Method', 'Builder', 'Abstract Factory', 'Prototype', 'Singleton'], answer: 2,
        explain: 'Abstract Factory cria FAMÍLIAS de produtos relacionados. Factory Method cria um produto, delegando à subclasse; Builder monta um objeto complexo em etapas; Prototype clona; Singleton garante instância única.' },
      { q: 'A classe RelatorioService recebe um IRepositorio pelo construtor, e o contêiner Spring decide a implementação. Isso exemplifica:',
        options: ['Service Locator', 'injeção de dependência', 'padrão Singleton', 'acoplamento por herança', 'padrão Memento'], answer: 1,
        explain: 'A dependência é entregue de fora (pelo construtor): é DI, uma forma de IoC. No Service Locator a própria classe pede o objeto a um registro. Singleton, herança e Memento não descrevem a situação.' },
      { q: 'Precisa-se acrescentar compressão e criptografia a um fluxo de dados, combinando-as em tempo de execução e mantendo a mesma interface. O padrão é:',
        options: ['Adapter', 'Facade', 'Composite', 'Bridge', 'Decorator'], answer: 4,
        explain: 'Decorator envolve o objeto com a MESMA interface e soma responsabilidades empilháveis (como InputStream do Java). Adapter converte interface; Facade simplifica um subsistema; Composite monta árvores; Bridge separa abstração de implementação.' },
      { q: 'Sobre microsserviços, assinale a afirmativa correta.',
        options: ['Todos devem compartilhar o mesmo banco para garantir ACID', 'O API Gateway é o ponto de entrada único que roteia e agrega chamadas dos clientes', 'Service mesh substitui a necessidade de deploy independente', 'Devem ser decompostos por camada técnica (UI, regra, dados)', 'Serverless exige servidor dedicado gerenciado pelo time'], answer: 1,
        explain: 'API Gateway centraliza entrada, roteamento, autenticação e agregação. Banco compartilhado é antipadrão (database per service); mesh cuida da comunicação via sidecars; decompõe-se por negócio; serverless abstrai o servidor.' },
      { q: 'Na Clean Architecture, a Regra da Dependência estabelece que:',
        options: ['entidades podem importar classes do framework web', 'casos de uso dependem diretamente do banco de dados', 'dependências de código-fonte apontam apenas para as camadas internas', 'controllers ficam na camada mais interna', 'a camada de frameworks define as regras de negócio'], answer: 2,
        explain: 'O núcleo (entidades, casos de uso) não conhece nada de fora. Banco, web e frameworks ficam na camada externa e dependem do núcleo, com inversão via interfaces (portas).' },
      { q: 'Em DDD, um objeto definido apenas por seus atributos, sem identidade própria e preferencialmente imutável (ex.: Dinheiro, CPF), é um(a):',
        options: ['Entidade', 'Agregado', 'Repositório', 'Objeto de Valor', 'Serviço de Domínio'], answer: 3,
        explain: 'Objeto de Valor (Value Object) é comparado pelos valores e é imutável. Entidade tem identidade que persiste no tempo; agregado é um cluster com raiz; repositório persiste agregados; serviço de domínio guarda operações sem dono natural.' },
      { q: 'Em um trimestre, um sistema teve 4 incidentes, que somaram 6 horas de indisponibilidade. O MTTR foi de:',
        options: ['24 horas', '6 horas', '4 horas', '1 hora e 30 minutos', '40 minutos'], answer: 3,
        explain: 'MTTR = tempo total de reparo ÷ número de incidentes = 6 h ÷ 4 = 1,5 h (1 h 30 min). As demais confundem total com média ou invertem a divisão.' },
      { q: 'Sobre mensageria em arquitetura orientada a eventos, é correto afirmar:',
        options: ['No Kafka, a ordem das mensagens é garantida dentro de cada partição', 'O RabbitMQ não suporta roteamento por tópico', 'No Kafka, a mensagem é apagada logo após o primeiro consumo', 'Entrega at-least-once nunca gera duplicatas', 'Exchange fanout entrega só à fila cuja chave bate exatamente'], answer: 0,
        explain: 'Kafka garante ordem por partição e retém mensagens por política de retenção. RabbitMQ tem exchange topic; at-least-once pode duplicar (use idempotência); fanout entrega a TODAS as filas ligadas, ignorando a chave.' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [
    ['Singleton', 'uma única instância com acesso global'],
    ['Observer', 'notifica dependentes quando o estado muda'],
    ['Facade', 'interface simples para um subsistema'],
    ['API Gateway', 'porta de entrada única dos microsserviços'],
    ['Bounded Context', 'fronteira onde um modelo de domínio vale'],
    ['MTTR', 'tempo médio para restaurar o serviço']
  ] },
  quick: [
    { q: 'Padrão que clona um objeto existente?', options: ['Prototype', 'Builder', 'Proxy', 'Memento'], answer: 0, explain: 'Prototype cria novos objetos copiando um protótipo.' },
    { q: 'Padrão que converte uma interface em outra esperada?', options: ['Bridge', 'Adapter', 'Decorator', 'Facade'], answer: 1, explain: 'Adapter é o “adaptador de tomada” entre interfaces.' },
    { q: 'Padrão em que o objeto muda de comportamento conforme seu estado?', options: ['Strategy', 'Command', 'State', 'Visitor'], answer: 2, explain: 'State troca o objeto-estado interno; parece trocar de classe.' },
    { q: 'Protocolo de serviços web baseado em envelope XML?', options: ['REST', 'gRPC', 'GraphQL', 'SOAP'], answer: 3, explain: 'SOAP usa envelope XML e contrato WSDL.' },
    { q: 'No DDD, quem é o único ponto de acesso a um agregado?', options: ['Raiz', 'Repositório', 'Fábrica', 'Serviço'], answer: 0, explain: 'A raiz do agregado (aggregate root).' },
    { q: 'Métrica DORA de % de deploys que causam falha?', options: ['Lead time', 'Cobertura', 'Taxa de falha', 'MTBF'], answer: 2, explain: 'Change failure rate: taxa de falha de mudança.' }
  ],
  study: {
    title: 'Biblioteca de Arquitetura de Software',
    chapters: [
      { title: 'Padrões GoF criacionais',
        pages: [
          'GoF = livro de Gamma, Helm, Johnson e Vlissides (1994): 23 padrões.\n• 5 criacionais • 7 estruturais • 11 comportamentais.\nCriacionais escondem COMO e QUAL objeto é criado: o cliente pede, não dá new na classe concreta.\nOs 5: Abstract Factory, Builder, Factory Method, Prototype, Singleton (macete “ABFPS”).',
          '• Factory Method: método de criação que a SUBCLASSE sobrescreve (escopo de classe, usa herança).\n• Abstract Factory: interface para criar FAMÍLIAS de produtos relacionados (escopo de objeto).\n• Builder: monta objeto complexo passo a passo; o mesmo processo pode gerar representações diferentes.',
          '• Prototype: cria clonando um protótipo (clone()).\n• Singleton: uma só instância + ponto de acesso global (construtor privado + getInstance()).\nCríticas ao Singleton: estado global, dificulta testes, cuidado com threads (use enum ou holder em Java).\nNo Spring, “singleton” é escopo do bean no contêiner, não o padrão GoF clássico.'
        ],
        tip: 'Família de produtos = Abstract Factory. Um produto via subclasse = Factory Method. Passo a passo = Builder. Cópia = Prototype.',
        quiz: [
          { q: 'Uma classe de criação define um método abstrato criarDocumento(), e cada subclasse decide qual documento concreto instanciar. Trata-se de:',
            options: ['Abstract Factory', 'Prototype', 'Builder', 'Factory Method', 'Singleton'], answer: 3,
            explain: 'Factory Method delega à subclasse a decisão da classe concreta, via herança. Abstract Factory cria famílias; Builder monta em etapas; Prototype clona; Singleton limita a uma instância.' },
          { q: 'Sobre o padrão Singleton, é correto afirmar:',
            options: ['é classificado como estrutural', 'exige construtor público', 'garante uma única instância e oferece acesso global a ela', 'é imune a problemas de concorrência', 'facilita testes por eliminar estado global'], answer: 2,
            explain: 'Singleton é criacional, usa construtor privado e garante instância única com acesso global. Em multithread exige cuidado, e o estado global dificulta testes.' }
        ] },
      { title: 'Padrões GoF estruturais e comportamentais',
        pages: [
          'Estruturais (7) compõem classes/objetos: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.\n• Adapter: converte interface.\n• Decorator: mesma interface + responsabilidade extra, empilhável.\n• Proxy: mesma interface, controla acesso (lazy, remoto, proteção).\n• Facade: interface simples para subsistema.\n• Composite: árvore parte-todo tratada de modo uniforme.',
          '• Bridge: separa abstração da implementação, que variam independentes.\n• Flyweight: compartilha estado intrínseco de muitos objetos pequenos.\nComportamentais (11): Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.',
          '• Strategy: família de algoritmos intercambiáveis (composição).\n• Template Method: esqueleto fixo na superclasse, passos nas subclasses (herança).\n• Observer: 1 sujeito notifica N observadores.\n• Command: pedido vira objeto (fila, desfazer).\n• State: comportamento muda com o estado.\n• Chain: pedido passa por uma corrente de handlers.'
        ],
        tip: 'Adapter muda a interface; Decorator e Proxy mantêm. Decorator acrescenta, Proxy controla. Strategy = composição; Template = herança.',
        quiz: [
          { q: 'Um objeto representante carrega uma imagem pesada apenas quando ela é exibida pela primeira vez, expondo a mesma interface da imagem real. O padrão é:',
            options: ['Proxy', 'Adapter', 'Flyweight', 'Facade', 'Memento'], answer: 0,
            explain: 'Proxy virtual: mesma interface, controla o acesso e adia a criação (lazy). Adapter muda interface; Flyweight compartilha estado; Facade simplifica subsistema; Memento guarda estado.' },
          { q: 'Um app de compras permite escolher, em tempo de execução, o cálculo de frete (PAC, Sedex, retirada), cada um em uma classe que implementa a mesma interface. O padrão é:',
            options: ['Template Method', 'State', 'Observer', 'Strategy', 'Visitor'], answer: 3,
            explain: 'Strategy encapsula algoritmos intercambiáveis escolhidos pelo cliente. Template Method usa herança com esqueleto fixo; State troca conforme estado interno; Observer notifica; Visitor adiciona operações a uma estrutura.' }
        ] },
      { title: 'IoC, injeção de dependência, SOA e microsserviços',
        pages: [
          'IoC (inversão de controle): o framework controla o fluxo e chama seu código (princípio de Hollywood).\nDI é uma forma de IoC: dependências entregues de fora.\n• Tipos (Fowler): construtor, setter, interface.\n• Construtor: preferido para obrigatórias.\nDIP (o D do SOLID): módulos dependem de abstrações. DIP é princípio; DI é técnica.',
          'SOA: sistema como serviços reutilizáveis com contrato.\n• SOAP: envelope XML, contrato WSDL, WS-Security; registro UDDI.\n• ESB costuma centralizar integração.\nREST: recursos via URI, verbos HTTP, sem estado (stateless), representações (JSON/XML).\nGET é seguro e idempotente; PUT e DELETE idempotentes; POST não.',
          'Microsserviços: serviços pequenos, deploy independente, banco por serviço, decomposição por capacidade de negócio/subdomínio.\n• API Gateway: entrada única, roteia, autentica, agrega.\n• Service mesh: sidecars cuidam de mTLS, retry, observabilidade (Istio, Linkerd).\n• Serverless/FaaS: função por evento, escala a zero.\n• Strangler Fig: migra o monólito aos poucos.'
        ],
        tip: 'DIP é o princípio, DI é a técnica, IoC é o guarda-chuva. Microsserviço = banco próprio + deploy independente.',
        quiz: [
          { q: 'Sobre inversão de controle e injeção de dependência, assinale a correta.',
            options: ['DI e Service Locator são o mesmo padrão', 'Na injeção por construtor, a classe cria suas dependências com new', 'DI é uma forma de implementar IoC, em que as dependências são fornecidas externamente', 'IoC só existe em linguagens funcionais', 'DIP determina que módulos de alto nível dependam de classes concretas'], answer: 2,
            explain: 'DI entrega as dependências de fora, realizando IoC. No Service Locator a classe busca a dependência; DI evita o new interno; IoC é geral; DIP manda depender de abstrações.' },
          { q: 'Em uma arquitetura de microsserviços, o componente que, como sidecar junto a cada serviço, provê mTLS, retentativas e telemetria sem alterar o código é o(a):',
            options: ['ESB', 'API Gateway', 'service mesh', 'banco compartilhado', 'WSDL'], answer: 2,
            explain: 'Service mesh (Istio, Linkerd) usa proxies sidecar para a comunicação leste-oeste. API Gateway é a entrada norte-sul; ESB é típico de SOA; banco compartilhado é antipadrão; WSDL é contrato SOAP.' }
        ] },
      { title: 'Arquitetura orientada a eventos, Clean Architecture e DDD',
        pages: [
          'EDA: produtores publicam eventos (fatos no passado) e consumidores reagem, sem se conhecer.\n• Kafka: log distribuído, tópicos com partições, offset, consumer groups, retenção; ordem por partição.\n• RabbitMQ: AMQP, exchange → binding → fila; tipos direct, fanout, topic, headers; ack remove.\nEntrega at-least-once pode duplicar: consumidor idempotente.',
          'Padrões: Event Sourcing (estado = soma dos eventos), CQRS (separa escrita e leitura), Saga (transação longa com compensações; coreografia ou orquestração), Outbox (grava evento na mesma transação).\nClean Architecture (Uncle Bob): Entidades → Casos de Uso → Adaptadores de Interface → Frameworks e Drivers. Regra da Dependência: só para dentro. Parentes: Hexagonal (portas e adaptadores), Onion.',
          'DDD (Eric Evans, 2003).\nEstratégico: linguagem ubíqua, bounded context, mapa de contextos (ACL, shared kernel, customer/supplier, conformist, open host…).\nTático: Entidade (identidade), Objeto de Valor (imutável, sem identidade), Agregado + raiz (consistência), Repositório (por agregado), Serviço de Domínio, Evento de Domínio, Fábrica.\nAntipadrão: modelo anêmico.'
        ],
        tip: 'Kafka guarda e relê (offset); Rabbit entrega e apaga (ack). Clean: tudo aponta pro centro. DDD: repositório só para raiz de agregado.',
        quiz: [
          { q: 'No RabbitMQ, a exchange que entrega a mensagem a todas as filas vinculadas, ignorando a routing key, é a do tipo:',
            options: ['direct', 'topic', 'headers', 'default', 'fanout'], answer: 4,
            explain: 'Fanout faz broadcast para todas as filas ligadas. Direct exige chave exata; topic usa padrões com * e #; headers usa cabeçalhos; a default é uma direct pelo nome da fila.' },
          { q: 'Em DDD, a camada que traduz o modelo de um sistema legado para o modelo do seu bounded context, protegendo-o de conceitos externos, é a:',
            options: ['Anticorruption Layer', 'Shared Kernel', 'Conformist', 'Published Language', 'Separate Ways'], answer: 0,
            explain: 'A ACL traduz e isola o modelo. Shared Kernel compartilha parte do modelo; Conformist adota o modelo do outro; Published Language é linguagem comum documentada; Separate Ways é não integrar.' }
        ] },
      { title: 'Métricas de qualidade e entrega (cobertura, MTTR, frequência de deploy)',
        pages: [
          'Cobertura de testes: % do código exercitado.\n• Linha/comando < Decisão (branch) < Condição/caminhos.\n• 100% de decisões implica 100% de comandos; o inverso não.\nCobertura alta ≠ testes bons (podem não ter asserts): use teste de mutação (escore = mutantes mortos ÷ total).\nDensidade de defeitos = defeitos ÷ tamanho (KLOC ou pontos de função).',
          'Complexidade ciclomática (McCabe): M = E − N + 2P, ou nº de decisões + 1 → mínimo de casos para cobrir caminhos independentes.\nAcoplamento e coesão: CBO, LCOM, DIT, NOC (métricas CK).\nDívida técnica e quality gate (ex.: SonarQube) barram código novo ruim.\nMTBF = tempo operando ÷ falhas; MTTR = tempo de reparo ÷ incidentes.\nDisponibilidade = MTBF ÷ (MTBF + MTTR).',
          'DORA (4 chaves):\n• Throughput: frequência de deploy; lead time de mudanças (commit → produção).\n• Estabilidade: taxa de falha de mudança; tempo para restaurar (MTTR).\nTimes de elite: deploy sob demanda (várias vezes ao dia) e restauração em menos de 1 hora.\nVelocidade e estabilidade andam JUNTAS. Métrica vira meta → perde valor (lei de Goodhart).'
        ],
        tip: 'MTTR = reparo total ÷ nº de incidentes. Branch 100% ⇒ linha 100%, nunca o contrário. DORA: 2 de velocidade + 2 de estabilidade.',
        quiz: [
          { q: 'Um método tem dois if independentes, sem laços. Sua complexidade ciclomática é:',
            options: ['1', '2', '4', '5', '3'], answer: 4,
            explain: 'M = número de decisões + 1 = 2 + 1 = 3. O valor 4 seria o número de caminhos completos (2×2), confusão comum; 1 e 2 ignoram decisões; 5 não tem base.' },
          { q: 'Entre as quatro métricas-chave do DORA, as que medem estabilidade são:',
            options: ['frequência de deploy e lead time', 'cobertura de testes e densidade de defeitos', 'taxa de falha de mudança e tempo para restaurar o serviço', 'lead time e MTBF', 'velocity e burndown'], answer: 2,
            explain: 'Estabilidade: change failure rate e tempo de restauração (MTTR). Frequência e lead time medem velocidade (throughput). Cobertura, MTBF, velocity e burndown não estão nas 4 chaves.' }
        ] }
    ]
  }
};

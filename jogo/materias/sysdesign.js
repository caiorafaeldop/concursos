window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['sysdesign'] = {
  id: 'sysdesign',
  name: 'Design de Sistemas',
  npcs: [
    {
      name: 'Dona Latência',
      lines: [
        'Latência é o tempo de UMA resposta (ms); throughput é quantas requisições cabem por segundo (req/s).',
        'No teorema CAP, partição de rede (P) é inevitável em sistemas distribuídos: na hora da falha, escolha CP ou AP.',
        'PACELC completa o CAP: havendo partição (P), escolhe A ou C; senão (E), escolhe latência (L) ou consistência (C).',
        'ACID prioriza consistência forte em transações; BASE aceita consistência eventual para manter disponibilidade.'
      ]
    },
    {
      name: 'Mestre Protocolo',
      lines: [
        'REST usa HTTP e JSON legível por humanos; gRPC usa HTTP/2 e Protobuf binário, ideal entre microsserviços.',
        'WebSocket começa com handshake HTTP e vira túnel TCP full-duplex: cliente e servidor falam quando quiserem.',
        'Mensageria desacopla produtor e consumidor no tempo, absorve picos de carga e usa fila de mortos (DLQ) para falhas.',
        'NGINX brilha como servidor web, proxy reverso e LB L7; HAProxy é especialista em balanceamento L4/L7 de alta vazão.'
      ]
    },
    {
      name: 'Guardião da Escala',
      lines: [
        'Escalar vertical é turbinar uma máquina; escalar horizontal é somar máquinas atrás de um balanceador.',
        'Replicação copia os mesmos dados para leitura e failover; sharding fatia dados diferentes para escalar escrita.',
        'Cache em camadas (CDN na borda, Redis na aplicação) derruba latência, mas exige TTL e cuidado com stampede.',
        'Circuit Breaker abre quando o dependente falha muito, evita efeito cascata e permite graceful degradation.'
      ]
    }
  ],
  boss: {
    name: 'Prof. Arquibaldo Escala',
    intro: 'Sistema fora do ar custa caro! Mostre que você domina tradeoffs, escala e resiliência no estilo FGV.',
    questions: [
      {
        q: 'Um sistema distribuído sofre uma partição de rede entre dois data centers e opta por rejeitar escritas até que o enlace volte, garantindo que nenhum cliente leia dado desatualizado. Segundo o teorema CAP, esse sistema priorizou:',
        options: ['CA (Consistência e Disponibilidade)', 'AP (Disponibilidade e Tolerância a Partição)', 'CP (Consistência e Tolerância a Partição)', 'BASE com consistência eventual', 'Latência mínima (L) em vez de Consistência'],
        answer: 2,
        explain: 'Em rede distribuída, P é inevitável. Ao recusar escritas durante a partição para não servir dado velho, o sistema sacrifica disponibilidade (A) e garante consistência (C): é CP. CA não existe sob partição.'
      },
      {
        q: 'Sobre o modelo PACELC, é correto afirmar que:',
        options: ['Substitui o CAP negando a existência de partições de rede', 'Em operação normal (Else), descreve o tradeoff entre latência (L) e consistência (C)', 'Obriga todo banco NoSQL a seguir propriedades ACID', 'Define que disponibilidade e latência são sempre sinônimos', 'Aplica-se apenas a bancos relacionais em nó único'],
        answer: 1,
        explain: 'PACELC estende o CAP: se houver Partição (P), escolhe A ou C; caso contrário (E = Else), ainda há o dilema entre Latência (L) e Consistência (C), pois replicar síncrono custa tempo.'
      },
      {
        q: 'Uma arquitetura de microsserviços precisa de comunicação síncrona interna de baixíssima latência, contrato fortemente tipado e suporte nativo a streaming bidirecional. A melhor escolha é:',
        options: ['REST sobre HTTP/1.1 com XML', 'gRPC sobre HTTP/2 com Protocol Buffers', 'Polling periódico via AJAX', 'FTP assíncrono em lote', 'SOAP com envelope WS-Security'],
        answer: 1,
        explain: 'gRPC usa HTTP/2 (multiplexação e streaming bidirecional) e Protobuf (serialização binária compacta e contrato .proto). REST/XML e SOAP têm payload verboso; polling desperdiça banda; FTP não é síncrono de baixa latência.'
      },
      {
        q: 'Um portal de notícias quer entregar páginas públicas mais rápido para usuários de todo o país e reduzir a carga nos servidores de origem. A camada de cache mais indicada para ficar na borda, próxima ao usuário, é:',
        options: ['Cache L1 do processador do banco', 'CDN (Content Delivery Network)', 'Write-Back direto no disco local', 'Sessão sticky no balanceador L4', 'Dead Letter Queue (DLQ)'],
        answer: 1,
        explain: 'CDN distribui conteúdo em pontos de presença (PoPs) próximos ao usuário, reduzindo latência de rede e aliviando a origem. Cache de CPU é interno; Write-Back é política de escrita; sticky session fixa nó; DLQ trata falhas.'
      },
      {
        q: 'Ao migrar de 1 servidor para 5 servidores atrás de um balanceador de carga em Round Robin, usuários passaram a ser deslogados a cada clique. A causa provável e a solução arquitetural recomendada são, respectivamente:',
        options: ['Falta de índice no banco; criar sharding por hash', 'Estado de sessão na memória local do servidor; externalizar sessão para Redis ou usar token stateless', 'Uso de HTTP/2; fazer downgrade para HTTP/1.0', 'Balanceador em L7; trocar para DNS estático', 'Replicação síncrona; mudar para replicação multi-leader'],
        answer: 1,
        explain: 'Se a sessão fica na RAM de um nó, o próximo request cai em outro nó sem a sessão. Externalizar para Redis ou usar JWT stateless permite escalabilidade horizontal real sem depender de sticky sessions.'
      },
      {
        q: 'Um banco relacional único atingiu 95% de uso de disco e gargalo intenso de ESCRITAS simultâneas. A técnica que divide os registros em partições independentes distribuídas por múltiplos servidores é:',
        options: ['Replicação Leader-Follower assíncrona', 'Sharding (particionamento horizontal)', 'Sticky session com IP Hash', 'Cache-Aside com TTL infinito', 'Circuit Breaker em estado Open'],
        answer: 1,
        explain: 'Sharding distribui subconjuntos distintos de linhas entre vários nós independentes, escalando capacidade de armazenamento e throughput de escrita. Replicação apenas copia os mesmos dados e não escala escrita em single-leader.'
      },
      {
        q: 'No padrão Circuit Breaker, quando o serviço dependente volta a responder parcialmente após o tempo de espera (timeout do circuito aberto), o disjuntor passa para o estado:',
        options: ['Closed, liberando 100% do tráfego imediatamente', 'Half-Open, deixando passar poucas requisições de teste para validar a recuperação', 'Open permanente, exigindo reinício manual da JVM', 'Failover passivo com promoção automática de réplica', 'Write-Through com expiração LRU'],
        answer: 1,
        explain: 'O ciclo é Closed (normal) → Open (falha rápida após limiar de erros) → Half-Open (após cooldown, testa poucas chamadas: se OK volta a Closed, se falhar volta a Open).'
      },
      {
        q: 'Sobre NGINX e HAProxy em arquiteturas web, assinale a afirmativa correta.',
        options: ['NGINX atua apenas como servidor de arquivos estáticos e não faz proxy reverso', 'HAProxy é especializado em balanceamento de carga e proxy TCP/HTTP (L4/L7) de alto desempenho', 'Nenhum dos dois suporta health check de backends', 'HAProxy substitui bancos NoSQL como o Redis', 'NGINX só funciona em modo ativo-passivo sem balanceamento'],
        answer: 1,
        explain: 'HAProxy é referência em balanceamento L4/L7, health checks avançados e filas. NGINX também faz proxy reverso, LB e cache/estáticos. Ambos suportam health checks e não são bancos de dados.'
      }
    ]
  },
  match: {
    title: 'Ligue o conceito',
    pairs: [
      ['Latência', 'tempo de resposta de uma requisição'],
      ['Throughput', 'requisições atendidas por segundo'],
      ['Sharding', 'fatiar dados entre nós para escalar escrita'],
      ['Circuit Breaker', 'disjuntor que falha rápido e evita cascata'],
      ['CDN', 'cache na borda próximo ao usuário'],
      ['gRPC', 'RPC rápido sobre HTTP/2 e Protobuf']
    ]
  },
  quick: [
    { q: 'No CAP, durante partição de rede, escolhe-se:', options: ['CP ou AP', 'CA ou PA', 'ACID ou L', 'REST ou RPC'], answer: 0, explain: 'Partição (P) é inevitável; o sistema escolhe Consistência (CP) ou Disponibilidade (AP).' },
    { q: 'Serialização binária padrão do gRPC:', options: ['JSON', 'XML', 'Protobuf', 'YAML'], answer: 2, explain: 'gRPC usa Protocol Buffers (Protobuf) sobre HTTP/2.' },
    { q: 'Protocolo full-duplex após handshake HTTP:', options: ['REST', 'WebSocket', 'SOAP', 'SMTP'], answer: 1, explain: 'WebSocket faz Upgrade HTTP e mantém conexão TCP bidirecional persistente.' },
    { q: 'Técnica que escala ESCRITAS e volume de dados:', options: ['Sharding', 'CDN', 'Read Replica', 'Sticky'], answer: 0, explain: 'Sharding particiona os dados horizontalmente entre nós independentes.' },
    { q: 'Estado do Circuit Breaker que testa recuperação:', options: ['Closed', 'Open', 'Half-Open', 'Standby'], answer: 2, explain: 'Half-Open deixa poucas requisições passarem para verificar se o serviço voltou.' },
    { q: 'Proxy especialista em LB L4/L7 e health check:', options: ['Redis', 'HAProxy', 'Kafka', 'SQLite'], answer: 1, explain: 'HAProxy é focado em proxy reverso e balanceamento L4/L7 de alta performance.' }
  ],
  study: {
    title: 'Biblioteca de Design de Sistemas',
    chapters: [
      {
        title: 'Latência, throughput, CAP, PACELC, ACID e BASE',
        pages: [
          '• Latência: tempo que UMA requisição leva para ir e voltar (ms). Olhe p95/p99, não só a média.\n• Throughput: vazão — quantas requisições o sistema processa por segundo (req/s ou RPS).\n• Relação: aumentar paralelismo sobe throughput até saturar fila; aí a latência dispara.',
          '• Teorema CAP: em sistema distribuído, partição de rede (P) acontece. Na falha, escolha Consistência (CP: todo nó lê o mesmo valor ou recusa) ou Disponibilidade (AP: responde sempre, mesmo com dado possivelmente defasado).\n• PACELC: se P, A ou C; senão (Else), Latência (L) ou Consistência (C).',
          '• ACID (bancos relacionais): Atomicidade, Consistência, Isolamento, Durabilidade — transação forte.\n• BASE (NoSQL distribuído): Basically Available, Soft state, Eventually consistent — prioriza escala e disponibilidade.\n• Cuidado: C do ACID (regras/integridade) é diferente do C do CAP (linearizabilidade).'
        ],
        tip: 'CAP na prova: P sempre existe em rede. Nunca marque "CA" como opção viável em sistema distribuído!',
        quiz: [
          {
            q: 'Um sistema responde em média em 20 ms, mas 1% das requisições leva 2 segundos. Essa métrica da cauda é expressa por:',
            options: ['Throughput médio', 'Latência p99', 'Disponibilidade AP', 'Taxa de sharding', 'Fator de replicação'],
            answer: 1,
            explain: 'Percentis como p95 e p99 mostram a latência dos piores casos (cauda), que a média esconde. Throughput mede vazão.'
          },
          {
            q: 'No teorema PACELC, a letra E ("Else") trata do compromisso em operação normal entre:',
            options: ['Elasticidade e Custo', 'Latência e Consistência', 'Escalabilidade e Segurança', 'Disponibilidade e Partição', 'Atomicidade e Isolamento'],
            answer: 1,
            explain: 'Sem partição (Else), replicar dados de forma síncrona garante consistência (C), mas aumenta a latência (L).'
          }
        ]
      },
      {
        title: 'Comunicação: REST, gRPC, mensageria e WebSockets',
        pages: [
          '• REST: estilo sobre HTTP usando recursos (URIs), verbos (GET, POST, PUT, DELETE), stateless e JSON.\n• GET, PUT e DELETE são idempotentes; POST não é.\n• gRPC: RPC sobre HTTP/2 com Protobuf binário e contrato .proto. Muito rápido entre microsserviços e suporta streaming.',
          '• WebSockets: começa com HTTP Upgrade (101 Switching Protocols) e vira canal TCP persistente full-duplex — ótimo para chat, placar e notificações em tempo real.\n• Diferente de REST (request-response) e polling (cliente pergunta toda hora).',
          '• Mensageria (RabbitMQ, Kafka): produtor envia mensagem ao broker e segue a vida; consumidor processa no seu ritmo.\n• Garante desacoplamento temporal, absorve picos (buffer) e isola falhas com retry + Dead Letter Queue (DLQ).'
        ],
        tip: 'Público/browser → REST. Interno rápido/tipado → gRPC. Bidirecional tempo real → WebSocket. Assíncrono → Fila.',
        quiz: [
          {
            q: 'Qual característica diferencia o WebSocket do HTTP tradicional em aplicações em tempo real?',
            options: ['Usa apenas formato XML no corpo', 'Mantém conexão TCP persistente e full-duplex após o handshake inicial', 'Exige que o cliente faça polling a cada segundo', 'É exclusivamente stateless sem conexão aberta', 'Só funciona para transferência de arquivos estáticos'],
            answer: 1,
            explain: 'Após o handshake HTTP Upgrade, o WebSocket mantém o socket aberto permitindo envio simultâneo nos dois sentidos.'
          },
          {
            q: 'Em uma arquitetura com mensageria, mensagens que falham repetidamente após todas as tentativas de reprocessamento devem ser encaminhadas para:',
            options: ['Um servidor DNS secundário', 'Uma Dead Letter Queue (DLQ)', 'O cache L1 da CDN', 'Uma conexão gRPC unária', 'O balanceador L4'],
            answer: 1,
            explain: 'A DLQ (fila de mensagens mortas) isola mensagens problemáticas para análise sem travar o restante da fila.'
          }
        ]
      },
      {
        title: 'Escalabilidade, clustering, balanceamento e failover',
        pages: [
          '• Escalabilidade vertical (scale up): mais CPU/RAM numa máquina — simples, mas tem teto físico e ponto único de falha.\n• Escalabilidade horizontal (scale out): mais máquinas em paralelo — exige aplicação stateless (sessão fora da RAM).',
          '• Clustering: grupo de nós trabalhando juntos. Failover é a virada automática para o reserva quando um nó cai.\n• Ativo-Passivo (espera em standby) vs. Ativo-Ativo (todos atendem tráfego).',
          '• Load Balancer L4 (TCP/UDP, mais rápido) vs. L7 (HTTP, lê URL/headers/cookies).\n• Algoritmos: Round Robin, Weighted, Least Connections, IP Hash.\n• NGINX: web server + proxy reverso + LB + cache. HAProxy: proxy/LB L4/L7 especialista em alta vazão e health check.'
        ],
        tip: 'Scale out exige app stateless: tire a sessão da memória local e jogue no Redis ou em JWT!',
        quiz: [
          {
            q: 'Um balanceador que decide o servidor de destino inspecionando o caminho da URL (/api vs /imagens) e cabeçalhos HTTP opera na camada:',
            options: ['Camada 2 (Enlace)', 'Camada 3 (Rede)', 'Camada 4 (Transporte)', 'Camada 7 (Aplicação)', 'Camada 1 (Física)'],
            answer: 3,
            explain: 'Inspecionar URL, método HTTP, cookies ou headers é papel do balanceamento de camada 7 (aplicação).'
          },
          {
            q: 'Qual algoritmo de balanceamento de carga envia a nova requisição ao servidor que tem menos conexões abertas no momento?',
            options: ['Round Robin simples', 'Least Connections', 'IP Hash estático', 'Random puro', 'Broadcast'],
            answer: 1,
            explain: 'Least Connections considera a carga ativa atual de cada servidor, evitando sobrecarregar quem está com requisições longas.'
          }
        ]
      },
      {
        title: 'Dados em escala: replicação e sharding',
        pages: [
          '• Replicação copia os MESMOS dados em vários nós.\n• Leader-Follower: escrita vai no líder; leituras vão nas réplicas. Aumenta leitura e disponibilidade.\n• Síncrona (sem perda, mais lenta) vs. Assíncrona (rápida, sujeita a replication lag).',
          '• Multi-Leader: escrita em mais de um nó (bom para multi-região, mas exige resolver conflitos).\n• Leaderless (estilo Dynamo): escreve/lê em quórum (W + R > N) para garantir leitura atualizada.',
          '• Sharding (particionamento horizontal): fatia linhas DIFERENTES entre nós (shards) — resolve limite de disco e gargalo de ESCRITA.\n• Estratégias: Range (fácil intervalo, risco de hotspot), Hash (distribui bem, difícil range e resharding) e Diretório.'
        ],
        tip: 'Precisa escalar LEITURA e ter failover? Replicação. Precisa escalar ESCRITA e disco? Sharding.',
        quiz: [
          {
            q: 'Na replicação Leader-Follower assíncrona, um usuário escreve um comentário e imediatamente recarrega a página lendo de uma réplica ainda desatualizada. Esse fenômeno é conhecido como:',
            options: ['Cache Stampede', 'Replication lag (atraso de replicação)', 'Circuit Breaker aberto', 'Deadlock distribuído', 'Hotspot de hash'],
            answer: 1,
            explain: 'Na replicação assíncrona, a réplica pode demorar milissegundos ou segundos para receber a alteração do líder (replication lag).'
          },
          {
            q: 'Qual é uma desvantagem clássica do sharding por intervalo (Range) usando data ou ID sequencial?',
            options: ['Impede consultas por faixa de datas', 'Tende a criar hotspot no shard mais recente', 'Exige protocolo UDP', 'Elimina a necessidade de chaves primárias', 'Transforma o banco em Read-Only'],
            answer: 1,
            explain: 'Como novos registros têm sempre data/ID atual, todas as escritas caem no último shard (hotspot).'
          }
        ]
      },
      {
        title: 'Cache em camadas (CDN, Redis), circuit breaker e graceful degradation',
        pages: [
          '• Cache em camadas: Browser → CDN (borda geográfica, estáticos) → Reverse Proxy → Redis (memória rápida na app) → Banco.\n• Padrões: Cache-Aside (app checa cache, se miss vai ao banco e preenche), Write-Through (escreve nos dois) e Write-Back (escreve no cache e depois no banco: rápido, risco de perda).',
          '• Problemas: Cache Stampede (muitos expiram juntos e batem no banco), Penetration (chaves inexistentes furam o cache; use Bloom Filter/null cache) e Avalanche (tudo expira junto; use jitter no TTL).',
          '• Circuit Breaker: Closed (normal) → Open (falha rápido após limiar) → Half-Open (testa recuperação).\n• Graceful Degradation: quando um módulo secundário cai (ex.: recomendações), o sistema entrega o essencial sem derrubar a compra.'
        ],
        tip: 'Circuit Breaker não é Retry: Retry insiste; Circuit Breaker para de bater no serviço doente para ele respirar.',
        quiz: [
          {
            q: 'No padrão de escrita em cache Write-Back (Write-Behind), qual é o principal trade-off?',
            options: ['Escrita mais lenta porque espera o banco confirmar', 'Alta velocidade de escrita, porém risco de perda de dados se o cache cair antes de persistir no banco', 'Impossibilidade de usar TTL nas chaves', 'Obrigação de usar banco relacional', 'Bloqueio total de leituras concorrentes'],
            answer: 1,
            explain: 'Write-Back confirma a escrita logo no cache e grava no banco de forma assíncrona: ganha performance, mas arrisca perda em queda.'
          },
          {
            q: 'Um e-commerce desativa o bloco de "produtos recomendados" quando o serviço de IA fica lento, mantendo busca e carrinho funcionando. Isso exemplifica:',
            options: ['Sharding por diretório', 'Graceful degradation (degradação graciosa)', 'Replicação multi-leader', 'Cache Penetration', 'Balanceamento L4'],
            answer: 1,
            explain: 'Graceful degradation preserva as funcionalidades críticas entregando uma versão reduzida quando partes não essenciais falham.'
          }
        ]
      }
    ]
  }
};

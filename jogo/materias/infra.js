window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['infra'] = {
  id: 'infra',
  name: 'Arquitetura, SO e Redes',
  npcs: [
    { name: 'Dona ULA, a Calculadora', lines: [
      'Von Neumann: dados e instruções na MESMA memória e no mesmo barramento. Harvard separa as duas memórias e busca ambas ao mesmo tempo.',
      'Ciclo de instrução: busca (PC → memória → IR), decodificação pela UC e execução pela ULA. Depois o PC aponta para a próxima.',
      'Barramento de endereço com n bits endereça 2^n posições. 32 bits = 4 GiB endereçáveis, se cada endereço guardar 1 byte.',
      'Pipeline aumenta a vazão (instruções por segundo), mas não deixa UMA instrução mais rápida. Hazards: estrutural, de dados e de controle.'
    ] },
    { name: 'Seu Kernel, o Porteiro', lines: [
      'Estados do processo: novo, pronto, executando, bloqueado e terminado. Bloqueado nunca vai direto para executando: passa por pronto!',
      'Threads do mesmo processo dividem código, dados globais, heap e arquivos abertos. Cada uma tem seus registradores, PC e pilha.',
      'Deadlock exige 4 condições juntas: exclusão mútua, posse e espera, não preempção e espera circular. Quebre uma e ele não ocorre.',
      'Paginação causa fragmentação INTERNA (sobra na última página). Segmentação e partições variáveis causam fragmentação EXTERNA.'
    ] },
    { name: 'Tia Pacote, a Carteira', lines: [
      'OSI de baixo pra cima: Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação. PDUs: bit, quadro, pacote, segmento.',
      'Hub repete bits (camada 1). Switch lê MAC e separa domínios de colisão (2). Roteador lê IP e separa domínios de broadcast (3).',
      'TCP: conexão com 3 vias (SYN, SYN+ACK, ACK), entrega confiável e ordenada. UDP: sem conexão, leve. DNS consulta usa UDP 53.',
      'Uma /26 tem bloco de 64 e 62 hosts úteis. Faixas privadas: 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16.'
    ] }
  ],
  boss: {
    name: 'Prof. Roteador Silberschatz',
    intro: 'Do transistor ao pacote: CPU, processos, memória e TCP/IP. Mostre que você é analista, não usuário avançado!',
    questions: [
      { q: 'Sobre a transição de estados de um processo em um sistema operacional multiprogramado, assinale a afirmativa correta.',
        options: [
          'Um processo bloqueado passa diretamente ao estado executando quando a operação de E/S termina.',
          'Um processo em execução vai para o estado pronto quando seu quantum se esgota em um escalonamento preemptivo.',
          'Um processo pronto passa ao estado bloqueado quando o escalonador o seleciona.',
          'O estado pronto indica que o processo aguarda a conclusão de uma operação de E/S.',
          'Um processo só deixa o estado executando quando termina.'
        ], answer: 1,
        explain: 'Fim de quantum (preempção) leva executando → pronto. Ao fim da E/S, bloqueado → pronto (não direto para executando). Pronto aguarda CPU, não E/S; quem aguarda E/S é o bloqueado.' },
      { q: 'Três processos chegam no instante 0, na ordem P1 (24 ms), P2 (3 ms) e P3 (3 ms). O tempo médio de espera com FCFS e com SJF não preemptivo é, respectivamente:',
        options: ['17 ms e 3 ms', '10 ms e 3 ms', '17 ms e 6 ms', '24 ms e 3 ms', '27 ms e 9 ms'], answer: 0,
        explain: 'FCFS: esperas 0, 24 e 27 → 51/3 = 17. SJF executa P2, P3, P1: esperas 0, 3 e 6 → 9/3 = 3. SJF minimiza o tempo médio de espera.' },
      { q: 'Um sistema usa páginas de 4 KB e endereço lógico de 32 bits. Quantos bits identificam o deslocamento e quantas entradas tem a tabela de páginas de um nível?',
        options: ['10 bits e 2^22 entradas', '12 bits e 2^12 entradas', '20 bits e 2^12 entradas', '4 bits e 2^28 entradas', '12 bits e 2^20 entradas'], answer: 4,
        explain: '4 KB = 2^12 bytes, logo 12 bits de deslocamento. Sobram 32 − 12 = 20 bits para o número da página: 2^20 entradas na tabela.' },
      { q: 'Em relação às condições necessárias para a ocorrência de deadlock (Coffman), é correto afirmar que:',
        options: [
          'basta a espera circular para que o deadlock ocorra.',
          'a preempção de recursos é uma das quatro condições necessárias.',
          'as quatro condições precisam ocorrer simultaneamente; negar qualquer uma delas previne o deadlock.',
          'o algoritmo do banqueiro é uma técnica de detecção e recuperação.',
          'a exclusão mútua pode sempre ser eliminada sem prejuízo, por isso é a condição mais negada.'
        ], answer: 2,
        explain: 'As 4 condições (exclusão mútua, posse e espera, NÃO preempção, espera circular) são simultâneas. O banqueiro é técnica de EVITAÇÃO. Exclusão mútua costuma ser inerente ao recurso.' },
      { q: 'Um host tem o endereço 192.168.10.100/26. O endereço de rede e o de broadcast dessa sub-rede são, respectivamente:',
        options: ['192.168.10.0 e 192.168.10.63', '192.168.10.64 e 192.168.10.127', '192.168.10.96 e 192.168.10.103', '192.168.10.64 e 192.168.10.128', '192.168.10.100 e 192.168.10.255'], answer: 1,
        explain: '/26 → máscara 255.255.255.192, bloco de 64: sub-redes .0, .64, .128, .192. 100 está em .64; broadcast é o último da faixa: .127. Hosts válidos .65 a .126.' },
      { q: 'Quanto aos equipamentos de rede e aos domínios de colisão e de broadcast, assinale a afirmativa correta.',
        options: [
          'O hub segmenta domínios de colisão, pois opera na camada de enlace.',
          'O switch, sem VLANs, separa domínios de broadcast entre suas portas.',
          'O roteador opera na camada de transporte e encaminha segmentos com base em portas.',
          'O switch cria um domínio de colisão por porta, e o roteador separa domínios de broadcast.',
          'O repetidor opera na camada de rede, regenerando pacotes IP.'
        ], answer: 3,
        explain: 'Hub/repetidor: camada 1, um único domínio de colisão. Switch: camada 2, um domínio de colisão por porta, mas propaga broadcast (sem VLAN). Roteador: camada 3, isola broadcasts.' },
      { q: 'Um cliente que acaba de entrar na rede obtém endereço IP dinamicamente. A sequência correta de mensagens DHCP é:',
        options: ['Request, Offer, Discover, Acknowledge', 'Discover, Request, Offer, Acknowledge', 'Discover, Offer, Request, Acknowledge', 'Offer, Discover, Acknowledge, Request', 'Discover, Acknowledge, Offer, Request'], answer: 2,
        explain: 'DORA: o cliente faz Discover (broadcast), servidores fazem Offer, o cliente escolhe com Request e o servidor confirma com Acknowledge. DHCP usa UDP 67 (servidor) e 68 (cliente).' },
      { q: 'Sobre arquiteturas RISC e CISC, assinale a afirmativa correta.',
        options: [
          'RISC usa instruções de tamanho variável e muitos modos de endereçamento.',
          'CISC acessa a memória apenas por instruções de load e store.',
          'RISC privilegia instruções simples, de formato fixo, e arquitetura load/store, o que facilita o pipeline.',
          'Processadores ARM são o exemplo clássico de arquitetura CISC.',
          'CISC dispensa a unidade de controle, pois as instruções são executadas diretamente pela memória.'
        ], answer: 2,
        explain: 'RISC: poucas instruções simples, tamanho fixo, muitos registradores, load/store, pipeline facilitado (ex.: ARM, RISC-V). CISC: instruções complexas de tamanho variável, muitas com acesso à memória (ex.: x86).' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [
    ['PCB', 'Ficha do processo: PID, estado, registradores'],
    ['TLB', 'Cache de traduções página → quadro'],
    ['ARP', 'Descobre o MAC a partir do IP'],
    ['Thrashing', 'Mais tempo trocando páginas que executando'],
    ['Three-way handshake', 'SYN, SYN+ACK, ACK'],
    ['DMA', 'Transfere dados de E/S sem ocupar a CPU']
  ] },
  quick: [
    { q: 'Qual camada OSI cuida de roteamento?', options: ['Rede', 'Enlace', 'Transporte', 'Sessão'], answer: 0, explain: 'Camada 3 (Rede): endereço lógico (IP) e roteamento.' },
    { q: 'Porta padrão do HTTPS?', options: ['80', '22', '443', '8080'], answer: 2, explain: 'HTTPS = HTTP sobre TLS na porta 443 (TCP).' },
    { q: 'Paginação gera qual fragmentação?', options: ['Externa', 'Interna', 'Nenhuma', 'Circular'], answer: 1, explain: 'Sobra espaço dentro do último quadro: fragmentação interna.' },
    { q: 'Quantos bits tem um endereço IPv6?', options: ['32', '64', '48', '128'], answer: 3, explain: 'IPv6: 128 bits, escritos em 8 grupos hexadecimais.' },
    { q: 'O que a thread NÃO compartilha com as irmãs?', options: ['Heap', 'Pilha', 'Código', 'Arquivos abertos'], answer: 1, explain: 'Cada thread tem sua própria pilha, PC e registradores.' },
    { q: 'Algoritmo que sofre anomalia de Belady?', options: ['LRU', 'Ótimo', 'Round-Robin', 'FIFO'], answer: 3, explain: 'No FIFO, mais quadros podem gerar MAIS faltas de página.' }
  ],
  study: {
    title: 'Biblioteca de Arquitetura, SO e Redes',
    chapters: [
      { title: 'Arquitetura de computadores',
        pages: [
          'Von Neumann × Harvard\n• Von Neumann: programa e dados na mesma memória, um caminho só → "gargalo de von Neumann".\n• Harvard: memórias/barramentos separados para instruções e dados → busca simultânea.\n• CPU = UC (controla) + ULA (calcula) + registradores (PC, IR, MAR, MBR/MDR).\n• Ciclo: busca → decodificação → execução (→ interrupções).',
          'Barramentos e memória\n• Dados (bidirecional), endereço (CPU → memória), controle (sinais).\n• n bits de endereço → 2^n posições.\n• Hierarquia: registradores > cache L1/L2/L3 > RAM > SSD/HD: quanto mais perto da CPU, mais rápido, caro e pequeno.\n• Localidade temporal (reuso) e espacial (vizinhos).\n• Cache: mapeamento direto, totalmente associativo, associativo por conjunto.',
          'RISC × CISC, pipeline e E/S\n• RISC: instruções simples, tamanho fixo, load/store, muitos registradores (ARM, RISC-V).\n• CISC: instruções complexas, tamanho variável (x86).\n• Pipeline: aumenta vazão; hazards estrutural, de dados e de controle.\n• E/S: polling (CPU pergunta), interrupção (dispositivo avisa), DMA (transfere sem a CPU).'
        ],
        tip: 'Pipeline = lavanderia: cada roupa demora igual, mas sai uma pronta a cada etapa. Vazão sobe, latência não cai.',
        quiz: [
          { q: 'Um processador possui barramento de endereços de 24 bits e memória endereçável por byte. A capacidade máxima de memória endereçável é:',
            options: ['24 MB', '16 MiB', '4 GiB', '256 KiB', '1 MiB'], answer: 1,
            explain: '2^24 = 16.777.216 endereços de 1 byte = 16 MiB. 4 GiB seria 32 bits; 1 MiB seria 20 bits.' },
          { q: 'A técnica que permite a um controlador transferir blocos de dados entre dispositivo e memória principal sem que a CPU copie cada palavra é:',
            options: ['polling', 'pipeline', 'interrupção por software', 'DMA', 'memória virtual'], answer: 3,
            explain: 'DMA (acesso direto à memória): a CPU só programa a transferência e recebe uma interrupção no fim. No polling a CPU fica consultando o dispositivo.' }
        ] },
      { title: 'Sistemas operacionais: processos e threads',
        pages: [
          'SO e processo\n• Kernel roda em modo núcleo; aplicações em modo usuário; pedem serviços por chamadas de sistema (system calls).\n• Processo = programa em execução + contexto (registradores, memória, arquivos).\n• PCB guarda PID, estado, PC, registradores, info de memória e E/S.\n• Troca de contexto: salva o PCB de um, carrega o de outro (custo puro, sem trabalho útil).',
          'Estados e threads\n• Novo → Pronto → Executando → Terminado; Executando → Bloqueado (E/S) → Pronto.\n• Executando → Pronto: preempção/fim de quantum.\n• Threads compartilham código, dados, heap e arquivos; cada uma tem PC, registradores e pilha.\n• Modelos: N:1 (usuário), 1:1 (kernel; Linux/Windows), M:N.\n• fork(): devolve 0 ao filho e o PID do filho ao pai.',
          'Sincronização e deadlock\n• Condição de corrida: resultado depende da ordem de execução. Seção crítica: só um por vez.\n• Mutex, semáforo (P/wait e V/signal, Dijkstra), monitor.\n• Deadlock: exclusão mútua + posse e espera + não preempção + espera circular.\n• Tratamento: prevenir (negar uma), evitar (banqueiro), detectar e recuperar, ignorar (avestruz).'
        ],
        tip: 'Bloqueado nunca pula para executando: acorda e vai para a fila de prontos.',
        quiz: [
          { q: 'Em relação a threads de um mesmo processo, é correto afirmar que compartilham:',
            options: ['a pilha e o contador de programa', 'o espaço de endereçamento e os arquivos abertos', 'os registradores e a pilha', 'apenas o contador de programa', 'nada, pois cada thread tem espaço de endereçamento próprio'], answer: 1,
            explain: 'Threads compartilham espaço de endereçamento (código, dados, heap) e recursos como arquivos abertos. Pilha, PC e registradores são próprios de cada thread.' },
          { q: 'O algoritmo do banqueiro, de Dijkstra, é classificado como técnica de:',
            options: ['prevenção de deadlock', 'detecção de deadlock', 'recuperação de deadlock', 'evitação de deadlock', 'escalonamento de CPU'], answer: 3,
            explain: 'O banqueiro só concede recursos se o sistema continuar em estado seguro: é EVITAÇÃO. Prevenção nega estruturalmente uma das 4 condições.' }
        ] },
      { title: 'Memória, escalonamento e sistemas de arquivos',
        pages: [
          'Escalonamento de CPU\n• FCFS: ordem de chegada, não preemptivo, efeito comboio.\n• SJF: menor job primeiro; ótimo em espera média; risco de inanição. SRTF é a versão preemptiva.\n• Round-Robin: fatia de tempo (quantum); quantum enorme vira FCFS; muito pequeno = excesso de trocas de contexto.\n• Prioridade: inanição resolvida com envelhecimento (aging).',
          'Memória\n• MMU traduz endereço lógico em físico. TLB = cache dessas traduções.\n• Paginação: página (lógica) ↔ quadro (físico), tamanhos iguais; fragmentação interna.\n• Segmentação: tamanhos variáveis; fragmentação externa (compactação).\n• Memória virtual: page fault traz página do disco.\n• Substituição: FIFO (anomalia de Belady), LRU, Ótimo (teórico).\n• Thrashing: só troca página.',
          'Sistemas de arquivos\n• Alocação contígua (rápida, fragmentação externa), encadeada (sem acesso aleatório eficiente; FAT usa tabela), indexada (inode).\n• inode: metadados e ponteiros para blocos; o nome fica no diretório.\n• FAT32: arquivo de até 4 GiB − 1 byte. NTFS: MFT, ACLs, journaling. ext4: journaling, extents.\n• Journaling protege a consistência, não substitui backup.'
        ],
        tip: 'Paginação → Interna (P e I lado a lado). Segmentação → Externa.',
        quiz: [
          { q: 'Com quantum = 4 ms, os processos P1 (24 ms), P2 (3 ms) e P3 (3 ms), chegando em 0 nessa ordem, são escalonados por Round-Robin. O tempo de espera de P1 é:',
            options: ['0 ms', '4 ms', '6 ms', '10 ms', '26 ms'], answer: 2,
            explain: 'P1 0–4, P2 4–7, P3 7–10, P1 10–30. P1 esperou de 4 a 10 = 6 ms. P2 esperou 4 e P3 esperou 7 (média 17/3 ≈ 5,67 ms).' },
          { q: 'Em sistemas de arquivos do tipo Unix (ext4), o nome de um arquivo fica armazenado:',
            options: ['no inode do arquivo', 'no superbloco', 'na entrada do diretório que aponta para o inode', 'no primeiro bloco de dados', 'na tabela FAT'], answer: 2,
            explain: 'O inode guarda metadados (dono, permissões, tamanho, datas, ponteiros), mas não o nome. O diretório mapeia nome → número do inode; por isso existem hard links.' }
        ] },
      { title: 'Redes: modelos OSI e TCP/IP',
        pages: [
          'Modelo OSI (ISO), 7 camadas, de cima para baixo\n• 7 Aplicação · 6 Apresentação (formato, criptografia, compressão) · 5 Sessão (diálogo, sincronização)\n• 4 Transporte (fim a fim, portas) · 3 Rede (IP, roteamento) · 2 Enlace (quadro, MAC, CRC) · 1 Física (bits).\n• PDUs: dados, segmento/datagrama, pacote, quadro, bit.\n• Encapsulamento: cada camada põe cabeçalho ao descer.',
          'Modelo TCP/IP\n• 4 camadas: Aplicação, Transporte, Internet, Acesso à rede (ou Interface de rede).\n• Aplicação TCP/IP = Aplicação + Apresentação + Sessão do OSI.\n• Acesso à rede = Enlace + Física.\n• Alguns autores (Tanenbaum, Kurose) usam modelo híbrido de 5 camadas.\n• IP e ICMP ficam na camada Internet; o ARP liga IP a MAC (fronteira entre 2 e 3).',
          'Equipamentos e meios\n• Hub/repetidor (1): um domínio de colisão.\n• Switch/bridge (2): um domínio de colisão por porta; broadcast passa (VLAN 802.1Q separa).\n• Roteador (3): separa broadcast.\n• Ethernet 802.3 (CSMA/CD em half-duplex); Wi-Fi 802.11 (CSMA/CA).\n• MAC: 48 bits. UTP: segmento de até 100 m. Fibra monomodo vai mais longe que multimodo.'
        ],
        tip: 'OSI de baixo para cima: "Física Engole Rede, Transporta Sessão, Apresenta Aplicação".',
        quiz: [
          { q: 'Criptografia, compressão e conversão de formato de dados são atribuídas, no modelo OSI, à camada de:',
            options: ['Sessão', 'Transporte', 'Enlace', 'Aplicação', 'Apresentação'], answer: 4,
            explain: 'A camada 6 (Apresentação) trata da representação dos dados: sintaxe, codificação, criptografia e compressão. Sessão (5) controla o diálogo.' },
          { q: 'A unidade de dados (PDU) da camada de enlace e o endereço por ela utilizado são, respectivamente:',
            options: ['quadro e MAC', 'pacote e IP', 'segmento e porta', 'bit e MAC', 'datagrama e IP'], answer: 0,
            explain: 'Enlace trabalha com quadros (frames) e endereço físico MAC (48 bits). Pacote/IP é camada 3; segmento/porta é camada 4.' }
        ] },
      { title: 'Protocolos, endereçamento IP e serviços de rede',
        pages: [
          'IPv4 e sub-redes\n• 32 bits; CIDR /n = n bits de rede.\n• Hosts úteis = 2^(32−n) − 2 (rede e broadcast).\n• Privados (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Loopback 127.0.0.0/8. APIPA 169.254.0.0/16.\n• Bloco = 256 − octeto da máscara. /26 → bloco 64, 62 hosts.\n• NAT/PAT: vários IPs privados saem por um IP público.',
          'IPv6, TCP e UDP\n• IPv6: 128 bits, hexadecimal, "::" uma vez só; sem broadcast (usa multicast); NDP no lugar do ARP; ::1 loopback.\n• TCP: conexão (SYN, SYN+ACK, ACK), confiável, ordenado, controle de fluxo e congestionamento.\n• UDP: sem conexão, sem garantia, cabeçalho de 8 bytes; DNS, DHCP, SNMP, VoIP.\n• ICMP (ping, traceroute) é camada Internet, sem portas.',
          'Serviços e portas\n• FTP 20/21 · SSH 22 · Telnet 23 · SMTP 25 (587 submissão) · DNS 53 · DHCP 67/68 · HTTP 80 · POP3 110 · NTP 123 · IMAP 143 · SNMP 161/162 · LDAP 389 · HTTPS 443 · RDP 3389.\n• DHCP: DORA. ARP: IP → MAC (pedido em broadcast).\n• DNS: A, AAAA, CNAME, MX, NS, PTR (reverso), SOA, TXT.'
        ],
        tip: 'Hosts = 2^bits de host − 2. Bloco = 256 − último octeto não-zero da máscara.',
        quiz: [
          { q: 'O registro DNS que indica o servidor responsável por receber e-mails de um domínio é o:',
            options: ['A', 'CNAME', 'PTR', 'MX', 'NS'], answer: 3,
            explain: 'MX (Mail Exchanger) aponta os servidores de e-mail. A/AAAA ligam nome a IPv4/IPv6; CNAME é apelido; PTR faz resolução reversa; NS indica servidores autoritativos.' },
          { q: 'Uma rede precisa de sub-redes com pelo menos 50 hosts cada. A máscara que atende com o menor desperdício é:',
            options: ['/24', '/25', '/26', '/27', '/28'], answer: 2,
            explain: '/26 deixa 6 bits de host: 2^6 − 2 = 62 hosts (atende). /27 dá só 30 hosts. /25 daria 126, desperdiçando mais.' }
        ] }
    ]
  }
};

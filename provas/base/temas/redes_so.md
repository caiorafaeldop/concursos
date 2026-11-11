# Redes, sistemas operacionais e infraestrutura

`redes_so` · 23 questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.

## alego26-dev-q44 · ALEGO 2026

A Assembleia Legislativa do Estado Goiás está revisando sua arquitetura de comunicação e precisa avaliar as diferenças entre internet, intranet, extranet e o portal institucional, considerando finalidades, características físicas e lógicas, além dos serviços e aplicações mais adequados para cada ambiente, a fim de orientar decisões de infraestrutura e governança digital. Assim, pode-se afirmar que

- (A) a Extranet é uma rede global que conecta computadores e dispositivos, permitindo a troca de informações e comunicação em larga escala.
- (B) a Internet é uma extensão da Extranet que permite o acesso a partes específicas dos dados para usuários externos, geralmente parceiros de negócios ou fornecedores.
- (C) a Internet é uma rede que fornece acesso a informações corporativas, ferramentas e serviços, sem acesso ao público externo.
- (D) portal: Interface que fornece acesso a informações e recursos de uma ou mais fontes, servindo como um ponto de entrada para aplicação e serviços.
- (E) a Internet é uma vasta rede de servidores e dispositivos conectados em toda a corporação, permitindo a troca de dados através de cabos, satélites e conexões sem fio.

**Gabarito:** D

## amazul26-q22 · AMAZUL 2026

Considerando a família de protocolos da arquitetura TCP/IP, assinale a opção que corretamente apresenta o protocolo que implementa a técnica de "lease" ou "leasing", na qual a concessão de um endereço IP pelo servidor a um cliente deve ser renovada antes de expirada.

- (A) DHCP – Dynamic Host Configuration Protocol.
- (B) HTTP – Hypertext Transfer Protocol.
- (C) FTP – File Transfer Protocol.
- (D) NAT – Network Address Translation.
- (E) SSH – Secure Shell.

**Gabarito:** A

## amazul26-q23 · AMAZUL 2026

O Registro do Windows organiza informações do sistema e dos usuários em uma estrutura hierárquica.

Considerando a forma como o registro é estruturado, assinale a opção correta.

- (A) As entradas de registro subordinadas à chave HKEY_PERFORMANCE_NLSTEXT permitem acessar dados de desempenho. Os dados não são armazenados no registro em si; as funções de registro fazem com que o sistema colete os dados de sua fonte.
- (B) Cada chave possui um nome composto por um ou mais caracteres alfanuméricos, diferenciando maiúsculas de minúsculas, à exceção do caractere de barra invertida (\), que pode integrar as chaves.
- (C) Novos usuários que logam no sistema compartilham hives padrão das configurações básicas do sistema, em um arquivo separado por perfil do usuário (user profile).
- (D) O registro é um banco de dados com elementos essenciais ao funcionamento do Windows e dos aplicativos de serviço nele executados, sendo estruturados em forma colunar.
- (E) Uma hive de perfil de usuário (user profile) é um grupo de chaves, subchaves e valores no registro, subordinadas à chave HKEY_USERS, carregadas em memória quando o usuário loga ou o sistema operacional inicia.

**Gabarito:** E

## amazul26-q24 · AMAZUL 2026

No que concerne aos conceitos relacionados a redes de computadores, assinale a alternativa que apresenta uma associação incorreta.

- (A) Computação em nuvem: utiliza o modelo de computação distribuída, em que não existe a demanda de conhecimento do local físico de armazenamento de recursos e/ou dados.
- (B) Extranet: uma rede privada estendida baseada na internet que permite acesso remoto via autenticação, permitindo, assim, o acesso externo aos serviços de uma intranet a entes credenciados.
- (C) Internet: rede mundial de computadores, em que a troca de informações armazenadas remotamente é realizada prescindindo, na maioria das vezes, do local onde os dados estão fisicamente armazenados.
- (D) Intranet: rede privada que utiliza modelo baseado nos mesmos protocolos da internet para acesso aos dados, reduzindo os custos de implementação de aplicativos frente a soluções proprietárias.
- (E) Web: protocolo de transferência de hiperdocumentos realizada por um site hospedeiro, e respondida por requisições de clientes navegadores, tais como: Google Chrome, Microsoft Edge e Mozilla Firefox.

**Gabarito:** E

## amazul26-q31 · AMAZUL 2026

Um administrador de sistemas gerencia um ambiente VMware vSphere 8.x e precisa implementar uma solução para garantir a alta disponibilidade das máquinas virtuais (VMs) em caso de falha de um host ESXi. A configuração deve permitir a reinicialização automática das VMs afetadas em hosts saudáveis no mesmo cluster, sem a necessidade de intervenção manual.

Assinale a opção que apresenta a funcionalidade do vSphere que deve ser configurada para atender a esse requisito.

- (A) VMware vMotion
- (B) VMware Storage vMotion
- (C) VMware DRS (Distributed Resource Scheduler)
- (D) VMware HA (High Availability)
- (E) VMware FT (Fault Tolerance)

**Gabarito:** D

## amazul26-q32 · AMAZUL 2026

No contexto da administração do armazenamento em um ambiente VMware vSphere, o recurso que permite o provisionamento eficiente de espaço em disco para máquinas virtuais, onde o espaço físico é alocado, apenas quando efetivamente utilizado pelo sistema operacional convidado, e não no momento da criação do disco virtual denomina-se

- (A) Thick Provision Lazy Zeroed
- (B) Thick Provision Eager Zeroed
- (C) Independent-Persistent Mode
- (D) Raw Device Mapping (RDM)
- (E) Thin Provisioning

**Gabarito:** E

## amazul26-q33 · AMAZUL 2026

Em um ambiente de produção de banco de dados, o Administrador de Banco de Dados (DBA) planeja uma estratégia de recuperação de desastres. O objetivo principal é garantir o menor tempo de inatividade (RTO - Recovery Time Objective) e a mínima perda de dados (RPO - Recovery Point Objective) possíveis. Assinale a opção que apresenta as abordagens de backup e recuperação mais adequadas para atender a esses requisitos rigorosos em um sistema de missão crítica.

- (A) Point-in-Time Recovery  (PITR) utilizando os arquivos de log de transação contínuos.
- (B) Implementar uma solução de espelhamento ou replicação síncrona (como o Always On Availability Groups no SQL Server ou Data Guard no Oracle) para um servidor de standby.
- (C) Confiar exclusivamente em backups completos diários e armazená-los em um local remoto, sem a utilização de logs de transação para restauração.
- (D) Utilizar a abordagem de cold backup (backup a frio), onde o banco de dados é desligado completamente uma vez por dia para a cópia dos arquivos de dados.
- (E) Realizar backups incrementais em fitas magnéticas e transportá-las manualmente para um cofre, restaurando apenas o último backup completo e o último incremental.

**Gabarito:** B

## amazul26-q42 · AMAZUL 2026

Em um ambiente de servidor multiusuário e multitarefa, o administrador de sistemas precisa garantir que processos interativos (que exigem resposta rápida ao usuário) tenham prioridade sobre processos em background (que realizam tarefas longas e não urgentes).

Assinale a opção que apresenta o algoritmo de escalonamento de CPU, ou conceito relacionado, que é mais adequado para atingir esse objetivo de forma eficiente em um sistema operacional moderno.

- (A) First-Come, First-Served (FCFS)
- (B) Escalonamento por Prioridade Preemptivo com Envelhecimento (Aging)
- (C) Shortest Job Next (SJN)
- (D) Round-Robin com fatia de tempo (timeslice) muito grande
- (E) Escalonamento Não Preemptivo

**Gabarito:** B

## amazul26-q43 · AMAZUL 2026

Um sistema operacional utiliza paginação para gerenciar a memória virtual. O administrador do sistema observa um desempenho significativamente degradado, com a CPU gastando a maior parte do tempo trocando páginas entre a memória principal (RAM) e o disco, em vez de executar instruções úteis dos programas. Esse fenômeno é conhecido como

- (A) Swapping de Kernel
- (B) Fragmentação Externa
- (C) Memory Leak (Vazamento de Memória)
- (D) Thrashing (Saturação/Batelada)
- (E) Alocação Contígua

**Gabarito:** D

## amazul26-q45 · AMAZUL 2026

Em um ambiente Linux, o administrador de sistemas precisa iniciar um processo de backup de dados de grande volume, mas deseja garantir que ele não consuma recursos de CPU excessivamente e não prejudique o desempenho de outras aplicações críticas em execução.

Assinale a opção que apresenta corretamente o comando, ou combinação de comandos, que devem ser utilizados para iniciar o processo backup_script.sh, com a menor prioridade de execução possível.

- (A) nice -n -20 ./backup_script.sh
- (B) nice -n 19 ./backup_script.sh
- (C) renice +20 $(pgrep backup_script.sh)
- (D) nohup ./backup_script.sh &
- (E) ionice -c 3 ./backup_script.sh

**Gabarito:** B

## amazul26-q46 · AMAZUL 2026

Em sistemas operacionais modernos, as políticas de escalonamento preemptivo permitem que o sistema interrompa um processo em execução para ceder a CPU a outro processo, baseando-se em determinados critérios. Um algoritmo clássico que utiliza a preempção por meio de fatias de tempo (quantum) é o Round Robin (RR).

Nesse contexto, é correto afirmar que

- (A) Tempo de turnaround (tempo total de conclusão do processo) médio, minimizando-o.
- (B) Utilização da CPU, maximizando-a constantemente.
- (C) Throughput (número de processos concluídos por unidade de tempo), maximizando-o.
- (D) Tempo de resposta, minimizando o tempo que um usuário espera pela primeira resposta.
- (E) Tempo de espera, garantindo que todos os processos recebam tempo de CPU de forma justa, independentemente de sua prioridade.

**Gabarito:** D

## amazul26-q47 · AMAZUL 2026

No contexto de sistemas operacionais modernos, a memória virtual é uma técnica crucial que permite a execução de programas maiores do que a memória física (RAM) disponível, utilizando parte do espaço do disco rígido como extensão da RAM.

Assinale a opção que descreve corretamente o principal objetivo ou uma característica fundamental da memória virtual.

- (A) Eliminar completamente a necessidade de memória RAM, utilizando apenas o disco rígido para armazenamento primário.
- (B) Acelerar o acesso aos dados em relação à memória RAM física, devido à maior velocidade dos discos rígidos modernos.
- (C) Proporcionar um espaço de endereçamento lógico maior do que o espaço de endereçamento físico, de forma transparente para o programador.
- (D) Garantir que todos os processos residentes na memória física tenham uma cópia idêntica e permanente no disco (área de swap).
- (E) Otimizar o desempenho da memória cache de nível 1 e 2, gerenciando a troca de dados entre elas e a RAM.

**Gabarito:** C

## amazul26-q48 · AMAZUL 2026

O método de alocação contígua aloca blocos de disco adjacentes (sequenciais) para um arquivo. Embora esse método proporcione um desempenho de acesso sequencial excelente, ele apresenta um grande desafio na prática diária de um sistema de arquivos com muitas operações de criação e exclusão de arquivos. Assinale a opção que descreve esse principal desafio.

- (A) A complexidade de implementação do sistema de arquivos no núcleo do sistema operacional.
- (B) A limitação do tamanho máximo dos arquivos a um único bloco de disco.
- (C) O alto consumo de memória principal (RAM) para gerenciar a tabela de alocação de arquivos.
- (D) A ocorrência de fragmentação externa, dificultando a alocação de novos arquivos grandes, mesmo que haja espaço livre total suficiente.
- (E) A ineficiência no acesso sequencial, devido à necessidade de múltiplos acessos ao diretório.

**Gabarito:** D

## amazul26-q49 · AMAZUL 2026

Em um ambiente de data center, o administrador de sistemas precisa implementar uma solução de armazenamento que combine bom desempenho de leitura e escrita, eficiência no uso do espaço de armazenamento e capacidade de tolerar a falha de dois discos simultaneamente sem perda de dados.

Assinale a opção que apresenta o nível de RAID padrão que atende a esses requisitos específicos.

- (A) RAID 6
- (B) RAID 1
- (C) RAID 5
- (D) RAID 0
- (E) RAID 10

**Gabarito:** A

## amazul26-q50 · AMAZUL 2026

Uma das principais características de um dispositivo NAS é a sua facilidade de implementação e gerenciamento. O dispositivo é essencialmente um servidor de arquivos simplificado, que abstrai a complexidade do sistema de arquivos subjacente do usuário final. Em relação ao sistema de arquivos, o NAS gerencia o armazenamento de dados em seus discos rígidos internos.

Assinale a opção que descreve com mais precisão como o sistema de arquivos é gerenciado em um dispositivo NAS típico.

- (A) O cliente (computador do usuário) formata os discos do NAS com seu próprio sistema de arquivos local, como NTFS ou APFS, para garantir compatibilidade.
- (B) O NAS exige que todos os clientes usem o protocolo Fibre Channel para gerenciar o sistema de arquivos em nível de bloco.
- (C) O sistema de arquivos (ex: Ext4, Btrfs, ZFS) é instalado e gerenciado internamente pelo próprio dispositivo NAS (seu sistema operacional embarcado), e o acesso externo é feito por meio de protocolos de compartilhamento de rede.
- (D) O sistema de arquivos do NAS é totalmente baseado em nuvem e não requer discos rígidos físicos internos para o armazenamento de dados.
- (E) O usuário gerencia o sistema de arquivos, diretamente através de comandos de linha de terminal (CLI) no dispositivo NAS, sem interface gráfica de usuário.

**Gabarito:** C

## amazul26-q53 · AMAZUL 2026

Uma empresa necessita que seus funcionários de filiais acessem e executem um software de gestão específico que está instalado apenas no servidor principal localizado na matriz. O objetivo é que a aplicação seja executada no servidor, e apenas a interface gráfica seja transmitida para os computadores clientes, que podem ter hardware limitado.

Assinale a opção que apresenta o serviço de função de servidor que é o mais apropriado para essa situação.

- (A) Serviços de Área de Trabalho Remota (Remote Desktop Services).
- (B) Active Directory Certificate Services (AD CS).
- (C) Servidor Proxy Reverso.
- (D) Servidor DNS (Domain Name System).
- (E) Servidor DHCP (Dynamic Host Configuration Protocol).

**Gabarito:** A

## mpes26-q38 · MP/ES 2026 · gabarito preliminar

A virtualização permite a execução de múltiplos sistemas operacionais em um mesmo hardware físico, otimizando o uso dos recursos computacionais. Com a evolução dessa tecnologia, surgiram abordagens mais eficientes, como a virtualização baseada em contêineres, que permite a execução de aplicações de forma isolada e portátil em diferentes ambientes computacionais.

Considerando o uso da tecnologia Docker no contexto da virtualização por contêineres, assinale a afirmativa correta.

- (A) Os dados armazenados em contêineres Docker são automaticamente mantidos, independentemente de qualquer configuração adicional, mesmo após o encerramento do contêiner.
- (B) A tecnologia Docker permite executar aplicações em contêineres que compartilham o kernel do sistema operacional do host, tornando sua execução mais leve que máquinas virtuais.
- (C) O uso de mecanismos de armazenamento de dados compartilhados elimina o isolamento entre contêineres, fazendo com que passem a funcionar como uma única unidade.
- (D) Os contêineres Docker não permitem o compartilhamento de dados entre si, em razão do isolamento proporcionado pelo sistema operacional.
- (E) Os bind mounts são gerenciados pelo Docker de forma independente da estrutura de diretórios do sistema hospedeiro.

**Gabarito:** B

## tjsc26-q41 · TJ/SC 2026

Em uma aplicação corporativa de um tribunal, os usuários acessam o sistema por meio de navegadores instalados em suas estações de trabalho. As regras de negócio, o controle de acesso e a comunicação com o banco de dados são centralizados em servidores da instituição. As estações dos usuários apenas enviam requisições, recebem respostas e exibem as telas da aplicação, sem executar localmente as principais rotinas de processamento. A arquitetura da aplicação descrita é caracterizada como

- (A) arquitetura ponto a ponto.
- (B) arquitetura monolítica embarcada.
- (C) arquitetura orientada a eventos.
- (D) arquitetura serverless.
- (E) arquitetura cliente-servidor.

**Gabarito:** E

## tjsc26-q42 · TJ/SC 2026

Fátima está utilizando um sistema bancário para consulta de extratos e pagamento de contas de seu computador pessoal. Sabendo que esse sistema utiliza a arquitetura cliente-servidor, o papel principal do cliente, nesse cenário, é

- (A) executar a aplicação com interface, lógica e banco separados.
- (B) servir com um nó em uma rede de múltiplos nós que compartilham arquivos diretamente entre si.
- (C) consumir serviços independentes via API.
- (D) armazenar o banco de dados, processar as requisições e executar as transações.
- (E) fornecer a interface (desktop ou web) e enviar suas requisições.

**Gabarito:** E

## tjsc26-q63 · TJ/SC 2026

Considerando o modelo de referência OSI para redes de computadores, assinale a afirmativa correta.

- (A) O TCP (Transmission Control Protocol) é um protocolo da camada de controle responsável pela transmissão confiável.
- (B) O protocolo IP (Internet Protocol) é o único protocolo responsável por endereçamento em redes de computadores.
- (C) A camada física é responsável por garantir que os dados sejam transmitidos corretamente.
- (D) O roteamento de pacotes é uma das funções da camada de aplicação, em especial para navegação web.
- (E) O controle de fluxo é uma das funções da camada de enlace de dados.

**Gabarito:** E

## tjsc26-q64 · TJ/SC 2026

O modelo OSI para redes de computadores é uma abstração para organizar as responsabilidades em camadas que encapsulam a informação a ser transmitida, da camada mais superior (aplicação) até a mais inferior (física). No contexto do modelo OSI, analise as afirmativas a seguir.

I. A camada de rede é a responsável por determinar, passo a passo, qual será o próximo nó da rede a que será enviado o datagrama, em um processo chamado de roteamento.

II. A camada de enlace é a responsável pelo encaminhamento de um frame ponto a ponto, utilizando o endereçamento IP para garantir que está sendo enviado o frame para o próximo destino correto.

III. A camada de transporte pode implementar o protocolo TCP, que garante a entrega fim a fim dos pacotes entre origem e destino. Nesse protocolo, estabelece-se uma conexão, e eventuais perdas de pacotes são tratadas por meio de retransmissões na própria camada de transporte.

Está correto o que se afirma em

- (A) I, apenas.
- (B) I e II, apenas.
- (C) II e III, apenas.
- (D) I e III, apenas.
- (E) I, II e III.

**Gabarito:** D

## tjsc26-q65 · TJ/SC 2026

Na arquitetura clássica descrita por Von Neumann, o computador é representado por um processador, barramentos, uma memória principal e dispositivos de entrada e saída. Entretanto, os computadores atuais executam múltiplos processos, possuem diversos núcleos de processamento, e possuem arquiteturas multinível de memória. Para organizar todos esses recursos, utiliza-se um programa especial chamado de Sistema Operacional. Com relação ao Sistema Operacional e à alocação de recursos computacionais, assinale (V) para afirmativa verdadeira e (F) para falsa.

(   ) O sistema operacional utiliza um escalonador para conceder e revogar acesso ao processador a cada processo em execução, por meio da implementação de algoritmos como FIFO ou round-robin.

(   ) A arquitetura multinível de memória visa diminuir a latência de acesso à memória, sendo composta por caches de diferentes velocidades de acesso, pela memória RAM e pela memória virtual.

(   ) Os dispositivos de entrada e saída permitem que o computador interaja com o mundo exterior, e o sistema operacional é responsável por conceder acesso a esses dispositivos para os processos, por meio de programas conhecidos como daemons.

As afirmativas são, respectivamente,

- (A) F – V – F.
- (B) V – F – F.
- (C) F – F – V.
- (D) F – V – V.
- (E) V – V – F.

**Gabarito:** E

## tjsc26-q66 · TJ/SC 2026

Sobre o processo de virtualização de computadores, é correto afirmar que

- (A) para realizar a virtualização, utiliza-se um software chamado hypervisor, responsável por gerenciar máquinas virtuais e abstrair os recursos de hardware para os sistemas operacionais convidados.
- (B) o processo de virtualização traz benefícios no tempo de processamento, pois a latência de resposta dos processos virtualizados é menor do que nos sistemas não virtualizados.
- (C) a virtualização traz ganhos econômicos, pois é possível virtualizar diversas cópias de sistemas proprietários, como o Windows ou iOS em máquinas Linux com apenas acesso a uma licença.
- (D) um dos benefícios da virtualização é a escalabilidade, pois ela permite que processadores de diversos servidores distintos sejam usados em um único sistema virtual.
- (E) os containers são sistemas operacionais generalistas virtualizados, que permitem flexibilidade na utilização dos recursos de hardware e facilitam o deployment de soluções. Segurança da Informação e Governança de TI

**Gabarito:** A

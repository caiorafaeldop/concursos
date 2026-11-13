window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['devops'] = {
  id: 'devops',
  name: 'DevOps, IaC e Nuvem',
  npcs: [
    { name: 'Capitão Gitão', lines: [
      'Merge preserva o histórico com um commit de junção; rebase reaplica seus commits no topo da outra branch.',
      'Regra de ouro do rebase: nunca reescreva histórico de branch compartilhada como main ou develop.',
      'Gitflow usa branches longas (develop, release, hotfix); Trunk-Based integra rápido na main com feature flags.',
      'GitOps usa o Git como fonte única da verdade: um agente no cluster puxa e reconcilia o estado declarado.'
    ] },
    { name: 'Mestra Kube, a Contêiner', lines: [
      'Container não é VM: ele compartilha o kernel do host usando namespaces (isolamento) e cgroups (limites).',
      'No Dockerfile, RUN roda no build da imagem; CMD e ENTRYPOINT definem o processo ao iniciar o container.',
      'No Kubernetes, Pod é efêmero; Deployment garante réplicas e Service dá IP estável para acessar os Pods.',
      'Secret no Kubernetes usa Base64: isso é codificação, não criptografia! Proteja com RBAC e encryption at rest.'
    ] },
    { name: 'Oráculo da Nuvem', lines: [
      'IaaS te dá VM e rede; PaaS te dá plataforma pronta pro código; SaaS entrega o software pronto pro usuário.',
      'Terraform é declarativo e guarda a infra real no tfstate: em equipe, use backend remoto com lock.',
      'Observabilidade tem 3 pilares: métricas (Prometheus/Zabbix), logs (ELK/OpenSearch) e traces (APM/OpenTelemetry).',
      'Continuous Delivery para no botão de aprovação; Continuous Deployment publica em produção automaticamente.'
    ] }
  ],
  boss: {
    name: 'Prof. Pipelino',
    intro: 'Aqui a esteira não perdoa! Se você confundir Delivery com Deployment ou Secret com criptografia, sua build quebra!',
    questions: [
      { q: 'Uma equipe precisa publicar várias vezes ao dia com feedback rápido, integrando código diretamente na branch principal usando feature flags para esconder funcionalidades inacabadas. Esse fluxo é:',
        options: ['Gitflow clássico com branch release', 'Trunk-Based Development', 'GitOps por push manual', 'Branching por ambiente eterno', 'Forking workflow sem CI'],
        answer: 1, explain: 'Trunk-Based Development integra commits pequenos e frequentes direto na branch principal (trunk), usando feature flags para recursos incompletos. Gitflow mantém branches longas de develop/release.' },
      { q: 'Em uma esteira de CI/CD, a diferença entre Continuous Delivery (Entrega Contínua) e Continuous Deployment (Implantação Contínua) está em:',
        options: ['Continuous Delivery não executa testes automatizados', 'Continuous Deployment exige aprovação humana antes de ir para produção', 'Continuous Delivery deixa a versão pronta, mas exige gatilho manual para produção', 'Continuous Deployment só existe no Jenkins, não no GitLab CI', 'Não há diferença prática entre os dois termos'],
        answer: 2, explain: 'Na Entrega Contínua (Delivery), o artefato passa por build e testes e fica pronto para produção, mas o deploy final é manual. Na Implantação Contínua (Deployment), vai automático após passar nos testes.' },
      { q: 'Sobre containers Docker e máquinas virtuais (VMs), assinale a afirmação correta.',
        options: ['Cada container executa seu próprio kernel de sistema operacional completo', 'Containers usam namespaces para isolamento e cgroups para limitar CPU e memória, compartilhando o kernel do host', 'Volumes Docker são apagados automaticamente assim que o container para', 'A instrução COPY no Dockerfile executa comandos dentro do container já em produção', 'A rede host isola completamente as portas do container em relação ao servidor'],
        answer: 1, explain: 'Containers compartilham o kernel do host: namespaces isolam processos/rede e cgroups limitam recursos. VMs emulam hardware e sobem SO completo. Named volumes persistem além do container.' },
      { q: 'No Kubernetes, deseja-se expor uma aplicação web HTTP/HTTPS para fora do cluster com roteamento baseado em domínio (host) e caminho (path), além de terminação TLS. O recurso mais adequado é:',
        options: ['ConfigMap', 'DaemonSet', 'ClusterIP', 'Ingress', 'Secret'],
        answer: 3, explain: 'Ingress gerencia acesso externo HTTP/HTTPS (camada 7) por host/path e TLS, encaminhando para Services internos. ClusterIP é só interno; ConfigMap e Secret guardam configurações.' },
      { q: 'Um administrador criou um Secret no Kubernetes e afirmou que os dados estão seguros contra qualquer leitura porque o Kubernetes os codifica em Base64. Essa afirmação é:',
        options: ['Correta, pois Base64 é criptografia assimétrica forte', 'Correta, pois apenas o kube-proxy consegue decodificar Base64', 'Incorreta, pois Base64 é codificação reversível sem chave; exige RBAC e criptografia em repouso no etcd', 'Incorreta, pois Secrets não aceitam Base64, apenas texto puro', 'Correta apenas quando o Secret é montado como variável de ambiente'],
        answer: 2, explain: 'Base64 apenas codifica texto e qualquer pessoa decodifica trivialmente. Segurança real de Secrets exige controle de acesso (RBAC) e criptografia em repouso (encryption at rest) no etcd.' },
      { q: 'Uma empresa contrata máquinas virtuais na nuvem, instala nela mesma o sistema operacional, o servidor web e a aplicação, deixando hardware físico e hipervisor sob responsabilidade do provedor. Esse modelo é:',
        options: ['SaaS (Software as a Service)', 'PaaS (Platform as a Service)', 'IaaS (Infrastructure as a Service)', 'FaaS (Function as a Service)', 'On-Premises integral'],
        answer: 2, explain: 'Em IaaS, o provedor gerencia infraestrutura física, rede e virtualização, e o cliente gerencia SO, runtime e aplicação. Em PaaS o provedor gerencia também o SO e runtime; em SaaS, tudo.' },
      { q: 'No Terraform, qual é a função principal do arquivo de estado (terraform.tfstate)?',
        options: ['Substituir os arquivos .tf com o código-fonte da infraestrutura', 'Mapear os recursos definidos na configuração para os recursos reais criados no provedor', 'Armazenar apenas as senhas criptografadas dos usuários do sistema', 'Executar o provisionamento de containers Kubernetes no lugar do kubelet', 'Servir como log de consultas SQL do banco de produção'],
        answer: 1, explain: 'O tfstate mapeia os blocos declarados nos arquivos .tf para os IDs reais no provedor, permitindo calcular o diff no plan. Ele não substitui os .tf e pode conter segredos em texto claro.' },
      { q: 'Na arquitetura de observabilidade de microsserviços, qual ferramenta/pilar é voltado especificamente para rastrear o caminho completo e a latência de uma requisição que atravessa vários serviços?',
        options: ['Tracing distribuído (com Trace ID e Span ID)', 'Apenas coleta de CPU por agente SNMP no Zabbix', 'Compactação de logs em arquivo texto sem correlação', 'Uso exclusivo de Dockerfile multi-stage', 'Merge fast-forward no Git'],
        answer: 0, explain: 'Tracing distribuído acompanha a requisição ponta a ponta entre serviços usando Trace ID e Spans (ex.: OpenTelemetry, Jaeger, ferramentas de APM), mostrando onde houve lentidão ou erro.' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [
    ['GitOps', 'Git como fonte única da verdade'],
    ['cgroups', 'limita CPU e RAM do container'],
    ['Ingress', 'roteia HTTP/HTTPS por host e path'],
    ['PaaS', 'provedor gerencia SO e runtime'],
    ['tfstate', 'mapeia código HCL à infra real'],
    ['Tracing', 'rastreia requisição entre serviços']
  ] },
  quick: [
    { q: 'Qual modelo de nuvem entrega o software pronto ao usuário final?', options: ['IaaS', 'PaaS', 'SaaS', 'Bare-metal'], answer: 2, explain: 'SaaS entrega a aplicação pronta (ex.: webmail, suíte de escritório).' },
    { q: 'Qual arquivo do Terraform guarda o mapeamento da infra real?', options: ['main.tf', 'terraform.tfstate', 'Dockerfile', 'values.yaml'], answer: 1, explain: 'O tfstate registra os recursos criados e seus atributos.' },
    { q: 'Qual tipo de Service K8s só é acessível dentro do cluster?', options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'Ingress'], answer: 0, explain: 'ClusterIP cria um IP virtual interno ao cluster.' },
    { q: 'Qual comando Git reaplica commits no topo de outra branch?', options: ['git clone', 'git stash', 'git rebase', 'git tag'], answer: 2, explain: 'Rebase move a base dos commits para a ponta da branch alvo.' },
    { q: 'Qual recurso Docker persiste dados além da vida do container?', options: ['Layer R/W', 'Volume', 'CMD', 'EXPOSE'], answer: 1, explain: 'Volumes mantêm dados mesmo após remover o container.' },
    { q: 'Qual pilar da observabilidade mede séries temporais como CPU?', options: ['Métricas', 'Traces', 'Logs', 'Commits'], answer: 0, explain: 'Métricas são valores numéricos ao longo do tempo (ex.: Prometheus).' }
  ],
  study: {
    title: 'Biblioteca de DevOps, IaC e Nuvem',
    chapters: [
      { title: 'Git, fluxos e GitOps',
        pages: [
          'Áreas do Git e Merge vs Rebase\n• 3 áreas: Working Tree (arquivos) → Staging/Index (git add) → Repositório (git commit)\n• Merge fast-forward: só avança o ponteiro sem criar commit extra\n• Merge 3-way: cria commit de merge preservando bifurcação\n• Rebase: reaplica commits no topo da branch alvo (histórico linear)',
          'Gitflow vs Trunk-Based\n• Gitflow: branches fixas main e develop + feature, release e hotfix\n• Gitflow combina com releases planejadas e versionadas\n• Trunk-Based Development (TBD): todos integram pequeno e rápido na main\n• TBD usa feature flags para esconder código incompleto e acelera CI/CD',
          'GitOps na prática\n• Git é a fonte única da verdade (Single Source of Truth) para app e infra\n• Tudo é declarativo e versionado via Pull Request / Merge Request\n• Modelo Pull (ArgoCD, Flux): agente dentro do cluster puxa o Git e reconcilia desvios\n• Modelo Push tradicional: esteira externa empurra alterações pro cluster'
        ],
        tip: 'Nunca faça git rebase em branch já publicada/compartilhada: reescreve hashes!',
        quiz: [
          { q: 'Sobre as estratégias de ramificação Gitflow e Trunk-Based Development, é correto afirmar que:',
            options: ['Gitflow proíbe branches de hotfix em produção', 'Trunk-Based Development depende de branches de release mantidas por meses', 'Trunk-Based favorece integração contínua com commits frequentes na main e uso de feature flags', 'Gitflow não utiliza branch principal para código em produção', 'Rebase mantém os hashes originais dos commits intactos'],
            answer: 2, explain: 'Trunk-Based integra rapidamente na branch principal (trunk) e usa feature flags. Gitflow tem main, develop, feature, release e hotfix; rebase gera novos hashes.' },
          { q: 'No modelo GitOps baseado em pull (como ArgoCD), quando alguém altera manualmente um recurso no cluster fora do Git:',
            options: ['O repositório Git é reescrito automaticamente com a mudança manual', 'O agente reconciliador detecta o desvio (drift) e restaura o estado declarado no Git', 'O cluster entra em modo somente leitura para sempre', 'Todos os containers são apagados imediatamente sem aviso', 'O GitOps exige reiniciar o servidor físico'],
            answer: 1, explain: 'No GitOps pull-based, o agente compara continuamente o estado real do cluster com o estado declarado no Git e corrige o drift.' }
        ] },
      { title: 'CI/CD e esteiras de entrega',
        pages: [
          'CI, Delivery e Deployment\n• CI (Integração Contínua): compilar, rodar testes e lint a cada push/PR\n• Continuous Delivery: artefato validado e pronto; deploy em produção tem aprovação manual\n• Continuous Deployment: passou em todos os testes, vai direto para produção\n• Feedback rápido reduz custo de correção de bugs',
          'Anatomia e ferramentas\n• Pipeline = Stages (fases) → Jobs (tarefas) → Steps (passos)\n• Runners/Agents executam os jobs; Artifacts passam arquivos entre fases\n• Jenkins: Jenkinsfile (Declarative/Scripted) com Controller e Agents\n• GitLab CI (.gitlab-ci.yml) e GitHub Actions (.github/workflows/*.yml)',
          'Estratégias de deploy seguro\n• Rolling Update: substitui instâncias antigas aos poucos sem parada\n• Blue-Green: dois ambientes idênticos (Blue ativo, Green novo); vira o roteador de uma vez (rollback instantâneo)\n• Canary: libera a nova versão para pequena % dos usuários e observa métricas antes de expandir'
        ],
        tip: 'Delivery = botão manual para produção; Deployment = automático até produção.',
        quiz: [
          { q: 'Qual estratégia de implantação mantém dois ambientes completos idênticos e realiza a virada de tráfego do antigo para o novo de forma imediata, permitindo rollback rápido?',
            options: ['Big Bang sem backup', 'Blue-Green Deployment', 'Recreate com janela de manutenção', 'Trunk-Based sem testes', 'Apenas build multi-stage'],
            answer: 1, explain: 'Blue-Green usa dois ambientes paralelos: valida no Green e aponta o balanceador para ele; se der erro, volta o ponteiro para o Blue imediatamente.' },
          { q: 'Em uma comparação entre Jenkins, GitLab CI e GitHub Actions, é correto afirmar que:',
            options: ['Nenhum deles suporta pipelines definidos como código no repositório', 'GitLab CI usa .gitlab-ci.yml e GitHub Actions usa workflows YAML em .github/workflows/', 'Jenkins não permite distribuir execução em agentes (agents)', 'GitHub Actions só funciona para linguagem Java', 'GitLab CI substitui o Dockerfile obrigatoriamente'],
            answer: 1, explain: 'Todas as três usam pipeline as code: Jenkinsfile, .gitlab-ci.yml e .github/workflows/*.yml, com execução em agents/runners.' }
        ] },
      { title: 'Docker e containers',
        pages: [
          'Container vs Máquina Virtual\n• VM: hipervisor virtualiza hardware e roda um SO convidado completo por VM\n• Container: compartilha o kernel do SO host (leve, inicia em segundos)\n• Namespaces: isolam visão (PID, rede, montagem, usuários)\n• cgroups (control groups): limitam consumo de CPU, memória e I/O',
          'Imagens, Containers e Dockerfile\n• Imagem: modelo imutável em camadas (layers); Container = instância rodando com camada gravável efêmera\n• Dockerfile: FROM (base), WORKDIR, COPY (copia local), RUN (executa no build)\n• CMD vs ENTRYPOINT: ENTRYPOINT fixa o executável; CMD passa argumentos padrão\n• Multi-stage build: compila num estágio e copia só o binário pro estágio final',
          'Volumes, Redes e Compose\n• Volumes: named volume (gerenciado pelo Docker) e bind mount (pasta do host) persistem dados; tmpfs fica em RAM\n• Redes: bridge (padrão isolada), host (usa rede do host direto), none (sem rede)\n• Docker Compose (compose.yml): sobe vários serviços, redes e volumes com um comando'
        ],
        tip: 'RUN roda na criação da IMAGEM (build); CMD/ENTRYPOINT rodam ao iniciar o CONTAINER.',
        quiz: [
          { q: 'Qual recurso do kernel Linux é responsável por limitar a quantidade de CPU e memória que um container Docker pode consumir?',
            options: ['Namespaces', 'cgroups (Control Groups)', 'Docker Compose', 'ENTRYPOINT', 'Bind mount'],
            answer: 1, explain: 'cgroups limitam e contabilizam recursos (CPU, RAM, I/O). Namespaces isolam o que o processo enxerga (PIDs, rede, arquivos).' },
          { q: 'Para gerar uma imagem Docker de produção pequena e sem compiladores expostos, a prática recomendada no Dockerfile é:',
            options: ['Usar apenas a instrução ADD em vez de COPY', 'Executar tudo como usuário root sem WORKDIR', 'Aplicar multi-stage build, copiando apenas os artefatos finais para uma imagem base enxuta', 'Substituir FROM por EXPOSE', 'Salvar o banco de dados dentro da imagem com RUN'],
            answer: 2, explain: 'Multi-stage build usa um estágio com SDK para compilar e copia só o binário/artefato para uma imagem final mínima.' }
        ] },
      { title: 'Kubernetes (K8s)',
        pages: [
          'Arquitetura do cluster\n• Control Plane: kube-apiserver (porta de entrada), etcd (banco chave-valor do estado), kube-scheduler (escolhe nó), controller-manager (mantém estado)\n• Worker Nodes: kubelet (agente do nó), kube-proxy (regras de rede), container runtime\n• Modelo declarativo: você declara o estado desejado em YAML e o K8s reconcilia',
          'Pod, Deployment e Service\n• Pod: menor unidade do K8s; 1+ containers que dividem IP e volumes\n• Deployment: gerencia ReplicaSets, escala réplicas, faz rolling update e rollback\n• Service: dá IP e DNS estáveis para Pods efêmeros\n• Tipos: ClusterIP (só interno), NodePort (porta no nó), LoadBalancer (externo em nuvem)',
          'Ingress, ConfigMap e Secret\n• Ingress: roteia tráfego HTTP/HTTPS (L7) por host/path e TLS para Services (precisa de Ingress Controller)\n• ConfigMap: guarda configurações não sensíveis (chave-valor, arquivos)\n• Secret: guarda senhas/chaves em Base64 (codificação, NÃO criptografia!)\n• Proteja Secrets com RBAC e criptografia em repouso no etcd'
        ],
        tip: 'Ingress NÃO é um tipo de Service: ele fica na frente dos Services roteando HTTP/HTTPS!',
        quiz: [
          { q: 'No Control Plane do Kubernetes, qual componente é o banco de dados distribuído chave-valor que armazena todo o estado e configuração do cluster?',
            options: ['kube-proxy', 'kubelet', 'etcd', 'Ingress Controller', 'kube-scheduler'],
            answer: 2, explain: 'O etcd guarda o estado do cluster. O kube-apiserver conversa com ele; scheduler aloca Pods; kubelet e kube-proxy rodam nos Worker Nodes.' },
          { q: 'Qual tipo de Service expõe a aplicação apenas dentro do próprio cluster Kubernetes, sendo o padrão quando nenhum tipo é especificado?',
            options: ['LoadBalancer', 'NodePort', 'ExternalName', 'ClusterIP', 'Ingress'],
            answer: 3, explain: 'ClusterIP é o tipo padrão e cria um IP interno acessível somente dentro do cluster.' }
        ] },
      { title: 'Nuvem, Terraform e Observabilidade',
        pages: [
          'Modelos de Nuvem (Serviço e Implantação)\n• IaaS: provedor cuida do físico/virtualização; você cuida de SO, runtime e app\n• PaaS: provedor cuida até do SO/runtime; você foca no código e dados\n• SaaS: tudo gerenciado pelo provedor; você só usa e configura\n• Implantação: Pública (compartilhada), Privada (dedicada), Híbrida (integra as duas)'
          ,
          'IaC e Terraform\n• Declarativo (diz o "o quê", ex.: Terraform) vs Imperativo (diz o "como", script passo a passo); busca idempotência\n• Blocos: provider (nuvem), resource (cria algo), data (lê existente), module (reuso)\n• Ciclo: terraform init → plan (prevê diff) → apply (aplica) → destroy\n• terraform.tfstate: guarda estado real; em equipe use backend remoto com state locking',
          'Observabilidade, Tracing e APM\n• Métricas: números no tempo (Prometheus faz pull /scrape com PromQL; Grafana exibe; Zabbix monitora infra/SNMP)\n• Logs: eventos textuais centralizados (ELK: Elasticsearch + Logstash + Kibana, ou OpenSearch)\n• Tracing distribuído e APM: acompanha a requisição entre microsserviços (Trace ID / Span ID) para achar gargalos'
        ],
        tip: 'Monitoring diz QUE quebrou; Observabilidade (Métricas + Logs + Traces) explica POR QUÊ.',
        quiz: [
          { q: 'Sobre a pilha de logs ELK e o monitoramento com Prometheus, assinale a opção correta.',
            options: ['Prometheus atua exclusivamente por recebimento passivo de traps SNMP', 'Na stack ELK, Logstash coleta/transforma, Elasticsearch indexa/busca e Kibana visualiza', 'Grafana é um banco de dados relacional que substitui o etcd no Kubernetes', 'Zabbix não suporta monitoramento de servidores por agente', 'Tracing distribuído dispensa a propagação de identificadores de requisição entre serviços'],
            answer: 1, explain: 'Na stack ELK (ou OpenSearch), Logstash/Beats coletam e tratam logs, Elasticsearch armazena e indexa, e Kibana cria visualizações. Prometheus coleta métricas via pull (scraping HTTP).' },
          { q: 'Em um projeto com Terraform usado por vários engenheiros ao mesmo tempo, qual prática evita corrupção do estado?',
            options: ['Subir o arquivo terraform.tfstate com senhas direto no repositório Git público', 'Usar backend remoto com suporte a state locking', 'Rodar terraform destroy antes de cada terraform plan', 'Substituir todos os providers por Dockerfiles', 'Editar o tfstate manualmente a cada deploy'],
            answer: 1, explain: 'Backend remoto (como S3 + DynamoDB ou Terraform Cloud) centraliza o estado e aplica lock para impedir dois apply simultâneos.' }
        ] }
    ]
  }
};

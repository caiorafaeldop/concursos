# DevOps, nuvem, contêineres e versionamento

`devops` · 14 questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.

## alego26-dev-q47 · ALEGO 2026

O departamento de TI da ALEGO que desenvolve soluções SaaS passa por um processo de modernização de sua plataforma. Apesar de contar com equipes especializadas em desenvolvimento, testes e operações, os times trabalham de forma segmentada, o que gera retrabalho, pouco compartilhamento de conhecimento e baixa visibilidade sobre o ciclo de entrega. A diretoria de TI identificou a necessidade de melhorar a colaboração entre as áreas, padronizar práticas, aumentar a previsibilidade das entregas e fortalecer a cultura de melhoria contínua. Como parte da transformação digital, a empresa considera adotar um modelo DevOps, buscando compreender quais são suas principais características e como elas podem apoiar a integração e o fluxo contínuo de valor.

Assinale qual das seguintes características é fundamental para o sucesso da implementação de DevOps em uma organização, promovendo a eficácia entre as equipes de desenvolvimento e operações.

- (A) Desenvolvimento sem feedback contínuo.
- (B) Cultura de blame (culpabilização).
- (C) Automação de processos manuais.
- (D) Segregação rígida entre equipes de desenvolvimento e operações.
- (E) Priorização de atualizações sem testes.

**Gabarito:** C

## alego26-dev-q58 · ALEGO 2026

Uma empresa de serviços digitais enfrenta atrasos nos releases e erros frequentes devido a processos manuais de integração e deploy. Para aumentar a eficiência e a confiabilidade das entregas, a área de TI avalia a adoção de práticas DevOps.

Assinale a afirmativa verdadeira sobre o papel da automação no DevOps.

- (A) A automação no DevOps é limitada apenas à automação de testes de software, não abrangendo outras etapas do ciclo de vida do desenvolvimento.
- (B) A implementação de automação no DevOps pode resultar em um aumento significativo no tempo de entrega de software devido à complexidade dos sistemas automatizados.
- (C) A automação é essencial para a operação eficiente dos pipelines de CI/CD, permitindo entrega e implantação de software mais rápidas e confiáveis.
- (D) A automação é irrelevante para ambientes de desenvolvimento pequenos, onde os desenvolvedores podem gerenciar manualmente a configuração e a entrega.
- (E) A automação em DevOps é um conceito recente e não possui impacto nas práticas ágeis já estabelecidas no desenvolvimento de software.

**Gabarito:** C

## amazul26-q57 · AMAZUL 2026

O Maven é baseado em um conceito central de fases de ciclo de vida (lifecycle phases). Considere o ciclo de vida padrão (default).

Assinale a opção que apresenta a sequência correta e obrigatória de fases que são executadas quando o comando mvn install é invocado na linha de comando.

- (A) validate, compile, test, package, verify, install, deploy
- (B) validate, compile, test, verify, install
- (C) initialize, validate, compile, test, package, install
- (D) process_sources, compile, test,  package, install, deploy
- (E) clean, validate, compile, test, package, install

**Gabarito:** A

## amazul26-q58 · AMAZUL 2026

Em um repositório Git local, o fluxo de trabalho básico envolve três áreas conceituais principais: Diretório de Trabalho (Working Directory), Área de Staging (Staging Area, ou Index) e Repositório Git (Git Directory/Repository). Considere que você modificou um arquivo existente (projeto.txt) no seu Diretório de Trabalho. Para que as alterações realizadas no arquivo sejam registradas permanentemente no histórico do repositório local, a sequência correta de comandos é:

- (A) git commit -a && git push
- (B) git add projeto.txt && git commit -m "Descrição da mudança"
- (C) git status && git commit projeto.txt
- (D) git push origin main
- (E) git checkout projeto.txt && git commit

**Gabarito:** B

## mpes26-q39 · MP/ES 2026 · gabarito preliminar

A orquestração de contêineres permite automatizar a implantação, o escalonamento e o gerenciamento de aplicações distribuídas.

Nesse contexto, ferramentas surgiram para administrar clusters de nós computacionais e garantir alta disponibilidade e eficiência operacional.

Diante do exposto, analise as afirmativas a seguir.

I. O Kubernetes é uma plataforma de orquestração de contêineres que permite automatizar a implantação, o escalonamento e a gestão de aplicações em clusters de nós computacionais.

II. O Rancher é uma ferramenta nativa do Kubernetes utilizada para o gerenciamento de clusters.

III. Em um cluster Kubernetes, os nós de trabalho executam os pods, enquanto o plano de controle é responsável pelo gerenciamento do estado do cluster.

Está correto o que se afirma em

- (A) II, apenas.
- (B) I e II, apenas.
- (C) I e III, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** C

## mpes26-q40 · MP/ES 2026 · gabarito preliminar

O Jenkins é um servidor de automação usado para suportar práticas de Integração Contínua e Entrega Contínua (CI/CD). Um de seus recursos centrais é o Jenkins Pipeline, que permite a modelagem de ciclos de vida de entrega de software como código (Pipeline-as-Code), geralmente definidos em um arquivo chamado Jenkinsfile. Nesse cenário, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.

(   ) Não é possível usar shell script em um Jenkins Pipeline.

(   ) Existem dois tipos de sintaxe para arquivos Jenkinsfile: Declarative e Scripted.

(   ) É uma boa prática combinar as etapas (steps) de um Pipeline em etapas únicas sempre que possível, a fim de reduzir a sobrecarga gerada pelo próprio mecanismo de execução.

As afirmativas são, respectivamente,

- (A) F – V – V.
- (B) F – F – V.
- (C) F – V – F.
- (D) V – V – V.
- (E) V – F – F.

**Gabarito:** A

## nav26-q45 · NAV Brasil 2026 · gabarito preliminar

O pipeline de Integração Contínua (CI) do sistema de radar secundário de um aeroporto federal foi configurado com ferramentas automatizadas de testes de segurança de aplicações. Na fase de compilação, o analisador emitiu um relatório estancando a esteira ao detectar o uso de funções inseguras de manipulação de strings em C++ que poderiam abrir brechas para corrupção de memória. O analista DevOps alegou que a esteira de build deveria ignorar o alerta, pois uma varredura dinâmica executada na aplicação rodando em ambiente de homologação simulado não conseguiu explorar a falha através de requisições de rede externas.

Com base nos conceitos que diferenciam as abordagens de segurança SAST (Análise Estática) e DAST (Análise Dinâmica), a decisão correta do engenheiro de software deve consistir em manter a esteira travada porque a técnica SAST

- (A) possui acesso completo ao código-fonte interno, conseguindo mapear caminhos de vulnerabilidade lógicos profundos ocultos ao DAST.
- (B) executa a aplicação em contêineres de isolamento sob estresse físico para simular o ataque de injeção de tráfego.
- (C) opera exclusivamente na camada de transporte de rede monitorando sessões HTTPS ativas em tempo real de execução.
- (D) dispensa o uso de assinaturas e regras heurísticas pré- configuradas para mapear falsos positivos operacionais.
- (E) altera dinamicamente o comportamento de bytecode compilado para emular o comportamento de um agente invasor.

**Gabarito:** A

## tjsc26-q38 · TJ/SC 2026

No sistema de controle de versão Git, há 3 comandos com nomes similares: reset, restore e revert.

Considerando esse contexto, relacione os comandos da coluna da esquerda às respectivas características, apresentadas na coluna da direita.

(   )  Restaura arquivos na árvore de trabalho (working tree) a partir do índice ou de outro commit, sem atualizar o ponteiro do seu branch. 1. reset

(   )  Atualiza o branch atual movendo o seu ponteiro (tip/HEAD) com o objetivo de adicionar ou remover commits, alterando o histórico do branch. 2. restore 3. revert

(   )  Um novo commit é criado, revertendo alterações introduzidas por commits anteriores.

Assinale a opção que indica a relação correta, na ordem apresentada.

- (A) 1 – 2 – 3.
- (B) 1 – 3 – 2.
- (C) 2 – 1 – 3.
- (D) 2 – 3 – 1.
- (E) 3 – 2 – 1.

**Gabarito:** C

## tjsc26-q49 · TJ/SC 2026

O setor de tecnologia de um tribunal desenvolveu uma aplicação web composta por três serviços: cadastro de usuários, consulta processual e geração de relatórios. Cada serviço possui dependências próprias e deve ser implantado de forma padronizada nos ambientes de desenvolvimento, homologação e produção. Além disso, a equipe precisa distribuir réplicas desses serviços em diferentes nós de um cluster, reiniciar automaticamente instâncias com falha, ampliar a quantidade de réplicas em períodos de maior demanda e administrar, por uma interface centralizada, mais de um cluster Kubernetes utilizado pela instituição.

Nesse contexto, é correto afirmar que

- (A) o Docker permite empacotar aplicações e dependências em containers, o Kubernetes orquestra a implantação e o escalonamento desses containers, e o Rancher auxilia na gestão centralizada de clusters Kubernetes.
- (B) o Docker permite empacotar aplicações e dependências em containers, o Kubernetes orquestra a implantação e o escalonamento desses containers, e o Rancher é um formato de imagem utilizado para distribuir containers.
- (C) o Docker permite empacotar aplicações e dependências em containers, o Kubernetes é utilizado principalmente para criar imagens de containers, e o Rancher auxilia na gestão centralizada de clusters Kubernetes.
- (D) o Docker é utilizado principalmente para empacotar aplicações e dependências em máquinas virtuais completas, o Kubernetes orquestra a implantação e o escalonamento de containers, e o Rancher auxilia na gestão centralizada de clusters Kubernetes.
- (E) o Docker permite empacotar aplicações e dependências em containers, o Kubernetes orquestra a implantação e o escalonamento desses containers, e o Rancher substitui a necessidade de clusters Kubernetes por execução local isolada.

**Gabarito:** A

## tjsc26-q59 · TJ/SC 2026

Com relação aos fundamentos, características e arquitetura da computação em nuvem, assinale (V) para afirmativa verdadeira e (F) para falsa.

(   ) A resiliência na computação em nuvem pode abranger a disponibilidade de recursos em uma única nuvem ou entre múltiplas nuvens.

(   ) A arquitetura de computação em nuvem não contempla virtualização, pois os recursos são fisicamente dedicados a cada usuário.

(   ) A elasticidade é uma característica da computação em nuvem que permite o redimensionamento dos recursos de TI na nuvem conforme a demanda.

As afirmativas são, respectivamente,

- (A) V – V – F.
- (B) F – F – V.
- (C) V – F – V.
- (D) F – V – V.
- (E) V – F – F.

**Gabarito:** C

## tjsc26-q60 · TJ/SC 2026

Considerando os modelos de serviço em computação em nuvem — também denominados modelos de entrega de nuvem ou modelos de entrega de serviços em nuvem —, assinale a afirmativa correta.

- (A) Um provedor de nuvem pode oferecer serviços conforme os modelos IaaS, PaaS ou SaaS, os quais possuem escopos exclusivos e não relacionados entre si.
- (B) O modelo IaaS oferece um serviço pronto para uso, cuja configuração não é facultada ao consumidor.
- (C) O consumidor de nuvem em um modelo PaaS possui acesso integral aos recursos de TI.
- (D) O modelo SaaS permite a oferta de um serviço reutilizável.
- (E) Em ambos os modelos, PaaS e SaaS, o provedor de nuvem fornece acesso à infraestrutura física aos consumidores.

**Gabarito:** D

## tjsc26-q61 · TJ/SC 2026

Com relação aos tipos de nuvens, no contexto da computação em nuvem, analise os itens a seguir.

I. Uma nuvem tipo híbrida é uma combinação de dois ou mais modelos de implantação de nuvem.

II. Uma nuvem tipo pública é aquela que provê os serviços do setor público do Estado, de forma gratuita aos cidadãos.

III. Um provedor de serviço em nuvem do tipo privada não oferece o modelo SaaS.

Está correto o que se afirma em

- (A) I, apenas.
- (B) III, apenas.
- (C) I e II, apenas.
- (D) I e III, apenas.
- (E) II e III, apenas.

**Gabarito:** A

## tjsc26-q62 · TJ/SC 2026

A computação em nuvem é um modelo que permite o acesso sob demanda a recursos computacionais, como rede, servidores e armazenamento. No contexto de desenvolvimento de software em nuvem e uso de containers, considere os itens a seguir.

I. Recurso que pode ser compartilhado pelos containers com o sistema operacional do hospedeiro, mas não pelas máquinas virtuais.

II. Orquestrador de containers.

III. Novo modelo de desenvolvimento em que as aplicações são feitas para a nuvem, e não adaptadas a ela.

Assinale a opção que apresenta, respectivamente, os recursos ou conceitos listados.

- (A) Kernel, Docker, IaaS.
- (B) Cluster, Node, Microserviços.
- (C) Kernel, Kubernetes, Cloud Native.
- (D) Hardware, Hypervisor, Cluster.
- (E) Sistema de arquivos base, Kubernetes, DevOps.

**Gabarito:** C

## tjsc26-q73 · TJ/SC 2026

Uma arquitetura utiliza:

• aplicação primária on-premise;

• réplica em nuvem atualizada continuamente;

• mecanismo de failover por DNS, com troca automática de endpoint; e

• pequeno atraso na propagação do DNS.

Considerando esse cenário, é correto afirmar que essa arquitetura

- (A) usa redundância ativa-ativa com RPO e RTO nulos.
- (B) adota uma estratégia híbrida com failover automático, sujeita a pequenas janelas de indisponibilidade.
- (C) caracteriza uma estratégia de Warm Site, cuja ativação do endpoint em nuvem exige intervenção na camada de aplicação.
- (D) implementa tolerância a falhas, garantindo a persistência de sessões de usuário durante o failover.
- (E) emprega replicação assíncrona, cujo RTO é limitado exclusivamente pela largura de banda do link de sincronismo.

**Gabarito:** B

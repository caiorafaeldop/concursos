# Programação (linguagens, POO, algoritmos, estruturas de dados, web/APIs)

`programacao` · 40 questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.

## alego26-sis-q44 · ALEGO 2026

Abstração em Programação Orientada a Objetos – POO (ou Object- Oriented Programming, OOP) corresponde a uma visão ou representação de uma entidade que inclui apenas os atributos mais significativos. Com relação à JAVA e a OOP, assinale (V) para a afirmativa verdadeira e (F) para a falsa.

(   ) O Java emprega uma adesão consistente aos princípios orientados a objetos, tendo a abstração como supressão intencional, ou ocultação, de alguns detalhes de um processo ou artefato, focando nas características e comportamentos essenciais de um objeto do mundo real.

(   ) Java não permite classes sem pais, pois a herança é mandatória e centralizada, e usa dynamic binding  (Ligação Dinâmica ou Tardia) como comportamento padrão para métodos de instância em Java para vincular chamadas de método às definições de métodos, que corresponde ao Polimorfismo (de inclusão ou sobreposição).

(   ) Java usa interfaces para fornecer uma forma de suporte à herança múltipla, que não possui todas as desvantagens da herança múltipla real.

As afirmativas são, respectivamente,

- (A) F – F – F.
- (B) V – V – V.
- (C) V – F – F.
- (D) V – F – V.
- (E) F – F – V.

**Gabarito:** B

## alego26-sis-q45 · ALEGO 2026

Programação Orientada a Objetos  - POO (ou Object Oriented Programming OOP),  é uma maneira de organizar código em um conjunto as seções com dados e comportamentos relacionados. Destaca-se que o Python é uma linguagem de programação interpretada, interativa e orientada a objetos. Dos benefícios de utilizar Python na aplicação na Engenharia de Dados, podem ser identificados: Reutilização de código; Modularidade; Abstração; Flexibilidade; Segurança; e, Maior produtividade. Abaixo aponte a descrição que representa os benefícios de utilizar Python na aplicação na Engenharia de Dados, com fundamento nos princípios de orientação a objetos é

- (A) Flexibilidade, pois o encapsulamento possibilita representar objetos complexos de forma mais simples e fácil de entender, tornando o código mais legível e compreensível para outros desenvolvedores.
- (B) Reutilização de código, pois por meio da abstração podemos criar novas classes com base em outras já existentes
- (C) Modularidade, ao utilizar o encapsulamento.
- (D) Segurança, pois a abstração e a interdependência funcional tornam o código uma prática produtiva para a equipe.
- (E) Maior produtividade, pela interação entre os objetos poder ser limitada quanto a dados internos de um objeto devido ao Polimorfismo.

**Gabarito:** C

## alego26-sis-q51 · ALEGO 2026

Java foi uma das linguagens que popularizou o uso de Padrões de Projeto (Design Patterns) no desenvolvimento corporativo, transformando esses conceitos em padrões de mercado para criar sistemas robustos. Com relação à Linguagem de desenvolvimento JAVA, analise os itens a seguir:

I. O desenvolvimento de aplicações empresariais, APIs RESTful e microsserviços, focando em arquitetura e produtividade, pode ser obtido pelo uso de Frameworks (Spring Boot, Quarkus).

II. A partir do Java 8 (JSR 335: Lambda Expressions for the Java™ Programming Language) houve transição do paradigma puramente imperativo para o paradigma funcional, permitindo que o código Java fosse mais conciso, legível e preparado para processamento paralelo.

III. O acesso a dados em Java pode ocorrer pelo uso de frameworks ORM  (Object-Relational Mapping), como o Hibernate, sendo viabilizado de forma robusta pela API JDBC que provê a conectividade base, e evolui para uma gestão estruturada através da especificação Jakarta Persistence (JPA).

Está correto o que se afirma em

- (A) III, apenas
- (B) I e II, apenas
- (C) II e II, apenas
- (D) I e III, apenas
- (E) I, II e III.

**Gabarito:** E

## alego26-sis-q52 · ALEGO 2026

Com relação aos Métodos Dúnder (ou Dunder, ou mágicos) em Python, assinale V para a afirmativa verdadeira e F para a falsa.

(   ) são funções especiais que começam e terminam com dois sublinhados onde são criadas variáveis privadas para evitar conflitos de nomes em herança.

(  ) São métodos especiais onde o atributo (ou método) é destinado ao uso dentro do módulo ou classe

(   ) são funções especiais que somente contém dois sublinhados no início (__nome), resultando em indicador “fraco” de uso interno.

As afirmativas são, respectivamente,

- (A) F – F – F.
- (B) V – F – V.
- (C) F – F – V.
- (D) F – V – F.
- (E) V – V – V.

**Gabarito:** A

## alego26-sis-q69 · ALEGO 2026

Em Python a função é um módulo de programa independente que foi especialmente escrito para implementar os requisitos da função. O programa que chama a função é chamado de calling program. Com relação ao uso do Python, analise os itens a seguir:

I. Uma função recursiva, tem um calling program com uma função definida (escrita) dentro do corpo de outra função.

II. O algoritmo de redução da dimensionalidade Principal component analysis (PCA), presente na biblioteca Scikit-Learn Library, é usada para decompor um conjunto de dados multivariado, podendo sua capacidade de estimar quantos componentes são necessários para descrever os dados ser determinada observando o Cálculo médio de Autovalores e Autovetores.

III. Modelos de Large Language Models (LLMs) foram incorporados ao Python, por meio de camadas de abstração (bibliotecas), que estabeleceram facilidade de integração por meio de Processamento matemático em GPU (pela Infraestrutura/Base), Download e execução de modelos open- source (pelo Acesso a Modelos), Criação de fluxos de trabalho e agentes multitarefa (pela Orquestração) e conexão da IA com documentos e bases de dados (pela Integração de Dados).

Está correto o que se afirma em

- (A) I, apenas.
- (B) II, apenas.
- (C) III, apenas.
- (D) I e III, apenas.
- (E) I, II e III.

**Gabarito:** C

## alego26-dev-q42 · ALEGO 2026

A equipe de desenvolvimento da ALEGO está trabalhando em um sistema de gerenciamento de projetos. O gerente de projetos solicitou a implementação de uma funcionalidade que permita revisar a lista de tarefas atribuídas a cada membro da equipe e gerar um relatório com base em certas condições, como a prioridade das tarefas e o status de cada uma. Durante a implementação desta funcionalidade, a equipe deve utilizar estruturas de desvio e repetição corretamente. Em relação ao uso dessas estruturas em Java, qual delas é correta:

- (A) O comando if pode ser utilizado para verificar se uma tarefa está marcada como "concluída" e, caso não esteja, o programa deve continuar a verificar as demais tarefas.
- (B) O loop for deve ser usado para executar um código que não depende da quantidade de tarefas da lista, apenas para inicializar variáveis de contagem.
- (C) É possível usar um switch para comparar a prioridade de uma tarefa, mas só se o valor a ser comparado for do tipo String.
- (D) Aninhando um loop while dentro de um loop for, o programa irá executar o código do loop while várias vezes até que a condição do for seja falsa, independente do estado da condição do while.
- (E) Um loop infinito deve ser utilizado em situações onde as condições de parada não são necessárias ou não são claras no início do desenvolvimento.

**Gabarito:** A

## alego26-dev-q48 · ALEGO 2026

No contexto do desenvolvimento de aplicações web, o JavaScript é uma linguagem amplamente utilizada para implementar comportamentos dinâmicos e interativos.

Assinale a opção que apresenta a sintaxe correta para uma declaração condicional if que verifica se a variável x é maior que 10 e, caso verdadeiro, imprime "Maior que 10"

- (A) if x > 10 { console.log("Maior que 10"); }
- (B) if (x >= 10) console.log("Maior que 10")
- (C) if (x > 10) { console.log("Maior que 10"); } else { console.log("Menor ou igual a 10"); }
- (D) if [x > 10] { console.log("Maior que 10"); }
- (E) if (x > 10): { console.log("Maior que 10"); }

**Gabarito:** C

## alego26-dev-q49 · ALEGO 2026

Assumindo que a Assembleia Legislativa do Estado de Goiás irá iniciar um processo de modernização onde há a necessidade de atualizar sistemas administrativos e legislativos, adotar tecnologias mais seguras e eficientes e fortalecer a capacidade técnica interna para desenvolver e manter soluções digitais alinhadas às demandas de transparência, interoperabilidade e gestão pública. Com relação ao desenvolvimento de sistemas, assinale (V) para a afirmativa verdadeira e (F) para a falsa.

(   ) A modularização de um sistema é importante apenas na fase de desenvolvimento.

(   ) Sistemas desenvolvidos hoje são frequentemente adaptáveis às necessidades específicas de empresas, conectando-se com filiais, parceiros e fornecedores.

(   ) A programação estruturada se concentra em dividir a lógica de programação em funções, enquanto a programação orientada a objetos foca na criação de módulos independentes somente.

(   ) A abstração em programação orientada a objetos permite ignorar detalhes desnecessários e focar em funcionalidades essenciais, promovendo soluções mais eficientes.

As afirmativas são, respectivamente,

- (A) F – V – F – V.
- (B) F – F – V – F.
- (C) V – V – F – V.
- (D) V – F – V – F.
- (E) V – V – V – V.

**Gabarito:** A

## alego26-dev-q50 · ALEGO 2026

O desenvolvimento para dispositivos móveis, tanto em Android quanto em iOS, abrange a criação de aplicações projetadas para operar em ambientes altamente dinâmicos, explorando recursos nativos dos smartphones e tablets para oferecer experiências interativas, responsivas e alinhadas às demandas atuais de mobilidade e conectividade. Com relação a estes sistemas operacionais móveis, podemos afirmar que

- (A) possuem grande variedade de fabricantes e alta personalização do sistema.
- (B) utilizam a linguagem Kotlin como sua linguagem de desenvolvimento nativa principal.
- (C) os aplicativos devem ajustar sua interface e comportamento a diferentes tamanhos, resoluções e proporções de tela, garantindo uma experiência consistente e funcional em meio à ampla diversidade de dispositivos presentes no mercado.
- (D) o iOs é mais versátil em termos de integração com diferentes plataformas.
- (E) os aplicativos iOs podem ser baixados diretamente da Play Store, a loja de aplicativos da Apple.

**Gabarito:** C

## alego26-dev-q53 · ALEGO 2026

A ALEGO está passando por um processo de padronização na troca de informações entre seus diversos sistemas internos e aplicações de parceiros externos. Para garantir interoperabilidade, estruturação consistente dos dados e integração com soluções legadas, a equipe de TI precisa definir um formato de representação de dados. Nesse cenário, surge a necessidade de avaliar o uso de XML (Extensible Markup Language).

Assinale a alternativa relativa a este formato de representação de dados.

- (A) É um padrão que fornece um diretório para serviços web, permitindo que empresas publiquem e descubram serviços online. Facilita a integração entre diferentes sistemas.
- (B) É um estilo arquitetônico para o desenvolvimento de serviços web que utiliza princípios do protocolo HTTP. É amplamente utilizado para construir APIs pela sua simplicidade e eficiência.
- (C) Formato leve de troca de dados utilizado para armazenamento e intercâmbio de informações, que é de fácil compreensão e pode ser manipulado com a sintaxe do JavaScript.
- (D) Linguagem de marcação projetada para descrever o conteúdo das páginas da web de forma estruturada, permitindo o armazenamento e a transmissão de dados.
- (E) Uma linguagem de transformação que permite converter documentos de um determinado tipo em outros formatos, como HTML ou texto plano. É útil para modificar a apresentação de dados.

**Gabarito:** D

## alego26-dev-q54 · ALEGO 2026

A área de integração de sistemas da ALEGO está modernizando sua arquitetura de dados e precisa definir o padrão para troca de informações entre as novas aplicações internas e serviços externos. A equipe busca um formato leve, amplamente utilizado em APIs modernas e facilmente interpretado por diferentes linguagens de programação. Durante a reunião de avaliação técnica, surge o seguinte questionamento: no processo de padronização da comunicação entre sistemas, a equipe considera utilizar JSON para troca de informações.

Assinale a alternativa que descreve corretamente esse formato:

- (A) JSON é uma linguagem de marcação hierárquica baseada em tags, semelhante ao XML.
- (B) JSON é um protocolo de comunicação que define regras completas de transmissão de mensagens entre servidores.
- (C) JSON é um banco de dados orientado a documentos, usado para armazenar coleções de dados de forma persistente.
- (D) JSON é um formato leve de troca de dados baseado em pares de chave-valor, amplamente utilizado em integrações web modernas.
- (E) JSON é uma linguagem de programação voltada ao desenvolvimento de aplicações web e móveis.

**Gabarito:** D

## alego26-dev-q56 · ALEGO 2026

A Diretoria de Tecnologia da Informação está modernizando seu sistema de gestão de entregas. A equipe de desenvolvimento Java é responsável por implementar regras de negócio que validam, processam e classificam pedidos antes de enviá-los ao módulo de roteirização. No desenvolvimento do novo módulo de pré- processamento de pedidos, a equipe precisa escolher a estrutura de controle mais adequada para executar uma sequência de verificações até que o pedido seja considerado válido.

Assinale a opção que representa corretamente uma estrutura de controle existente no Java e apropriada para implementar esse tipo de repetição condicional.

- (A) repeat...until
- (B) loop...until
- (C) while
- (D) forEach(condition)
- (E) switch(condition == true)

**Gabarito:** C

## alego26-dev-q61 · ALEGO 2026

Com o aumento das integrações entre sistemas internos e aplicações externas, a instituição está revisando sua estratégia de comunicação entre serviços. A equipe de TI precisa garantir que as novas soluções ofereçam interoperabilidade, padronização e facilidade de manutenção. Para isso, durante a definição da arquitetura de integração, surge a necessidade de avaliar as características essenciais que uma API deve apresentar para garantir segurança, consistência e eficiência no acesso a dados e funcionalidades corporativas. Nesse sentido é válido afirmar que

- (A) há oportunidades de gerar receita e benefícios através do uso de APIs, que podem ser gerenciadas e monetizadas de forma estratégica.
- (B) uma API mantém informações sobre o estado da interação entre o cliente e o servidor ao longo do tempo, para permitir comunicações dependentes de um contexto previamente estabelecido.
- (C) a API permite comunicação baseada em HTTP e dependem de estados definidos, simplificando a integração entre aplicações.
- (D) as interfaces gráficas de uma API se comunicam através de chamadas e respostas de código.
- (E) as APIs são protocolos exclusivos que especificam e descrevem sistemas pertencentes ao mesmo ecossistema se comunicam.

**Gabarito:** A

## alego26-dev-q63 · ALEGO 2026

No processo de modernização do sistema interno de gestão de contratos da empresa, a equipe de desenvolvimento precisa adotar uma tecnologia padrão para garantir a persistência dos dados de maneira consistente e eficiente.

Considerando a necessidade de integração com aplicações Java já existentes e o uso de boas práticas de mapeamento objeto- relacional, assinale a alternativa que possibilita a persistência de dados e o gerenciamento eficiente das informações.

- (A) JavaFX.
- (B) Servlets.
- (C) JSF (JavaServer Faces).
- (D) JPA (Java Persistence API).
- (E) EJB (Enterprise JavaBeans).

**Gabarito:** D

## alego26-dev-q67 · ALEGO 2026

O departamento de TI está desenvolvendo um sistema de gerenciamento de pedidos online. O sistema precisa implementar regras de negócios complexas que determinam o status do pedido com base em diferentes condições, como o valor do pedido, o tipo de cliente e a disponibilidade do produto. Durante uma reunião de planejamento, a equipe discutiu a implementação de estruturas de controle para lidar com essas lógicas.

Assinale qual das seguintes implementações de estruturas de controle em Java determina corretamente o status de um pedido, considerando que um pedido deve ser considerado "Aprovado" se o total for maior que R$ 500,00 e o cliente for um cliente Vip, ou se o total for menor ou igual a R$ 500,00 e o produto estiver disponível.

- (A) if (total >= 500 && (cliente.isVip() || produto.isDisponivel())) status = "Aprovado"; else status = "Reprovado";
- (B) if (total < 500) status = "Reprovado"; else if (cliente.isVip() && produto.isDisponivel()) status = "Aprovado"; else status = "Reprovado";
- (C) if (total == 500 && cliente.isVip()) status = "Aprovado"; else status = "Reprovado";
- (D) if (total <= 500 || cliente.isVip()) status = "Aprovado"; else if (produto.isDisponivel()) status = "Aprovado"; else status = "Reprovado";
- (E) if (total > 500 && cliente.isVip()) status = "Aprovado"; else if (total <= 500 && produto.isDisponivel()) status = "Aprovado"; else status = "Reprovado";

**Gabarito:** E

## amazul26-q60 · AMAZUL 2026

O Android passou por uma mudança significativa em seu ambiente de tempo de execução (runtime). Nas versões mais antigas (até o Android KitKat), a Dalvik Virtual Machine era utilizada para executar o bytecode dos aplicativos. A partir do Android Lollipop, um novo ambiente foi introduzido para substituir a Dalvik, oferecendo melhor desempenho e eficiência. O ambiente de tempo de execução que substituiu a Dalvik Virtual Machine no Android e a principal técnica de compilação que ele emprega são, respectivamente,

- (A) Java Virtual Machine (JVM) e compilação Just-In-Time (JIT)
- (B) Dalvik Turbo e compilação AOT
- (C) ART Runtime Environment e compilação JIT
- (D) Android RunTime (ART) e compilação Ahead-Of-Time (AOT)
- (E) Android Optimized Runtime (AOR) e compilação Interpretada Redação

**Gabarito:** D

## mpes26-q21 · MP/ES 2026 · gabarito preliminar

O desenvolvimento web moderno exige domínio das tecnologias HTML5 e CSS3, que trabalham de forma complementar para estruturar e estilizar páginas. Enquanto o HTML define a semântica e a estrutura do conteúdo, o CSS3 introduz recursos avançados de layout, como Flexbox e Grid, além de seletores sofisticados e propriedades de transformação e transição. Considere o seguinte trecho de código: <style> .container { display: flex; justify-content: space-between; align-items: center; } .item:nth-child(2n) { background-color: lightblue; } </style> <div class="container"> <div class="item">A</div> <div class="item">B</div> <div class="item">C</div> <div class="item">D</div> </div> Sobre o código apresentado, considerando o comportamento padrão dos navegadores modernos compatíveis com as especificações do W3C, assinale a afirmativa correta.

- (A) A propriedade justify-content: space-between distribui os itens com espaçamento igual entre eles e também nas extremidades do contêiner, deixando margens laterais iguais aos espaços internos.
- (B) O seletor .item:nth-child(2n) aplicará a cor de fundo lightblue apenas aos itens "A" e "C", pois eles ocupam as posições ímpares dentro do contêiner.
- (C) A propriedade align-items: center alinha os itens horizontalmente ao centro do eixo principal do contêiner flexível.
- (D) O seletor .item:nth-child(2n) aplicará a cor de fundo lightblue aos itens "B" e "D", pois corresponde aos elementos filhos cujas posições são múltiplos de 2.
- (E) Para que o Flexbox funcione corretamente, seria obrigatório declarar também a propriedade flex-direction: row, caso contrário os itens seriam empilhados verticalmente por padrão.

**Gabarito:** D

## mpes26-q22 · MP/ES 2026 · gabarito preliminar

O Bootstrap é um dos frameworks front-end mais utilizados no desenvolvimento web. Ele oferece um sistema de grid responsivo baseado em 12 colunas, componentes pré-estilizados e classes utilitárias que agilizam a construção de interfaces adaptáveis a diferentes tamanhos de tela, seguindo a abordagem mobile-first. Considere o seguinte trecho de código utilizando o framework Bootstrap 5: <div class="container"> <div class="row"> <div class="col-12 col-md-6 col-lg-4">Bloco 1</div> <div class="col-12 col-md-6 col-lg-4">Bloco 2</div> <div class="col-12 col-md-6 col-lg-4">Bloco 3</div> </div> </div> Sobre o código apresentado, considerando o comportamento padrão do sistema de grid do Bootstrap 5 e sua abordagem mobile- first,  assinale a afirmativa correta.

- (A) Em telas grandes (a partir do breakpoint lg), cada bloco ocupará 4 colunas do grid de 12, resultando em três blocos dispostos lado a lado em uma única linha.
- (B) Em dispositivos móveis (abaixo do breakpoint md), cada bloco ocupará 6 colunas do grid, fazendo com que dois blocos apareçam por linha.
- (C) A classe col-md-6 será aplicada exclusivamente em telas que correspondam ao breakpoint md, sendo ignorada nos breakpoints superiores como lg e xl.
- (D) O Bootstrap 5 utiliza a abordagem desktop-first, de modo que a classe col-12 só será aplicada caso nenhuma media query de resolução superior seja ativada pelo navegador.
- (E) A classe container faz com que o conteúdo ocupe 100% da largura da tela em todos os breakpoints, sem margens laterais, comportando-se de forma idêntica à classe container-fluid.

**Gabarito:** A

## mpes26-q23 · MP/ES 2026 · gabarito preliminar

O Spring é um dos frameworks mais consolidados no ecossistema Java para o desenvolvimento de aplicações corporativas. Por meio de conceitos como Inversão de Controle (IoC) e Injeção de Dependências (DI), o Spring promove o baixo acoplamento entre componentes, enquanto o Spring Boot simplifica a configuração e a inicialização de projetos por meio de convenções e autoconfiguração. Considere o seguinte trecho de código utilizando Spring Boot: @RestController @RequestMapping("/produtos") public class ProdutoController { @Autowired private ProdutoService produtoService; @GetMapping("/{id}") public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) { Produto produto = produtoService.buscarPorId(id); return ResponseEntity.ok(produto); } @PostMapping public ResponseEntity<Produto> salvar(@RequestBody Produto produto) { Produto salvo = produtoService.salvar(produto); return ResponseEntity.status(HttpStatus.CREATED).body(salvo); } } Sobre o código apresentado, considerando os conceitos do Spring Framework e o comportamento padrão do Spring Boot, assinale a afirmativa correta.

- (A) A anotação @PathVariable no método buscarPorId captura parâmetros enviados no corpo da requisição HTTP, funcionando de forma idêntica à anotação @RequestBody.
- (B) A anotação @PostMapping configura o método salvar para responder a requisições do tipo HTTP GET, sendo apenas um alias sintático para @GetMapping com semântica de criação.
- (C) A anotação @Autowired realiza a instanciação manual do objeto ProdutoService, exigindo que o desenvolvedor implemente explicitamente o padrão de projeto Factory para que a injeção funcione.
- (D) A anotação @RestController é equivalente à combinação das anotações @Controller e @ResponseBody, fazendo com que os métodos da classe retornem os dados diretamente no corpo da resposta HTTP, por padrão em formato JSON.
- (E) A anotação @RequestMapping("/produtos") aplicada à classe exige que cada método declare novamente o caminho completo / produtos em suas respectivas anotações de mapeamento, caso contrário os endpoints não serão registrados.

**Gabarito:** D

## mpes26-q26 · MP/ES 2026 · gabarito preliminar

A plataforma .NET oferece diferentes modelos de programação para construção de aplicações, incluindo abordagens orientadas a serviços, padrões arquiteturais tradicionais e modelos baseados em páginas. Entre essas abordagens, algumas priorizam a separação estrita de responsabilidades, enquanto outras favorecem maior coesão entre interface e lógica.

Nesse contexto, assinale a opção que apresenta uma das principais características do modelo Razor Pages no ecossistema .NET.

- (A) Segue rigidamente a separação em camadas proposta pelo padrão MVC, exigindo a definição explícita de controllers para cada requisição.
- (B) Baseia-se em consultas declarativas com LINQ como mecanismo central de organização da lógica de aplicação e navegação entre páginas.
- (C) Implementa, de forma obrigatória, o padrão de APIs RESTful, sendo utilizado exclusivamente para exposição de serviços e manipulação de dados via HTTP.
- (D) Restringe a interação com outras camadas da aplicação, limitando seu uso à renderização estática de conteúdo sem acesso a serviços ou dados dinâmicos.
- (E) Adota uma abordagem orientada a páginas, na qual cada unidade de interface encapsula sua lógica associada, reduzindo a necessidade de separação explícita em controllers.

**Gabarito:** E

## mpes26-q27 · MP/ES 2026 · gabarito preliminar

Considerando boas práticas de arquitetura de APIs REST, avalie as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.

(   ) Em APIs REST, a semântica do método HTTP integra o contrato da operação, de modo que a leitura de um recurso não deve ser modelada com método cujo significado indique alteração de estado.

(   ) A criação de novos recursos em uma coleção pode ser realizada por meio de requisição PUT dirigida ao endpoint correspondente à coleção, com retorno de um novo identificador gerado pelo servidor.

(   ) Em APIs REST, a utilização de um código HTTP uniforme para respostas de êxito e de falha não compromete a semântica da interação, desde que o corpo da mensagem descreva adequadamente o resultado da requisição.

As afirmativas são, respectivamente,

- (A) V – V – V.
- (B) V – V – F.
- (C) V – F – F.
- (D) F – V – F.
- (E) F – F – V.

**Gabarito:** C

## mpes26-q29 · MP/ES 2026 · gabarito preliminar

Considerando a especificação oficial do GraphQL, analise a operação a seguir, elaborada por uma equipe para consultas de clientes e pedidos em uma API. query BuscarCliente($id: ID!, $limite: Int = 10) { c1: cliente(id: $id) { id nome pedidos(limite: $limite) { total itens } } c2: cliente(id: $id) { id nome } } ,

Com base no código e nas regras da linguagem, avalie as afirmativas a seguir.

I.   Os aliases c1 e c2 definem nomes distintos, na resposta, para duas seleções de consulta ao mesmo cliente.

II. Se o campo itens for do tipo objeto ou lista de objetos, a operação será inválida por faltar subseleção para esse campo.

III. Caso a variável $limite não seja informada na execução da operação, será usado o valor padrão 10.

Está correto o que se afirma em

- (A) II, apenas.
- (B) I e II, apenas.
- (C) I e III, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** E

## mpes26-q30 · MP/ES 2026 · gabarito preliminar

Uma equipe mantém uma API REST documentada por meio de uma especificação OpenAPI 3.x, exibida no Swagger UI. Parte dos endpoints exige autenticação por token do tipo bearer no formato JWT, enviado no cabeçalho Authorization. Contudo, na interface gerada, essas operações não exibem o botão Authorize nem ficam corretamente marcadas como protegidas. Sem alterar a implementação da API e atuando apenas na especificação OpenAPI, a equipe precisa configurar a documentação para que o Swagger UI reconheça formalmente esse mecanismo de segurança e permita seu uso nas operações protegidas.

Nesse contexto, assinale a opção que apresenta a medida tecnicamente mais adequada.

- (A) Definir, em components/securitySchemes, um esquema de segurança do tipo http com scheme: bearer, podendo indicar bearerFormat: JWT, e aplicá-lo por meio de security no nível global ou apenas nas operações protegidas.
- (B) Declarar, em components/schemas, um objeto chamado Authorization, com um campo obrigatório token, e referenciá- lo nas operações que exigem autenticação.
- (C) Adicionar, em cada operação protegida, um parâmetro em header com o nome Authorization, sem definir esquema de segurança específico na especificação.
- (D) Definir, em components/securitySchemes, um esquema do tipo apiToken, com in: header e name: Authorization, e associá-lo às operações protegidas por meio de security.
- (E) Definir, em components/securitySchemes, um esquema do tipo http com scheme: basic e associá-lo às operações protegidas, informando que o token JWT será enviado no cabeçalho Authorization.

**Gabarito:** A

## mpes26-q31 · MP/ES 2026 · gabarito preliminar

Uma organização mantém integrações corporativas baseadas em serviços SOAP/XML, consumidos por aplicações internas e externas a partir de contrato formal previamente publicado. Em uma atualização do sistema provedor, a equipe pretende alterar a estrutura da mensagem de resposta, com renomeação de alguns elementos e mudança de tipos de dados, sem adotar uma estratégia de versionamento compatível, sob o argumento de que o endpoint e o protocolo de transporte permanecerão inalterados.

Com base nesse cenário, analise as afirmativas a seguir.

I. A renomeação de elementos na mensagem de resposta não compromete a compatibilidade da integração, porque os consumidores podem consultar o WSDL atualizado, que define o contrato de comunicação do serviço, e passar a interpretar os novos nomes corretamente.

II. Em arquiteturas baseadas em SOAP, a interoperabilidade entre consumidor e provedor depende também da aderência das mensagens ao contrato formal do serviço, e não apenas da possibilidade de troca de documentos XML entre as partes.

III. A manutenção do mesmo endpoint e do mesmo protocolo de transporte não é suficiente, por si só, para preservar a compatibilidade da integração, quando a resposta do serviço deixa de corresponder à estrutura contratualmente esperada pelos consumidores.

Está correto o que se afirma em

- (A) I, apenas.
- (B) I e II, apenas.
- (C) I e III, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** D

## mpes26-q58 · MP/ES 2026 · gabarito preliminar

Comunicação assíncrona é um modelo de interação entre sistemas, em que o emissor envia uma mensagem sem precisar aguardar uma resposta imediata do receptor para continuar sua execução. O receptor processa a mensagem quando estiver disponível e, por vezes, há um intermediário. Em outras palavras, o envio e o processamento da mensagem ocorrem em momentos independentes. Tal abordagem é comumente aplicada em cenários de mensageria, tais como notificações, filas e event streamings. As tecnologias que se associam as aplicações mencionadas são, respectivamente,

- (A) API Gateway, RabbitMQ e Kafka.
- (B) Kafka, RabbitMQ e Webhooks.
- (C) Webhooks, Kafka e API Gateway.
- (D) Webhooks, RabbitMQ e Kafka.
- (E) RabbitMQ, Kafka e Webhooks.

**Gabarito:** D

## mpes26-q59 · MP/ES 2026 · gabarito preliminar

O sistema e-Gampes (Sistema de Gestão de Autos) do MPES é a principal ferramenta de gestão de autos finalísticos. Ele digitalizou o fluxo de trabalho extrajudicial (inquéritos civis, notícias de fato), eliminando o uso de papel e proporcionando agilidade, segurança e transparência na tramitação. Nele é possível cadastrar, alterar e excluir autos, executar relatórios analíticos e listar os autos cadastrados em uma consulta simples.

Com base na Análise de Pontos de Função (APF), as funcionalidades citadas acima serão contadas, respectivamente, como

- (A) Entrada Externa, Saída Externa e Consulta Externa.
- (B) Saída Externa, Consulta Externa e Arquivo de Interface Externo.
- (C) Saída Externa, Saída Externa e Consulta Externa.
- (D) Arquivo Lógico Interno, Consulta Externa e Entrada Externa.
- (E) Entrada Externa, Saída Externa e Saída Externa.

**Gabarito:** A

## mpes26-q60 · MP/ES 2026 · gabarito preliminar

O ASP.NET Core é uma reformulação completa, moderna e de alto desempenho do tradicional ASP.NET. Criado pela Microsoft como uma plataforma open-source e multiplataforma, ele foi reescrito do zero para ser modular e leve, sendo ideal para a criação de aplicativos modernos, conectados à nuvem e compatíveis com Windows, Linux e macOS. Sobre o tema, assinale a opção que apresenta, corretamente, uma de suas características.

- (A) Utiliza o ADO.NET para evitar o uso direto de SQL.
- (B) Contém o Blazor, um framework para UI web interativa usando JavaScript ao invés de C#.
- (C) Sua arquitetura tem como características a junção de responsabilidades e alto acoplamento.
- (D) Faz o mapeamento Objeto-Relacional com o Entity Framework, permitindo a manipulação de dados por meio de objetos.
- (E) Utiliza o Razor Pages como alternativa ao MVC (Model-View- Controller), onde cada página tem UI própria, porém, sem lógica associada.

**Gabarito:** D

## nav26-q41 · NAV Brasil 2026 · gabarito preliminar

Um engenheiro de software do Serviço de Navegação Aérea do Brasil recebeu a tarefa de projetar o novo microsserviço de processamento de mensagens meteorológicas aeronáuticas (METAR). O sistema precisa ler boletins climáticos de múltiplos canais (redes de rádio HF, brokers AMQP locais e APIs de satélite externas), e persistir os dados validados, tanto em um banco NoSQL local quanto em um Data Lake central da aeronáutica. Buscando isolar o núcleo das regras de negócio (cálculo de teto de nuvens e visibilidade de pista) de variações tecnológicas em bancos de dados e protocolos de rede de terceiros, o engenheiro decidiu aplicar os padrões da Arquitetura Hexagonal. No contexto da Arquitetura Hexagonal, para permitir que o núcleo da aplicação invoque operações de persistência no banco NoSQL sem criar um acoplamento direto com o driver específico do banco, o engenheiro de software deve posicionar o contrato da interface de persistência e a sua respectiva implementação em código nas seguintes estruturas:

- (A) a interface reside na camada de apresentação externa; a implementação reside no núcleo lógico do hexágono.
- (B) a interface reside no núcleo lógico do hexágono; a implementação reside na camada de adaptadores de saída.
- (C) a interface reside na camada de adaptadores de entrada; a implementação reside no ecossistema do banco NoSQL.
- (D) a interface reside no barramento de mensageria assíncrona; a implementação reside no modelo conceitual de dados.
- (E) a interface reside no núcleo lógico do hexágono; a implementação reside no controlador de rotas do API Gateway.

**Gabarito:** B

## nav26-q48 · NAV Brasil 2026 · gabarito preliminar

Uma equipe de arquitetura de software precisa integrar o barramento de dados de radar de tráfego aéreo centralizado aos terminais secundários de visualização de doze aeródromos regionais. O sistema exige o tráfego assíncrono massivo e contínuo de dados lógicos com baixíssima latência e em milissegundos. Os arquitetos rejeitaram o uso de uma arquitetura de Integração de Aplicações Corporativas baseada em Barramento de Serviços Corporativos (ESB) tradicional pesada com transformações XML complexas e decidiram implantar um broker de mensageria moderno altamente escalável baseado em logs imutáveis distribuídos em disco. A principal justificativa técnica que ampara a escolha de um broker – baseado em logs distribuídos em detrimento de uma arquitetura baseada em ESB tradicional pesada para fluxos de dados de radar massivos em tempo real –, consiste no fato de o primeiro

- (A) descentralizar o controle de consumo, transferindo o ponteiro do estado de leitura (offset) do broker para os clientes de software.
- (B) forçar a conversão de todos os dados trafegados em objetos SOAP síncronos criptografados nativamente.
- (C) atuar na camada de rede física roteando pacotes através de barramentos de hardware de switches gerenciáveis.
- (D) centralizar a execução de lógicas de negócio pesadas e orquestrações complexas de fluxos diretamente no servidor central.
- (E) garantir a integridade referencial distribuída por intermédio de protocolos síncronos bidirecionais de duas fases (2PC).

**Gabarito:** A

## nav26-q49 · NAV Brasil 2026 · gabarito preliminar

Ao desenvolver o algoritmo de cálculo de distância de segurança anticolisão (TCAS) entre duas aeronaves em uma nova biblioteca de software, o desenvolvedor decide aplicar de forma estrita o ciclo de passos determinado pela metodologia Test-Driven Development (TDD). Ele iniciou criando um caso de teste unitário exaustivo contendo as coordenadas geográficas tridimensionais e as velocidades vetoriais de dois alvos simulados em rota de interceptação iminente. Seguindo rigorosamente a ordem cronológica obrigatória das fases que compõem o ciclo padrão do TDD (conhecido na literatura técnica como o ciclo Red-Green-Refactor), o desenvolvedor deve, logo após ter escrito o código desse teste unitário inicial, executar os seguintes passos sequenciais:

- (A) escrever o código completo da lógica final; rodar o teste esperando que ele passe; apagar o teste unitário.
- (B) executar o teste unitário e certificar-se de que ele falhe; escrever o código mínimo para o teste passar; refatorar o código produzido.
- (C) realizar a análise estática SAST no código do teste; compilar a aplicação em modo de depuração; implantar em produção.
- (D) criar uma ramificação de branch no Git; submeter um Pull Request para o comitê técnico; rodar os testes dinâmicos DAST.
- (E) refatorar o código-fonte que ainda não existe; executar o teste esperando sucesso; documentar o bug no catálogo.

**Gabarito:** B

## nav26-q52 · NAV Brasil 2026 · gabarito preliminar

No desenvolvimento de um novo painel web para visualização de boletins meteorológicos, a equipe técnica optou por uma arquitetura em camadas padrão de mercado. A meta é garantir a separação de conceitos e facilitar manutenções futuras no código do sistema de navegação aérea. A arquitetura em camadas organiza o sistema de forma que cada camada forneça serviços para a camada imediatamente superior e utilize os serviços da camada imediatamente inferior.

Assinale a afirmativa correta sobre as regras de acoplamento e dependência nesse padrão arquitetural clássico.

- (A) A camada de apresentação deve se comunicar diretamente com o driver de banco de dados, ignorando a lógica de negócio.
- (B) As alterações realizadas na camada de persistência de dados devem obrigatoriamente forçar a reescrita de toda a interface gráfica.
- (C) A camada de lógica de negócio deve idealmente ser independente dos detalhes de implementação da interface de usuário instalada.
- (D) Cada camada criada no sistema possui permissão irrestrita para acessar qualquer outra camada, sem respeitar a hierarquia.
- (E) O isolamento entre as camadas impede que o sistema funcione em servidores distintos, exigindo uma implantação monolítica.

**Gabarito:** C

## nav26-q53 · NAV Brasil 2026 · gabarito preliminar

Durante a revisão de código do módulo de cálculo de rotas e planos de voo de aeronaves, um engenheiro de software percebeu que a classe GerenciadorVoo possuía mais de 5.000 linhas de código, realizando desde a leitura de arquivos de configuração até a impressão de relatórios e conexão direta com o banco de dados de radares. O cenário descrito apresenta sérios problemas relacionados aos conceitos fundamentais de orientação a objetos e engenharia de software estrutural.

Assinale a opção que identifica o diagnóstico técnico dessa classe e a recomendação de boas práticas de projeto aplicável.

- (A) A classe possui alta coesão e baixo acoplamento, o que representa o estado ideal de reaproveitamento de componentes reutilizáveis.
- (B) A classe possui baixa coesão, violando o Princípio da Responsabilidade Única, e deve ser refatorada em classes menores e focadas.
- (C) O acoplamento da classe é nulo porque ela centraliza todas as funções do sistema aeronáutico, eliminando dependências externas.
- (D) A modularidade é máxima nesse cenário, pois centralizar o código em um único arquivo facilita o deploy e a correção de bugs.
- (E) A classe deve receber ainda mais responsabilidades, como autenticação de usuários, para garantir que o código fique unificado.

**Gabarito:** B

## nav26-q63 · NAV Brasil 2026 · gabarito preliminar

Ao desenvolver o novo portal corporativo para consulta de escalas dos técnicos em meteorologia aeronáutica, o designer do Serviço de Navegação Aérea incluiu o atributo HTML alt em todas as imagens de gráficos meteorológicos estáticos disponibilizados na tela. As diretrizes do WCAG (Web Content Accessibility Guidelines) estabelecem padrões internacionais essenciais para assegurar a acessibilidade web para pessoas com deficiências. A justificativa técnica para o uso correto do atributo descritivo alt em imagens significativas é

- (A) ocultar a imagem de robôs de busca do Google para evitar que o site sofra penalidades de ranqueamento de SEO na internet.
- (B) permitir que softwares leitores de tela leiam em voz alta a descrição textual do conteúdo da imagem para usuários com deficiência visual.
- (C) aumentar a velocidade de download de redes de dados móveis compactando dinamicamente os pixels do formato PNG ou JPEG.
- (D) forçar o navegador a renderizar uma animação tridimensional interativa caso o servidor central de arquivos fique indisponível.
- (E) garantir a compatibilidade do código-fonte do portal web com impressoras matriciais industriais antigas de relatórios.

**Gabarito:** B

## nav26-q64 · NAV Brasil 2026 · gabarito preliminar

No desenvolvimento do módulo de cálculo de autonomia de combustível do sistema de navegação aérea, um programador criou uma classe abstrata Aeronave com um método calcularAutonomia(). Duas subclasses, AviaoComercial e Helicoptero, herdam de Aeronave e implementam o método de maneiras totalmente distintas. A orientação a objetos baseia-se em pilares fundamentais para promover flexibilidade e reutilização de código. O conceito que permite a referências do tipo genérico Aeronave invocar comportamentos específicos diferentes, dependendo do tipo do objeto real apontado em tempo de execução, é

- (A) o Encapsulamento.
- (B) o Polimorfismo.
- (C) a Herança Múltipla.
- (D) a Sobrecarga de Métodos.
- (E) a Instanciação Estática.

**Gabarito:** B

## tjsc26-q34 · TJ/SC 2026

Durante o projeto de um sistema, utilizando linguagem orientada a objetos, foram adotadas as seguintes práticas:

I. Uma classe define seus atributos como privados e disponibiliza apenas métodos públicos para sua leitura e alteração, permitindo a realização de validações antes de qualquer modificação dos dados.

II. Uma classe base é estendida por diversas subclasses que compartilham comportamento comum, mas especializam determinadas operações conforme suas regras específicas.

III. Um mesmo método, definido na classe base, é reimplementado nas subclasses, de modo que sua execução produza comportamentos distintos conforme o tipo concreto do objeto em tempo de execução.

Com base nos conceitos fundamentais da programação orientada a objetos, assinale a opção que classifica corretamente as práticas descritas.

- (A) I – abstração; II – herança; III – polimorfismo.
- (B) I – encapsulamento; II – herança; III – sobrescrita.
- (C) I – encapsulamento; II – composição; III – polimorfismo.
- (D) I – encapsulamento; II – herança; III – sobrecarga.
- (E) I – abstração; II – herança; III – sobrecarga.

**Gabarito:** B

## tjsc26-q36 · TJ/SC 2026

No universo Java, as interfaces Map e Set são essenciais para organizar e manipular dados de forma eficiente, permitindo armazenar elementos e associações chave-valor com rapidez e clareza no código.

Nesse contexto, avalie as sentenças a seguir.

I. Set é uma interface que estende Collection e possui elementos únicos.

II. Uma diferença entre Map e Set é que Maps contêm chaves e valores, enquanto Sets contêm somente valores.

III. Em um Map, as chaves devem ser únicas, mas essa regra não se aplica aos valores associados.

Está correto o que se afirma em

- (A) I, apenas.
- (B) II, apenas.
- (C) I e II, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** E

## tjsc26-q37 · TJ/SC 2026

Durante o planejamento da integração entre os sistemas de um órgão público, a equipe discutiu o uso de serviços baseados em SOAP (Simple Object Access Protocol) e em REST (Representational State Transfer). Na ocasião, foram apresentadas as seguintes afirmações:

I. Em arquiteturas REST, a restrição de ausência de estado na comunicação entre cliente e servidor tende a favorecer a escalabilidade, pois cada requisição deve conter as informações necessárias ao seu processamento.

II. Em SOAP, a adoção do HTTP (Hypertext Transfer Protocol) implica que todas as operações sejam idempotentes, independentemente do método utilizado.

III. Em soluções baseadas em SOAP, o uso de WSDL (Web Services Description Language) pode contribuir para uma descrição formal do serviço, o que favorece a interoperabilidade contratual entre aplicações.

Está correto o que se afirma em

- (A) I, apenas.
- (B) II, apenas.
- (C) I e II, apenas.
- (D) I e III, apenas.
- (E) I, II e III.

**Gabarito:** D

## tjsc26-q44 · TJ/SC 2026

Em um projeto de integração entre sistemas de um tribunal, uma equipe técnica decidiu disponibilizar funcionalidades de consulta e atualização de informações por meio de uma API RESTful, utilizando o formato JSON para a troca de dados entre aplicações

Nesse contexto, assinale a opção que apresenta corretamente uma característica de uma API RESTful e uma característica do formato JSON.

- (A) A API RESTful organiza a comunicação em torno de recursos identificados por URI; o JSON representa dados em formato textual, com estruturas como objetos, arrays e pares chave- valor.
- (B) A API RESTful organiza a comunicação em torno de recursos identificados por URI; o JSON é um protocolo de transporte responsável pelo envio das requisições entre cliente e servidor.
- (C) A API RESTful exige, obrigatoriamente, a manutenção de estado da sessão no servidor; o JSON representa dados em formato textual, com estruturas como objetos, arrays e pares chave-valor.
- (D) A API RESTful utiliza métodos HTTP, como GET, POST, PUT e DELETE, para manipular recursos; o JSON é um formato binário utilizado exclusivamente para compactação de arquivos.
- (E) A API RESTful depende necessariamente de WSDL para descrever suas operações; o JSON é independente de linguagem de programação e pode ser interpretado por diferentes plataformas.

**Gabarito:** A

## tjsc26-q46 · TJ/SC 2026

O Java Spring Boot (Spring Boot) é uma ferramenta open source que simplifica e acelera o desenvolvimento de aplicações web e microsserviços baseados no Spring Framework. Nesse cenário, assinale a afirmativa que descreve corretamente uma característica do Spring Boot.

- (A) Prioriza configuração baseada em XML.
- (B) Não permite a utilização de anotações @Profile em conjunto com @Component ou @Configuration.
- (C) Não provê suporte à Kotlin.
- (D) Fornece configurações padrão para Java Util Logging e Log4j2, mas não para Logback.
- (E) Em termos de internacionalização, por padrão, procura pela presença de um pacote de recursos chamado messages na raiz do classpath.

**Gabarito:** E

## tjsc26-q47 · TJ/SC 2026

Em um sistema corporativo desenvolvido em Java, a equipe precisa persistir entidades de domínio em um banco de dados relacional, utilizar uma implementação concreta para o Mapeamento Objeto-Relacional, manter histórico das alterações realizadas em determinadas entidades e controlar a evolução do esquema do banco de dados entre os ambientes de desenvolvimento, homologação e produção.

Com base nesse cenário, analise as seguintes afirmativas:

I. A Java Persistent API (JPA) define uma especificação para persistência objeto-relacional em aplicações Java, permitindo o mapeamento de classes e relacionamentos para estruturas de bancos relacionais.

II. O Hibernate pode atuar como implementação da JPA, fornecendo mecanismos concretos de ORM para persistência, consultas e sincronização entre objetos Java e tabelas relacionais.

III. O Hibernate Envers é utilizado para controlar migrações versionadas do esquema do banco de dados, enquanto o Flyway registra o histórico das alterações realizadas nas entidades persistentes.

Está correto o que se afirma em

- (A) I, apenas.
- (B) II, apenas.
- (C) I e II, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** B

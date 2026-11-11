# Inteligência artificial e ciência de dados

`ia` · 5 questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.

## alego26-dev-q65 · ALEGO 2026

No contexto corporativo, o aprendizado de máquina, como subcampo da inteligência artificial, tem sido amplamente adotado para apoiar a análise de grandes volumes de dados, automatizar processos e aprimorar a tomada de decisão estratégica.

Considerando sua aplicação em áreas como previsão de demanda, detecção de padrões, personalização de serviços e otimização operacional.

Considerando o processo de treinamento de um modelo de aprendizado de máquina, pode-se afirmar que

- (A) o treinamento de um modelo pode ser realizado de maneira eficaz utilizando exclusivamente dados de teste, pois esses dados já refletem a performance esperada do modelo em situações reais.
- (B) o uso de um conjunto de validação durante o treinamento é irrelevante, já que a divisão entre dados de treinamento e teste é suficiente para avaliar a performance do modelo.
- (C) a normalização dos dados não é necessária antes do treinamento, pois a maioria dos algoritmos de aprendizado de máquina é robusta a diferenças de escala entre as variáveis.
- (D) uma vez que o modelo é treinado, ele não precisa ser reavaliado ou ajustado, pois a performance inicial será sempre mantida em qualquer conjunto de dados futuro.
- (E) o processo de treinamento envolve ajustar os parâmetros do modelo para minimizar a função de perda, utilizando um conjunto de dados rotulado, onde a relação entre as características e os rótulos é conhecida.

**Gabarito:** E

## mpes26-q50 · MP/ES 2026 · gabarito preliminar

No desenvolvimento de painéis interativos com o framework Shiny (linguagem R), a gestão eficiente do grafo de reatividade é fundamental para o desempenho da aplicação. Um profissional deve selecionar a função reativa adequada para cada necessidade de processamento no server. Relacione as funções listadas a seguir às respectivas  definições. 1. reactive() 2. observe() 3. eventReactive()

(   ) Cria uma expressão reativa que encapsula um cálculo, evitando recomputações desnecessárias e retornando um valor que pode ser utilizado por outras expressões reativas ou saídas (outputs).

(   ) Cria um observador destinado a executar ações com efeitos colaterais (side effects), como gravação em banco de dados ou envio de notificações, não retornando valor reutilizável.

(   ) Cria uma expressão reativa cujo valor é atualizado apenas quando ocorre um evento explícito (por exemplo, o clique de um botão), evitando atualizações desnecessárias causadas por outras entradas.

Assinale a opção que indica a relação correta, segundo a ordem apresentada.

- (A) 1, 2 e 3.
- (B) 1, 3 e 2.
- (C) 2, 1 e 3.
- (D) 3, 2 e 1.
- (E) 2, 3 e 1.

**Gabarito:** A

## mpes26-q51 · MP/ES 2026 · gabarito preliminar

Um cientista de dados foi incumbido de analisar o desempenho de estudantes em um exame nacional, com o objetivo de investigar possíveis desigualdades educacionais. Para isso, pretende comparar as distribuições de notas considerando simultaneamente o nível socioeconômico (baixo, médio e alto) e a região geográfica (Norte, Nordeste, Sul, Sudeste e Centro-Oeste). Sabe-se que a análise deve preservar a comparabilidade entre os grupos, permitindo identificar padrões estruturais de forma clara e consistente entre os subconjuntos de dados.

Considerando o uso da biblioteca ggplot2 na linguagem R, assinale a opção que apresenta a abordagem mais adequada para atender ao objetivo proposto.

- (A) Utilizar facet_wrap (~ regiao + nivel_socioeconomico), pois essa função organiza automaticamente os painéis, garantindo flexibilidade na disposição gráfica, ainda que sem controle explícito da estrutura bidimensional.
- (B) Utilizar facet_grid (regiao ~ nivel_socioeconomico), pois essa abordagem organiza os dados em uma matriz bidimensional fixa, favorecendo a comparação sistemática entre linhas e colunas.
- (C) Utilizar group_by (regiao, nivel_socioeconomico) seguido de summarise, gerando gráficos independentes para cada grupo, o que amplia o detalhamento analítico, ainda que reduza a comparabilidade visual.
- (D) Utilizar geom_density com sobreposição de todas as categorias em um único painel, maximizando a densidade informacional e facilitando a identificação de padrões globais.
- (E) Utilizar coord_flip, pois a inversão dos eixos melhora a legibilidade das categorias e permite comparação direta entre todas as variáveis simultaneamente.

**Gabarito:** B

## nav26-q33 · NAV Brasil 2026 · gabarito preliminar

Em estudo apresentado pelo Ministério do Trabalho e Emprego (MTE) sobre os impactos da inteligência artificial nas ocupações brasileiras, foi destacado que a análise realizada busca identificar atividades mais expostas às transformações tecnológicas. Durante a apresentação da metodologia utilizada pela Organização Internacional do Trabalho (OIT), ressaltou-se que “exposição não significa impacto”, destacando-se que a inteligência artificial tende mais a transformar ocupações do que necessariamente eliminá-las. Considere as situações a seguir.

I. Um sistema de inteligência artificial passou a elaborar versões preliminares de relatórios técnicos, permanecendo sob responsabilidade dos profissionais a validação das informações e a aprovação do documento final.

II. Uma ferramenta de inteligência artificial passou a classificar automaticamente documentos digitais, cabendo aos trabalhadores revisar inconsistências e decidir sobre situações excepcionais.

III. Uma empresa identificou que determinadas atividades desempenhadas por seus empregados apresentam elevado potencial de automação por sistemas de inteligência artificial. À luz do estudo apresentado, é correto afirmar que

- (A) as situações I, II e III demonstram que as ocupações envolvidas serão necessariamente eliminadas pela inteligência artificial.
- (B) a situação III permite concluir, por si só, que os trabalhadores serão inevitavelmente substituídos por sistemas automatizados.
- (C) as situações I e II exemplificam casos em que a inteligência artificial modifica a forma de execução das atividades sem eliminar necessariamente a participação humana.
- (D) as situações I e II demonstram que a inteligência artificial elimina a necessidade de supervisão humana em atividades baseadas em informação.
- (E) a situação III comprova que os impactos da inteligência artificial independem das estratégias de adaptação adotadas por trabalhadores, empresas e governos. Legislação (Noções de Direito Constitucional - Direito Administrativo - Ética)

**Gabarito:** C

## nav26-q54 · NAV Brasil 2026 · gabarito preliminar

No desenvolvimento do Sistema de Gestão de Escalas de Controladores de Voo, a equipe de engenharia de requisitos mapeou diversas necessidades junto à diretoria operacional do Serviço de Navegação Aérea. Durante a fase de classificação, os analistas devem separar com precisão as restrições arquiteturais e qualidades globais do sistema das funcionalidades diretas oferecidas aos usuários.

Assinale a opção que apresenta exclusivamente um Requisito Não Funcional (RNF) para o sistema citado.

- (A) O sistema deve permitir que o supervisor cadastre novos controladores informando CPF, nome e número de licença da ANAC.
- (B) O sistema deve emitir um alerta sonoro na tela do operador caso a escala ultrapasse o limite legal de horas de trabalho.
- (C) O sistema deve criptografar todos os dados trafegados em repouso utilizando o algoritmo AES-256 e responder às consultas em menos de 2 segundos.
- (D) O sistema deve gerar um relatório mensal em formato PDF contendo as ausências, folgas e plantões realizados por setor.
- (E) O sistema deve disponibilizar um filtro de busca para localizar controladores aptos com base no tipo de habilitação de radar.

**Gabarito:** C

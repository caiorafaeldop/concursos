window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['algoritmos'] = {
  id: 'algoritmos',
  name: 'Algoritmos e Estruturas de Dados',
  npcs: [
    { name: 'Dona Big-O, a Contadora de Passos', lines: [
      'Big-O não mede segundos: mede como o número de passos cresce quando a entrada n cresce.',
      'Descarte constantes e termos menores: 3n² + 5n + 2 vira O(n²). Laço dentro de laço multiplica.',
      'Laço que divide o problema ao meio a cada volta custa O(log n). É o segredo da busca binária.',
      'Ordem de crescimento: 1 < log n < n < n log n < n² < 2ⁿ < n!. Decore essa escadinha!'
    ] },
    { name: 'Seu Pilhado, o Guardião das Estruturas', lines: [
      'Pilha é LIFO (último a entrar sai primeiro); fila é FIFO (primeiro a entrar sai primeiro).',
      'Busca em largura (BFS) usa fila; busca em profundidade (DFS) usa pilha ou recursão.',
      'Tabela hash busca em O(1) no caso médio, mas no pior caso, com tudo colidindo, vira O(n).',
      'Árvore binária de busca: esquerda menor, direita maior. Percurso em ordem sai ordenado!'
    ] },
    { name: 'Tia Solidina, a Arquiteta de Classes', lines: [
      'Sobrescrita é polimorfismo em tempo de execução; sobrecarga é mesmo nome com parâmetros diferentes.',
      'SRP: uma classe, um motivo para mudar. OCP: aberta para extensão, fechada para modificação.',
      'Liskov: a subclasse deve poder substituir a superclasse sem quebrar o programa.',
      'DIP: dependa de abstrações. Injeção de dependência é só uma técnica para aplicar isso.'
    ] }
  ],
  boss: {
    name: 'Prof. Quicksort, o Divisor Implacável',
    intro: 'Eu divido o vetor, conquisto a prova e intercalo seus erros! Mostre que sabe contar passos e escolher a estrutura certa.',
    questions: [
      { q: 'Considere o trecho: para i de 0 até n−1, para j de i até n−1, execute uma operação de custo constante. A complexidade de tempo do trecho é:',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)', 'O(log n)'], answer: 2,
        explain: 'O laço interno roda n, n−1, ..., 1 vezes: soma n(n+1)/2, que é O(n²). Não é n log n (o interno não divide ao meio) nem exponencial.' },
      { q: 'Em uma busca binária sobre um vetor ordenado com 1.024 elementos, o número máximo de comparações com elementos do vetor é:',
        options: ['10', '11', '512', '1.024', '32'], answer: 1,
        explain: 'Pior caso = ⌊log₂ n⌋ + 1 = 10 + 1 = 11: o intervalo cai 1024→512→...→1 e ainda se compara o último elemento. 512 e 1.024 seriam de busca linear.' },
      { q: 'Na busca em largura (BFS) em um grafo, a estrutura auxiliar usada para controlar os próximos vértices a visitar é a:',
        options: ['pilha', 'heap máximo', 'árvore AVL', 'tabela hash', 'fila'], answer: 4,
        explain: 'BFS visita por camadas: quem foi descoberto primeiro é visitado primeiro (FIFO), logo fila. Pilha/recursão é da busca em profundidade (DFS).' },
      { q: 'Sobre o algoritmo quicksort, assinale a afirmativa correta.',
        options: ['É estável e tem pior caso O(n log n).', 'Exige O(n) de memória auxiliar para intercalar, como o merge sort.', 'Seu melhor caso é O(n), quando o vetor já está ordenado.', 'Seu pior caso é O(n²), por exemplo com pivô sempre no último elemento e vetor já ordenado.', 'Só pode ser aplicado a listas encadeadas.'], answer: 3,
        explain: 'Pivô extremo gera partições n−1 e 0: O(n²). Quicksort não é estável, particiona no próprio vetor e, com vetor ordenado e pivô no fim, cai justamente no pior caso.' },
      { q: 'Os valores 40, 20, 60, 10, 30, 50, 70 são inseridos, nessa ordem, em uma árvore binária de busca vazia. O percurso em pré-ordem resulta em:',
        options: ['40, 20, 10, 30, 60, 50, 70', '10, 20, 30, 40, 50, 60, 70', '10, 30, 20, 50, 70, 60, 40', '40, 20, 60, 10, 30, 50, 70', '70, 60, 50, 40, 30, 20, 10'], answer: 0,
        explain: 'Pré-ordem = raiz, esquerda, direita: 40, 20, 10, 30, 60, 50, 70. A 2ª é em ordem, a 3ª é pós-ordem e a 4ª é por nível (largura).' },
      { q: 'Uma tabela hash com tratamento de colisões por encadeamento (listas em cada posição) tem, para a operação de busca:',
        options: ['O(1) no pior caso, sempre.', 'O(log n) no caso médio.', 'O(1) no caso médio e O(n) no pior caso.', 'O(n²) no pior caso.', 'O(n log n) no caso médio.'], answer: 2,
        explain: 'Com boa função hash e fator de carga controlado, a lista de cada balde é curta: O(1) em média. Se todas as chaves colidem, vira uma lista única: O(n).' },
      { q: 'A classe Quadrado herda de Retângulo e sobrescreve setLargura para também alterar a altura. Um código que esperava Retângulo passa a falhar. Qual princípio foi violado?',
        options: ['ISP', 'SRP', 'DIP', 'OCP', 'LSP'], answer: 4,
        explain: 'Princípio da Substituição de Liskov: o subtipo deve substituir o tipo base sem alterar a correção do programa. O Quadrado muda o comportamento esperado do Retângulo.' },
      { q: 'O Princípio da Inversão de Dependência (DIP) estabelece que:',
        options: ['toda classe deve ter um único motivo para mudar.', 'é sinônimo de injeção de dependência e exige um framework como o Spring.', 'clientes não devem depender de métodos que não usam.', 'módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.', 'subclasses devem poder substituir suas superclasses.'], answer: 3,
        explain: 'Essa é a definição do DIP. A 1ª é SRP, a 3ª é ISP, a 5ª é LSP. Injeção de dependência é uma técnica que ajuda a aplicar o DIP, não é o mesmo princípio e não exige framework.' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [
    ['Pilha', 'LIFO: o último a entrar é o primeiro a sair'],
    ['Fila', 'FIFO: o primeiro a entrar é o primeiro a sair'],
    ['Tabela hash', 'chave → função hash → posição; busca média O(1)'],
    ['Busca binária', 'corta o vetor ordenado ao meio: O(log n)'],
    ['Merge sort', 'divide, ordena e intercala: O(n log n) sempre'],
    ['Liskov (LSP)', 'subclasse substitui a superclasse sem quebrar nada']
  ] },
  quick: [
    { q: 'Estrutura LIFO?', options: ['Pilha', 'Fila', 'Tabela hash', 'Grafo'], answer: 0, explain: 'LIFO = último a entrar, primeiro a sair: pilha.' },
    { q: 'A busca binária exige um vetor...', options: ['Encadeado', 'Ordenado', 'Pequeno', 'Circular'], answer: 1, explain: 'Sem ordem não dá para descartar metade a cada comparação.' },
    { q: 'Merge sort no pior caso?', options: ['O(n²)', 'O(n)', 'O(n log n)', 'O(log n)'], answer: 2, explain: 'Merge sort é O(n log n) em todos os casos.' },
    { q: 'Percurso de BST que sai ordenado?', options: ['Pré-ordem', 'Pós-ordem', 'Por nível', 'Em ordem'], answer: 3, explain: 'Em ordem: esquerda, raiz, direita = crescente.' },
    { q: 'Busca em tabela hash, caso médio?', options: ['O(1)', 'O(n)', 'O(n²)', 'O(n log n)'], answer: 0, explain: 'Caso médio O(1); pior caso O(n).' },
    { q: '"Aberto para extensão, fechado para modificação"?', options: ['SRP', 'OCP', 'LSP', 'DIP'], answer: 1, explain: 'É o Open/Closed Principle, o "O" do SOLID.' }
  ],
  study: {
    title: 'Biblioteca de Algoritmos',
    chapters: [
      { title: 'Complexidade e Big-O',
        pages: [
          'Complexidade = quantos passos o algoritmo dá em função do tamanho n da entrada (não em segundos).\n• Big-O (O): limite superior ("no máximo")\n• Ômega (Ω): limite inferior ("no mínimo")\n• Theta (Θ): limite justo (O e Ω ao mesmo tempo)\nf(n) = O(g(n)) se existem c > 0 e n₀ tais que f(n) ≤ c·g(n) para todo n ≥ n₀.',
          'Regras de bolso:\n• Descarte constantes: 5n → O(n)\n• Descarte termos menores: n² + n → O(n²)\n• Blocos em sequência: fica o maior\n• Laços aninhados: multiplica (n·n = n²)\n• Laço que dobra ou divide i ao meio: O(log n)\nEscada: 1 < log n < n < n log n < n² < n³ < 2ⁿ < n!',
          'Casos: melhor, médio e pior. Busca linear: melhor 1 comparação, pior n, médio ~n/2 → O(n).\nBig-O não é sinônimo de pior caso: é uma cota superior que pode descrever qualquer caso.\nRecursão gasta espaço na pilha de chamadas: fatorial recursivo usa O(n) de memória. Fibonacci ingênuo é exponencial; com memorização, O(n).'
        ],
        tip: 'Laço dentro de laço multiplica; laço depois de laço soma (fica o maior); dividir ao meio dá log n.',
        quiz: [
          { q: 'A função f(n) = 4n³ + 2n² + 100 é, em notação assintótica:', options: ['O(n²)', 'O(100)', 'Θ(n³)', 'Θ(n⁴)', 'O(log n)'], answer: 2, explain: 'O termo dominante é n³ e constantes caem: f é Θ(n³). Ela também é O(n⁴) (cota frouxa), mas não Θ(n⁴); e não é O(n²).' },
          { q: 'Um laço faz i = 1 e, enquanto i < n, executa i = i * 2. Quantas iterações, assintoticamente?', options: ['O(n)', 'O(n²)', 'O(1)', 'O(n log n)', 'O(log n)'], answer: 4, explain: 'i vale 1, 2, 4, 8... e alcança n após cerca de log₂ n dobras: O(log n).' }
        ] },
      { title: 'Listas, pilhas, filas e tabelas hash',
        pages: [
          'Vetor (array): memória contígua; acesso por índice O(1); inserir/remover no início ou meio O(n) (desloca elementos); inserir no fim de vetor dinâmico: O(1) amortizado.\nLista encadeada: nós com valor + ponteiro para o próximo. Acesso ao k-ésimo O(n); inserir no início O(1); inserir após um nó conhecido O(1). Duplamente encadeada tem ponteiro anterior também.',
          'Pilha (stack) = LIFO: push, pop e top/peek em O(1). Usos: desfazer, pilha de chamadas, parênteses balanceados, notação pós-fixa, DFS.\nFila (queue) = FIFO: enqueue no fim, dequeue na frente, O(1). Usos: impressão, BFS, buffers.\nFila de prioridade (heap) NÃO é FIFO: sai o de maior prioridade.',
          'Tabela hash: função h(chave) → índice. Busca/inserção/remoção O(1) médio e O(n) no pior caso.\nColisão = duas chaves no mesmo índice. Tratamentos:\n• Encadeamento: lista em cada posição\n• Endereçamento aberto: sondagem linear, quadrática, hash duplo\nFator de carga α = n / m (elementos / posições); α alto → mais colisões → redimensionar.'
        ],
        tip: 'Pilha de pratos = LIFO; fila do banco = FIFO. Hash é O(1) na média, mas O(n) no pior caso!',
        quiz: [
          { q: 'Partindo de uma pilha vazia: push(3), push(7), push(5), pop(), push(9), pop(), pop(). O valor no topo ao final é:', options: ['9', '7', '5', '3', 'a pilha está vazia'], answer: 3, explain: 'Após push 3,7,5 e pop → [3,7]; push 9 → [3,7,9]; pop → [3,7]; pop → [3]. Topo = 3.' },
          { q: 'Em uma tabela hash de 7 posições com h(k) = k mod 7 e sondagem linear, inserem-se 10, 22 e 31, nessa ordem. Em que posição fica o 31?', options: ['1', '3', '5', '2', '4'], answer: 4, explain: '10 mod 7 = 3 e 22 mod 7 = 1. 31 mod 7 = 3, já ocupada pelo 10; a sondagem linear tenta a próxima: posição 4.' }
        ] },
      { title: 'Árvores e grafos',
        pages: [
          'Árvore binária de busca (BST): para cada nó, esquerda < nó < direita.\nBusca/inserção/remoção: O(log n) se balanceada (média com inserções aleatórias) e O(n) no pior caso (degenerada, ex.: inserir já ordenado). AVL e rubro-negra se rebalanceiam com rotações e garantem O(log n).\nRemover nó com 2 filhos: troca pelo sucessor em ordem (menor da subárvore direita) ou antecessor.',
          'Percursos (raiz é a referência):\n• Pré-ordem: raiz, esq., dir.\n• Em ordem: esq., raiz, dir. → em BST sai ordenado\n• Pós-ordem: esq., dir., raiz\n• Por nível: usa fila\nHeap (máximo): pai ≥ filhos; árvore completa guardada em vetor (filhos de i: 2i+1 e 2i+2). Inserir/remover topo O(log n); consultar topo O(1).',
          'Grafo G = (V, E): vértices e arestas; dirigido ou não; ponderado ou não.\n• Matriz de adjacência: O(V²) de espaço; testa aresta em O(1)\n• Lista de adjacência: O(V + E); boa para grafo esparso\nBFS (fila) e DFS (pilha/recursão): O(V + E) com listas. BFS acha o menor caminho em número de arestas. Dijkstra: pesos não negativos.'
        ],
        tip: 'PRÉ = raiz primeiro; EM = raiz no meio; PÓS = raiz por último. BFS = fila, DFS = pilha.',
        quiz: [
          { q: 'Inserindo 10, 20, 30, 40 e 50, nessa ordem, em uma BST comum (sem balanceamento), a altura obtida e o custo de busca no pior caso são:', options: ['altura logarítmica; O(log n)', 'altura n − 1 (lista degenerada); O(n)', 'altura 2; O(1)', 'altura logarítmica; O(n log n)', 'altura n; O(n²)'], answer: 1, explain: 'Cada valor vai à direita do anterior: a árvore vira uma "lista" com altura n − 1 (contando arestas) e busca O(n). AVL ou rubro-negra evitariam isso.' },
          { q: 'Para representar um grafo esparso com V vértices e E arestas, ocupando O(V + E) de memória, usa-se:', options: ['matriz de adjacência', 'matriz de incidência', 'heap binário', 'lista de adjacência', 'árvore AVL'], answer: 3, explain: 'Lista de adjacência guarda só as arestas existentes: O(V + E). A matriz de adjacência sempre ocupa O(V²), desperdiçando espaço em grafos esparsos.' }
        ] },
      { title: 'Busca e ordenação',
        pages: [
          'Busca linear: qualquer vetor, O(n).\nBusca binária: vetor ORDENADO com acesso por índice; compara com o meio e descarta metade. O(log n); pior caso ⌊log₂ n⌋ + 1 comparações (1.024 → 11; 1 milhão → 20). Em lista encadeada perde a vantagem, pois achar o meio custa O(n).',
          'Melhor / médio / pior:\n• Bubble: n (com flag) / n² / n²\n• Selection: n² / n² / n²\n• Insertion: n / n² / n²\n• Merge: n log n nos 3 (memória extra O(n))\n• Quick: n log n / n log n / n²\n• Heap: n log n nos 3\nOrdenação por comparação não supera Ω(n log n) no pior caso.',
          'Estáveis (mantêm a ordem de iguais): bubble, insertion, merge, counting.\nNão estáveis (versões usuais): selection, quick, heap.\nIn-place: bubble, selection, insertion, heap, quick (pilha O(log n) média).\nInsertion brilha em vetor quase ordenado. Counting sort: O(n + k), sem comparações, para inteiros num intervalo k.'
        ],
        tip: 'Merge e heap: n log n sempre. Quick: n² no pior. Insertion e bubble com flag: n no melhor.',
        quiz: [
          { q: 'Qual algoritmo de ordenação tem complexidade O(n log n) no melhor, no médio e no pior caso, e é estável?', options: ['quicksort', 'heapsort', 'selection sort', 'insertion sort', 'merge sort'], answer: 4, explain: 'Merge sort é Θ(n log n) sempre e estável. Heapsort também é n log n sempre, mas não é estável; quicksort tem pior caso O(n²).' },
          { q: 'Aplicando uma passada completa do bubble sort (crescente) ao vetor [5, 1, 4, 2, 8], obtém-se:', options: ['[1, 4, 2, 5, 8]', '[1, 2, 4, 5, 8]', '[1, 5, 4, 2, 8]', '[5, 4, 2, 1, 8]', '[1, 4, 5, 2, 8]'], answer: 0, explain: 'Troca 5↔1, 5↔4, 5↔2; 5 e 8 ficam. Resultado [1, 4, 2, 5, 8]: o maior (8) já estava no fim; o ordenado completo só vem na 2ª passada.' }
        ] },
      { title: 'POO e SOLID',
        pages: [
          'Pilares da POO:\n• Encapsulamento: esconder o estado (private) e expor operações\n• Herança: "é um" (extends); Java: herança simples de classes, várias interfaces\n• Polimorfismo: sobrescrita (override, decidida em execução) e sobrecarga (overload, mesmo nome, parâmetros diferentes, decidida na compilação)\n• Abstração: classes abstratas e interfaces',
          'Classe abstrata: não instancia; pode ter estado, construtor e métodos concretos.\nInterface: contrato; desde o Java 8 aceita métodos default e static.\nPrefira composição ("tem um") a herança quando não há "é um" real.\nBoas classes: alta coesão e baixo acoplamento.',
          'SOLID (Robert C. Martin):\n• S – SRP: um único motivo para mudar\n• O – OCP: aberto para extensão, fechado para modificação\n• L – LSP: subtipo substitui o tipo base sem quebrar\n• I – ISP: clientes não dependem de métodos que não usam\n• D – DIP: alto e baixo nível dependem de abstrações\nDIP é princípio; injeção de dependência é técnica.'
        ],
        tip: 'Quadrado herdando Retângulo = Liskov violado. Interface "gorda" = ISP. if/else por tipo crescendo = OCP.',
        quiz: [
          { q: 'Em Java, a classe Calculadora possui somar(int, int) e somar(double, double). Esse recurso é chamado de:', options: ['sobrescrita (override)', 'herança múltipla', 'sobrecarga (overload)', 'encapsulamento', 'ligação dinâmica'], answer: 2, explain: 'Mesmo nome com listas de parâmetros diferentes na mesma classe = sobrecarga, resolvida em compilação. Sobrescrita é redefinir na subclasse o método herdado, resolvida em execução.' },
          { q: 'Uma interface Impressora obriga todas as implementações a terem imprimir, escanear e enviarFax, embora uma impressora simples só imprima. O princípio violado é o:', options: ['ISP', 'LSP', 'OCP', 'SRP', 'DIP'], answer: 0, explain: 'Interface Segregation: nenhum cliente deve ser forçado a depender de métodos que não usa. Solução: quebrar em interfaces menores (Imprimivel, Escaneavel...).' }
        ] }
    ]
  }
};

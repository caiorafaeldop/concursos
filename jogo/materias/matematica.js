window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['matematica'] = {
  id: 'matematica',
  name: 'Matemática e Estatística',
  npcs: [
    {
      name: 'Vó Venn, a Guardiã dos Conjuntos',
      lines: [
        'Nunca some dois conjuntos sem descontar a interseção, senão você conta quem está no meio duas vezes!',
        'Dízima periódica é racional: 0,333... vira 3/9 = 1/3. Já raiz de 2 e pi são irracionais.',
        'Na regra de três composta, compare cada grandeza com a da pergunta: se sobe junto, é direta; se inverte, inverta a fração.',
        'Equação do 2º grau pede atenção ao delta: Δ > 0 dá duas raízes reais, Δ = 0 dá uma e Δ < 0 não tem raiz real.'
      ]
    },
    {
      name: 'Seu Bhaskara, o Caçador de Raízes',
      lines: [
        'Na função f(x) = ax + b, "a" é a inclinação da reta e "b" é onde ela corta o eixo y.',
        'Na parábola f(x) = ax² + bx + c, a > 0 abre pra cima (tem mínimo) e a < 0 abre pra baixo (tem máximo).',
        'PA soma sempre a razão r; PG multiplica sempre pela razão q. Não confunda as fórmulas da soma!',
        'Ordem importa? Arranjo! Ordem não importa? Combinação (divide pelos repetidos!).'
      ]
    },
    {
      name: 'Tia Gaussina, a Mestra dos Dados',
      lines: [
        'Na multiplicação de matrizes A·B, linha da primeira vezes coluna da segunda. E quase nunca A·B = B·A!',
        'Se multiplicar toda matriz quadrada de ordem n por k, o determinante multiplica por kⁿ, não por k!',
        'Mediana exige colocar os dados em ordem (rol) antes de pegar o meio. Se houver quantidade par, faça a média dos dois centrais.',
        'Probabilidade de "pelo menos um": quase sempre é mais rápido calcular 1 menos a chance de nenhum.'
      ]
    }
  ],
  boss: {
    name: 'Prof. Determinante, o Senhor das Matrizes',
    intro: 'Aqui não passa chute: prove que domina funções, matrizes, contagem e estatística no padrão FGV!',
    questions: [
      {
        q: 'Em um tribunal com 80 servidores, 48 usam o sistema PJe, 36 usam o sistema SEI e 12 não usam nenhum dos dois. Quantos servidores usam apenas o PJe?',
        options: ['16', '20', '32', '36', '48'],
        answer: 2,
        explain: 'Usam ao menos um: 80 − 12 = 68. Interseção: 48 + 36 − 68 = 16. Apenas PJe: 48 − 16 = 32. 16 é a interseção e 48 ignora quem usa os dois.'
      },
      {
        q: 'Se 4 analistas revisam 120 processos em 5 dias, trabalhando 6 horas por dia, quantos dias serão necessários para 6 analistas revisarem 216 processos trabalhando 4 horas por dia?',
        options: ['6 dias', '8 dias', '9 dias', '10 dias', '12 dias'],
        answer: 2,
        explain: 'Produção por hora-analista: 120 ÷ (4×5×6) = 1 processo. Para 216 processos: 6 × d × 4 = 216 → 24d = 216 → d = 9 dias.'
      },
      {
        q: 'Um servidor processou 50 requisições em 1 minuto, entre normais (2 ms cada) e prioritárias (5 ms cada), consumindo 145 ms no total. Quantas requisições prioritárias foram processadas?',
        options: ['10', '15', '20', '25', '35'],
        answer: 1,
        explain: 'Sistema: n + p = 50 e 2n + 5p = 145. Substituindo n = 50 − p: 100 − 2p + 5p = 145 → 3p = 45 → p = 15. As 35 restantes são as normais.'
      },
      {
        q: 'O custo diário de nuvem (em reais) em função de x milhares de acessos é C(x) = x² − 12x + 50. O valor de x que minimiza o custo e o custo mínimo são, respectivamente:',
        options: ['6 e R$ 14', '6 e R$ 50', '12 e R$ 14', '6 e R$ 122', '−6 e R$ 158'],
        answer: 0,
        explain: 'Como a = 1 > 0, há mínimo no vértice: x_v = −(−12)/(2·1) = 6. C(6) = 36 − 72 + 50 = 14. R$ 50 é C(0) e 12 é −b/a.'
      },
      {
        q: 'Em uma Progressão Aritmética (PA), o 3º termo é 11 e o 7º termo é 27. A soma dos 10 primeiros termos dessa PA é:',
        options: ['180', '195', '200', '210', '230'],
        answer: 3,
        explain: 'a₇ − a₃ = 4r = 27 − 11 = 16 → r = 4. Logo a₁ = 11 − 2·4 = 3 e a₁₀ = 3 + 9·4 = 39. S₁₀ = (3 + 39)·10 / 2 = 210.'
      },
      {
        q: 'Dada a matriz A = [[2, 3], [1, 4]], o determinante da matriz 2A é igual a:',
        options: ['5', '10', '15', '20', '25'],
        answer: 3,
        explain: 'det(A) = 2·4 − 3·1 = 5. Como A tem ordem n = 2, det(2A) = 2²·det(A) = 4·5 = 20. Marcar 10 é a pegadinha clássica de esquecer o expoente n.'
      },
      {
        q: 'Quantas comissões distintas de 3 analistas podem ser formadas a partir de 6 analistas, se Ana e Bruno não podem estar juntos na mesma comissão?',
        options: ['12', '14', '16', '18', '20'],
        answer: 2,
        explain: 'Total sem restrição: C(6,3) = 20. Comissões com Ana e Bruno juntos (falta escolher 1 entre 4): C(4,1) = 4. Válidas: 20 − 4 = 16.'
      },
      {
        q: 'As notas de 5 candidatos em um teste foram 4, 6, 6, 8 e 11. A média aritmética, a mediana e a variância populacional dessas notas são, respectivamente:',
        options: ['6, 7 e 5,6', '7, 6 e 7,0', '7, 6 e 28,0', '6, 6 e 5,6', '7, 6 e 5,6'],
        answer: 4,
        explain: 'Média = (4+6+6+8+11)/5 = 7. Mediana (rol ordenado) = 6. Desvios ao quadrado: 9+1+1+1+16 = 28; variância populacional = 28/5 = 5,6.'
      }
    ]
  },
  match: {
    title: 'Ligue o conceito matemático',
    pairs: [
      ['Interseção A ∩ B', 'Elementos que estão em A e B ao mesmo tempo'],
      ['Discriminante Δ > 0', 'Equação do 2º grau com duas raízes reais distintas'],
      ['Vértice da parábola', 'Ponto de máximo (a < 0) ou mínimo (a > 0)'],
      ['det(k·A) de ordem n', 'Multiplica det(A) por k elevado a n'],
      ['Combinação C(n, p)', 'Agrupamento em que a ordem NÃO importa'],
      ['Mediana', 'Valor central dos dados ordenados em rol']
    ]
  },
  quick: [
    {
      q: 'Qual conjunto contém dízimas periódicas, mas não √2?',
      options: ['Naturais (ℕ)', 'Inteiros (ℤ)', 'Racionais (ℚ)', 'Irracionais (𝕀)'],
      answer: 2,
      explain: 'Dízimas periódicas viram fração (ℚ); raízes não exatas como √2 são irracionais.'
    },
    {
      q: 'Em f(x) = −3x + 12, onde a reta corta o eixo y?',
      options: ['x = 4', 'y = −3', 'y = 12', 'y = 4'],
      answer: 2,
      explain: 'O corte no eixo y ocorre em x = 0: f(0) = 12 (termo independente b).'
    },
    {
      q: 'Se uma PG tem a₁ = 2 e razão q = 3, quanto vale a₄?',
      options: ['18', '24', '54', '162'],
      answer: 2,
      explain: 'a₄ = a₁·q³ = 2 · 3³ = 2 · 27 = 54.'
    },
    {
      q: 'Para multiplicar A(2×3) por B(3×4), qual a ordem de A·B?',
      options: ['2×4', '3×3', '4×2', 'Não existe'],
      answer: 0,
      explain: 'Colunas de A (3) = linhas de B (3); o produto herda 2 linhas e 4 colunas.'
    },
    {
      q: 'Quantos anagramas tem a palavra DADO?',
      options: ['4', '12', '16', '24'],
      answer: 1,
      explain: '4 letras com "D" repetido 2 vezes: P₄² = 4! / 2! = 24 / 2 = 12.'
    },
    {
      q: 'A raiz quadrada da variância chama-se:',
      options: ['Mediana', 'Moda', 'Amplitude', 'Desvio padrão'],
      answer: 3,
      explain: 'Desvio padrão (σ = √Var) devolve a dispersão para a mesma unidade dos dados.'
    }
  ],
  study: {
    title: 'Biblioteca de Matemática e Estatística',
    chapters: [
      {
        title: 'Conjuntos Numéricos, Razão e Proporção',
        pages: [
          'Os conjuntos numéricos se encaixam como caixas:\n• Naturais ℕ = {0, 1, 2, ...}\n• Inteiros ℤ = {..., −2, −1, 0, 1, 2, ...}\n• Racionais ℚ = frações p/q (q ≠ 0), decimais exatos e dízimas periódicas\n• Irracionais 𝕀 = decimais infinitos sem repetição (√2, π, e)\n• Reais ℝ = ℚ ∪ 𝕀',
          'Operações em Venn e Intervalos:\n• n(A ∪ B) = n(A) + n(B) − n(A ∩ B)\n• Para 3 conjuntos, some os 3, subtraia as 3 interseções duplas e some de volta a interseção tripla.\n• Intervalo aberto (a, b) exclui pontas; fechado [a, b] inclui pontas.',
          'Razão, Proporção e Regra de Três:\n• Razão k = a/b. Em divisão proporcional, some as partes: se A:B = 2:3 para 100, 2k + 3k = 100 → k = 20.\n• Regra de três composta: fixe a grandeza do x e compare cada coluna com ela (direta mantém, inversa vira a fração).'
        ],
        tip: 'Em Venn com 2 conjuntos, comece SEMPRE preenchendo a interseção (o meio) e vá subtraindo para fora!',
        quiz: [
          {
            q: 'Qual número abaixo pertence ao conjunto dos Irracionais (𝕀)?',
            options: ['0,75', '0,444...', '√9', '−7/3', '√5'],
            answer: 4,
            explain: '√5 é decimal infinito não periódico (irracional). 0,75 = 3/4, 0,444... = 4/9, √9 = 3 e −7/3 são todos racionais.'
          },
          {
            q: 'Três equipes dividiram R$ 18.000 em partes diretamente proporcionais a 2, 3 e 4. Quanto recebeu a maior equipe?',
            options: ['R$ 4.000', 'R$ 6.000', 'R$ 8.000', 'R$ 9.000', 'R$ 10.000'],
            answer: 2,
            explain: '2k + 3k + 4k = 9k = 18.000 → k = 2.000. A maior parte é 4k = 4 × 2.000 = R$ 8.000.'
          }
        ]
      },
      {
        title: 'Equações, Inequações e Sistemas Lineares',
        pages: [
          'Equação e Inequação do 1º grau:\n• ax + b = 0 → x = −b/a.\n• Na inequação, multiplicar ou dividir por número NEGATIVO inverte o sinal da desigualdade (> vira <)!',
          'Equação do 2º grau (ax² + bx + c = 0, a ≠ 0):\n• Δ = b² − 4ac e x = (−b ± √Δ) / (2a).\n• Soma das raízes S = −b/a; Produto P = c/a.\n• Inequação do 2º grau: ache as raízes, olhe a concavidade (a > 0 ou a < 0) e faça o estudo do sinal.',
          'Sistemas Lineares 2×2:\n• Métodos: substituição (isole uma letra) ou adição (iguale coeficientes opostos e some).\n• Classificação: SPD (1 solução, retas concorrentes), SPI (infinitas, retas coincidentes), SI (sem solução, retas paralelas).'
        ],
        tip: 'Multiplicou ou dividiu uma inequação por número negativo? Vire o sinal (< ↔ >) na hora!',
        quiz: [
          {
            q: 'O conjunto-solução da inequação −2x + 6 ≤ 0 em ℝ é:',
            options: ['x ≤ 3', 'x ≥ 3', 'x ≤ −3', 'x ≥ −3', 'x < 3'],
            answer: 1,
            explain: '−2x ≤ −6 → dividindo por −2, inverte o sinal: x ≥ 3.'
          },
          {
            q: 'Para que o sistema { x + 2y = 5 ; 2x + ky = 10 } tenha infinitas soluções (SPI), k deve valer:',
            options: ['1', '2', '3', '4', '5'],
            answer: 3,
            explain: 'A 2ª equação precisa ser múltipla da 1ª por inteiro (×2): 2x + 4y = 10, logo k = 4.'
          }
        ]
      },
      {
        title: 'Funções e Sequências (PA e PG)',
        pages: [
          'Função Afim f(x) = ax + b (a ≠ 0):\n• Gráfico é uma reta. "a" é a taxa de variação (a > 0 crescente, a < 0 decrescente).\n• "b" é o coeficiente linear (corte no eixo y).\n• Raiz (corte no eixo x): x = −b/a.',
          'Função Quadrática f(x) = ax² + bx + c:\n• Gráfico é uma parábola: a > 0 (∪, mínimo), a < 0 (∩, máximo).\n• Vértice: x_v = −b/(2a) e y_v = −Δ/(4a) = f(x_v).\n• "c" é onde a parábola corta o eixo y.',
          'Sequências (PA e PG):\n• PA (soma razão r): aₙ = a₁ + (n−1)r | Sₙ = (a₁ + aₙ)·n / 2.\n• PG (multiplica razão q): aₙ = a₁·qⁿ⁻¹ | Sₙ = a₁(qⁿ − 1)/(q − 1) (q ≠ 1).\n• PG infinita (|q| < 1): S_∞ = a₁ / (1 − q).'
        ],
        tip: 'Perguntou "qual o valor máximo/mínimo" ou "quando atinge o pico"? É sempre o vértice (y_v ou x_v)!',
        quiz: [
          {
            q: 'Uma função afim f(x) = ax + b passa pelos pontos (0, 4) e (2, 10). O valor de f(5) é:',
            options: ['14', '16', '19', '20', '22'],
            answer: 2,
            explain: 'f(0) = 4 → b = 4. Como f(2) = 2a + 4 = 10 → a = 3. Logo f(x) = 3x + 4 e f(5) = 15 + 4 = 19.'
          },
          {
            q: 'A soma dos infinitos termos da PG (8, 4, 2, 1, ...) é:',
            options: ['12', '14', '15', '16', '32'],
            answer: 3,
            explain: 'a₁ = 8 e razão q = 4/8 = 1/2 (|q| < 1). S_∞ = 8 / (1 − 1/2) = 8 / (1/2) = 16.'
          }
        ]
      },
      {
        title: 'Matrizes, Determinantes e Combinatória',
        pages: [
          'Matrizes:\n• Matriz A(m×n) tem m linhas e n colunas.\n• Soma: só matrizes de mesma ordem.\n• Produto A(m×p) · B(p×n) = C(m×n): exige colunas de A = linhas de B. Em geral, A·B ≠ B·A.\n• Transposta Aᵀ troca linhas por colunas.',
          'Determinantes:\n• Ordem 2: |a b; c d| = ad − bc.\n• Ordem 3: Regra de Sarrus (repita as 2 primeiras colunas).\n• Propriedades: linha/coluna nula ou duas iguais → det = 0. Multiplicar matriz de ordem n por k → det(kA) = kⁿ·det(A).',
          'Análise Combinatória:\n• PFC: multiplique as escolhas de cada etapa.\n• Permutação de n com repetições: n! / (a! b! ...).\n• Arranjo A(n,p) = n!/(n−p)! (ordem IMPORTA).\n• Combinação C(n,p) = n!/[p!(n−p)!] (ordem NÃO importa).'
        ],
        tip: 'Na dúvida entre Arranjo e Combinação, troque dois escolhidos de lugar: mudou o resultado? Arranjo. Ficou igual? Combinação!',
        quiz: [
          {
            q: 'Se A é uma matriz 3×3 com det(A) = 4, qual o valor de det(2A)?',
            options: ['8', '12', '16', '24', '32'],
            answer: 4,
            explain: 'Ordem n = 3 e k = 2: det(2A) = 2³ · det(A) = 8 · 4 = 32.'
          },
          {
            q: 'De um grupo de 5 homens e 4 mulheres, deseja-se formar uma comissão com 2 homens e 2 mulheres. Quantas comissões distintas existem?',
            options: ['16', '36', '60', '120', '240'],
            answer: 2,
            explain: 'Ordem não importa: C(5,2) · C(4,2) = 10 · 6 = 60 comissões.'
          }
        ]
      },
      {
        title: 'Probabilidade e Estatística Descritiva',
        pages: [
          'Probabilidade:\n• P(E) = favoráveis / possíveis (entre 0 e 1).\n• União: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n• Complementar: P(não A) = 1 − P(A) — ouro para "pelo menos um".\n• Condicional: P(A|B) = P(A ∩ B) / P(B). Independentes: P(A ∩ B) = P(A)·P(B).',
          'Medidas de Posição (Tendência Central):\n• Média aritmética: soma / n (ponderada: multiplica pelos pesos e divide pela soma dos pesos).\n• Mediana (Md): elemento central do ROL ordenado (se n par, média dos 2 centrais).\n• Moda (Mo): valor que mais se repete.',
          'Medidas de Dispersão:\n• Amplitude = máx − mín.\n• Variância (σ²): média dos quadrados dos desvios (xᵢ − x̄)² (na amostral s², divide por n−1).\n• Desvio padrão (σ) = √(variância). Coeficiente de variação CV = σ / x̄.'
        ],
        tip: 'Média é puxada por valores extremos (outliers); Mediana resiste a extremos!',
        quiz: [
          {
            q: 'Ao lançar duas moedas honestas simultaneamente, qual a probabilidade de sair pelo menos uma cara?',
            options: ['1/4', '1/3', '1/2', '2/3', '3/4'],
            answer: 4,
            explain: 'Complementar: chance de nenhuma cara (só coroa-coroa) é 1/2 · 1/2 = 1/4. Logo, pelo menos uma cara = 1 − 1/4 = 3/4.'
          },
          {
            q: 'Em uma amostra com média 20 e variância amostral 16, o coeficiente de variação é:',
            options: ['16%', '20%', '25%', '40%', '80%'],
            answer: 1,
            explain: 'Desvio padrão s = √16 = 4. Coeficiente de variação CV = s / média = 4 / 20 = 0,20 = 20%.'
          }
        ]
      }
    ]
  }
};

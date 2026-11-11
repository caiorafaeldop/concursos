# Contrato de uma "matéria" (cidade) do jogo TJPB Quest

Cargo-alvo: **TJPB 2026 · Analista Judiciário · TI – Desenvolvimento de Sistemas · banca FGV**.
Fonte oficial do conteúdo: `C:\Users\coliveirar\Desktop\concursos\editais\tjpb\TJPB-prova-conteudo-e-metas.md` (leia a seção 4 / 5.2 inteira antes de começar).

Cada matéria vira uma **cidade** no mapa com:
- uma **casa do professor** (3 NPCs que ensinam + um chefe que aplica um teste no estilo FGV);
- uma **biblioteca** com estantes = capítulos. Cada estante abre uma **aula em slides (HTML)** e, no fim, um treino de 2 questões.

Você entrega **2 arquivos** (não edite mais nada):

## 1) `jogo/materias/<id>.js`
```js
window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['<id>'] = {
  id: '<id>',
  name: 'Nome curto da matéria',
  npcs: [                                   // exatamente 3 NPCs
    { name: 'Nome divertido', lines: ['fala ≤140 caracteres', '...'] }   // 3 a 4 falas cada, ensinando de verdade
  ],
  boss: {
    name: 'Prof. Fulano', intro: 'fala de desafio ≤140 caracteres',
    questions: [                            // 8 questões estilo FGV, 5 alternativas (A–E), 1 correta
      { q: 'enunciado', options: ['A','B','C','D','E'], answer: 0, explain: 'por que a certa está certa e as outras erradas (≤260 caracteres)' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [['termo','definição curta'], ...] },   // 6 pares, para o minijogo de ligar
  quick: [ { q: 'pergunta de bate-pronto (≤80 caracteres)', options: ['1 palavra','...','...','...'], answer: 0, explain: '1 linha' } ], // 6 itens, 4 opções de 1–3 palavras
  study: {
    title: 'Biblioteca de <Nome>',
    chapters: [                             // 5 capítulos (a mesma ordem e os mesmos títulos da aula HTML)
      { title: 'Título do capítulo',
        pages: ['resumo ≤450 caracteres; use \n e •; sem HTML', '...', '...'],   // 3 páginas (é a "colinha" de revisão)
        tip: 'macete ≤140 caracteres',
        quiz: [ {q, options:[5 alternativas], answer, explain}, {…} ] }        // 2 questões de treino
    ]
  }
};
```
Regras: `answer` em índices variados (0–4); só UMA alternativa correta; alternativas erradas plausíveis (estilo FGV); textos em PT-BR.

## 2) `jogo/aulas/<id>.html` — a aula em slides (o mais importante)
Use o motor pronto (`jogo/aulas/aula.css` e `jogo/aulas/aula.js`, **não edite**). Leia `aula.css` para ver as classes. Referência de estilo obrigatória: `C:\Users\coliveirar\Desktop\concursos\estudo\normalizacao-visual.html` (analogia de criança, "pergunta mágica", tabela com a célula errada em vermelho e a certa em verde, SVG com setas, definição de prova, comparação lado a lado, teste com `<details>`).

```html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>…</title><link rel="stylesheet" href="aula.css"></head>
<body data-subject="<id>" data-title="<Nome>">
<section class="chapter" data-title="<mesmo título do capítulo 1 do study>"> <div class="slide">…</div> … </section>
… (5 capítulos)
<script src="aula.js"></script></body></html>
```
- **5 capítulos**, cada um com **9 a 12 slides**, UMA ideia por slide, ≤ ~110 palavras de texto corrido por slide.
- O aluno disse que o material antigo "só tapeava". Aqui é para **ENSINAR DE VERDADE**, como se fosse para uma criança, sem errar nada técnico: o porquê, como funciona por dentro, exemplo resolvido passo a passo, como a FGV cobra, exceções.
- Sequência por capítulo: capa (tag CAPÍTULO N, emoji grande, "o que você vai aprender", `.analogy`) → conceitos (analogia → ilustração → exemplo → `.say.law` com a definição formal) → pelo menos 1 `.say.trap` (pegadinha FGV, certo × errado) → "Resumo" (`.magic` + `.checklist`) → "Teste rápido" (4 `<details>` estilo FGV com resposta explicada).
- **Pelo menos 3 ilustrações reais por capítulo**: SVG com caixas/setas (arquiteturas, fluxos, camadas, sequências), tabelas comparativas coloridas, diagramas de estado, linhas do tempo, código curto em `<pre><code>` com destaque via `<mark>` quando fizer sentido.
- Offline: nada externo (sem CDN, fontes ou imagens de fora).
- **Precisão é inegociável.** Nada inventado. Normas (Resoluções CNJ, leis, ISO, WCAG etc.): só afirme números/artigos/datas de que tiver certeza; na dúvida, fale em termos gerais e escreva "confira o texto oficial".

## Validação obrigatória antes de responder
1. `node --check jogo/materias/<id>.js` e um script node que carregue o arquivo com `global.window={}` e confira a estrutura (3 NPCs, 8 questões com 5 opções, 6 pares, 6 quick, 5 capítulos com 2 quiz de 5 opções, limites de tamanho).
2. Script node que confira o HTML: 5 `section.chapter` com 9–12 `.slide`, títulos iguais aos do `study`, nenhum `http` em `src`/`href`.
3. Renderize com Playwright: `require('C:/Users/coliveirar/.claude/skills/playwright-skill/node_modules/playwright')`, `chromium.launch({channel:'msedge'})`, viewport 960×580, `file:///C:/Users/coliveirar/Desktop/concursos/jogo/aulas/<id>.html#c=N&embed=1`, pelo menos 3 slides de capítulos diferentes; salve screenshots no seu diretório temporário e **olhe**: legível, bonito, nada transbordando. Corrija o que estiver feio.

Resposta final curta (PT-BR): capítulos, principais ilustrações e pontos que o aluno deve conferir em fonte oficial.

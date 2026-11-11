/* App: Missão Aprovação ABDI + TJPB. Sem dependências externas. */
(function () {
  "use strict";

  /* ---------- util ---------- */
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("mapr:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("mapr:" + k, JSON.stringify(v)); } catch (e) { /* ignora */ } },
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const NOW = () => new Date();
  const MS_DAY = 864e5;

  function when(ev) {
    if (!ev.d) return null;
    return ev.allDay ? new Date(ev.d + "T23:59:00-03:00") : new Date(ev.d);
  }
  function fmtDate(ev) {
    const d = when(ev);
    if (!d) return "A definir";
    const day = d.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric", timeZone: "America/Sao_Paulo" });
    if (ev.allDay) return day;
    const h = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
    return day + " · " + h;
  }
  function daysTo(d) {
    const ms = d - NOW();
    if (ms <= 0) return { past: true, text: "encerrado" };
    const days = Math.floor(ms / MS_DAY);
    const hours = Math.floor((ms % MS_DAY) / 36e5);
    if (days === 0) return { past: false, soon: true, text: "em " + hours + "h" };
    return { past: false, soon: days <= 7, text: days + (days === 1 ? " dia" : " dias") + (days <= 3 ? " e " + hours + "h" : "") };
  }

  /* ---------- estado ---------- */
  const state = {
    /* Do seu NotebookLM: alvos Dev de TI (ABDI) e TI Dev de Sistemas (TJPB), inscrito e pago nos dois. */
    perfil: store.get("perfil", "Desenvolvimento de TI"),
    esp: store.get("esp", "TI – Desenvolvimento de Sistemas"),
    prog: store.get("prog", {}),
    cards: store.get("cards", {}),
    plan: store.get("plan", {}),
    chk: store.get("chk", { "c0:1": true, "c0:2": true, "c1:1": true, "c1:2": true }),
    tab: "hoje",
    g: store.get("g", { xp: 0, days: [], daily: {}, q: {}, done: {}, colas: {} }),
    tr: "quiz",
    guia: "inicio",
    cola: null,
  };
  ["days", "daily", "q", "done", "colas"].forEach((k) => { if (state.g[k] == null) state.g[k] = k === "days" ? [] : {}; });
  if (!ABDI_PERFIS.includes(state.perfil)) state.perfil = ABDI_PERFIS[0];
  if (!TJPB_ESPS.includes(state.esp)) state.esp = TJPB_ESPS[0];

  /* ---------- seleção de conteúdo ---------- */
  function abdiBlocks() {
    return { gerais: ABDI_GERAIS, inst: ABDI_INST, esp: ABDI_ESP[state.perfil] || [] };
  }
  function tjpbBlocks() {
    const e = state.esp;
    const g = e === "Judiciária (Direito)" ? TJPB_GERAIS.jud : e === "Contabilidade" ? TJPB_GERAIS.cont : TJPB_GERAIS.ti;
    return { gerais: g, esp: TJPB_ESP[e] || [] };
  }
  const keyOf = (org, block, i) => org + "|" + block + "|" + i;
  function progress(org, blocks) {
    let done = 0, total = 0;
    blocks.forEach((b) => b.t.forEach((_, i) => { total++; if (state.prog[keyOf(org, b.n, i)]) done++; }));
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  /* ---------- views ---------- */
  const views = {};

  views.inicio = function () {
    const evs = EVENTS.map((e) => ({ e, d: when(e) })).filter((x) => x.d && x.e.hard && x.d > NOW()).sort((a, b) => a.d - b.d);
    const urgent = evs.filter((x) => (x.d - NOW()) / MS_DAY <= 14);
    const abdiTitIni = when(EVENTS.find((e) => e.org === "ABDI" && e.t.startsWith("Abre envio")));
    const abdiProva = when(EVENTS.find((e) => e.org === "ABDI" && e.t.startsWith("PROVA")));
    const abdiTitFim = when(EVENTS.find((e) => e.org === "ABDI" && e.t.startsWith("Fim do envio")));
    const tjProva = when(EVENTS.find((e) => e.org === "TJPB" && e.t.startsWith("PROVA")));
    const cd = (label, d, cls) => {
      const r = daysTo(d);
      return '<div class="cd ' + cls + (r.soon ? " soon" : "") + '"><span class="cd-n">' + esc(r.text) + '</span><span class="cd-l">' + esc(label) + "</span></div>";
    };
    return `
      ${urgent.length ? '<div class="alert"><strong>Prazos que pegam você agora</strong><ul>' +
        urgent.map((x) => '<li><b class="tag ' + x.e.org.toLowerCase() + '">' + x.e.org + "</b> " + esc(x.e.t) + " — <b>" + esc(fmtDate(x.e)) + "</b> (" + esc(daysTo(x.d).text) + ")</li>").join("") +
        "</ul></div>" : ""}
      <div class="cds">
        ${cd("abre títulos/teste ABDI (03/12)", abdiTitIni, "abdi")}
        ${cd("prova ABDI (20/12)", abdiProva, "abdi")}
        ${cd("fim títulos/currículo ABDI (22/12)", abdiTitFim, "abdi")}
        ${cd("prova TJPB (24/01)", tjProva, "tjpb")}
      </div>
      <div class="grid2">
        <section class="card abdi">
          <h2><span class="tag abdi">ABDI</span> API — Desenvolvimento de TI</h2>
          ${kv([
            ["Prova", "<b>20/12/2026 (domingo), 13h30–17h</b>, online, de casa"],
            ["Vagas Dev TI", "<b>2 imediatas</b> (1 AC + 1 Negro) + <b>16 CR</b> (10 AC + 4 Negros + 1 Ind. + 1 PcD)"],
            ["Salário", "R$ 16.034,70 · 40h · Brasília/DF · CLT"],
            ["Títulos/Currículo", "Envio de <b>03/12 a 22/12 (16h)</b> · Currículo obrigatório (elimina se não enviar)"],
            ["Etapas", "Objetiva (25 pts) → Títulos (10) → Entrevista (15) = <b>50 pts</b>"],
            ["Prova objetiva", "60 questões: 20 Gerais (0,3) + 20 Institucionais (0,3) + 20 Específicas (<b>0,65</b>)"],
            ["Passa se", "≥ 30 acertos (50%) <b>e</b> nenhuma área zerada (convoca top 11 AC e top 5 Negros)"],
            ["Banca", "FGV · validade 2 anos (+2)"],
          ])}
        </section>
        <section class="card tjpb">
          <h2><span class="tag tjpb">TJPB</span> Analista Judiciário — TI: Dev. de Sistemas</h2>
          ${kv([
            ["Prova", "<b>24/01/2027 (domingo), 13h–18h</b>, João Pessoa/PB. Portões 12h30"],
            ["Vagas Dev", "<b>10 imediatas</b> (6 AC + 1 PcD + 3 Negros) + cadastro reserva"],
            ["Salário", "R$ 7.526,14 + R$ 2.200 alim. + R$ 1.800 saúde = <b>R$ 11.526,14</b> · 30h"],
            ["Discursivas", "Corrigidas até a <b>100ª posição AC</b> e <b>TODOS os cotistas aprovados na objetiva</b>"],
            ["Etapas", "Objetiva (60 pts) + Discursiva (40 pts) = <b>100 pts</b>, ambas eliminatórias"],
            ["Prova objetiva", "60 questões: 20 Gerais (10 PT + 10 RLM) + 40 Específicas (1 pt cada)"],
            ["Passa se", "Ampla: Obj ≥ 36 e Disc ≥ 24 · <b>Cotas: Obj ≥ 28,8 e Disc ≥ 19,2</b>"],
            ["Banca", "FGV · validade 2 anos (+2)"],
          ])}
        </section>
      </div>
      <section class="card">
        <h2>O que mais importa agora (foco 100% na aprovação)</h2>
        <ol class="big">
          <li><b>ABDI: metade da nota final NÃO é a prova.</b> Objetiva vale 25 de 50. Títulos (10) e entrevista (15) decidem a classificação. Separe seus comprovantes antes de 03/12.</li>
          <li><b>TJPB: 80 de 100 pontos são Conhecimentos Específicos</b> (40 objetivas + 40 discursiva). Gerais valem só 20. Invista 80% do tempo de TJPB em TI.</li>
          <li><b>ABDI Institucionais são um conteúdo pequeno e fechado</b> (leis e regulamentos da própria ABDI): 20 questões, dá para dominar. Regulamento de Licitações/Convênios sozinho tem 8.</li>
          <li><b>Cada Específica da ABDI vale 0,65</b>, mais que o dobro das outras (0,3). As 20 Específicas valem 13 dos 25 pontos da objetiva.</li>
          <li><b>Zerar uma área na ABDI elimina</b>, mesmo com 30 acertos. Garanta pontos nas três.</li>
          <li><b>Nenhuma das duas desconta ponto por erro</b> (só zero para marcação dupla/ausente). Nunca deixe em branco.</li>
        </ol>
      </section>
      <section class="card">
        <h2>Divergências do edital que você precisa saber</h2>
        <ul>
          <li><b>TJPB, jornada:</b> o edital original diz 40h; a <b>1ª retificação corrigiu para 30h</b>.</li>
          <li><b>TJPB, nota mínima:</b> o original escrevia "60% (cinquenta por cento)"; a retificação fixou <b>60%</b>.</li>
          <li><b>TJPB, experiência em TI:</b> a <b>2ª retificação removeu os 2 anos</b> de experiência (Governança, Segurança, IA, Dados).</li>
          <li><b>TJPB, discursiva:</b> virou <b>estudo de caso</b> sobre os Específicos, com nota 0 em vários cenários, mínimo de 60%, e só as melhores objetivas são corrigidas.</li>
          <li><b>TJPB, cotas:</b> a nota mínima para PcD, negros, indígenas e quilombolas é "20% inferior" à da ampla. Calculei 28,8 pontos (36 × 0,8). Confirme o entendimento no edital (item 10.12.1).</li>
          <li><b>ABDI, item 9.6</b> cita "subitem 9.4", mas o critério de aprovação está no 9.5 (erro de referência do edital; o critério é o do 9.5).</li>
          <li><b>ABDI, link da prova:</b> o edital só diz "até 3 dias antes"; não há data exata (usei ~17/12 como estimativa).</li>
        </ul>
      </section>
      <p class="muted">Fontes: Edital ABDI nº 01/2026 (20/10/2026); Edital TJPB nº 01/2026 (DJe 17.456, 20/10/2026), 1ª retificação (23/10) e 2ª retificação (29/10). Sempre confira o site da FGV: conhecimento.fgv.br/concursos/psabdi e /tjpb26.</p>`;
  };

  function kv(rows) {
    return '<dl class="kv">' + rows.map((r) => "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>").join("") + "</dl>";
  }

  views.datas = function () {
    const row = (e) => {
      const d = when(e);
      const r = d ? daysTo(d) : null;
      const cls = !d ? "tbd" : r.past ? "past" : e.hard ? "hard" : "";
      return '<li class="ev ' + cls + '"><div class="ev-d"><b class="tag ' + e.org.toLowerCase() + '">' + e.org + "</b><br>" + esc(fmtDate(e)) + (r ? '<br><span class="ev-c ' + (r.soon ? "soon" : "") + '">' + esc(r.text) + "</span>" : "") +
        '</div><div class="ev-t"><b>' + esc(e.t) + "</b>" + (e.n ? "<p>" + esc(e.n) + "</p>" : "") + "</div></li>";
    };
    const all = EVENTS.slice().sort((a, b) => {
      const da = when(a), db = when(b);
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return da - db;
    });
    const f = store.get("evf", "todos");
    const list = all.filter((e) => f === "todos" || e.org.toLowerCase() === f);
    return `
      <div class="seg" role="group" aria-label="Filtrar">
        ${["todos", "abdi", "tjpb"].map((k) => '<button data-evf="' + k + '" class="' + (f === k ? "on" : "") + '">' + k.toUpperCase() + "</button>").join("")}
      </div>
      <ul class="timeline">${list.map(row).join("")}</ul>
      <p class="muted">Horário de Brasília. Linhas vermelhas = prazo que elimina se perder. Datas "a definir" saem em edital posterior; é sua obrigação acompanhar (não há aviso individual).</p>`;
  };

  views.prova = function () {
    return `
      <div class="grid2">
        <section class="card abdi">
          <h2><span class="tag abdi">ABDI</span> Formato da prova</h2>
          ${kv([
            ["Modalidade", "<b>Online</b>, de casa, em plataforma FGV, com monitoramento por IA + humano (webcam, microfone, tela)"],
            ["Data / hora", "20/12/2026, 13h30 às 17h00 (3h30)"],
            ["Acesso", "Link exclusivo (até 3 dias antes). Ativo 30 min antes; entre com 5+ min de folga; <b>após 13h30 não entra</b>"],
            ["Equipamento", "Desktop ou notebook, webcam, microfone, internet estável. <b>Teste obrigatório</b> (comunicado 03/12)"],
            ["Questões", "60, múltipla escolha, 5 alternativas, 1 certa"],
            ["Pontos", "25 no total"],
            ["Permanência", "Mínimo 2 horas; sair antes = desistente"],
            ["Não pode", "Calculadora, consulta, outras abas, copiar/colar, relógio, óculos escuros, protetor auricular, lápis, marca-texto, borracha, boné, celular"],
            ["Identificação", "Documento <b>físico original</b> com foto + reconhecimento facial"],
          ])}
          <table class="t">
            <thead><tr><th>Área</th><th>Disciplina</th><th>Q</th><th>Valor</th></tr></thead>
            <tbody>
              <tr><td rowspan="3">Gerais (20)</td><td>Língua Portuguesa</td><td>8</td><td>0,3</td></tr>
              <tr><td>Raciocínio Lógico</td><td>6</td><td>0,3</td></tr>
              <tr><td>Noções de Informática</td><td>6</td><td>0,3</td></tr>
              <tr><td rowspan="4">Institucionais (20)</td><td>Serviços Sociais Autônomos</td><td>4</td><td>0,3</td></tr>
              <tr><td>Lei/decreto de criação; Estatuto</td><td>4</td><td>0,3</td></tr>
              <tr><td>Reg. Licitações e Contratos; Convênios</td><td>8</td><td>0,3</td></tr>
              <tr><td>Ética e conduta; Missão e atuação</td><td>4</td><td>0,3</td></tr>
              <tr><td>Específicos (20)</td><td>Do seu perfil</td><td>20</td><td><b>0,65</b></td></tr>
            </tbody>
          </table>
          <h3>Depois da prova</h3>
          <ul>
            <li><b>Títulos e experiência</b> (classificatória, 10 pts): envio 03/12–22/12.</li>
            <li><b>Entrevista por competências</b> (classificatória, 15 pts): online, filmada, banca de 3.</li>
            <li>Procedimentos de cotas/PcD (heteroidentificação, verificação documental, biopsicossocial): <b>telepresenciais</b>, após a objetiva.</li>
            <li><b>Nota final</b> = objetiva + títulos + entrevista (máx. 50).</li>
            <li><b>Desempate:</b> 60+ anos → entrevista → títulos → Específicos → Gerais → idade → sorteio.</li>
            <li><b>Recursos:</b> 2 dias úteis em cada etapa.</li>
          </ul>
        </section>
        <section class="card tjpb">
          <h2><span class="tag tjpb">TJPB</span> Formato da prova</h2>
          ${kv([
            ["Modalidade", "<b>Presencial</b>, João Pessoa/PB (locais divulgados no site da FGV)"],
            ["Data / hora", "24/01/2027, 13h às 18h (5h): objetiva + discursiva no mesmo dia"],
            ["Portões", "Fecham <b>12h30</b>. Chegue 1h30 antes (11h30)"],
            ["Objetiva", "60 questões, 5 alternativas, 1 ponto cada = 60 pts"],
            ["Discursiva", "<b>1 estudo de caso</b>, 30 linhas, 40 pts, sobre os Conhecimentos Específicos do cargo"],
            ["Permanência", "Mínimo 2 horas; caderno só leva quem sair nos últimos 30 min"],
            ["Caneta", "Esferográfica <b>transparente azul ou preta</b>. Gabarito = único válido. Rasura = zero na questão"],
            ["Não pode", "Celular, relógio (qualquer), boné/chapéu, óculos escuros, lápis, lapiseira, borracha, corretivo, calculadora. Detector de metais e impressão digital"],
            ["Identificação", "Documento <b>físico original</b> com foto. Digital e cópia (mesmo autenticada) não valem"],
          ])}
          <table class="t">
            <thead><tr><th>Cargo</th><th>Gerais (20)</th><th>Específicos</th></tr></thead>
            <tbody>
              <tr><td>Judiciária</td><td>Português 10 · Ética e Gestão 5 · Informática e Proteção de Dados 5</td><td>40</td></tr>
              <tr><td>Contabilidade</td><td>Português 10 · Raciocínio Lógico 5 · Informática e Proteção de Dados 5</td><td>40</td></tr>
              <tr><td>Todas de TI</td><td>Português 10 · Raciocínio Lógico-Matemático 10</td><td>40</td></tr>
            </tbody>
          </table>
          <p class="muted">O edital não divide as 40 questões Específicas por disciplina.</p>
          <h3>Aprovação e classificação</h3>
          <ul>
            <li><b>Objetiva:</b> ≥ 60% (36 pts). Cotas: 20% inferior (≈ 28,8).</li>
            <li><b>Discursiva:</b> ≥ 60% (24 de 40). Corrigida só para os melhores da objetiva (ver Vagas).</li>
            <li><b>Nota final</b> = objetiva + discursiva (máx. 100).</li>
            <li><b>Desempate:</b> 60+ anos → maior nota nos Específicos → jurado → mais velho.</li>
            <li><b>Heteroidentificação</b> e demais confirmações vêm depois da objetiva.</li>
            <li><b>Recursos:</b> 2 dias úteis (gabarito e resultados).</li>
          </ul>
        </section>
      </div>`;
  };

  views.vagas = function () {
    const a = ABDI_VAGAS, t = TJPB_VAGAS;
    const sel = (name, cur) => (name === cur ? ' class="mine"' : "");
    return `
      <section class="card abdi">
        <h2><span class="tag abdi">ABDI</span> Vagas por perfil</h2>
        <div class="scroll"><table class="t num">
          <thead>
            <tr><th rowspan="2">Perfil</th><th colspan="6">Vagas imediatas</th><th colspan="6">Cadastro reserva</th></tr>
            <tr>${a.cols.map((c) => "<th>" + c + "</th>").join("")}${a.cols.map((c) => "<th>" + c + "</th>").join("")}</tr>
          </thead>
          <tbody>
            ${a.rows.map((r) => "<tr" + sel(r[0], state.perfil) + "><td>" + esc(r[0]) + "</td>" + r[1].map((v, i) => "<td" + (i === 5 ? ' class="tot"' : "") + ">" + v + "</td>").join("") + r[2].map((v, i) => "<td" + (i === 5 ? ' class="tot"' : "") + ">" + v + "</td>").join("") + "</tr>").join("")}
            <tr class="sum"><td>TOTAL</td>${a.total[0].map((v) => "<td>" + v + "</td>").join("")}${a.total[1].map((v) => "<td>" + v + "</td>").join("")}</tr>
          </tbody>
        </table></div>
        <p class="muted">Linha destacada = seu perfil selecionado. Reservas: 3% PcD · 30% PPIQ (25% negros, 3% indígenas, 2% quilombolas). Lotação: Brasília/DF. A reserva também vale para o cadastro de reserva.</p>
      </section>
      <section class="card tjpb">
        <h2><span class="tag tjpb">TJPB</span> Vagas por especialidade</h2>
        <div class="scroll"><table class="t num">
          <thead><tr><th>Especialidade</th>${t.cols.map((c) => "<th>" + c + "</th>").join("")}</tr></thead>
          <tbody>
            ${t.rows.map((r) => "<tr" + sel(r[0], state.esp) + "><td>" + esc(r[0]) + "</td>" + r[1].map((v, i) => "<td" + (i === 0 ? ' class="tot"' : "") + ">" + v + "</td>").join("") + "<td>" + r[2] + "</td></tr>").join("")}
            <tr class="sum"><td>TOTAL</td>${t.total.map((v) => "<td>" + v + "</td>").join("")}<td></td></tr>
          </tbody>
        </table></div>
        <p class="muted">AC = ampla concorrência. A coluna "discursivas corrigidas" é o corte da objetiva para ter a discursiva avaliada (cotistas aprovados na objetiva têm correção garantida). Há também cadastro reserva. Requisitos: Judiciária = Direito · TI = graduação ou pós em TI · Contabilidade = Ciências Contábeis + CRC.</p>
      </section>`;
  };

  function selectors() {
    return `
      <div class="selbar">
        <label>Perfil ABDI
          <select id="selA">${ABDI_PERFIS.map((p) => '<option' + (p === state.perfil ? " selected" : "") + ">" + esc(p) + "</option>").join("")}</select>
        </label>
        <label>Especialidade TJPB
          <select id="selT">${TJPB_ESPS.map((p) => '<option' + (p === state.esp ? " selected" : "") + ">" + esc(p) + "</option>").join("")}</select>
        </label>
      </div>`;
  }

  function blockHtml(org, b, tagQ) {
    const items = b.t.map((t, i) => {
      const k = keyOf(org, b.n, i);
      return '<li><label><input type="checkbox" data-k="' + esc(k) + '"' + (state.prog[k] ? " checked" : "") + "> <span>" + esc(t) + "</span></label></li>";
    }).join("");
    const done = b.t.filter((_, i) => state.prog[keyOf(org, b.n, i)]).length;
    return '<details class="blk"><summary><span class="bn">' + esc(b.n) + "</span>" + (b.q ? '<span class="bq">' + b.q + " q</span>" : "") +
      '<span class="bp">' + done + "/" + b.t.length + "</span></summary><ul class=\"chk\">" + items + "</ul></details>";
  }
  function bar(p) {
    return '<div class="bar" role="progressbar" aria-valuenow="' + p.pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + p.pct + '%"></i></div><div class="barl">' + p.done + " de " + p.total + " tópicos · <b>" + p.pct + "%</b></div>";
  }

  views.conteudo = function () {
    const A = abdiBlocks(), T = tjpbBlocks();
    const pa = progress("ABDI", [].concat(A.gerais, A.inst, A.esp));
    const pt = progress("TJPB", [].concat(T.gerais, T.esp));
    return `
      ${selectors()}
      <p class="muted">Marque os tópicos conforme estuda; o progresso fica salvo neste navegador. "q" = nº de questões na prova, conforme o edital.</p>
      <div class="grid2">
        <section class="card abdi">
          <h2><span class="tag abdi">ABDI</span> ${esc(state.perfil)}</h2>
          ${bar(pa)}
          <p class="tip">Ordem sugerida: <b>Institucionais</b> (fechado, 20 q) → <b>Específicos</b> (13 dos 25 pts) → Gerais.</p>
          <h3>Conhecimentos Institucionais (20 q · 0,3)</h3>
          ${A.inst.map((b) => blockHtml("ABDI", b)).join("")}
          <h3>Conhecimentos Específicos (20 q · 0,65)</h3>
          ${A.esp.map((b) => blockHtml("ABDI", b)).join("")}
          <h3>Conhecimentos Gerais (20 q · 0,3)</h3>
          ${A.gerais.map((b) => blockHtml("ABDI", b)).join("")}
        </section>
        <section class="card tjpb">
          <h2><span class="tag tjpb">TJPB</span> ${esc(state.esp)}</h2>
          ${bar(pt)}
          <p class="tip">Específicos valem <b>80 de 100 pontos</b> (objetiva + discursiva). Estude Gerais em doses diárias curtas; invista o grosso nos Específicos.</p>
          <h3>Conhecimentos Específicos (40 q + discursiva de 40 pts)</h3>
          ${T.esp.map((b) => blockHtml("TJPB", b)).join("")}
          <h3>Conhecimentos Gerais (20 q · 1 pt)</h3>
          ${T.gerais.map((b) => blockHtml("TJPB", b)).join("")}
        </section>
      </div>
      <section class="card">
        <h2>Onde achar o material (fontes oficiais)</h2>
        <ul class="links">
          <li>Provas e gabaritos anteriores da FGV: <a href="https://conhecimento.fgv.br/concursos" target="_blank" rel="noopener">conhecimento.fgv.br/concursos</a></li>
          <li>Leis (Planalto): <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l11080.htm" target="_blank" rel="noopener">Lei 11.080/2004</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5352.htm" target="_blank" rel="noopener">Decreto 5.352/2005</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener">LGPD</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm" target="_blank" rel="noopener">LAI</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm" target="_blank" rel="noopener">Marco Civil</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm" target="_blank" rel="noopener">Lei 12.737</a></li>
          <li>Administrativo: <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" target="_blank" rel="noopener">Lei 14.133</a> · <a href="https://www.planalto.gov.br/ccivil_03/leis/l8429.htm" target="_blank" rel="noopener">Lei 8.429</a> · <a href="https://www.planalto.gov.br/ccivil_03/leis/l9784.htm" target="_blank" rel="noopener">Lei 9.784</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12846.htm" target="_blank" rel="noopener">Lei 12.846</a> · <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13303.htm" target="_blank" rel="noopener">Lei 13.303</a></li>
          <li>Resoluções do CNJ (TJPB): <a href="https://atos.cnj.jus.br" target="_blank" rel="noopener">atos.cnj.jus.br</a>, buscar pelo número (ex.: 396/2021, 468/2022, 331/2020)</li>
          <li><b>ABDI institucionais:</b> Estatuto Social, Regulamento de Licitações e Contratos, Regulamento de Convênios, Regulamento de Ética e Conduta (Res. CD 004/2022) e Planejamento Estratégico 2024–2029 (Res. CD 008/2023) ficam no site da ABDI (seção de transparência/governança). Baixe e leia o texto integral.</li>
        </ul>
        <p class="muted">Links do Planalto seguem o padrão oficial; se algum abrir em branco, busque o número da lei no site.</p>
      </section>`;
  };

  /* ----- plano ----- */
  const PLAN = [
    { id: "p0", when: "06/11 – 10/11", org: "abdi", title: "Arranque: diagnóstico e base ABDI",
      tasks: [
        "Fazer 1 prova anterior da FGV de Desenvolvimento de Sistemas como diagnóstico (sem consulta)",
        "Baixar as normas institucionais da ABDI: Lei 11.080, Decreto 5.352, Estatuto, Regulamentos (licitações, convênios, ética), Planejamento Estratégico 2024–29",
        "Começar a reunir comprovantes de títulos, certificações e experiência para o envio de 03/12 a 22/12 (ver Checklists)",
      ] },
    { id: "p1", when: "09/11 – 15/11", org: "abdi", title: "Semana 1: base institucional + Engenharia de Software",
      tasks: [
        "Institucionais: Serviços Sociais Autônomos + Lei 11.080/Decreto 5.352 + Estatuto (8 q)",
        "Específicos Dev: Engenharia de Software, Scrum/Kanban, Requisitos, Arquitetura e Padrões GoF/SOLID",
        "Português FGV: interpretação e coesão (30 min/dia, todo dia)",
        "Raciocínio lógico: proposicional, negações e equivalências (3 sessões)",
      ] },
    { id: "p2", when: "16/11 – 22/11", org: "abdi", title: "Semana 2: licitações ABDI + Banco de Dados e Web",
      tasks: [
        "Regulamento de Licitações e Contratos + Convênios da ABDI (8 q): ler inteiro e treinar questões",
        "Ética e conduta (Res. CD 004/2022) + Planejamento Estratégico 2024–29 (4 q)",
        "Específicos Dev: SQL, Modelagem Relacional, Normalização, Java, JS/Node.js, HTML5/CSS3",
        "Português FGV: concordância e regência",
      ] },
    { id: "p3", when: "23/11 – 29/11", org: "abdi", title: "Semana 3: específicos",
      tasks: [
        "Específicos: 2º e 3º blocos (maior peso: 13 dos 25 pts)",
        "Informática: Windows, Office, LibreOffice, segurança, IA",
        "LGPD, LAI, Marco Civil e Lei 12.737 (aparecem em Informática)",
        "Revisão espaçada dos blocos da semana 1 (D+7)",
      ] },
    { id: "p4", when: "30/11 – 06/12", org: "abdi", title: "Semana 4: fechar conteúdo + operação",
      tasks: [
        "Específicos: blocos restantes",
        "Português: crase, pontuação, colocação pronominal, reescrita",
        "<b>03/12:</b> teste obrigatório da plataforma (mesmo PC e internet da prova)",
        "<b>03/12:</b> abre o envio de títulos + currículo. Envie até 10/12 (não espere 22/12)",
        "Escrever 6 histórias no formato STAR para a entrevista",
      ] },
    { id: "p5", when: "07/12 – 13/12", org: "abdi", title: "Semana 5: simulados",
      tasks: [
        "Simulado 1 e 2: 60 questões em 3h30, no horário real (13h30), em computador",
        "Preencher o log de erros e atacar os 3 temas que mais erra",
        "Revisar Institucionais com flashcards (todo dia)",
        "Conferir se títulos e currículo foram enviados",
      ] },
    { id: "p6", when: "14/12 – 20/12", org: "abdi", title: "Semana 6: reta final",
      tasks: [
        "Só revisão ativa (erros, flashcards, resumos). Não comece tema novo",
        "Checar equipamento, internet de backup, ambiente, documento original",
        "~17/12: link da prova disponível no site da FGV",
        "19/12: descanso. Dormir bem",
        "<b>20/12: prova ABDI</b> (entrar no link às 13h25)",
      ] },
    { id: "p7", when: "21/12 – 27/12", org: "tjpb", title: "Transição para o TJPB",
      tasks: [
        "21/12: descansar, mas fechar pendências ABDI (<b>títulos/currículo até 22/12 16h</b>)",
        "Ler o conteúdo do TJPB e fazer o diagnóstico (1 prova anterior da especialidade)",
        "Separar material dos Específicos; montar cronograma por disciplina",
        "Português + Raciocínio em doses curtas diárias (Gerais valem 20 pts)",
      ] },
    { id: "p8", when: "28/12 – 03/01", org: "tjpb", title: "TJPB 1: primeira passada dos específicos",
      tasks: [
        "Específicos: 1ª passada na 1ª metade do conteúdo (teoria + questões)",
        "Ritmo de fim de ano: manter o mínimo diário, sem zerar o dia",
        "1 estudo de caso escrito à mão (30 linhas), com cronômetro",
      ] },
    { id: "p9", when: "04/01 – 17/01", org: "tjpb", title: "TJPB 2: segunda passada + treino",
      tasks: [
        "Específicos: 2ª metade do conteúdo + revisão da 1ª",
        "1 estudo de caso por semana, corrigido por você com checklist (contexto, problemas, fundamentação, solução)",
        "1 simulado completo por semana (60 q + discursiva)",
        "Log de erros: refazer as questões erradas 7 dias depois",
      ] },
    { id: "p10", when: "18/01 – 23/01", org: "tjpb", title: "TJPB 3: reta final",
      tasks: [
        "2 simulados no horário real (13h–18h): objetiva em ~3h, discursiva ~1h30",
        "Revisar só log de erros, flashcards e resumos",
        "Logística: local da prova, transporte (despesa é sua), documento original, caneta transparente azul/preta",
        "23/01: descanso, preparar mochila, dormir cedo",
        "<b>24/01: prova TJPB.</b> Chegar 11h30; portões fecham 12h30",
      ] },
  ];

  views.plano = function () {
    const tpl = `
      <section class="card">
        <h2>Rotina de cada sessão (use sempre)</h2>
        <ol class="big">
          <li><b>Ler/ouvir (25–40 min)</b> um tópico, <b>com a lei/texto aberto</b>. Marque só o essencial.</li>
          <li><b>Fechar o material e escrever de cabeça</b> o que lembra (3–5 min). Se não lembra, não aprendeu.</li>
          <li><b>Questões da FGV sobre o mesmo tópico (30–40 min)</b>. Para cada erro, escreva 1 linha: o que errei e por quê.</li>
          <li><b>Revisão espaçada:</b> reveja o tópico em <b>24h, 7 dias e 30 dias</b> (flashcards e log de erros).</li>
        </ol>
        <p class="tip"><b>Semana-tipo:</b> seg–qui = disciplinas novas · sex = só questões + revisão · sáb = bloco longo ou simulado · dom = revisão leve + planejar a semana. Se faltar tempo, corte teoria, nunca as questões e a revisão.</p>
      </section>`;
    const list = PLAN.map((p) => {
      const tasks = p.tasks.map((t, i) => {
        const k = p.id + ":" + i;
        return '<li><label><input type="checkbox" data-plan="' + k + '"' + (state.plan[k] ? " checked" : "") + "> <span>" + t + "</span></label></li>";
      }).join("");
      const done = p.tasks.filter((_, i) => state.plan[p.id + ":" + i]).length;
      return '<section class="card ' + p.org + '"><h2><span class="tag ' + p.org + '">' + p.org.toUpperCase() + "</span> " + esc(p.title) + '</h2><p class="when">' + esc(p.when) + ' · <b>' + done + "/" + p.tasks.length + '</b></p><ul class="chk">' + tasks + "</ul></section>";
    }).join("");
    return tpl + '<p class="muted">Cronograma assume dedicação diária regular e que você ainda não estudou tudo. Ajuste conforme seu nível: diagnóstico da Fase 0 mostra onde pesar.</p>' + list;
  };

  views.estrategia = function () {
    return `
      <div class="grid2">
        <section class="card abdi">
          <h2><span class="tag abdi">ABDI</span> Como pontuar</h2>
          <ul>
            <li><b>Corte:</b> 30 acertos em 60 e nenhuma área zerada. Meta de segurança sugerida: 38–42 acertos (heurística minha, não é dado do edital).</li>
            <li><b>Onde está o ganho:</b> Específicas valem 0,65 (13 pts); Institucionais 6 pts em conteúdo fechado e curto.</li>
            <li><b>Classificação:</b> 25 pts da prova + 10 de títulos + 15 de entrevista. Títulos e entrevista somam 25 dos 50 pontos finais, então podem inverter posições entre quem tirou notas parecidas na objetiva.</li>
            <li><b>Tempo de prova:</b> 3h30 para 60 questões (~3 min cada). Passada 1: responda o que sabe; marque o resto. Passada 2: volte. Responda tudo.</li>
            <li><b>Online:</b> faça os simulados no computador, em tela cheia, sem celular por perto.</li>
          </ul>
          <h3>Títulos (máx. 10 pts)</h3>
          <table class="t">
            <thead><tr><th>Item</th><th>Vale</th><th>Teto</th></tr></thead>
            <tbody>
              <tr><td>Especialização (≥ 360 h)</td><td>1,0 cada</td><td>2,0</td></tr>
              <tr><td>Mestrado</td><td>1,5</td><td>1,5</td></tr>
              <tr><td>Doutorado</td><td>2,5</td><td>2,5</td></tr>
              <tr><td>Certificação profissional (por exame)</td><td>0,5 cada</td><td>2,0</td></tr>
              <tr><td>Experiência na área do perfil</td><td>0,5 por ano completo</td><td>2,0 (4 anos)</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Só conta o que tem relação com as <b>atribuições do perfil</b>. Cursos precisam estar concluídos.</li>
            <li>Certificação precisa ser <b>por exame</b>, reconhecida e <b>válida na data do envio</b>. Certificado de curso/evento não conta.</li>
            <li>Experiência: CTPS (páginas de identificação e contrato) <b>+ declaração do empregador com as atividades</b>; servidor: certidão do órgão; autônomo: contrato + declaração do contratante.</li>
            <li>Pós: declaração de conclusão <b>com histórico escolar</b>. Máx. 5 arquivos por alínea; PDF/JPG até 5 MB; frente e verso.</li>
          </ul>
          <h3>Entrevista (15 pts)</h3>
          <p>Estruturada, baseada em <b>fatos reais da sua carreira</b>. 5 competências × 3 critérios de 1,0:</p>
          <ul>
            <li><b>Comunicação:</b> clareza, objetividade, entendeu a pergunta.</li>
            <li><b>Visão sistêmica:</b> contexto, conexão entre partes, tendências do setor.</li>
            <li><b>Criatividade e adaptabilidade:</b> lida com mudança, propõe alternativas, risco calculado.</li>
            <li><b>Foco em resultados:</b> supera o padrão, foca na solução, colabora.</li>
            <li><b>Técnicas:</b> experiência, aderência às atribuições, conhecimento técnico.</li>
          </ul>
          <p><b>Prepare 6 histórias STAR</b> (Situação, Tarefa, Ação, Resultado com número), cada uma cobrindo 2+ competências. Estude a missão da ABDI, a NIB e o Brasil Mais Produtivo. Currículo (Anexo IV) tem que bater com seus comprovantes.</p>
        </section>
        <section class="card tjpb">
          <h2><span class="tag tjpb">TJPB</span> Como pontuar</h2>
          <ul>
            <li><b>Peso:</b> 80 de 100 pontos vêm dos Específicos; eles também desempatam. A discursiva só é corrigida se você ficar entre os melhores da objetiva, então a objetiva precisa ser forte.</li>
            <li><b>Corte:</b> objetiva 36 (60%); discursiva 24 (60%). Zerar a discursiva elimina.</li>
            <li><b>Tempo:</b> 5h no total. Objetiva ~2h45–3h; discursiva ~1h15–1h30; sobra para passar o gabarito com calma (rasura = zero na questão).</li>
            <li><b>Mínimo de 2h no local</b>: não tem como entregar antes.</li>
          </ul>
          <h3>Discursiva: estudo de caso (30 linhas)</h3>
          <p>O edital pede: situação-problema do cargo, <b>análise crítica</b>, <b>identificar os problemas</b>, <b>aplicar conhecimento teórico e normativo</b> e <b>propor solução</b>. Roteiro:</p>
          <ol>
            <li><b>Contexto (3–4 linhas):</b> resuma o caso e diga a tese/ conclusão em uma frase.</li>
            <li><b>Problemas (6–8 linhas):</b> liste e classifique os problemas (jurídico, técnico, de gestão, de risco).</li>
            <li><b>Fundamentação (10–12 linhas):</b> norma, princípio, conceito ou súmula/resolução do conteúdo programático para cada problema.</li>
            <li><b>Solução/encaminhamento (6–8 linhas):</b> medidas concretas, ordem de prioridade, responsáveis, prazos, riscos.</li>
          </ol>
          <ul>
            <li><b>Zera:</b> sem texto, fora do tema, fora do formato estudo de caso, ilegível, caneta que não seja azul/preta, plágio, qualquer marca que identifique você, resposta técnica "plenamente incorreta".</li>
            <li>Use as 30 linhas. Letra legível. Sem rubrica, nome, desenho.</li>
            <li>Treino: 1 por semana, cronometrado, à mão, com a caneta da prova.</li>
          </ul>
          <h3>Gerais</h3>
          <p>Português (10 q) é a maior disciplina geral: estude todo dia, 30 min. Para Judiciária, Ética e Gestão (5 q) tem lista fechada de normas (Leis 8.429 e 12.846, Res. TJPB 20 e 21/2025, Res. CNJ 230/2021, 351/2020 e 400/2021).</p>
        </section>
      </div>
      <section class="card">
        <h2>Como resolver questões FGV</h2>
        <ul>
          <li>Resolva provas da FGV de <b>outros concursos do mesmo cargo/tema</b>: o estilo (enunciados longos, assertivas I/II/III, "assinale a alternativa incorreta/exceto") se repete.</li>
          <li>Leia o comando antes do texto. Circule "NÃO", "INCORRETA", "EXCETO".</li>
          <li>Em legislação, a FGV cobra a letra da lei e também aplicação em caso concreto. Estude o artigo e depois faça questões.</li>
          <li>Erro de interpretação não é falta de conteúdo: anote o tipo de erro (desatenção, lacuna, pegadinha) no log.</li>
        </ul>
      </section>
      <section class="card">
        <h2>Se você optou por cotas</h2>
        <p>Neutro, vale para quem se declarou negro (preto/pardo), indígena ou quilombola, ou PcD:</p>
        <ul>
          <li>Você concorre <b>ao mesmo tempo</b> às vagas reservadas e à ampla concorrência.</li>
          <li><b>TJPB:</b> nota mínima da objetiva é 20% menor para cotistas; a discursiva é sempre corrigida se aprovado na objetiva. A heteroidentificação (critério fenotípico, comissão do TJPB) vem <b>depois</b> da objetiva e precisa ser convalidada; se não for homologada ou faltar, você segue só na ampla.</li>
          <li><b>ABDI:</b> a confirmação é telepresencial e <b>filmada</b> (recusar a filmagem tira você das vagas reservadas). Comissão de 5; recurso em 2 dias úteis.</li>
          <li>A autodeclaração vale só para cada concurso; em ambos, <b>a opção é feita na inscrição</b> e não muda depois (erro material: e-mail à FGV até o fim das inscrições).</li>
        </ul>
      </section>`;
  };

  /* ----- checklists ----- */
  const CHECKS = [
    { t: "ABDI: títulos e experiência (envio 03/12 a 22/12)", org: "abdi", items: [
      "Diploma da graduação (registrado)",
      "Especialização(ões) ≥ 360h: declaração de conclusão + histórico escolar",
      "Mestrado/doutorado: diploma ou declaração + histórico",
      "Certificações por exame, ainda válidas, ligadas ao perfil Desenvolvimento de TI",
      "Experiência: CTPS + declaração do empregador descrevendo atividades (por vínculo)",
      "Currículo padrão (Anexo IV) preenchido e coerente com os comprovantes (OBRIGATÓRIO — não enviar elimina)",
      "Arquivos em PDF/JPG, até 5 MB, frente e verso, máx. 5 por alínea",
      "Guardar os originais (podem ser pedidos depois)",
    ]},
    { t: "ABDI: dia da prova (20/12), online", org: "abdi", items: [
      "Teste da plataforma feito (a partir de 03/12) no mesmo PC e internet",
      "Link recebido (~17/12) e salvo",
      "PC carregado na tomada, webcam e microfone testados",
      "Internet de backup (hotspot) pronta",
      "RG/CNH físico original com foto na mão",
      "Sem relógio, óculos escuros, protetor auricular, lápis, marca-texto, borracha, boné. Celular longe do alcance e silenciado",
      "Mesa limpa, sala silenciosa, avisar a casa",
      "Entrar no link às 13h25; ficar no mínimo 2h",
    ]},
    { t: "TJPB: dia da prova (24/01/2027), presencial em João Pessoa/PB", org: "tjpb", items: [
      "Local conferido no site da FGV; rota e horário testados",
      "Documento físico original com foto (não digital)",
      "Caneta esferográfica transparente azul/preta (leve 2 ou 3)",
      "Sem celular, relógio, boné, óculos escuros, lápis, lapiseira, borracha, corretivo",
      "Chegar às 11h30; portões fecham 12h30",
      "Alimentação leve e água em garrafa transparente sem rótulo; roupa sem metal exagerado (detector)",
      "Fique ao menos 2h; caderno só se sair nos últimos 30 min",
    ]},
  ];

  views.checklists = function () {
    return CHECKS.map((c, ci) => {
      const items = c.items.map((t, i) => {
        const k = "c" + ci + ":" + i;
        return '<li><label><input type="checkbox" data-chk="' + k + '"' + (state.chk[k] ? " checked" : "") + "> <span>" + esc(t) + "</span></label></li>";
      }).join("");
      return '<section class="card ' + c.org + '"><h2><span class="tag ' + c.org + '">' + c.org.toUpperCase() + "</span> " + esc(c.t) + '</h2><ul class="chk">' + items + "</ul></section>";
    }).join("");
  };

  /* ----- treino / flashcards ----- */
  let deck = [], deckIdx = 0, flipped = false;
  function buildDeck(org, onlyRev) {
    deck = CARDS.map((c, i) => ({ i, org: c[0], q: c[1], a: c[2] }))
      .filter((c) => (org === "todos" || c.org.toLowerCase() === org) && (!onlyRev || state.cards[c.i] !== "ok"));
    for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = deck[i]; deck[i] = deck[j]; deck[j] = t; }
    deckIdx = 0; flipped = false;
  }
  views.treino = function () {
    const f = store.get("cf", "todos");
    const rev = store.get("crev", false);
    if (!deck.length || deck._f !== f + rev) { buildDeck(f, rev); deck._f = f + rev; }
    const known = Object.values(state.cards).filter((v) => v === "ok").length;
    const c = deck[deckIdx];
    return `
      <div class="seg" role="group" aria-label="Baralho">
        ${["todos", "abdi", "tjpb"].map((k) => '<button data-cf="' + k + '" class="' + (f === k ? "on" : "") + '">' + k.toUpperCase() + "</button>").join("")}
        <button data-crev="1" class="${rev ? "on" : ""}">só os que não sei</button>
      </div>
      <p class="muted">${known} de ${CARDS.length} cartões marcados como "sei". Regra: tente responder em voz alta ANTES de virar.</p>
      ${c ? `
      <div class="fc ${c.org.toLowerCase()}" id="fc" tabindex="0" role="button" aria-label="Virar cartão">
        <div class="fc-top"><span class="tag ${c.org.toLowerCase()}">${c.org}</span><span>${deckIdx + 1}/${deck.length}</span></div>
        <div class="fc-body">${flipped ? '<div class="fc-a">' + esc(c.a) + "</div>" : '<div class="fc-q">' + esc(c.q) + "</div>"}</div>
        <div class="fc-hint">${flipped ? "" : "toque para ver a resposta"}</div>
      </div>
      <div class="fcb">
        <button data-fc="flip">${flipped ? "Ver pergunta" : "Virar"}</button>
        <button data-fc="no" class="bad">Não sabia</button>
        <button data-fc="ok" class="good">Sabia</button>
      </div>` : '<div class="card"><p>Baralho vazio. Você marcou tudo como "sei". Tire o filtro para revisar de novo.</p></div>'}
      <div class="fcb"><button data-fc="reset" class="ghost">Zerar meu progresso dos cartões</button></div>`;
  };

  /* ----- áudio ----- */
  let speaking = false, abortRead = false;
  function pickVoice() {
    const vs = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
    return vs.find((v) => /pt[-_]BR/i.test(v.lang)) || vs.find((v) => /^pt/i.test(v.lang)) || null;
  }
  function say(text, rate, onend) {
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = "pt-BR";
    u.rate = rate;
    u.onend = onend || null;
    u.onerror = onend || null;
    speechSynthesis.speak(u);
  }
  function stopAudio() { abortRead = true; speaking = false; if (window.speechSynthesis) speechSynthesis.cancel(); setStatus("Parado."); }
  function setStatus(s) { const el = $("#aud-st"); if (el) el.textContent = s; }
  function playTrack(id) {
    const tr = AUDIO.find((a) => a.id === id);
    if (!tr) return;
    stopAudio(); abortRead = false; speaking = true;
    const rate = parseFloat($("#aud-rate").value) || 1;
    setStatus("Lendo: " + tr.t);
    say(tr.s, rate, () => { speaking = false; setStatus("Fim."); });
  }
  function playCards(org) {
    stopAudio(); abortRead = false;
    const rate = parseFloat($("#aud-rate").value) || 1;
    const list = CARDS.filter((c) => org === "todos" || c[0].toLowerCase() === org);
    let i = 0;
    const next = () => {
      if (abortRead || i >= list.length) { setStatus(abortRead ? "Parado." : "Fim dos cartões."); return; }
      const c = list[i++];
      setStatus("Cartão " + i + "/" + list.length + ": " + c[1]);
      say("Pergunta. " + c[1], rate, () => {
        if (abortRead) return;
        setTimeout(() => { if (abortRead) return; say("Resposta. " + c[2], rate, () => { if (!abortRead) setTimeout(next, 700); }); }, 5000);
      });
    };
    next();
  }
  views.audio = function () {
    const ok = "speechSynthesis" in window;
    return `
      <section class="card">
        <h2>Ouvir o resumo</h2>
        ${ok ? "" : '<p class="alert">Seu navegador não tem leitura de voz. Use Chrome ou Edge.</p>'}
        <p class="muted">A voz é a do seu navegador (pt-BR). Serve para ouvir andando, no ônibus ou fazendo outra coisa. Funciona offline se houver voz instalada.</p>
        <div class="aud">
          <label>Velocidade <input type="range" id="aud-rate" min="0.7" max="1.5" step="0.1" value="1"> <output id="aud-ro">1.0x</output></label>
          <div class="aud-b">
            ${AUDIO.map((a) => '<button data-aud="' + a.id + '">▶ ' + esc(a.t) + "</button>").join("")}
          </div>
          <h3>Cartões em áudio (pergunta, 5 s para você responder, resposta)</h3>
          <div class="aud-b">
            <button data-audc="todos">▶ Todos</button>
            <button data-audc="abdi">▶ Só ABDI</button>
            <button data-audc="tjpb">▶ Só TJPB</button>
            <button data-audstop="1" class="bad">■ Parar</button>
          </div>
          <p id="aud-st" class="muted" aria-live="polite">Pronto.</p>
        </div>
      </section>
      <section class="card">
        <h2>Quer em MP3 ou em slides?</h2>
        <p>Este áudio usa a voz do navegador: não gera arquivo. Se quiser <b>MP3 de verdade</b> (para o celular) ou <b>slides em PPTX</b> de cada área, me peça por tópico (ex.: "slides do Regulamento de Licitações da ABDI") que eu gero.</p>
      </section>`;
  };

  /* ---------- gamificação ---------- */
  const AREAS = {
    devsw: "Eng. e arquitetura de software", devcode: "Programação e banco de dados", devops: "DevOps, nuvem e APIs",
    seg: "Segurança e LGPD", ia: "IA e dados", gov: "Governança de TI e Judiciário digital", regras: "Regras do jogo (editais)", pt: "Português", rl: "Raciocínio lógico",
    info: "Informática e LGPD", adm: "Direito Adm. e Constitucional", inst: "Institucional ABDI",
  };
  const LV = ["Calouro", "Focado", "Resiliente", "Máquina", "Veterano", "Lenda"];
  const todayKey = () => NOW().toLocaleDateString("sv-SE");
  const gsave = () => store.set("g", state.g);
  function addXp(n) {
    const g = state.g, k = todayKey();
    g.xp += n; g.daily[k] = (g.daily[k] || 0) + n;
    if (!g.days.includes(k)) g.days.push(k);
    gsave(); toast("+" + n + " XP");
  }
  function streak() {
    const g = state.g, key = (x) => x.toLocaleDateString("sv-SE");
    let d = new Date(), n = 0;
    if (!g.days.includes(key(d))) d = new Date(d - MS_DAY);
    while (g.days.includes(key(d))) { n++; d = new Date(d - MS_DAY); }
    return n;
  }
  function level() {
    const per = 150, l = Math.floor(state.g.xp / per);
    return { n: l + 1, name: LV[Math.min(l, LV.length - 1)], into: state.g.xp % per, per };
  }
  const doneToday = () => state.g.done[todayKey()] || [];
  function markDone(id) {
    const k = todayKey(), a = state.g.done[k] || (state.g.done[k] = []);
    if (!a.includes(id)) a.push(id);
    gsave();
  }
  function toast(msg) {
    if (!document.createElement) return;
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1500);
  }
  function ring(pct, label, sub) {
    const r = 34, c = 2 * Math.PI * r, off = c * (1 - Math.min(1, pct));
    return '<div class="ring"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="' + r + '" class="rg-bg"/><circle cx="40" cy="40" r="' + r +
      '" class="rg-fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 40 40)"/></svg><div class="rg-t"><b>' + label + "</b><span>" + sub + "</span></div></div>";
  }
  const dayIdx = () => { const d = NOW(); return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / MS_DAY); };
  function missions() {
    /* Específicos pesam mais: o perfil dev aparece 3x a cada 9 dias. */
    const keys = ["devsw", "pt", "devcode", "rl", "devops", "info", "seg", "adm", "ia", "inst", "gov", "regras"], a = keys[dayIdx() % keys.length], c = dayIdx() % COLAS.length;
    return [
      { id: "quiz", ico: "⚡", t: "Quiz relâmpago", sub: AREAS[a] + " · 5 questões · ~8 min", act: "quiz", arg: a, xp: 70 },
      { id: "cola", ico: COLAS[c].ico, t: "Cola do dia: " + COLAS[c].t, sub: "leitura de 1 min", act: "cola", arg: String(c), xp: 10 },
      { id: "foco", ico: "⏱", t: "Foco de 25 min", sub: "1 tópico do Mapa, sem celular", act: "foco", arg: "", xp: 40 },
    ];
  }
  function nextAction() {
    const done = doneToday(), m = missions().find((x) => !done.includes(x.id));
    return m ? { type: "mission", m } : { type: "all" };
  }

  /* foco */
  let focus = null, focusTimer = null;
  const fmtMs = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };
  function startFocus() {
    focus = { end: Date.now() + 25 * 60000 };
    clearInterval(focusTimer);
    focusTimer = setInterval(() => {
      const left = focus ? focus.end - Date.now() : 0, el = $("#ft");
      if (el) el.textContent = fmtMs(left);
      if (left <= 0) {
        clearInterval(focusTimer); focus = null; markDone("foco"); addXp(40);
        if (state.tab === "hoje") render();
      }
    }, 500);
  }
  function stopFocus() { clearInterval(focusTimer); focus = null; }

  /* quiz */
  let qz = null;
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  function startQuiz(area, n, onlyWrong, mission) {
    let pool = QUESTIONS.map((q, id) => Object.assign({ id: id }, q)).filter((q) => area === "all" || q.a === area);
    if (onlyWrong) pool = pool.filter((q) => state.g.q[q.id] === "no");
    shuffle(pool);
    pool.sort((x, y) => (state.g.q[x.id] ? 1 : 0) - (state.g.q[y.id] ? 1 : 0));
    const list = pool.slice(0, n).map((q) => {
      const idx = shuffle(q.o.map((_, i) => i));
      return { id: q.id, a: q.a, t: q.t || "", q: q.q, e: q.e, o: idx.map((i) => q.o[i]), c: idx.indexOf(q.c) };
    });
    qz = list.length ? { list, i: 0, sel: null, res: [], area, mission: !!mission, xp: 0 } : null;
  }
  function pick(j) {
    if (!qz || qz.sel != null) return;
    const q = qz.list[qz.i], ok = j === q.c;
    qz.sel = j; qz.res[qz.i] = ok;
    state.g.q[q.id] = ok ? "ok" : "no";
    const x = ok ? 10 : 3; qz.xp += x; addXp(x);
  }
  function nextQ() {
    qz.i++; qz.sel = null;
    if (qz.i >= qz.list.length) {
      const hits = qz.res.filter(Boolean).length;
      if (qz.mission) markDone("quiz");
      if (hits >= 4) { qz.xp += 20; addXp(20); }
      gsave();
    }
  }
  function quizMenu() {
    const wrong = Object.values(state.g.q).filter((v) => v === "no").length;
    const tiles = Object.keys(AREAS).map((k) => {
      const qs = QUESTIONS.map((q, id) => ({ id, a: q.a })).filter((q) => q.a === k);
      const ok = qs.filter((q) => state.g.q[q.id] === "ok").length, seen = qs.filter((q) => state.g.q[q.id]).length;
      return '<button class="tile" data-qa="' + k + '"><b>' + AREAS[k] + '</b><span>' + qs.length + " questões · " + (seen ? Math.round((ok / seen) * 100) + "% de acerto" : "novo") + '</span><i class="tbar"><u style="width:' + Math.round((seen / qs.length) * 100) + '%"></u></i></button>';
    }).join("");
    return '<h2 class="h-big">Escolha o jogo</h2><div class="tiles">' +
      '<button class="tile hot" data-qa="all"><b>Misto</b><span>5 questões de tudo · +XP bônus se acertar 4</span></button>' + tiles +
      (wrong ? '<button class="tile bad" data-qa="wrong"><b>Refazer os que errei</b><span>' + wrong + " questões</span></button>" : "") + "</div>" +
      '<section class="card"><h3>Quer prova antiga de verdade?</h3><p class="muted">As questões daqui são <b>originais no estilo FGV</b>, escritas para treinar os pontos do edital. Para provas reais, use o portal da banca: <a href="https://conhecimento.fgv.br/concursos" target="_blank" rel="noopener">conhecimento.fgv.br/concursos</a> (provas anteriores de concursos do mesmo cargo). Cole aqui o que errar que eu transformo em cartão.</p></section>';
  }
  function quizHtml() {
    if (qz.i >= qz.list.length) {
      const hits = qz.res.filter(Boolean).length, n = qz.list.length;
      const msg = hits === n ? "Perfeito. Você tá voando." : hits >= n - 1 ? "Muito bom. Quase lá." : hits >= n / 2 ? "Bom. Revise os erros e manda mais 5." : "Normal. Erro é o que ensina. Veja as explicações e refaça.";
      const wrong = qz.res.some((r) => !r);
      return '<div class="result"><div class="score">' + hits + "/" + n + "</div><p>" + msg + '</p><p class="xpgain">+' + qz.xp + " XP</p>" +
        '<div class="fcb"><button class="primary" data-qa="' + qz.area + '">Mais 5</button>' + (wrong ? '<button data-qa="wrong">Refazer os erros</button>' : "") + '<button class="ghost" data-qx="1">Voltar</button></div></div>';
    }
    const q = qz.list[qz.i], answered = qz.sel != null;
    const dots = qz.list.map((_, j) => '<i class="' + (j < qz.i ? (qz.res[j] ? "ok" : "no") : j === qz.i ? "cur" : "") + '"></i>').join("");
    const opts = q.o.map((t, j) => '<button class="opt ' + (answered ? (j === q.c ? "right" : j === qz.sel ? "wrong" : "dim") : "") + '" data-qo="' + j + '"' + (answered ? " disabled" : "") + "><b>" + "ABCD"[j] + "</b><span>" + esc(t) + "</span></button>").join("");
    const last = qz.i === qz.list.length - 1;
    return '<div class="qhead"><span class="muted">' + AREAS[q.a] + (q.t ? " · " + esc(q.t) : "") + '</span><button class="ghost sm" data-qx="1">sair</button></div><div class="dots">' + dots + "</div>" +
      '<div class="qcard"><p class="qtext">' + esc(q.q) + '</p><div class="opts">' + opts + "</div></div>" +
      (answered ? '<div class="exp ' + (qz.res[qz.i] ? "ok" : "no") + '"><b>' + (qz.res[qz.i] ? "Acertou. " : "Errou. ") + "</b>" + esc(q.e) + '</div><div class="fcb"><button class="primary" data-qn="1">' + (last ? "Ver resultado" : "Próxima →") + "</button></div>" : "");
  }
  function colasHtml() {
    if (state.cola != null) {
      const c = COLAS[state.cola], first = !state.g.colas[state.cola];
      return '<button class="ghost sm" data-colaback="1">← todas as colas</button><section class="card cola"><h2>' + c.ico + " " + esc(c.t) + '</h2><p class="muted">' + esc(c.sub) + "</p>" + c.h + '</section><div class="fcb"><button class="primary" data-colaok="1">Entendi' + (first ? " (+10 XP)" : "") + "</button></div>";
    }
    return '<h2 class="h-big">Colas visuais</h2><p class="muted">1 minuto cada. Leia, feche, tente lembrar.</p><div class="tiles">' +
      COLAS.map((c, i) => '<button class="tile" data-cola="' + i + '"><b>' + c.ico + " " + esc(c.t) + "</b><span>" + esc(c.sub) + (state.g.colas[i] ? " · visto" : "") + "</span></button>").join("") + "</div>";
  }

  views.hoje = function () {
    const g = state.g, lv = level(), st = streak(), done = doneToday(), ms = missions();
    const na = nextAction(), goal = done.length / ms.length;
    const week = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(NOW() - i * MS_DAY), k = d.toLocaleDateString("sv-SE");
      week.push('<i class="wd ' + (g.days.includes(k) ? "on" : "") + (i === 0 ? " today" : "") + '"><span>' + d.toLocaleDateString("pt-BR", { weekday: "narrow" }).toUpperCase() + "</span></i>");
    }
    const pa = when(EVENTS.find((e) => e.org === "ABDI" && e.t.startsWith("PROVA"))), pt = when(EVENTS.find((e) => e.org === "TJPB" && e.t.startsWith("PROVA")));
    let hero = "";
    if (na.type === "insc") {
      const r = daysTo(na.d);
      hero = '<section class="hero warn"><p class="eyebrow">primeiro isso</p><h1>Inscrição ' + na.s.org + " fecha em " + esc(r.text) + '</h1><p>Sem inscrição e boleto pago, nada do resto importa. Leva 10 minutos.</p>' +
        '<div class="fcb left"><a class="btn primary" href="' + na.s.url + '" target="_blank" rel="noopener">Abrir site da FGV</a><button data-insc="' + na.s.k + '">Já inscrevi e paguei ✓</button></div></section>';
    } else if (na.type === "mission") {
      const m = na.m;
      if (m.act === "foco" && focus) {
        hero = '<section class="hero"><p class="eyebrow">foco total</p><div class="bigtimer" id="ft">' + fmtMs(focus.end - Date.now()) + '</div><p>Escolha 1 tópico no Mapa e estude só ele. Celular longe.</p><div class="fcb left"><button data-focusstop="1">Parar</button></div></section>';
      } else {
        hero = '<section class="hero"><p class="eyebrow">próxima missão · +' + m.xp + ' XP</p><h1>' + m.ico + " " + esc(m.t) + "</h1><p>" + esc(m.sub) + '</p><div class="fcb left"><button class="primary lg" data-go="' + m.act + ":" + esc(m.arg) + '">Bora</button></div></section>';
      }
    } else {
      hero = '<section class="hero win"><p class="eyebrow">meta do dia batida</p><h1>Missões feitas. Sequência garantida.</h1><p>Quer mais? Mande outro quiz e ganhe XP extra.</p><div class="fcb left"><button class="primary lg" data-go="quiz:all">Mais um quiz</button></div></section>';
    }
    return '<div class="topbar"><div class="pill fire">🔥 <b>' + st + "</b><span>dia" + (st === 1 ? "" : "s") + '</span></div><div class="pill xp">⚡ <b>' + g.xp + '</b><span>XP</span></div><div class="pill lv"><b>Nv ' + lv.n + "</b><span>" + lv.name + "</span></div></div>" +
      '<div class="lvbar"><i style="width:' + Math.round((lv.into / lv.per) * 100) + '%"></i></div><p class="muted tiny">' + (lv.per - lv.into) + " XP para o próximo nível</p>" +
      hero +
      '<section class="card"><div class="mhead">' + ring(goal, done.length + "/" + ms.length, "hoje") + '<div><h3>Missões de hoje</h3><div class="week">' + week.join("") + "</div></div></div><ul class=\"mlist\">" +
      ms.map((m) => '<li class="' + (done.includes(m.id) ? "done" : "") + '"><span class="mi">' + (done.includes(m.id) ? "✓" : m.ico) + '</span><div><b>' + esc(m.t) + "</b><small>" + esc(m.sub) + "</small></div>" + (done.includes(m.id) ? "" : '<button class="sm" data-go="' + m.act + ":" + esc(m.arg) + '">ir</button>') + "</li>").join("") + "</ul></section>" +
      '<div class="cds"><div class="cd abdi' + (daysTo(pa).soon ? " soon" : "") + '"><span class="cd-n">' + esc(daysTo(pa).text) + '</span><span class="cd-l">prova ABDI · 20/12</span></div><div class="cd tjpb"><span class="cd-n">' + esc(daysTo(pt).text) + '</span><span class="cd-l">prova TJPB · 24/01</span></div></div>';
  };
  views.treinar = function () {
    const seg = [["quiz", "Quiz"], ["colas", "Colas"], ["cards", "Cartões"]].map((s) => '<button data-tr="' + s[0] + '" class="' + (state.tr === s[0] ? "on" : "") + '">' + s[1] + "</button>").join("");
    const body = state.tr === "quiz" ? (qz ? quizHtml() : quizMenu()) : state.tr === "colas" ? colasHtml() : views.treino();
    return '<div class="seg">' + seg + "</div>" + body;
  };
  views.provas = function () {
    const f = store.get("pf", "dev"), done = store.get("pdone", {});
    const base = PROVAS.filter((p) => (f === "dev" ? p.g === "dev" : f === "sis" ? p.g === "sis" : f === "sim" ? p.sim : true));
    const nDone = PROVAS.filter((p) => done[p.link]).length;
    const seg = [["dev", "Desenvolvimento (" + PROVAS.filter((p) => p.g === "dev").length + ")"], ["sim", "Mais parecidas (" + PROVAS.filter((p) => p.sim).length + ")"], ["sis", "Analista de Sistemas (" + PROVAS.filter((p) => p.g === "sis").length + ")"], ["all", "Todas"]]
      .map((s) => '<button data-pf="' + s[0] + '" class="' + (f === s[0] ? "on" : "") + '">' + s[1] + "</button>").join("");
    const rows = base.map((p) => '<li class="prv ' + (done[p.link] ? "done" : "") + '"><span class="yr">' + p.ano + '</span><div><b>' + esc(p.orgao) + "</b><small>" + esc(p.desc) + (p.sim ? ' · <u>perto do seu edital</u>' : "") + '</small></div><a class="btn sm" href="' + p.link + '" target="_blank" rel="noopener">abrir</a><button class="sm" data-pd="' + esc(p.link) + '">' + (done[p.link] ? "✓ feita" : "fiz") + "</button></li>").join("");
    return '<div class="seg">' + seg + '</div><p class="muted">' + PROVAS.length + " provas da FGV desde 2024, da mais recente para a mais antiga. Você fez <b>" + nDone + "</b>. Marcar como feita dá +50 XP.</p><ul class=\"plist\">" + rows + "</ul>" +
      '<section class="card"><h3>Como usar isso com o quiz</h3><ol><li>Abra a prova, baixe prova e gabarito (PDF).</li><li>Faça cronometrado, em 3h30 (ABDI) ou 3h (objetiva do TJPB).</li><li>Salve os PDFs em <code>Desktop\\A\\provas\\</code> e me peça: eu transformo as questões de desenvolvimento em quiz aqui, com gabarito e explicação.</li></ol>' +
      '<p class="muted">Fonte: catálogo da PCI Concursos. O catálogo traz só o link da página de cada prova; o texto das questões não vem por ele.</p></section>';
  };
  views.mapa = () => views.conteudo();
  views.guia = function () {
    const subs = [["inicio", "Resumo"], ["provas", "Provas FGV"], ["prova", "Prova"], ["vagas", "Vagas"], ["estrategia", "Estratégia"], ["plano", "Plano"], ["checklists", "Checklists"], ["audio", "Áudio"]];
    return '<div class="seg">' + subs.map((s) => '<button data-gs="' + s[0] + '" class="' + (state.guia === s[0] ? "on" : "") + '">' + s[1] + "</button>").join("") + "</div>" + views[state.guia]();
  };

  /* ---------- shell ---------- */
  const TABS = [["hoje", "🎯", "Hoje"], ["treinar", "⚡", "Treinar"], ["mapa", "🗺️", "Mapa"], ["datas", "📅", "Datas"], ["guia", "📚", "Guia"]];

  function render() {
    const y = window.scrollY;
    $("#nav").innerHTML = TABS.map((t) => '<button data-tab="' + t[0] + '" class="' + (state.tab === t[0] ? "on" : "") + '"><i>' + t[1] + "</i><span>" + t[2] + "</span></button>").join("");
    $("#main").innerHTML = views[state.tab]();
    const ro = $("#aud-ro"); const rr = $("#aud-rate");
    if (rr && ro) rr.addEventListener("input", () => { ro.textContent = parseFloat(rr.value).toFixed(1) + "x"; });
    window.scrollTo(0, y);
  }
  function go(tab) { state.tab = tab; if (location.hash !== "#" + tab) history.replaceState(null, "", "#" + tab); render(); window.scrollTo(0, 0); }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button, #fc");
    if (!b) return;
    if (b.dataset.tab) { if (b.dataset.tab !== state.tab) { state.cola = null; } return go(b.dataset.tab); }
    if (b.dataset.go) {
      const [act, arg] = b.dataset.go.split(":");
      if (act === "quiz") { state.tab = "treinar"; state.tr = "quiz"; startQuiz(arg, 5, false, true); render(); window.scrollTo(0, 0); return; }
      if (act === "cola") { state.tab = "treinar"; state.tr = "colas"; state.cola = +arg; render(); window.scrollTo(0, 0); return; }
      if (act === "foco") { startFocus(); return render(); }
    }
    if (b.dataset.pf) { store.set("pf", b.dataset.pf); return render(); }
    if (b.dataset.pd) {
      const d = store.get("pdone", {});
      if (d[b.dataset.pd]) delete d[b.dataset.pd]; else { d[b.dataset.pd] = 1; addXp(50); }
      store.set("pdone", d); return render();
    }
    if (b.dataset.focusstop) { stopFocus(); return render(); }
    if (b.dataset.insc) { state.chk[b.dataset.insc] = true; store.set("chk", state.chk); addXp(20); return render(); }
    if (b.dataset.tr) { state.tr = b.dataset.tr; state.cola = null; return render(); }
    if (b.dataset.gs) { state.guia = b.dataset.gs; return render(); }
    if (b.dataset.qa) { startQuiz(b.dataset.qa === "wrong" ? "all" : b.dataset.qa, 5, b.dataset.qa === "wrong", false); if (!qz) toast("Nada para refazer"); return render(); }
    if (b.dataset.qo !== undefined) { pick(+b.dataset.qo); return render(); }
    if (b.dataset.qn) { nextQ(); return render(); }
    if (b.dataset.qx) { qz = null; return render(); }
    if (b.dataset.cola !== undefined) { state.cola = +b.dataset.cola; return render(); }
    if (b.dataset.colaback) { state.cola = null; return render(); }
    if (b.dataset.colaok) {
      if (!state.g.colas[state.cola]) { state.g.colas[state.cola] = 1; addXp(10); }
      markDone("cola"); gsave(); state.cola = null; return render();
    }
    if (b.dataset.evf) { store.set("evf", b.dataset.evf); return render(); }
    if (b.dataset.cf) { store.set("cf", b.dataset.cf); deck = []; return render(); }
    if (b.dataset.crev) { store.set("crev", !store.get("crev", false)); deck = []; return render(); }
    if (b.id === "fc" || b.dataset.fc === "flip") { flipped = !flipped; return render(); }
    if (b.dataset.fc === "ok" || b.dataset.fc === "no") {
      const c = deck[deckIdx]; if (!c) return;
      const was = state.cards[c.i];
      state.cards[c.i] = b.dataset.fc === "ok" ? "ok" : "no"; store.set("cards", state.cards);
      if (b.dataset.fc === "ok" && was !== "ok") addXp(5);
      deckIdx++; flipped = false;
      if (deckIdx >= deck.length) { deck = []; }
      return render();
    }
    if (b.dataset.fc === "reset") { if (confirm("Zerar o progresso dos cartões?")) { state.cards = {}; store.set("cards", {}); deck = []; render(); } return; }
    if (b.dataset.aud) return playTrack(b.dataset.aud);
    if (b.dataset.audc) return playCards(b.dataset.audc);
    if (b.dataset.audstop) return stopAudio();
    if (b.dataset.print) return window.print();
  });
  document.addEventListener("keydown", (e) => {
    if (e.target.id === "fc" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); flipped = !flipped; render(); }
  });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.id === "selA") { state.perfil = t.value; store.set("perfil", state.perfil); return render(); }
    if (t.id === "selT") { state.esp = t.value; store.set("esp", state.esp); return render(); }
    if (t.dataset.k !== undefined) {
      const was = !!state.prog[t.dataset.k];
      state.prog[t.dataset.k] = t.checked; store.set("prog", state.prog);
      if (t.checked && !was) addXp(15);
      return updateBars(t);
    }
    if (t.dataset.plan !== undefined) { state.plan[t.dataset.plan] = t.checked; store.set("plan", state.plan); return updateCount(t, "plan"); }
    if (t.dataset.chk !== undefined) { state.chk[t.dataset.chk] = t.checked; store.set("chk", state.chk); }
  });
  function updateBars(t) {
    const open = $$("details.blk[open] .bn").map((x) => x.textContent);
    render();
    $$("details.blk").forEach((d) => { if (open.includes($(".bn", d).textContent)) d.open = true; });
  }
  function updateCount(t) {
    const y = window.scrollY; render(); window.scrollTo(0, y);
  }
  window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (TABS.some((t) => t[0] === h)) go(h); });
  if ("speechSynthesis" in window) { speechSynthesis.onvoiceschanged = () => {}; }

  const h0 = location.hash.slice(1);
  if (TABS.some((t) => t[0] === h0)) state.tab = h0;
  render();
  setInterval(() => { if ((state.tab === "hoje" && !focus) || state.tab === "datas") { const y = window.scrollY; render(); window.scrollTo(0, y); } }, 60000);
})();

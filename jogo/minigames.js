/* Minigames TJPB - window.MINI.run(type, data, onDone)
   Tipos: 'errorhunt' | 'match' | 'truth' | 'quick'. Script classico, sem imports. */
(function () {
  'use strict';

  var C = { bg: '#f8f8f0', bd: '#384060', ink: '#202840', blue: '#3868d8', green: '#28a048',
            red: '#d83838', yellow: '#f8c830', gray: '#a0a8b8', light: '#e8ecf8' };
  var FONT = '"Courier New", Courier, monospace';
  var active = null;

  /* ---------- utilidades ---------- */
  function sfx(n) { try { if (window.SFX && window.SFX.play) window.SFX.play(n); } catch (e) {} }
  function fx(n, a, b, c) { try { if (window.FX && window.FX[n]) window.FX[n](a, b, c); } catch (e) {} }
  function h(tag, css, text, parent) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text !== undefined && text !== null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  function shuffle(a) {
    var r = a.slice(), i, j, t;
    for (i = r.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = r[i]; r[i] = r[j]; r[j] = t; }
    return r;
  }
  function ensureStyle() {
    if (document.getElementById('mini-style')) return;
    var s = document.createElement('style');
    s.id = 'mini-style';
    s.textContent =
      '@keyframes mini-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}' +
      '@keyframes mini-pop{0%{transform:scale(1);opacity:1;filter:brightness(1)}40%{transform:scale(1.12);filter:brightness(1.4)}100%{transform:scale(.6);opacity:0}}' +
      '@keyframes mini-in{0%{transform:scale(.92);opacity:0}100%{transform:scale(1);opacity:1}}' +
      '.mini-shake{animation:mini-shake .4s}.mini-pop{animation:mini-pop .45s forwards}';
    document.head.appendChild(s);
  }
  function mkBtn(text, parent, cb, bg) {
    var b = h('div', 'display:inline-block;padding:8px 18px;background:' + (bg || C.blue) + ';color:#fff;border:4px solid ' + C.bd +
      ';border-radius:8px;cursor:pointer;font-weight:bold;user-select:none;margin-top:10px;', text, parent);
    b.addEventListener('click', function (e) { e.stopPropagation(); cb(); });
    return b;
  }
  function head(ctx, title, rightText) {
    var row = h('div', 'display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px;', null, ctx.box);
    h('div', 'background:' + C.bd + ';color:#fff;padding:4px 10px;border-radius:6px;font-weight:bold;font-size:15px;', title, row);
    var rw = h('div', 'display:flex;align-items:center;gap:8px;margin-left:auto;', null, row);
    var r = h('div', 'font-weight:bold;font-size:14px;', rightText || '', rw);
    var xb = h('button', 'border:2px solid ' + C.bd + ';background:#f8c8c8;color:#7a1c1c;border-radius:6px;padding:3px 9px;font:bold 14px ' + FONT + ';cursor:pointer;', '✕ Sair', rw);
    xb.type = 'button';
    xb.addEventListener('click', function (e) { e.stopPropagation(); ctx.close({ win: false, score: ctx.score, mistakes: ctx.mistakes, cancelled: true }); });
    return r;
  }
  function timerBar(parent) {
    var wrap = h('div', 'height:18px;border:4px solid ' + C.bd + ';border-radius:8px;background:#fff;overflow:hidden;margin:6px 0 10px;', null, parent);
    var fill = h('div', 'height:100%;width:100%;background:' + C.green + ';', null, wrap);
    return { set: function (f) {
      f = Math.max(0, Math.min(1, f));
      fill.style.width = (f * 100) + '%';
      fill.style.background = f > 0.5 ? C.green : (f > 0.25 ? C.yellow : C.red);
    } };
  }
  function restartAnim(el, cls) {
    el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
  }

  /* ---------- avaliador logico (sem eval) ---------- */
  function tokenize(s) {
    var t = [], i = 0, c;
    while (i < s.length) {
      c = s.charAt(i);
      if (/\s/.test(c)) { i++; continue; }
      if (c === '(' || c === ')') { t.push({ t: c }); i++; }
      else if (c === '∧' || c === '&') { t.push({ t: '∧' }); i++; }
      else if (c === '∨' || c === '|') { t.push({ t: '∨' }); i++; }
      else if (c === '¬' || c === '~' || c === '!') { t.push({ t: '¬' }); i++; }
      else if (c === '→') { t.push({ t: '→' }); i++; }
      else if (c === '↔') { t.push({ t: '↔' }); i++; }
      else if (s.substr(i, 3) === '<->') { t.push({ t: '↔' }); i += 3; }
      else if (s.substr(i, 2) === '->') { t.push({ t: '→' }); i += 2; }
      else if (/[A-Za-z]/.test(c)) { t.push({ t: 'var', v: c.toLowerCase() }); i++; }
      else throw new Error('Caractere inválido: ' + c);
    }
    return t;
  }
  function parse(src) {
    var toks = tokenize(src), pos = 0;
    function peek() { return pos < toks.length ? toks[pos].t : null; }
    function next() { return toks[pos++]; }
    function bic() {
      var l = imp();
      while (peek() === '↔') { next(); l = { t: 'iff', l: l, r: imp() }; }
      return l;
    }
    function imp() {
      var l = or();
      if (peek() === '→') { next(); return { t: 'imp', l: l, r: imp() }; }
      return l;
    }
    function or() {
      var l = and();
      while (peek() === '∨') { next(); l = { t: 'or', l: l, r: and() }; }
      return l;
    }
    function and() {
      var l = not();
      while (peek() === '∧') { next(); l = { t: 'and', l: l, r: not() }; }
      return l;
    }
    function not() {
      if (peek() === '¬') { next(); return { t: 'not', a: not() }; }
      return atom();
    }
    function atom() {
      var k = next();
      if (!k) throw new Error('Expressão incompleta');
      if (k.t === 'var') return { t: 'var', v: k.v };
      if (k.t === '(') {
        var e = bic();
        var c = next();
        if (!c || c.t !== ')') throw new Error('Parêntese não fechado');
        return e;
      }
      throw new Error('Símbolo inesperado: ' + k.t);
    }
    var ast = bic();
    if (pos < toks.length) throw new Error('Sobrou texto na expressão');
    return ast;
  }
  function evalAst(n, env) {
    switch (n.t) {
      case 'var':
        if (env[n.v] === undefined) throw new Error('Variável sem valor: ' + n.v);
        return !!env[n.v];
      case 'not': return !evalAst(n.a, env);
      case 'and': return evalAst(n.l, env) && evalAst(n.r, env);
      case 'or': return evalAst(n.l, env) || evalAst(n.r, env);
      case 'imp': return !evalAst(n.l, env) || evalAst(n.r, env);
      case 'iff': return evalAst(n.l, env) === evalAst(n.r, env);
    }
    throw new Error('Nó inválido');
  }

  /* ---------- overlay / contexto ---------- */
  function createCtx(onDone) {
    ensureStyle();
    var screen = document.getElementById('screen') || document.body;
    var root = h('div', 'position:absolute;left:0;top:0;width:100%;height:100%;z-index:99999;background:rgba(24,32,64,.9);' +
      'display:flex;align-items:center;justify-content:center;font-family:' + FONT + ';color:' + C.ink + ';');
    root.setAttribute('data-mini', '1');
    var box = h('div', 'position:relative;width:880px;max-width:96%;max-height:96%;overflow-y:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;' +
      'background:' + C.bg + ';border:5px solid ' + C.bd + ';border-radius:10px;padding:12px 14px;font-size:16px;font-weight:bold;' +
      'animation:mini-in .25s;', null, root);
    screen.appendChild(root);

    var ctx = { root: root, box: box, closed: false, timers: [], onKey: null, score: 0, mistakes: 0, finished: false };
    ctx.later = function (fn, ms) {
      var t = setTimeout(function () { if (!ctx.closed) fn(); }, ms); ctx.timers.push(t); return t;
    };
    ctx.every = function (fn, ms) {
      var t = setInterval(function () { if (!ctx.closed) fn(); }, ms); ctx.timers.push(t); return t;
    };
    ctx.clearTimers = function () {
      for (var i = 0; i < ctx.timers.length; i++) { clearTimeout(ctx.timers[i]); clearInterval(ctx.timers[i]); }
      ctx.timers = [];
    };
    function kd(e) {
      if (ctx.closed) return;
      e.stopImmediatePropagation(); e.stopPropagation();
      if (!(e.ctrlKey || e.metaKey || e.altKey) && !/^F\d+$/.test(e.key)) e.preventDefault();
      if (e.key === 'Escape') {
        ctx.close({ win: false, score: ctx.score, mistakes: ctx.mistakes, cancelled: true });
        return;
      }
      if (ctx.onKey) ctx.onKey(e);
    }
    function ku(e) { if (ctx.closed) return; e.stopImmediatePropagation(); e.stopPropagation(); }
    window.addEventListener('keydown', kd, true);
    window.addEventListener('keyup', ku, true);
    window.addEventListener('keypress', ku, true);
    ['click', 'mousedown', 'mouseup', 'dblclick', 'touchstart'].forEach(function (n) {
      root.addEventListener(n, function (e) { e.stopPropagation(); });
    });
    ctx.close = function (result) {
      if (ctx.closed) return;
      ctx.closed = true;
      ctx.clearTimers();
      window.removeEventListener('keydown', kd, true);
      window.removeEventListener('keyup', ku, true);
      window.removeEventListener('keypress', ku, true);
      if (root.parentNode) root.parentNode.removeChild(root);
      active = null;
      try { if (typeof onDone === 'function') onDone(result); } catch (err) { if (window.console) console.error(err); }
    };
    ctx.final = function (win, title, lines) {
      if (ctx.finished) return;
      ctx.finished = true;
      ctx.clearTimers();
      box.innerHTML = '';
      h('div', 'text-align:center;font-size:34px;margin:18px 0 12px;color:' + (win ? C.green : C.red) + ';', title, box);
      for (var i = 0; i < lines.length; i++) {
        h('div', 'text-align:center;font-size:18px;margin:6px 0;', lines[i], box);
      }
      var wrap = h('div', 'text-align:center;', null, box);
      var go = function () { ctx.close({ win: win, score: ctx.score, mistakes: ctx.mistakes }); };
      mkBtn('Continuar (Enter)', wrap, go);
      ctx.onKey = function (e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'z' || e.key === 'Z') go(); };
      sfx(win ? 'win' : 'lose');
      if (win) fx('confetti', 1500);
    };
    return ctx;
  }

  function pickData(type, data, n) {
    var pool = window.MINIDATA && window.MINIDATA[type];
    if (data !== undefined && data !== null) return data;
    if (!pool || !pool.length) return null;
    return n ? shuffle(pool).slice(0, n) : pool[Math.floor(Math.random() * pool.length)];
  }

  /* =========================================================
     1) CACA-ERROS
     ========================================================= */
  function runErrorHunt(ctx, data) {
    var items = Array.isArray(data) ? data : [data];
    var total = items.length, idx = 0, hits = 0, LIMIT = 12000;

    function startRound() {
      var it = items[idx], box = ctx.box;
      var cur = 0, answered = false, t0 = Date.now();
      box.innerHTML = '';
      head(ctx, 'CAÇA-ERROS', 'Rodada ' + (idx + 1) + '/' + total + '   Acertos: ' + hits);
      h('div', 'font-size:15px;margin-bottom:4px;', 'Há UM erro na frase. Ache o trecho errado! (← → e Enter, ou clique)', box);
      var bar = timerBar(box);
      var sent = h('div', 'background:#fff;border:4px solid ' + C.bd + ';border-radius:8px;padding:18px 12px;font-size:26px;line-height:1.7;text-align:center;min-height:120px;', null, box);
      var els = [];
      it.parts.forEach(function (p, i) {
        var w = h('span', 'display:inline-block;padding:2px 10px;margin:4px 3px;border:3px solid transparent;border-radius:6px;cursor:pointer;', p, sent);
        w.addEventListener('click', function (e) { e.stopPropagation(); cur = i; paint(); resolve(i); });
        els.push(w);
      });
      var fb = h('div', 'margin-top:12px;font-size:16px;line-height:1.5;', null, box);
      function paint() {
        els.forEach(function (w, i) {
          if (answered) return;
          w.style.borderColor = (i === cur) ? C.blue : 'transparent';
          w.style.background = (i === cur) ? C.light : 'transparent';
        });
      }
      paint();

      function resolve(sel) {
        if (answered) return;
        answered = true;
        ctx.clearTimers();
        var ok = sel === it.wrongIndex;
        if (ok) { hits++; ctx.score += 100 + Math.max(0, Math.round((LIMIT - (Date.now() - t0)) / 200)); sfx('correct'); }
        else { ctx.mistakes++; sfx('wrong'); fx('shake', sent, 5, 300); }
        els.forEach(function (w, i) {
          w.style.cursor = 'default';
          if (i === it.wrongIndex) { w.style.background = '#c8f0c8'; w.style.borderColor = C.green; }
          else if (i === sel) { w.style.background = '#f8c8c8'; w.style.borderColor = C.red; }
          else { w.style.background = 'transparent'; w.style.borderColor = 'transparent'; }
        });
        var fixed = it.parts.slice(); fixed[it.wrongIndex] = it.fix;
        h('div', 'font-size:22px;color:' + (ok ? C.green : C.red) + ';', ok ? 'CERTO!' : (sel < 0 ? 'TEMPO ESGOTADO!' : 'ERRADO!'), fb);
        h('div', '', 'Correção: "' + it.parts[it.wrongIndex] + '" → "' + it.fix + '"', fb);
        h('div', 'color:' + C.green + ';', 'Frase correta: ' + fixed.join(' '), fb);
        h('div', 'font-weight:normal;', 'Por quê: ' + it.why, fb);
        var go = function () { idx++; if (idx < total) startRound(); else end(); };
        mkBtn('Continuar (Enter)', fb, go);
        ctx.onKey = function (e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'z' || e.key === 'Z') go(); };
      }

      ctx.every(function () {
        var left = LIMIT - (Date.now() - t0);
        bar.set(left / LIMIT);
        if (left <= 0) resolve(-1);
      }, 50);
      ctx.onKey = function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { cur = (cur + els.length - 1) % els.length; sfx('tick'); paint(); }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { cur = (cur + 1) % els.length; sfx('tick'); paint(); }
        else if (e.key === 'Enter' || e.key === 'z' || e.key === 'Z' || e.key === ' ') resolve(cur);
      };
    }
    function end() {
      var win = hits >= 2;
      ctx.final(win, win ? 'BOA CAÇADA!' : 'ERROS ESCAPARAM...',
        ['Acertos: ' + hits + ' de ' + total, 'Erros: ' + ctx.mistakes, 'Pontos: ' + ctx.score]);
    }
    startRound();
  }

  /* =========================================================
     2) FLASHCARDS - LIGAR
     ========================================================= */
  function runMatch(ctx, data) {
    var pairs = (data.pairs || []).slice(0, 6);
    var n = pairs.length, matched = 0, MAXERR = 3;
    var box = ctx.box;
    var rightTxt = head(ctx, 'LIGUE OS PARES' + (data.title ? ' - ' + data.title : ''), '');
    h('div', 'font-size:14px;margin-bottom:8px;', 'Escolha um item de cada coluna. ↑↓ move, ←→ troca de coluna, Enter seleciona (ou clique).', box);
    var cols = h('div', 'display:flex;gap:18px;', null, box);
    var colL = h('div', 'flex:0 0 36%;display:flex;flex-direction:column;gap:8px;', null, cols);
    var colR = h('div', 'flex:1;display:flex;flex-direction:column;gap:8px;', null, cols);
    var L = shuffle(pairs.map(function (p, i) { return { id: i, text: p[0], side: 0 }; }));
    var R = shuffle(pairs.map(function (p, i) { return { id: i, text: p[1], side: 1 }; }));
    var lists = [L, R], sel = [null, null], cursor = { col: 0, row: 0 }, locked = false;

    function mk(item, parent) {
      var minH = Math.floor(400 / n) - 8;
      var e = h('div', 'box-sizing:border-box;min-height:' + minH + 'px;padding:6px 10px;border:4px solid ' + C.bd +
        ';border-radius:8px;background:#fff;cursor:pointer;display:flex;align-items:center;font-size:' + (item.side ? 14 : 16) + 'px;line-height:1.25;', item.text, parent);
      item.el = e; item.done = false;
      e.addEventListener('click', function (ev) {
        ev.stopPropagation();
        cursor.col = item.side; cursor.row = lists[item.side].indexOf(item);
        choose(item);
      });
    }
    L.forEach(function (i) { mk(i, colL); });
    R.forEach(function (i) { mk(i, colR); });

    function paint() {
      lists.forEach(function (list, c) {
        list.forEach(function (it, r) {
          if (it.done) return;
          var isSel = sel[c] === it, isCur = (cursor.col === c && cursor.row === r);
          it.el.style.background = isSel ? '#ffe888' : '#fff';
          it.el.style.borderColor = isCur ? C.blue : (isSel ? C.yellow : C.bd);
          it.el.style.outline = isCur ? '3px dashed ' + C.blue : 'none';
          it.el.style.outlineOffset = '2px';
        });
      });
      rightTxt.textContent = 'Pares: ' + matched + '/' + n + '   Erros: ' + ctx.mistakes + '/' + MAXERR;
      rightTxt.style.color = ctx.mistakes > MAXERR - 1 ? C.red : C.ink;
    }
    function choose(item) {
      if (locked || item.done) return;
      sfx('select');
      sel[item.side] = (sel[item.side] === item) ? null : item;
      paint();
      if (sel[0] && sel[1]) check();
    }
    function check() {
      var a = sel[0], b = sel[1];
      if (a.id === b.id) {
        locked = true;
        a.done = b.done = true; matched++;
        ctx.score += 100;
        sfx('correct');
        a.el.style.background = b.el.style.background = '#c8f0c8';
        a.el.style.borderColor = b.el.style.borderColor = C.green;
        a.el.style.outline = b.el.style.outline = 'none';
        restartAnim(a.el, 'mini-pop'); restartAnim(b.el, 'mini-pop');
        sel = [null, null];
        ctx.later(function () {
          a.el.style.visibility = b.el.style.visibility = 'hidden';
          a.el.style.pointerEvents = b.el.style.pointerEvents = 'none';
          locked = false;
          if (matched === n) { finish(); return; }
          fixCursor(); paint();
        }, 450);
        paint();
      } else {
        locked = true;
        ctx.mistakes++;
        ctx.score = Math.max(0, ctx.score - 25);
        sfx('wrong');
        a.el.style.background = b.el.style.background = '#f8c8c8';
        a.el.style.borderColor = b.el.style.borderColor = C.red;
        restartAnim(a.el, 'mini-shake'); restartAnim(b.el, 'mini-shake');
        sel = [null, null];
        rightTxt.textContent = 'Pares: ' + matched + '/' + n + '   Erros: ' + ctx.mistakes + '/' + MAXERR;
        ctx.later(function () { locked = false; paint(); }, 420);
      }
    }
    function fixCursor() {
      var list = lists[cursor.col];
      if (list[cursor.row] && !list[cursor.row].done) return;
      var i;
      for (i = 0; i < list.length; i++) if (!list[i].done) { cursor.row = i; return; }
      cursor.col = 1 - cursor.col; list = lists[cursor.col];
      for (i = 0; i < list.length; i++) if (!list[i].done) { cursor.row = i; return; }
    }
    function moveRow(d) {
      var list = lists[cursor.col], r = cursor.row, k;
      for (k = 0; k < list.length; k++) {
        r = (r + d + list.length) % list.length;
        if (!list[r].done) { cursor.row = r; return; }
      }
    }
    function moveCol() {
      var nc = 1 - cursor.col, list = lists[nc], best = -1, bd = 99, i;
      for (i = 0; i < list.length; i++) {
        if (!list[i].done && Math.abs(i - cursor.row) < bd) { bd = Math.abs(i - cursor.row); best = i; }
      }
      if (best >= 0) { cursor.col = nc; cursor.row = best; }
    }
    function finish() {
      var win = ctx.mistakes <= MAXERR;
      ctx.final(win, win ? 'TUDO LIGADO!' : 'MUITOS ERROS...',
        ['Pares ligados: ' + matched + '/' + n, 'Erros: ' + ctx.mistakes + ' (máximo ' + MAXERR + ')', 'Pontos: ' + ctx.score]);
    }
    ctx.onKey = function (e) {
      if (locked) return;
      if (e.key === 'ArrowUp') { moveRow(-1); sfx('tick'); paint(); }
      else if (e.key === 'ArrowDown') { moveRow(1); sfx('tick'); paint(); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { moveCol(); sfx('tick'); paint(); }
      else if (e.key === 'Enter' || e.key === 'z' || e.key === 'Z' || e.key === ' ') {
        var it = lists[cursor.col][cursor.row]; if (it) choose(it);
      }
    };
    paint();
  }

  /* =========================================================
     3) PUZZLE LOGICO (alavancas)
     ========================================================= */
  function leverSvg(on) {
    var ang = on ? -35 : 35;
    var knob = on ? '#28a048' : '#d83838';
    return '<svg viewBox="0 0 60 80" width="72" height="96" shape-rendering="crispEdges" style="display:block;margin:0 auto">' +
      '<rect x="6" y="62" width="48" height="14" fill="#606880" stroke="#202840" stroke-width="3"/>' +
      '<rect x="22" y="52" width="16" height="12" fill="#202840"/>' +
      '<g transform="rotate(' + ang + ' 30 56)">' +
      '<rect x="27" y="16" width="6" height="40" fill="#c0c8d8" stroke="#202840" stroke-width="2"/>' +
      '<rect x="21" y="8" width="18" height="14" fill="' + knob + '" stroke="#202840" stroke-width="3"/>' +
      '</g><rect x="26" y="52" width="8" height="8" fill="#808898" stroke="#202840" stroke-width="2"/></svg>';
  }
  function doorHtml(open) {
    if (open) {
      return '<svg viewBox="0 0 80 100" width="110" height="138" shape-rendering="crispEdges" style="display:block">' +
        '<rect x="2" y="2" width="76" height="96" fill="#384060"/>' +
        '<rect x="10" y="10" width="60" height="88" fill="#ffe888"/>' +
        '<rect x="22" y="22" width="36" height="76" fill="#fff8c8"/>' +
        '<polygon points="10,10 22,22 22,98 10,98" fill="#8a5a28" stroke="#4a2a10" stroke-width="2"/>' +
        '<polygon points="70,10 58,22 58,98 70,98" fill="#8a5a28" stroke="#4a2a10" stroke-width="2"/></svg>';
    }
    return '<svg viewBox="0 0 80 100" width="110" height="138" shape-rendering="crispEdges" style="display:block">' +
      '<rect x="2" y="2" width="76" height="96" fill="#384060"/>' +
      '<rect x="10" y="10" width="60" height="88" fill="#8a5a28" stroke="#4a2a10" stroke-width="2"/>' +
      '<rect x="24" y="10" width="4" height="88" fill="#6a4018"/><rect x="40" y="10" width="4" height="88" fill="#6a4018"/><rect x="56" y="10" width="4" height="88" fill="#6a4018"/>' +
      '<rect x="14" y="30" width="52" height="8" fill="#a0a8b8" stroke="#202840" stroke-width="2"/>' +
      '<rect x="14" y="66" width="52" height="8" fill="#a0a8b8" stroke="#202840" stroke-width="2"/>' +
      '<rect x="32" y="46" width="16" height="16" fill="#f8c830" stroke="#202840" stroke-width="3"/></svg>';
  }

  function runTruth(ctx, data) {
    var puzzles = [];
    (Array.isArray(data) ? data : [data]).forEach(function (p) {
      try { p._ast = parse(p.expr); puzzles.push(p); } catch (e) { if (window.console) console.error('Puzzle inválido', p, e); }
    });
    if (!puzzles.length) { ctx.close({ win: false, score: 0, mistakes: 0, error: true }); return; }
    var total = puzzles.length, pi = 0, solved = 0, hintsUsed = 0;
    var box = ctx.box;
    var TLIM = { 1: 45000, 2: 60000, 3: 80000 };

    function startPuzzle() {
      var P = puzzles[pi], vars = P.vars, nv = vars.length;
      var limit = TLIM[P.level] || 60000, t0 = Date.now();
      var state = vars.map(function () { return Math.random() < 0.5; });
      var visited = {}, done = false, cur = 0, hintShown = false;
      function env() { var o = {}; vars.forEach(function (v, i) { o[v] = state[i]; }); return o; }
      function val() { return evalAst(P._ast, env()); }
      function sat() { return val() === P.goal; }
      function rowIndex() { var r = 0; vars.forEach(function (v, i) { r += (state[i] ? 0 : 1) << (nv - 1 - i); }); return r; }
      if (sat()) state[0] = !state[0];
      visited[rowIndex()] = true;

      box.innerHTML = '';
      head(ctx, 'PUZZLE LÓGICO', 'Puzzle ' + (pi + 1) + '/' + total + '   Resolvidos: ' + solved);
      var barWrap = timerBar(box);
      var goalTxt = P.goal ? 'VERDADEIRA (V)' : 'FALSA (F)';
      var top = h('div', 'text-align:center;margin-bottom:8px;', null, box);
      h('div', 'font-size:28px;letter-spacing:1px;', P.expr, top);
      h('div', 'font-size:16px;margin-top:2px;', 'Meta: deixe a proposição ' + goalTxt, top);
      var body = h('div', 'display:flex;gap:16px;', null, box);
      var left = h('div', 'flex:1;', null, body);
      var right = h('div', 'flex:0 0 300px;background:#fff;border:4px solid ' + C.bd + ';border-radius:8px;padding:8px;', null, body);

      var levRow = h('div', 'display:flex;justify-content:space-around;background:#dde4f4;border:4px solid ' + C.bd + ';border-radius:8px;padding:10px 4px;', null, left);
      var levEls = vars.map(function (v, i) {
        var c = h('div', 'text-align:center;cursor:pointer;padding:4px 8px;border:3px solid transparent;border-radius:8px;', null, levRow);
        var svg = h('div', '', null, c);
        var lab = h('div', 'font-size:20px;', '', c);
        c.addEventListener('click', function (e) { e.stopPropagation(); cur = i; toggle(i); });
        return { c: c, svg: svg, lab: lab };
      });
      var status = h('div', 'display:flex;align-items:center;gap:16px;margin-top:10px;', null, left);
      var doorEl = h('div', '', null, status);
      var info = h('div', 'font-size:18px;line-height:1.5;', null, status);
      var hintEl = h('div', 'margin-top:8px;font-size:14px;font-weight:normal;min-height:40px;', '', left);
      var hbtn = mkBtn('Dica (H)', left, showHint, C.gray);
      hbtn.style.marginTop = '4px'; hbtn.style.padding = '4px 12px';

      var tbl = h('table', 'border-collapse:collapse;width:100%;font-size:' + (nv > 3 ? 13 : 16) + 'px;text-align:center;', null, right);
      var thead = h('tr', '', null, tbl);
      vars.concat(['Valor']).forEach(function (v) { h('th', 'border-bottom:3px solid ' + C.bd + ';padding:2px 4px;', v, thead); });
      var rows = [];
      for (var r = 0; r < (1 << nv); r++) {
        var tr = h('tr', '', null, tbl), cells = [];
        for (var k = 0; k < nv + 1; k++) cells.push(h('td', 'padding:' + (nv > 3 ? 1 : 3) + 'px 4px;', '', tr));
        rows.push({ tr: tr, cells: cells });
      }
      var rowEnv = function (r) { var o = {}; vars.forEach(function (v, i) { o[v] = ((r >> (nv - 1 - i)) & 1) === 0; }); return o; };

      function render() {
        var v = val(), ok = (v === P.goal), curRow = rowIndex();
        levEls.forEach(function (L, i) {
          L.svg.innerHTML = leverSvg(state[i]);
          L.lab.textContent = vars[i] + ' = ' + (state[i] ? 'V' : 'F');
          L.lab.style.color = state[i] ? C.green : C.red;
          L.c.style.borderColor = (i === cur && !done) ? C.blue : 'transparent';
          L.c.style.background = (i === cur && !done) ? C.light : 'transparent';
        });
        doorEl.innerHTML = doorHtml(ok);
        info.innerHTML = '';
        h('div', '', 'Valor atual: ' + (v ? 'V' : 'F'), info);
        h('div', 'color:' + (ok ? C.green : C.red) + ';', ok ? 'PORTA ABERTA!' : 'Porta trancada', info);
        rows.forEach(function (R, r) {
          var seen = visited[r], e = rowEnv(r), isCur = (r === curRow);
          R.tr.style.background = isCur ? '#ffe888' : 'transparent';
          for (var k = 0; k < nv; k++) R.cells[k].textContent = e[vars[k]] ? 'V' : 'F';
          var c = R.cells[nv];
          if (seen) {
            var rv = evalAst(P._ast, e);
            c.textContent = rv ? 'V' : 'F';
            c.style.color = (rv === P.goal) ? C.green : C.red;
          } else { c.textContent = '?'; c.style.color = C.gray; }
        });
      }
      function toggle(i) {
        if (done) return;
        state[i] = !state[i];
        visited[rowIndex()] = true;
        sfx('select');
        render();
        if (sat()) win();
      }
      function showHint() {
        if (done || hintShown) return;
        hintShown = true; hintsUsed++;
        hintEl.textContent = 'Dica: ' + (P.hint || 'Teste combinações na tabela ao lado.');
        sfx('coin');
      }
      function nextP() { pi++; if (pi < total) startPuzzle(); else endAll(); }
      function win() {
        done = true; solved++;
        var left_s = Math.max(0, Math.round((limit - (Date.now() - t0)) / 1000));
        ctx.score += 100 + left_s * 2 - (hintShown ? 30 : 0);
        ctx.clearTimers();
        render();
        sfx('correct'); sfx('win');
        ctx.later(nextP, 1300);
        ctx.onKey = null;
      }
      function timeout() {
        done = true; ctx.mistakes++;
        ctx.clearTimers();
        sfx('wrong');
        info.innerHTML = '';
        h('div', 'color:' + C.red + ';', 'TEMPO ESGOTADO!', info);
        ctx.later(nextP, 1300);
        ctx.onKey = null;
      }
      ctx.every(function () {
        var l = limit - (Date.now() - t0);
        barWrap.set(l / limit);
        if (l <= 0 && !done) timeout();
      }, 100);
      ctx.onKey = function (e) {
        var k = e.key;
        if (k === 'ArrowLeft') { cur = (cur + nv - 1) % nv; sfx('tick'); render(); }
        else if (k === 'ArrowRight') { cur = (cur + 1) % nv; sfx('tick'); render(); }
        else if (k === 'Enter' || k === ' ' || k === 'z' || k === 'Z' || k === 'ArrowUp' || k === 'ArrowDown') toggle(cur);
        else if (k === 'h' || k === 'H') showHint();
        else if (/^[1-9]$/.test(k) && +k <= nv) { cur = +k - 1; toggle(cur); }
        else if (k.length === 1) {
          var vi = vars.indexOf(k.toLowerCase());
          if (vi >= 0) { cur = vi; toggle(vi); }
        }
      };
      render();
    }
    function endAll() {
      var win = solved >= 2;
      ctx.final(win, win ? 'PORTAS ABERTAS!' : 'AS PORTAS FICARAM FECHADAS',
        ['Puzzles resolvidos: ' + solved + ' de ' + total, 'Tempos esgotados: ' + ctx.mistakes, 'Pontos: ' + ctx.score]);
    }
    startPuzzle();
  }

  function pickTruth(data) {
    if (data) return data;
    var pool = window.MINIDATA && window.MINIDATA.truth;
    if (!pool || !pool.length) return null;
    var out = [];
    [1, 2, 3].forEach(function (lv) {
      var c = pool.filter(function (p) { return (p.level || (p.vars.length - 1)) === lv; });
      if (c.length) out.push(c[Math.floor(Math.random() * c.length)]);
    });
    if (!out.length) out = shuffle(pool).slice(0, 3);
    return out;
  }

  /* =========================================================
     4) QUIZ RELAMPAGO
     ========================================================= */
  function runQuick(ctx, data) {
    var LIMIT = 25000, box = ctx.box, t0 = Date.now(), answered = false, cur = 0;
    var order = shuffle(data.options.map(function (o, i) { return i; }));
    var opts = order.map(function (i) { return { text: data.options[i], correct: i === data.answer }; });
    head(ctx, 'QUIZ RELÂMPAGO' + (data.topic ? ' - ' + data.topic : ''), '25 segundos, sem pressão!');
    var bar = timerBar(box);
    h('div', 'background:#fff;border:4px solid ' + C.bd + ';border-radius:8px;padding:12px 14px;font-size:20px;line-height:1.4;margin-bottom:10px;', data.q, box);
    var els = opts.map(function (o, i) {
      var e = h('div', 'box-sizing:border-box;border:4px solid ' + C.bd + ';border-radius:8px;background:#fff;padding:8px 12px;margin:6px 0;cursor:pointer;font-size:17px;', (i + 1) + ') ' + o.text, box);
      e.addEventListener('click', function (ev) { ev.stopPropagation(); cur = i; paint(); resolve(i); });
      return e;
    });
    var fb = h('div', 'margin-top:8px;line-height:1.5;', null, box);
    function paint() {
      if (answered) return;
      els.forEach(function (e, i) {
        e.style.borderColor = i === cur ? C.blue : C.bd;
        e.style.background = i === cur ? C.light : '#fff';
      });
    }
    function resolve(sel) {
      if (answered) return;
      answered = true; ctx.clearTimers();
      var ok = sel >= 0 && opts[sel].correct;
      var left = Math.max(0, LIMIT - (Date.now() - t0));
      els.forEach(function (e, i) {
        e.style.cursor = 'default';
        if (opts[i].correct) { e.style.background = '#c8f0c8'; e.style.borderColor = C.green; }
        else if (i === sel) { e.style.background = '#f8c8c8'; e.style.borderColor = C.red; }
        else { e.style.background = '#fff'; e.style.borderColor = C.bd; }
      });
      if (ok) { ctx.score = 100 + Math.round(left / 100); sfx('correct'); }
      else { ctx.mistakes = 1; sfx(sel < 0 ? 'error' : 'wrong'); fx('shake', box, 5, 300); }
      h('div', 'font-size:22px;color:' + (ok ? C.green : C.red) + ';', ok ? 'CERTO!' : (sel < 0 ? 'TEMPO ESGOTADO!' : 'ERRADO!'), fb);
      h('div', 'font-weight:normal;', 'Explicação: ' + (data.explain || ''), fb);
      var go = function () { ctx.close({ win: !!ok, score: ctx.score, mistakes: ctx.mistakes }); };
      mkBtn('Continuar', fb, go);
      try { fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
      ctx.onKey = function (e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'z' || e.key === 'Z') go(); };
    }
    ctx.every(function () {
      var l = LIMIT - (Date.now() - t0);
      bar.set(l / LIMIT);
      if (l <= 0) resolve(-1);
    }, 50);
    ctx.onKey = function (e) {
      var k = e.key;
      if (/^[1-4]$/.test(k) && +k <= els.length) { cur = +k - 1; paint(); resolve(cur); }
      else if (k === 'ArrowUp' || k === 'ArrowLeft') { cur = (cur + els.length - 1) % els.length; sfx('tick'); paint(); }
      else if (k === 'ArrowDown' || k === 'ArrowRight') { cur = (cur + 1) % els.length; sfx('tick'); paint(); }
      else if (k === 'Enter' || k === 'z' || k === 'Z' || k === ' ') resolve(cur);
    };
    paint();
  }

  /* ---------- API ---------- */
  function run(type, data, onDone) {
    var d;
    if (active) active.close({ win: false, score: 0, mistakes: 0, cancelled: true });
    if (type === 'errorhunt') d = pickData('errorhunt', data, 3);
    else if (type === 'match') d = pickData('match', data);
    else if (type === 'truth') d = pickTruth(data);
    else if (type === 'quick') d = pickData('quick', data);
    else d = null;
    if (!d) { if (typeof onDone === 'function') onDone({ win: false, score: 0, mistakes: 0, error: true }); return; }
    var ctx = createCtx(onDone);
    active = ctx;
    try {
      if (type === 'errorhunt') runErrorHunt(ctx, d);
      else if (type === 'match') runMatch(ctx, d);
      else if (type === 'truth') runTruth(ctx, d);
      else runQuick(ctx, d);
    } catch (err) {
      if (window.console) console.error(err);
      ctx.close({ win: false, score: 0, mistakes: 0, error: true });
    }
  }

  window.MINI = {
    run: run,
    parseExpr: parse,
    evalAst: evalAst,
    evalExpr: function (s, env) { return evalAst(parse(s), env); }
  };
})();

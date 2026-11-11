/* Motor de slides das aulas.
   Estrutura esperada no HTML:
     <body data-subject="portugues" data-title="Português">
       <section class="chapter" data-title="Crase"> <div class="slide">...</div> ... </section> (x7)
   Abrir: aula.html#c=2  (capítulo 3). Com "&embed=1" (dentro do jogo) o fim do capítulo avisa o jogo via postMessage. */
(function () {
  'use strict';
  var body = document.body;
  var subject = body.getAttribute('data-subject') || '';
  var subjTitle = body.getAttribute('data-title') || document.title;
  var chapters = Array.prototype.slice.call(document.querySelectorAll('section.chapter'));
  var hash = {};
  location.hash.replace(/^#/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) hash[p[0]] = decodeURIComponent(p[1] || ''); });
  var embed = hash.embed === '1' || window.parent !== window;
  var post = function (msg) { try { window.parent.postMessage(Object.assign({ source: 'aula', subject: subject }, msg), '*'); } catch (e) {} };

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  // ----- índice (abrir o arquivo direto, sem capítulo) -----
  if (hash.c == null && !embed) {
    var idx = el('div', 'au-index');
    idx.appendChild(el('span', 'tag', 'AULAS VISUAIS'));
    idx.appendChild(el('h1', null, subjTitle));
    idx.appendChild(el('p', 'lead', 'Escolha um capítulo. Use ← → para passar os slides.'));
    var grid = el('div', 'grid');
    chapters.forEach(function (c, i) {
      var a = el('a', null, '<b>Cap. ' + (i + 1) + '</b>' + (c.getAttribute('data-title') || '') + '<br><span class="au-hint">' + c.querySelectorAll('.slide').length + ' slides</span>');
      a.href = '#c=' + i; a.onclick = function () { setTimeout(function () { location.reload(); }, 10); };
      grid.appendChild(a);
    });
    idx.appendChild(grid);
    body.style.overflow = 'auto';
    body.appendChild(idx);
    return;
  }

  var ci = Math.max(0, Math.min(chapters.length - 1, parseInt(hash.c, 10) || 0));
  var chap = chapters[ci];
  var slides = Array.prototype.slice.call(chap.querySelectorAll('.slide'));
  var cur = 0, seen = {};
  chap.style.display = 'block';

  // ----- moldura -----
  var top = el('div', 'au-top');
  top.appendChild(el('span', 'au-sub', '📚 ' + subjTitle));
  top.appendChild(el('span', 'au-ch', 'Cap. ' + (ci + 1) + ' · ' + (chap.getAttribute('data-title') || '')));
  var count = el('span', 'au-count'); top.appendChild(count);
  var close = el('button', 'au-btn', '✖ Fechar'); close.title = 'Esc';
  close.onclick = function () { if (embed) post({ type: 'aula-close' }); else location.hash = ''; if (!embed) location.reload(); };
  top.appendChild(close);
  var prog = el('div', 'au-progress', '<i></i>');
  var stage = el('div', 'au-stage');
  chap.parentNode.removeChild(chap); stage.appendChild(chap);
  var bottom = el('div', 'au-bottom');
  var prev = el('button', 'au-btn', '← Voltar');
  var dots = el('div', 'au-dots');
  var next = el('button', 'au-btn primary', 'Próximo →');
  bottom.appendChild(prev); bottom.appendChild(dots); bottom.appendChild(next);
  body.appendChild(top); body.appendChild(prog); body.appendChild(stage); body.appendChild(bottom);
  slides.forEach(function (s, i) { var d = el('b'); d.title = 'Slide ' + (i + 1); d.onclick = function () { go(i); }; dots.appendChild(d); });

  function finish() {
    if (embed) post({ type: 'aula-done', ch: ci });
    else if (ci + 1 < chapters.length) { location.hash = 'c=' + (ci + 1); location.reload(); }
    else { location.hash = ''; location.reload(); }
  }
  function go(i) {
    if (i < 0 || i >= slides.length) return;
    slides[cur].classList.remove('on');
    cur = i; seen[i] = true;
    slides[cur].classList.add('on');
    stage.scrollTop = 0;
    count.textContent = (cur + 1) + ' / ' + slides.length;
    prog.firstChild.style.width = ((cur + 1) / slides.length * 100) + '%';
    Array.prototype.forEach.call(dots.children, function (d, j) { d.className = j === cur ? 'on' : (seen[j] ? 'seen' : ''); });
    prev.disabled = cur === 0; prev.style.visibility = cur === 0 ? 'hidden' : 'visible';
    var last = cur === slides.length - 1;
    next.className = last ? 'au-btn go' : 'au-btn primary';
    next.textContent = last ? (embed ? '✏️ Terminei! Ir para o treino' : (ci + 1 < chapters.length ? 'Próximo capítulo →' : 'Voltar ao índice')) : 'Próximo →';
  }
  prev.onclick = function () { go(cur - 1); };
  next.onclick = function () { if (cur === slides.length - 1) finish(); else go(cur + 1); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) { e.preventDefault(); next.onclick(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Escape') { close.onclick(); }
    else if (e.key === 'Home') go(0);
  });
  var sx = null;
  stage.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 60) { dx < 0 ? next.onclick() : go(cur - 1); } sx = null; });
  go(0);
  window.focus();
})();

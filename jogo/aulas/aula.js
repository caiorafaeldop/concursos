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

  // ----- zoom controller -----
  var zoomLevel = 1.0;
  function setZoom(z) {
    var nz = Math.max(1.0, Math.min(2.5, Math.round(z * 100) / 100));
    zoomLevel = nz;
    var s = slides[cur];
    if (nz > 1.01) {
      stage.classList.add('is-zoomed');
      stage.style.overflowX = 'auto';
      if (s) {
        s.style.zoom = nz;
        s.style.setProperty('--slide-zoom', nz);
      }
      zbadge.textContent = Math.round(nz * 100) + '%';
      zbadge.classList.add('on');
    } else {
      zoomLevel = 1.0;
      stage.classList.remove('is-zoomed');
      stage.style.overflowX = 'hidden';
      if (s) {
        s.style.zoom = '';
        s.style.removeProperty('--slide-zoom');
      }
      zbadge.textContent = '100%';
      zbadge.classList.remove('on');
      stage.scrollLeft = 0;
    }
  }

  // ----- moldura -----
  var top = el('div', 'au-top');
  top.appendChild(el('span', 'au-sub', '📚 ' + subjTitle));
  top.appendChild(el('span', 'au-ch', 'Cap. ' + (ci + 1) + ' · ' + (chap.getAttribute('data-title') || '')));
  var count = el('span', 'au-count'); top.appendChild(count);

  // Controles de zoom dedicados no cabeçalho
  var zgrp = el('div', 'au-zoom');
  var zout = el('button', 'au-zbtn', '−'); zout.title = 'Diminuir zoom'; zout.type = 'button';
  var zbadge = el('button', 'au-zbadge', '100%'); zbadge.title = 'Toque p/ redefinir zoom'; zbadge.type = 'button';
  var zin = el('button', 'au-zbtn', '+'); zin.title = 'Aumentar zoom'; zin.type = 'button';
  zgrp.appendChild(zout); zgrp.appendChild(zbadge); zgrp.appendChild(zin);
  top.appendChild(zgrp);

  zout.onclick = function (e) { if (e) e.stopPropagation(); setZoom(zoomLevel - 0.25); };
  zin.onclick = function (e) { if (e) e.stopPropagation(); setZoom(zoomLevel + 0.25); };
  zbadge.onclick = function (e) { if (e) e.stopPropagation(); setZoom(1.0); };

  var fontesBtn = el('button', 'au-btn au-fontes', '🏛️ Fontes'); fontesBtn.title = 'Acervo Oficial na íntegra (F)'; fontesBtn.type = 'button';
  fontesBtn.onclick = function (e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (embed) post({ type: 'aula-fontes' });
    else location.href = '../fontes.html';
  };
  top.appendChild(fontesBtn);

  var close = el('button', 'au-btn au-close', '✖ Fechar'); close.title = 'Esc'; close.type = 'button';
  close.onclick = function (e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (embed) post({ type: 'aula-close' });
    else { location.hash = ''; location.reload(); }
  };
  top.appendChild(close);
  var prog = el('div', 'au-progress', '<i></i>');
  var stage = el('div', 'au-stage');
  chap.parentNode.removeChild(chap); stage.appendChild(chap);
  var bottom = el('div', 'au-bottom');
  var prev = el('button', 'au-btn au-prev', '← Voltar'); prev.type = 'button';
  var dots = el('div', 'au-dots');
  var next = el('button', 'au-btn primary au-next', 'Próximo →'); next.type = 'button';
  bottom.appendChild(prev); bottom.appendChild(dots); bottom.appendChild(next);
  body.appendChild(top); body.appendChild(prog); body.appendChild(stage); body.appendChild(bottom);
  slides.forEach(function (s, i) { var d = el('b'); d.title = 'Slide ' + (i + 1); d.onclick = function () { go(i); }; dots.appendChild(d); });

  var closeEnd = body.getAttribute('data-finish') === 'close'; // páginas sem treino (ex.: Edital) só fecham no fim
  function finish() {
    if (embed) post({ type: closeEnd ? 'aula-close' : 'aula-done', ch: ci });
    else if (ci + 1 < chapters.length) { location.hash = 'c=' + (ci + 1); location.reload(); }
    else { location.hash = ''; location.reload(); }
  }
  function go(i) {
    if (i < 0 || i >= slides.length) return;
    setZoom(1.0); // redefine zoom ao mudar de slide
    slides[cur].classList.remove('on');
    cur = i; seen[i] = true;
    slides[cur].classList.add('on');
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
    count.textContent = (cur + 1) + ' / ' + slides.length;
    prog.firstChild.style.width = ((cur + 1) / slides.length * 100) + '%';
    Array.prototype.forEach.call(dots.children, function (d, j) { d.className = j === cur ? 'on' : (seen[j] ? 'seen' : ''); });
    prev.disabled = cur === 0; prev.style.visibility = cur === 0 ? 'hidden' : 'visible';
    var last = cur === slides.length - 1;
    next.className = last ? 'au-btn go au-next' : 'au-btn primary au-next';
    next.textContent = last ? (embed ? (closeEnd ? '✔ Fechar' : '✏️ Ir p/ treino') : (ci + 1 < chapters.length ? 'Próximo cap. →' : 'Voltar ao índice')) : 'Próximo →';
  }
  prev.onclick = function (e) { if (e) e.stopPropagation(); go(cur - 1); };
  next.onclick = function (e) { if (e) e.stopPropagation(); if (cur === slides.length - 1) finish(); else go(cur + 1); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) { e.preventDefault(); next.onclick(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Escape') { close.onclick(); }
    else if (e.key === 'Home') go(0);
    else if (e.key === '+' || e.key === '=') setZoom(zoomLevel + 0.25);
    else if (e.key === '-' || e.key === '_') setZoom(zoomLevel - 0.25);
    else if (e.key === '0') setZoom(1.0);
  });

  // ----- Gestos móveis: Pinch-to-zoom, Duplo toque e Swipe -----
  var sx = null, sy = null;
  var pinchDist = null, pinchZoom = 1.0;
  var lastTapTime = 0;

  stage.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
      pinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      pinchZoom = zoomLevel;
    } else if (e.touches.length === 1) {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }
  }, { passive: true });

  stage.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2 && pinchDist) {
      var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      var factor = d / pinchDist;
      setZoom(pinchZoom * factor);
    }
  }, { passive: true });

  stage.addEventListener('touchend', function (e) {
    if (pinchDist && e.touches.length < 2) {
      pinchDist = null;
      if (zoomLevel < 1.08) setZoom(1.0);
      return;
    }

    // Duplo toque para dar zoom instantâneo em diagramas/tabelas/textos
    var now = Date.now();
    if (now - lastTapTime < 320 && e.changedTouches && e.changedTouches.length === 1) {
      lastTapTime = 0;
      if (zoomLevel > 1.1) setZoom(1.0);
      else setZoom(1.6);
      return;
    }
    lastTapTime = now;

    // Quando o slide está com zoom ampliado, o arrasto serve para navegar pelo conteúdo (pan), não para passar slide
    if (zoomLevel > 1.08) return;

    if (sx == null || sy == null || !e.changedTouches || !e.changedTouches.length) return;
    var dx = e.changedTouches[0].clientX - sx;
    var dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      dx < 0 ? next.onclick() : go(cur - 1);
    }
    sx = null; sy = null;
  });

  go(Math.max(0, Math.min(slides.length - 1, parseInt(hash.s, 10) || 0))); // #s= abre direto num slide
  window.focus();
})();

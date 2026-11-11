/* fx.js - efeitos arcade (canvas + DOM). Expoe window.FX */
(function () {
  'use strict';
  var FX = {};
  var rnd = Math.random;
  function R(a, b) { return a + rnd() * (b - a); }
  function pick(c) { return Array.isArray(c) ? c[(rnd() * c.length) | 0] : c; }

  /* ============ CANVAS: particulas e textos ============ */
  var parts = [], texts = [];
  FX.burst = function (x, y, o) {
    o = o || {};
    var n = o.n == null ? 12 : o.n, sp = o.speed == null ? 60 : o.speed;
    var life = o.life == null ? 0.6 : o.life, g = o.gravity || 0, sz = o.size == null ? 2 : o.size;
    if (parts.length > 600) return;
    for (var i = 0; i < n; i++) {
      var a = rnd() * 6.2832, s = sp * R(0.4, 1);
      parts.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, g: g,
        life: life * R(0.7, 1.2), max: life, size: sz, c: pick(o.color || '#fff') });
    }
  };
  FX.floatText = function (x, y, text, color) {
    texts.push({ x: x, y: y, t: String(text), c: color || '#fff', life: 1, max: 1 });
  };
  FX.sparkle = function (x, y) {
    parts.push({ x: x, y: y, vx: 0, vy: -4, g: 0, life: 0.45, max: 0.45, size: 3, c: '#fff', star: 1 });
    FX.burst(x, y, { color: ['#fff', '#ffe066', '#7df9ff'], n: 3, speed: 15, life: 0.4, size: 1 });
  };
  FX.clear = function () { parts.length = 0; texts.length = 0; };

  var weather = 'clear', hour = 12, wx = [], fireflies = [], flashA = 0;
  var rainOn = false, rainTimer = 0, tAcc = 0;
  FX.lightningChance = 0.0015; // por frame (~60fps) durante chuva

  function initWeather() {
    wx.length = 0;
    var n = weather === 'rain' ? 90 : weather === 'leaves' ? 28 : weather === 'snow' ? 70 : 0;
    for (var i = 0; i < n; i++) wx.push(newW(true));
  }
  function newW(any) {
    var W = 240, H = 160, p = { x: R(-20, W + 20), y: any ? R(0, H) : -6, ph: rnd() * 6.28 };
    if (weather === 'rain') { p.vy = R(200, 280); p.vx = -40; }
    else if (weather === 'leaves') { p.vy = R(12, 28); p.vx = R(8, 22); p.c = pick(['#e8a33d', '#c8571e', '#8cc152', '#d9822b']); }
    else { p.vy = R(10, 24); p.vx = R(-6, 6); p.s = rnd() < 0.3 ? 2 : 1; }
    return p;
  }
  FX.setWeather = function (w) {
    if (w !== 'rain' && w !== 'leaves' && w !== 'snow') w = 'clear';
    if (w === weather) return;
    weather = w; initWeather();
  };
  FX.setTime = function (h) { hour = ((+h % 24) + 24) % 24; };

  FX.update = function (dt) {
    if (dt > 0.1) dt = 0.1;
    tAcc += dt;
    var i, p;
    for (i = parts.length - 1; i >= 0; i--) {
      p = parts[i]; p.life -= dt;
      if (p.life <= 0) { parts[i] = parts[parts.length - 1]; parts.pop(); continue; }
      p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
    }
    for (i = texts.length - 1; i >= 0; i--) {
      p = texts[i]; p.life -= dt; p.y -= 22 * dt;
      if (p.life <= 0) texts.splice(i, 1);
    }
    for (i = 0; i < wx.length; i++) {
      p = wx[i];
      p.x += p.vx * dt + (weather !== 'rain' ? Math.sin(tAcc * 2 + p.ph) * 8 * dt : 0);
      p.y += p.vy * dt;
      if (p.y > 166 || p.x > 262 || p.x < -26) { wx[i] = newW(false); if (weather !== 'rain') wx[i].x = R(-20, 240); }
    }
    if (weather === 'rain' && FX.lightningChance > 0 && flashA <= 0 && rnd() < FX.lightningChance * dt * 60) flashA = 1;
    if (flashA > 0) flashA -= dt * 3;
    // vagalumes
    var night = nightAmount();
    if (night > 0.3 && fireflies.length < 14) {
      for (i = fireflies.length; i < 14; i++) fireflies.push({ x: R(0, 240), y: R(20, 150), a: rnd() * 6.28, ph: rnd() * 6.28, sp: R(5, 14) });
    }
    for (i = 0; i < fireflies.length; i++) {
      p = fireflies[i]; p.a += R(-2, 2) * dt;
      p.x += Math.cos(p.a) * p.sp * dt; p.y += Math.sin(p.a) * p.sp * dt;
      if (p.x < 0) p.x = 240; else if (p.x > 240) p.x = 0;
      if (p.y < 8) p.y = 152; else if (p.y > 152) p.y = 8;
    }
  };

  FX.draw = function (ctx) {
    var i, p;
    ctx.save();
    for (i = 0; i < parts.length; i++) {
      p = parts[i];
      ctx.globalAlpha = Math.min(1, p.life / (p.max * 0.5));
      ctx.fillStyle = p.c;
      if (p.star) {
        var s = p.size * (0.6 + p.life / p.max);
        ctx.fillRect((p.x - s) | 0, p.y | 0, s * 2 + 1, 1);
        ctx.fillRect(p.x | 0, (p.y - s) | 0, 1, s * 2 + 1);
      } else ctx.fillRect(p.x | 0, p.y | 0, p.size, p.size);
    }
    ctx.globalAlpha = 1;
    if (texts.length) {
      ctx.font = 'bold 8px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (i = 0; i < texts.length; i++) {
        p = texts[i];
        ctx.globalAlpha = Math.min(1, p.life * 2.5);
        ctx.fillStyle = '#000';
        ctx.fillText(p.t, (p.x | 0) + 1, (p.y | 0) + 1); ctx.fillText(p.t, (p.x | 0) - 1, (p.y | 0));
        ctx.fillStyle = p.c; ctx.fillText(p.t, p.x | 0, p.y | 0);
      }
    }
    ctx.restore();
  };

  /* ============ Atmosfera ============ */
  // keyframes: hora, r,g,b,alpha
  var KF = [[0, 10, 18, 60, .6], [5, 14, 22, 70, .55], [6.5, 255, 150, 90, .22], [8, 255, 230, 200, 0],
    [16, 255, 230, 200, 0], [17.5, 255, 140, 50, .25], [19, 120, 60, 110, .4], [20.5, 14, 22, 70, .55], [24, 10, 18, 60, .6]];
  function tint() {
    for (var i = 1; i < KF.length; i++) {
      if (hour <= KF[i][0]) {
        var a = KF[i - 1], b = KF[i], t = (hour - a[0]) / (b[0] - a[0]);
        return [a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t, a[3] + (b[3] - a[3]) * t, a[4] + (b[4] - a[4]) * t];
      }
    }
    return [0, 0, 0, 0];
  }
  function nightAmount() { var a = tint()[3]; return a >= 0.4 ? Math.min(1, (a - 0.3) / 0.25) : 0; }

  var off = null, octx = null, glow = null;
  function glowSprite() {
    if (glow) return glow;
    glow = document.createElement('canvas'); glow.width = glow.height = 64;
    var g = glow.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return glow;
  }
  FX.drawAtmosphere = function (ctx, lights) {
    var W = ctx.canvas.width, H = ctx.canvas.height, t = tint(), a = t[3];
    if (a <= 0.01) return;
    if (!off || off.width !== W || off.height !== H) {
      off = document.createElement('canvas'); off.width = W; off.height = H; octx = off.getContext('2d');
    }
    var o = octx, k, L;
    o.globalCompositeOperation = 'source-over';
    o.clearRect(0, 0, W, H);
    o.fillStyle = 'rgb(' + (t[0] | 0) + ',' + (t[1] | 0) + ',' + (t[2] | 0) + ')';
    o.globalAlpha = a; o.fillRect(0, 0, W, H);
    var gs = glowSprite();
    if (lights && lights.length && a > 0.15) {
      o.globalCompositeOperation = 'destination-out';
      for (k = 0; k < lights.length; k++) {
        L = lights[k]; var r = L.r * (1 + Math.sin(tAcc * 7 + k) * 0.03);
        o.globalAlpha = 0.95; o.drawImage(gs, L.x - r, L.y - r, r * 2, r * 2);
      }
    }
    o.globalAlpha = 1; o.globalCompositeOperation = 'source-over';
    ctx.save();
    ctx.drawImage(off, 0, 0);
    ctx.globalCompositeOperation = 'lighter';
    if (lights && lights.length && a > 0.15) {
      // brilho quente sobre os buracos de luz
      var tmp = off; // reaproveita sprite quente via fillStyle em sprite tingido
      for (k = 0; k < lights.length; k++) {
        L = lights[k];
        ctx.globalAlpha = Math.min(0.35, a * 0.55);
        ctx.drawImage(warmSprite(), L.x - L.r, L.y - L.r, L.r * 2, L.r * 2);
      }
      void tmp;
    }
    // vagalumes
    var n = nightAmount();
    if (n > 0 && fireflies.length) {
      ctx.fillStyle = '#d8ff6a';
      for (k = 0; k < fireflies.length; k++) {
        var f = fireflies[k], b = Math.sin(tAcc * 3 + f.ph);
        if (b < 0) continue;
        ctx.globalAlpha = b * n;
        ctx.fillRect(f.x | 0, f.y | 0, 2, 2);
        ctx.globalAlpha = b * n * 0.25; ctx.fillRect((f.x | 0) - 1, (f.y | 0) - 1, 4, 4);
      }
    }
    ctx.restore();
  };
  var warm = null;
  function warmSprite() {
    if (warm) return warm;
    warm = document.createElement('canvas'); warm.width = warm.height = 64;
    var g = warm.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,190,90,1)'); gr.addColorStop(0.6, 'rgba(255,140,40,.4)'); gr.addColorStop(1, 'rgba(255,120,30,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return warm;
  }

  FX.drawWeather = function (ctx) {
    var i, p;
    if (weather !== 'clear') {
      ctx.save();
      if (weather === 'rain') {
        ctx.strokeStyle = 'rgba(170,200,255,.65)'; ctx.lineWidth = 1; ctx.beginPath();
        for (i = 0; i < wx.length; i++) { p = wx[i]; ctx.moveTo(p.x | 0, p.y | 0); ctx.lineTo((p.x - 2) | 0, (p.y + 5) | 0); }
        ctx.stroke();
      } else if (weather === 'snow') {
        ctx.fillStyle = '#fff';
        for (i = 0; i < wx.length; i++) { p = wx[i]; ctx.fillRect(p.x | 0, p.y | 0, p.s, p.s); }
      } else {
        for (i = 0; i < wx.length; i++) {
          p = wx[i]; ctx.fillStyle = p.c;
          var w = Math.sin(tAcc * 4 + p.ph) > 0 ? 3 : 2;
          ctx.fillRect(p.x | 0, p.y | 0, w, 2);
        }
      }
      ctx.restore();
    }
    if (flashA > 0) {
      ctx.save(); ctx.globalAlpha = Math.min(1, flashA) * (flashA > 0.6 ? 0.8 : 0.4);
      ctx.fillStyle = '#e8f0ff'; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); ctx.restore();
    }
  };

  /* ============ DOM ============ */
  var overlay = null, screenEl = null;
  function css(el, o) { for (var k in o) el.style[k] = o[k]; return el; }
  function mk(tag, o, parent) { var e = document.createElement(tag); css(e, o || {}); if (parent) parent.appendChild(e); return e; }
  function anim(el, kf, opt) {
    if (el.animate) { return el.animate(kf, opt); }
    return { onfinish: null, cancel: function () { }, finished: null };
  }
  function after(a, fn, ms) {
    if (a && a.finished) a.finished.then(fn, fn); else setTimeout(fn, ms);
  }
  var FONT = '"Press Start 2P","Courier New",monospace';

  FX.init = function () {
    if (overlay && overlay.parentNode) return;
    screenEl = document.getElementById('screen') || document.body;
    var st = mk('style'); st.textContent =
      '@keyframes fxVig{0%,100%{opacity:.45}50%{opacity:1}}' +
      '@keyframes fxPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}';
    document.head.appendChild(st);
    overlay = mk('div', { position: 'absolute', left: '0', top: '0', width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: '9999', overflow: 'hidden', fontFamily: FONT }, screenEl);
    overlay.id = 'fx-overlay';
  };
  function ov() { FX.init(); return overlay; }

  FX.shake = function (el, intensity, ms) {
    el = el || document.getElementById('screen'); if (!el) return;
    intensity = intensity == null ? 6 : intensity; ms = ms || 300;
    var prev = el.style.transform, t0 = performance.now();
    if (el._fxShake) cancelAnimationFrame(el._fxShake);
    else el._fxBase = prev;
    (function step(now) {
      var k = (now - t0) / ms;
      if (k >= 1) { el.style.transform = el._fxBase || ''; el._fxShake = 0; return; }
      var m = intensity * (1 - k);
      el.style.transform = (el._fxBase ? el._fxBase + ' ' : '') + 'translate(' + R(-m, m).toFixed(1) + 'px,' + R(-m, m).toFixed(1) + 'px)';
      el._fxShake = requestAnimationFrame(step);
    })(t0);
  };

  FX.flash = function (color, ms) {
    ms = ms || 200;
    var d = mk('div', { position: 'absolute', inset: '0', background: color || '#fff', opacity: '1' }, ov());
    var a = anim(d, [{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: 'ease-out' });
    after(a, function () { d.remove(); }, ms);
  };

  FX.confetti = function (ms) {
    ms = ms || 3000;
    var cv = mk('canvas', { position: 'absolute', left: '0', top: '0', width: '100%', height: '100%' }, ov());
    var W = cv.width = overlay.clientWidth || 960, H = cv.height = overlay.clientHeight || 640, g = cv.getContext('2d');
    var cols = ['#ff3b5c', '#ffd23f', '#3bd16f', '#2ec4ff', '#b565ff', '#ff8a2b', '#fff'], ps = [], i;
    for (i = 0; i < 160; i++) ps.push({ x: R(0, W), y: R(-H, 0), vy: R(120, 320), vx: R(-60, 60), w: R(6, 12), h: R(4, 8), r: rnd() * 6, vr: R(-8, 8), c: pick(cols), ph: rnd() * 6 });
    var t0 = performance.now(), last = t0;
    (function step(now) {
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      var el = now - t0;
      if (el > ms + 1500) { cv.remove(); return; }
      g.clearRect(0, 0, W, H);
      for (var i = 0; i < ps.length; i++) {
        var p = ps[i]; p.y += p.vy * dt; p.x += (p.vx + Math.sin(el / 300 + p.ph) * 40) * dt; p.r += p.vr * dt;
        if (p.y > H + 10) { if (el < ms) { p.y = -10; p.x = R(0, W); } else continue; }
        g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.scale(1, Math.abs(Math.cos(p.r * 1.3)) + 0.15);
        g.fillStyle = p.c; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); g.restore();
      }
      requestAnimationFrame(step);
    })(t0);
  };

  /* Transicoes */
  var transBusy = false;
  FX.transition = function (kind, midCb, doneCb) {
    var cv = mk('canvas', { position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', zIndex: '2' }, ov());
    var W = cv.width = overlay.clientWidth || 960, H = cv.height = overlay.clientHeight || 640, g = cv.getContext('2d');
    var flashMs = kind === 'battle' ? 540 : 0, closeMs = kind === 'fade' ? 450 : 600, holdMs = 120, openMs = kind === 'fade' ? 450 : 500;
    var total = flashMs + closeMs + holdMs + openMs, t0 = performance.now(), midDone = false;
    function ease(t) { return t * t * (3 - 2 * t); }
    function cover(p) { // p 0..1 cobertura
      g.fillStyle = '#000';
      if (kind === 'fade') { g.globalAlpha = p; g.fillRect(0, 0, W, H); g.globalAlpha = 1; }
      else if (kind === 'iris') {
        var R0 = Math.hypot(W / 2, H / 2) * (1 - p);
        g.fillRect(0, 0, W, H); g.globalCompositeOperation = 'destination-out';
        g.beginPath(); g.arc(W / 2, H / 2, Math.max(0, R0), 0, 6.2832); g.fill(); g.globalCompositeOperation = 'source-over';
      } else {
        var n = 12, bh = H / n, i;
        for (i = 0; i < n; i++) {
          var q = Math.max(0, Math.min(1, p * 1.6 - (i / n) * 0.6)), w = W * q;
          if (i % 2) g.fillRect(W - w, i * bh, w, bh + 1); else g.fillRect(0, i * bh, w, bh + 1);
        }
      }
    }
    (function step(now) {
      var e = now - t0;
      g.clearRect(0, 0, W, H);
      if (e < flashMs) {
        if (((e / 90) | 0) % 2 === 0) { g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); }
      } else if (e < flashMs + closeMs) cover(ease((e - flashMs) / closeMs));
      else if (e < flashMs + closeMs + holdMs) {
        cover(1);
        if (!midDone) { midDone = true; try { midCb && midCb(); } catch (x) { console.error(x); } }
      } else if (e < total) cover(1 - ease((e - flashMs - closeMs - holdMs) / openMs));
      else { cv.remove(); try { doneCb && doneCb(); } catch (x) { console.error(x); } return; }
      requestAnimationFrame(step);
    })(t0);
    void transBusy;
  };

  /* Popup de conquista */
  var popQ = [], popBusy = false;
  FX.popup = function (title, sub, icon) { popQ.push([title, sub, icon]); if (!popBusy) nextPop(); };
  function nextPop() {
    var it = popQ.shift(); if (!it) { popBusy = false; return; }
    var title = it[0], sub = it[1], icon = it[2];
    popBusy = true;
    var d = mk('div', { position: 'absolute', top: '14px', right: '14px', minWidth: '260px', maxWidth: '380px', padding: '10px 14px',
      display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', background: 'linear-gradient(180deg,#2a2f4a,#14172b)',
      border: '3px solid #ffd23f', borderRadius: '6px', boxShadow: '0 0 0 3px #000,0 6px 18px rgba(0,0,0,.6),0 0 24px rgba(255,210,63,.5)' }, ov());
    mk('div', { fontSize: '28px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#ffd23f', borderRadius: '50%', color: '#000', flex: '0 0 auto' }, d).textContent = icon || '★';
    var tx = mk('div', { lineHeight: '1.4' }, d);
    mk('div', { fontSize: '11px', color: '#ffd23f' }, tx).textContent = title || '';
    mk('div', { fontSize: '8px', color: '#cfd6ff', marginTop: '4px' }, tx).textContent = sub || '';
    var a = anim(d, [
      { transform: 'translateX(120%)', offset: 0 }, { transform: 'translateX(0)', offset: 0.1, easing: 'ease-out' },
      { transform: 'translateX(0)', offset: 0.9 }, { transform: 'translateX(120%)', offset: 1 }], { duration: 3200 });
    after(a, function () { d.remove(); nextPop(); }, 3200);
  }

  FX.damageNumber = function (parent, text, xPct, yPct, color) {
    if (!parent) return;
    var s = mk('span', { position: 'absolute', left: (xPct == null ? 50 : xPct) + '%', top: (yPct == null ? 50 : yPct) + '%',
      fontFamily: FONT, fontWeight: 'bold', fontSize: '40px', color: color || '#ff4d4d', pointerEvents: 'none', zIndex: '50',
      whiteSpace: 'nowrap', textShadow: '3px 3px 0 #000,-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000' }, parent);
    s.textContent = text;
    var a = anim(s, [
      { transform: 'translate(-50%,0) scale(.3)', opacity: 0 },
      { transform: 'translate(-50%,-20px) scale(1.5)', opacity: 1, offset: 0.2 },
      { transform: 'translate(-50%,-50px) scale(1)', opacity: 1, offset: 0.6 },
      { transform: 'translate(-50%,-100px) scale(1)', opacity: 0 }], { duration: 1000, easing: 'ease-out' });
    after(a, function () { s.remove(); }, 1000);
  };

  FX.domBurst = function (parent, xPct, yPct, o) {
    if (!parent) return; o = o || {};
    var n = o.n || 14;
    for (var i = 0; i < n; i++) {
      var sz = R(5, 12), ang = rnd() * 6.2832, d = R(40, 130);
      var p = mk('div', { position: 'absolute', left: xPct + '%', top: yPct + '%', width: sz + 'px', height: sz + 'px',
        background: pick(o.color || '#ffd23f'), pointerEvents: 'none', zIndex: '50', boxShadow: '0 0 6px currentColor' }, parent);
      (function (p, dx, dy) {
        var a = anim(p, [{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
          { transform: 'translate(' + dx + 'px,' + (dy + 30) + 'px) scale(.2)', opacity: 0 }], { duration: R(500, 900), easing: 'cubic-bezier(.1,.7,.4,1)' });
        after(a, function () { p.remove(); }, 900);
      })(p, Math.cos(ang) * d, Math.sin(ang) * d);
    }
  };

  FX.superMove = function (name, color, cb) {
    color = color || '#ffd23f';
    var root = mk('div', { position: 'absolute', inset: '0', overflow: 'hidden', zIndex: '3' }, ov());
    var bg = mk('div', { position: 'absolute', inset: '0', background: 'rgba(0,0,0,.75)' }, root);
    anim(bg, [{ opacity: 0 }, { opacity: 1, offset: 0.15 }, { opacity: 1, offset: 0.85 }, { opacity: 0 }], { duration: 1200 });
    var bands = [[-12, '#000', 0], [-6, color, 90]];
    function band(top, bgc, h, delay, txt) {
      var b = mk('div', { position: 'absolute', left: '-20%', width: '140%', top: top + '%', height: h + '%', background: bgc,
        transform: 'rotate(-12deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px ' + color }, root);
      if (txt) {
        var t = mk('div', { fontFamily: FONT, fontWeight: 'bold', fontSize: '56px', color: '#fff', whiteSpace: 'nowrap', letterSpacing: '4px',
          textShadow: '4px 4px 0 #000,-3px -3px 0 ' + color }, b);
        t.textContent = String(name || '').toUpperCase();
        anim(t, [{ transform: 'scale(.6)' }, { transform: 'scale(1.25)' }], { duration: 1200, easing: 'ease-out', fill: 'both' });
      }
      anim(b, [{ transform: 'rotate(-12deg) translateX(-110%)' }, { transform: 'rotate(-12deg) translateX(0)', offset: 0.2 },
        { transform: 'rotate(-12deg) translateX(0)', offset: 0.8 }, { transform: 'rotate(-12deg) translateX(110%)' }],
      { duration: 1200, delay: delay, easing: 'ease-out', fill: 'both' });
    }
    void bands;
    band(22, color, 8, 0); band(70, color, 8, 60); band(36, '#111', 28, 30, true);
    setTimeout(function () { FX.flash('#fff', 250); }, 350);
    setTimeout(function () { FX.shake(null, 8, 300); }, 400);
    setTimeout(function () { root.remove(); try { cb && cb(); } catch (x) { console.error(x); } }, 1200);
  };

  var vig = null;
  FX.vignette = function (on, color) {
    if (!on) { if (vig) { vig.remove(); vig = null; } return; }
    color = color || '#ff0000';
    if (!vig) vig = mk('div', { position: 'absolute', inset: '0', zIndex: '1', animation: 'fxVig 1s ease-in-out infinite' }, ov());
    vig.style.boxShadow = 'inset 0 0 90px 30px ' + color;
  };

  var combo = null;
  FX.comboBadge = function (n) {
    if (!n || n <= 0) { if (combo) { combo.remove(); combo = null; } return; }
    if (!combo) combo = mk('div', { position: 'absolute', left: '16px', top: '70px', zIndex: '4', fontFamily: FONT, fontWeight: 'bold',
      color: '#fff', background: 'linear-gradient(180deg,#ff8a2b,#e02020)', border: '3px solid #000', borderRadius: '6px',
      padding: '6px 12px', transformOrigin: 'left top', boxShadow: '3px 3px 0 #000', textShadow: '2px 2px 0 #000' }, ov());
    combo.textContent = 'COMBO x' + n;
    var s = Math.min(2.2, 1 + n * 0.1);
    combo.style.fontSize = '16px';
    combo.style.transform = 'scale(' + s + ')';
    combo.style.background = n >= 10 ? 'linear-gradient(180deg,#b565ff,#ff3b5c)' : 'linear-gradient(180deg,#ff8a2b,#e02020)';
    anim(combo, [{ transform: 'scale(' + (s * 1.4) + ')' }, { transform: 'scale(' + s + ')' }], { duration: 200, easing: 'ease-out' });
    combo.style.animation = n >= 5 ? 'fxPulse .6s ease-in-out infinite' : '';
  };

  window.FX = FX;
})();

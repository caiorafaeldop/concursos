/* audio.js - SFX e música 100% sintetizados com WebAudio. Expõe window.SFX. */
(function () {
  'use strict';

  var ctx = null, master = null, sfxBus = null, musBus = null, noiseBuf = null;
  var volume = 1, MASTER = 0.25;
  var curTrack = null, trackGain = null, timer = null;
  var nextTime = 0, stepIdx = 0, tempoMul = 1, trackData = null;

  var SFX = { muted: false };

  // ---------- util ----------
  var NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function freq(name) {
    var m = /^([A-G])([#b]?)(\d)$/.exec(name);
    if (!m) return 0;
    var n = NOTE[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + (parseInt(m[3], 10) + 1) * 12;
    return 440 * Math.pow(2, (n - 69) / 12);
  }
  function mtof(n) { return 440 * Math.pow(2, (n - 69) / 12); }

  function applyMaster() {
    if (!master) return;
    var v = SFX.muted ? 0 : MASTER * volume;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(v, ctx.currentTime, 0.02);
  }

  function tone(dest, f, t, d, type, v, slide, att) {
    if (!f) return;
    att = att || 0.005;
    if (att > d * 0.5) att = d * 0.5;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'square';
    o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + d);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(v, t + att);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(dest);
    o.onended = function () { try { o.disconnect(); g.disconnect(); } catch (e) {} };
    o.start(t); o.stop(t + d + 0.03);
  }

  function noise(dest, t, d, v, ftype, f0, f1) {
    var s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; s.loop = true;
    fl.type = ftype || 'highpass';
    fl.frequency.setValueAtTime(f0 || 4000, t);
    if (f1) fl.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + d);
    g.gain.setValueAtTime(v, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    s.connect(fl); fl.connect(g); g.connect(dest);
    s.onended = function () { try { s.disconnect(); fl.disconnect(); g.disconnect(); } catch (e) {} };
    s.start(t, Math.random() * 0.8); s.stop(t + d + 0.03);
  }

  // sequência de notas: lista [freq, dur] em sequência
  function run(list, type, v, gap, t0) {
    var t = (t0 || ctx.currentTime) + 0.005;
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      tone(sfxBus, e[0], t, e[1] * 1.15, type, e[2] || v);
      t += e[1] + (gap || 0);
    }
    return t;
  }
  function names(arr, d, type, v) {
    run(arr.map(function (n) { return [freq(n), d]; }), type, v);
  }

  // ---------- efeitos ----------
  var FX = {
    step: function (t) { noise(sfxBus, t, 0.04, 0.12, 'bandpass', 900, 400); },
    select: function (t) { tone(sfxBus, 880, t, 0.05, 'square', 0.12); },
    confirm: function () { names(['E5', 'A5'], 0.07, 'square', 0.16); },
    back: function () { names(['A4', 'E4'], 0.06, 'square', 0.14); },
    correct: function () { names(['C5', 'E5', 'G5', 'C6'], 0.07, 'square', 0.16); },
    wrong: function (t) {
      tone(sfxBus, 220, t, 0.18, 'square', 0.16, 150);
      tone(sfxBus, 208, t + 0.15, 0.28, 'square', 0.16, 110);
    },
    combo: function (t, n) {
      n = Math.max(1, Math.min(n || 1, 14));
      var b = 523.25 * Math.pow(2, (n * 2 > 24 ? 24 : n * 2) / 12);
      var r = [1, 1.25, 1.5, 2];
      for (var i = 0; i < 4; i++) tone(sfxBus, b * r[i], t + i * 0.05, 0.1, 'square', 0.13);
    },
    hit: function (t) {
      noise(sfxBus, t, 0.12, 0.3, 'lowpass', 3000, 300);
      tone(sfxBus, 180, t, 0.1, 'square', 0.18, 60);
    },
    crit: function (t) {
      noise(sfxBus, t, 0.2, 0.35, 'lowpass', 5000, 300);
      tone(sfxBus, 300, t, 0.14, 'square', 0.2, 60);
      tone(sfxBus, 1200, t + 0.03, 0.18, 'square', 0.12, 2400);
      tone(sfxBus, 90, t, 0.25, 'triangle', 0.3, 40);
    },
    bossHit: function (t) {
      noise(sfxBus, t, 0.3, 0.4, 'lowpass', 2000, 120);
      tone(sfxBus, 110, t, 0.35, 'triangle', 0.4, 35);
      tone(sfxBus, 200, t, 0.15, 'square', 0.15, 70);
    },
    phase: function (t) {
      tone(sfxBus, 70, t, 1.4, 'triangle', 0.35, 45, 0.05);
      tone(sfxBus, 140, t, 1.2, 'square', 0.1, 90, 0.05);
      noise(sfxBus, t, 1.2, 0.18, 'lowpass', 300, 1800);
      var n = ['A3', 'Bb3', 'A3', 'E3'];
      for (var i = 0; i < 4; i++) tone(sfxBus, freq(n[i]) * 2, t + 0.15 + i * 0.22, 0.3, 'square', 0.14);
      noise(sfxBus, t + 1.0, 0.5, 0.3, 'lowpass', 4000, 200);
    },
    super: function (t) {
      tone(sfxBus, 200, t, 0.45, 'square', 0.12, 1600);
      tone(sfxBus, 100, t, 0.45, 'triangle', 0.2, 800);
      noise(sfxBus, t, 0.45, 0.15, 'highpass', 500, 6000);
      var n = ['C6', 'E6', 'G6', 'C7'];
      for (var i = 0; i < 4; i++) tone(sfxBus, freq(n[i]), t + 0.45 + i * 0.05, 0.35, 'square', 0.12);
      noise(sfxBus, t + 0.45, 0.3, 0.3, 'lowpass', 6000, 400);
    },
    win: function (t) {
      var q = 0.17, N = freq;
      var mel = [['G4', q], ['C5', q], ['E5', q], ['G5', q * 2], ['E5', q], ['G5', q * 4],
        ['F5', q], ['A5', q], ['C6', q * 2], ['A5', q], ['G5', q], ['E5', q], ['D5', q], ['C5', q * 4]];
      var tt = t;
      mel.forEach(function (e) {
        tone(sfxBus, N(e[0]), tt, e[1] * 1.1, 'square', 0.14);
        tone(sfxBus, N(e[0]) / 2, tt, e[1] * 1.1, 'triangle', 0.18);
        tt += e[1];
      });
      var ch = [['C4', 'E4', 'G4'], ['F4', 'A4', 'C5'], ['C4', 'E4', 'G4']];
      ch.forEach(function (c, i) {
        c.forEach(function (n) { tone(sfxBus, N(n), t + 1.7 + i * 0.4, 0.6, 'square', 0.07, 0, 0.02); });
      });
      tone(sfxBus, N('C3'), t + 2.5, 0.6, 'triangle', 0.25);
    },
    lose: function (t) {
      var n = ['G4', 'F#4', 'F4', 'E4', 'Eb4', 'D4', 'C4'], d = [0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.9];
      var tt = t;
      for (var i = 0; i < n.length; i++) {
        tone(sfxBus, freq(n[i]), tt, d[i] * 1.1, 'triangle', 0.25);
        tone(sfxBus, freq(n[i]) / 2, tt, d[i] * 1.1, 'square', 0.06);
        tt += d[i];
      }
    },
    coin: function (t) {
      tone(sfxBus, 987.77, t, 0.07, 'square', 0.13);
      tone(sfxBus, 1318.5, t + 0.07, 0.3, 'square', 0.13);
    },
    door: function (t) {
      noise(sfxBus, t, 0.12, 0.2, 'bandpass', 500, 200);
      tone(sfxBus, 150, t, 0.1, 'square', 0.12, 80);
      tone(sfxBus, 300, t + 0.12, 0.08, 'square', 0.08, 220);
      noise(sfxBus, t + 0.14, 0.15, 0.15, 'lowpass', 1500, 200);
    },
    transition: function (t) {
      // varredura estilo entrada de batalha
      for (var i = 0; i < 16; i++) {
        var f = 300 + (i % 4) * 150 + i * 60;
        tone(sfxBus, f, t + i * 0.055, 0.07, 'square', 0.1);
        tone(sfxBus, f * 1.5, t + i * 0.055, 0.07, 'square', 0.05);
      }
      noise(sfxBus, t, 0.95, 0.12, 'bandpass', 300, 5000);
      tone(sfxBus, 100, t + 0.9, 0.35, 'triangle', 0.3, 50);
      noise(sfxBus, t + 0.9, 0.3, 0.25, 'lowpass', 3000, 200);
    },
    card: function (t) {
      var n = ['C6', 'E6', 'G6', 'B6', 'E7'];
      for (var i = 0; i < n.length; i++) {
        tone(sfxBus, freq(n[i]), t + i * 0.07, 0.4, 'triangle', 0.2, 0, 0.01);
        tone(sfxBus, freq(n[i]) * 2, t + i * 0.07, 0.25, 'square', 0.04);
      }
      noise(sfxBus, t, 0.5, 0.05, 'highpass', 7000, 9000);
    },
    pickup: function () { names(['G5', 'C6', 'E6'], 0.06, 'square', 0.13); },
    achievement: function (t) {
      var n = [['C5', 0.1], ['E5', 0.1], ['G5', 0.1], ['C6', 0.25], ['G5', 0.08], ['C6', 0.45]];
      var tt = t;
      n.forEach(function (e) {
        tone(sfxBus, freq(e[0]), tt, e[1] * 1.15, 'square', 0.13);
        tone(sfxBus, freq(e[0]) * 2, tt, e[1], 'triangle', 0.08);
        tt += e[1];
      });
    },
    error: function (t) {
      tone(sfxBus, 160, t, 0.1, 'square', 0.14);
      tone(sfxBus, 160, t + 0.13, 0.14, 'square', 0.14);
    },
    tick: function (t) { tone(sfxBus, 1500, t, 0.025, 'square', 0.07); },
    whoosh: function (t) { noise(sfxBus, t, 0.35, 0.2, 'bandpass', 400, 3500); },
    thunder: function (t) {
      noise(sfxBus, t, 0.08, 0.35, 'highpass', 3000, 3000);
      noise(sfxBus, t + 0.05, 1.8, 0.5, 'lowpass', 600, 50);
      tone(sfxBus, 55, t + 0.1, 1.5, 'triangle', 0.25, 30, 0.1);
    }
  };

  SFX.play = function (name, arg) {
    if (!ctx || SFX.muted) return;
    var f = FX[name];
    if (!f) return;
    try { f(ctx.currentTime + 0.01, arg); } catch (e) {}
  };

  // ---------- música ----------
  function seq(str) {
    var out = [], pos = 0;
    str.trim().split(/\s+/).forEach(function (tok) {
      if (!tok) return;
      var p = tok.split(':'), d = parseInt(p[1] || '1', 10);
      out.push({ at: pos, f: p[0] === '-' ? 0 : freq(p[0]), d: d });
      pos += d;
    });
    return { ev: out, len: pos };
  }
  function part(str, type, vol, dur) { var s = seq(str); s.type = type; s.vol = vol; s.dur = dur || 0.9; return s; }

  function rep(str, n) { var a = []; for (var i = 0; i < n; i++) a.push(str); return a.join(' '); }

  // drums: k=kick s=snare h=hat o=open hat; cada char = 1 step (semicolcheia)
  var TRACKS = {
    town: {
      bpm: 128,
      mel: part('E5:2 G5:2 C6:4 B5:2 G5:2 A5:4 G5:2 E5:2 D5:2 E5:2 G5:8 F5:2 A5:2 C6:4 B5:2 A5:2 G5:4 E5:2 D5:2 C5:2 D5:2 C5:8', 'square', 0.07),
      bass: part('C3:4 G3:4 C3:4 G3:4 C3:4 G3:4 E3:4 G3:4 F3:4 C4:4 F3:4 C4:4 G2:4 D3:4 G2:4 G3:4', 'triangle', 0.2, 0.8),
      drums: 'k.h.s.h.k.h.s.hh'
    },
    house: {
      bpm: 84,
      mel: part('E5:4 G5:4 A5:4 G5:4 C6:6 -:2 B5:4 A5:4 G5:8 E5:4 D5:4 E5:4 G5:4 A5:6 -:2 G5:4 E5:4 C5:8', 'triangle', 0.16, 1.2),
      bass: part('C3:8 G3:8 A2:8 E3:8 F3:8 C3:8 G2:8 G3:8', 'triangle', 0.18, 1.5),
      drums: '....h.......h...'
    },
    battle: {
      bpm: 156,
      mel: part('A4:2 C5:2 E5:2 A5:2 G5:2 E5:2 C5:2 E5:2 F5:2 A5:2 C6:2 A5:2 G5:2 E5:2 D5:2 E5:2 A4:2 C5:2 E5:2 A5:2 B5:2 G5:2 E5:2 G5:2 F5:4 E5:4 D5:2 E5:2 A5:4', 'square', 0.07, 0.8),
      bass: part('A2:2 A2:2 A3:2 A2:2 A2:2 A3:2 A2:2 A3:2 F2:2 F2:2 F3:2 F2:2 G2:2 G2:2 G3:2 G2:2 A2:2 A2:2 A3:2 A2:2 A2:2 A3:2 A2:2 A3:2 F2:2 F2:2 F3:2 F2:2 E2:2 E2:2 E3:2 E2:2', 'triangle', 0.2, 0.7),
      drums: 'k.hhs.hhk.hhs.kh'
    },
    battle2: {
      bpm: 184,
      mel: part('D5:2 F5:2 A5:2 D6:2 C#6:2 A5:2 F5:2 A5:2 Bb5:2 A5:2 G5:2 F5:2 E5:2 F5:2 G5:2 A5:2 D5:2 F5:2 A5:2 D6:2 E6:2 D6:2 C#6:2 A5:2 Bb5:4 A5:2 G5:2 A5:8', 'square', 0.07, 0.75),
      bass: part('D2:1 D2:1 D3:1 D2:1 D2:1 D3:1 D2:1 D3:1 D2:1 D2:1 D3:1 D2:1 D2:1 D3:1 C#3:1 D3:1 Bb1:1 Bb1:1 Bb2:1 Bb1:1 Bb1:1 Bb2:1 Bb1:1 Bb2:1 A1:1 A1:1 A2:1 A1:1 A1:1 A2:1 Bb2:1 A2:1', 'square', 0.07, 0.6),
      sub: part('D3:16 Bb2:8 A2:8', 'triangle', 0.18, 1.5),
      drums: 'k.hhskhhk.hhskhs'
    },
    victory: {
      bpm: 140,
      mel: part('G4:2 C5:2 E5:2 G5:4 E5:2 G5:8 F5:2 A5:2 C6:4 A5:2 C6:2 E6:8 D6:2 C6:2 B5:2 A5:2 G5:4 E5:4 C6:8 -:8', 'square', 0.08),
      bass: part('C3:4 C4:4 C3:4 C4:4 F3:4 F4:4 C3:4 C4:4 G2:4 G3:4 C3:4 E3:4 C3:8 C3:8', 'triangle', 0.2),
      drums: 'k...s...k.k.s...'
    },
    cave: {
      bpm: 72,
      mel: part('A4:6 -:2 C5:4 -:4 E5:8 D5:6 -:2 B4:4 -:4 G#4:8 -:16 A4:4 B4:4 C5:8 -:8 E4:8', 'triangle', 0.16, 1.6),
      bass: part('A2:16 F2:16 E2:16 A2:16', 'triangle', 0.18, 3),
      drums: '............h...',
      drip: true
    },
    cafe: {
      bpm: 96,
      mel: part('F5:3 A5:1 C6:2 E6:2 D6:4 -:2 A5:2 G5:3 B5:1 D6:2 F6:2 E6:4 -:4 E5:3 G5:1 C6:2 B5:2 C6:4 -:2 G5:2 A5:3 C#6:1 E6:2 G6:2 A6:2 G6:2 F6:2 E6:2', 'triangle', 0.17, 1.0),
      bass: part('D3:4 A3:4 F3:4 A3:4 G2:4 D3:4 B2:4 D3:4 C3:4 G3:4 E3:4 G3:4 A2:4 E3:4 G3:4 C#3:4', 'triangle', 0.2, 0.9),
      chords: [['F4', 'A4', 'C5', 'E5'], ['F4', 'B4', 'D5', 'F5'], ['E4', 'G4', 'B4', 'D5'], ['E4', 'G4', 'C#5', 'A4']],
      drums: 'k..h..sh.hk..hs.'
    },
    mini: {
      bpm: 172,
      mel: part('C5:2 E5:2 G5:2 E5:2 C6:2 G5:2 E5:2 G5:2 D5:2 F5:2 A5:2 F5:2 D6:2 A5:2 F5:2 A5:2 E5:2 G5:2 B5:2 G5:2 E6:2 B5:2 G5:2 B5:2 F5:2 A5:2 C6:2 A5:2 G5:4 C6:4', 'square', 0.065, 0.7),
      bass: part('C3:2 C4:2 C3:2 C4:2 C3:2 C4:2 C3:2 C4:2 D3:2 D4:2 D3:2 D4:2 D3:2 D4:2 D3:2 D4:2 E3:2 E4:2 E3:2 E4:2 E3:2 E4:2 E3:2 E4:2 F3:2 F4:2 F3:2 F4:2 G3:2 G4:2 G3:2 G4:2', 'triangle', 0.18, 0.6),
      drums: 'k.hhs.hhk.hhs.hh'
    },

    // ===== regiões da cidade =====
    north: { // Distrito das Letras: valsa 3/4 (12 steps/compasso), cravo em Mi menor
      bpm: 138, barLen: 12, stabs: [4, 8], chordType: 'square', chordVol: 0.018, chordDur: 1.6,
      mel: part('E5:4 G5:4 B5:4 A5:6 G5:2 F#5:4 G5:4 F#5:4 E5:4 B4:12 E5:4 G5:4 B5:4 C6:6 B5:2 A5:4 G5:4 A5:4 F#5:4 E5:12', 'square', 0.05, 0.45),
      bass: part('E2:4 -:8 A2:4 -:8 C3:4 -:8 B2:4 -:8 E2:4 -:8 A2:4 -:8 B2:4 -:8 E2:4 -:8', 'triangle', 0.2, 0.9),
      chords: [['E4', 'G4', 'B4'], ['E4', 'A4', 'C5'], ['E4', 'G4', 'C5'], ['D#4', 'F#4', 'A4', 'B4'], ['E4', 'G4', 'B4'], ['E4', 'A4', 'C5'], ['D#4', 'F#4', 'A4', 'B4'], ['E4', 'G4', 'B4']],
      drums: 'K...b...b...'
    },
    west: { // Bosque: flauta triangle, pentatônico de Ré
      bpm: 76,
      mel: part('F#5:4 A5:4 B5:8 A5:4 F#5:4 E5:8 D5:4 E5:4 F#5:8 A5:6 -:2 B5:4 A5:4', 'triangle', 0.17, 1.3),
      arp: part('D4:2 F#4:2 A4:2 F#4:2 D4:2 F#4:2 A4:2 F#4:2 A3:2 E4:2 A4:2 E4:2 A3:2 E4:2 A4:2 E4:2 B3:2 D4:2 F#4:2 D4:2 B3:2 D4:2 F#4:2 D4:2 F#3:2 C#4:2 F#4:2 C#4:2 F#3:2 C#4:2 F#4:2 C#4:2', 'sine', 0.06, 1.2),
      bass: part('D3:16 A2:16 B2:16 F#2:16', 'sine', 0.2, 1.6),
      drums: '....x.......x...'
    },
    east: { // Colina: marcha animada, square brilhante em Si bemol
      bpm: 126,
      mel: part('Bb4:2 D5:2 F5:4 Bb5:4 F5:4 D5:2 F5:2 Bb5:4 A5:4 F5:4 G5:2 Bb5:2 D6:4 C6:4 A5:4 Bb5:8 F5:4 -:4', 'square', 0.075, 0.55),
      bass: part(rep('Bb2:2 F3:2', 8) + ' ' + rep('Eb3:2 Bb3:2', 4) + ' ' + rep('F3:2 C4:2', 4), 'triangle', 0.2, 0.6),
      drums: 'k.s.k.s.k.s.k.ss'
    },
    south: { // Centro comercial: funk com swing, baixo marcante
      bpm: 104, swing: 0.3, stabs: [3, 6, 10, 14], chordType: 'square', chordVol: 0.022, chordDur: 0.9,
      mel: part('D5:2 -:2 F5:1 G5:1 -:2 Bb5:2 A5:2 -:4 G5:2 F5:2 -:2 D5:2 C5:3 -:1 D5:2 F5:2', 'square', 0.06, 0.5),
      bass: part(rep('G2:3 G2:1 -:2 G3:2 F3:2 -:1 G2:1 Bb2:2 -:2', 2) + ' C3:3 C3:1 -:2 C4:2 Bb3:2 -:1 C3:1 Eb3:2 -:2 G2:3 G2:1 -:2 G3:2 F3:2 -:1 G2:1 Bb2:2 -:2', 'square', 0.13, 0.5),
      chords: [['G3', 'Bb3', 'D4', 'F4'], ['G3', 'Bb3', 'D4', 'F4'], ['E4', 'G4', 'Bb4', 'D5'], ['G3', 'Bb3', 'D4', 'F4']],
      drums: 'k..hs..ok.khs..h'
    },
    nook: { // cantinhos secretos: caixinha de música onírica, Fá lídio
      bpm: 66, stabs: [0], chordType: 'sine', chordVol: 0.03, chordDur: 14,
      mel: part('A5:4 C6:4 E6:4 C6:4 G5:4 B5:4 D6:4 B5:4 F5:4 A5:4 C6:4 A5:4 E6:8 -:8', 'triangle', 0.1, 2.2),
      arp: part('C7:6 -:10 A6:4 -:12 E7:4 -:14 G6:6 -:10', 'sine', 0.045, 2.5),
      bass: part('F2:16 D2:16 Bb1:16 C2:16', 'triangle', 0.1, 3),
      chords: [['F3', 'A3', 'C4', 'E4'], ['D4', 'F4', 'A4', 'C5'], ['Bb3', 'D4', 'F4', 'A4'], ['C4', 'E4', 'G4', 'B4']]
    },

    // ===== interiores =====
    h1: { // jazzy, Fá maior, swing, baixo caminhando
      bpm: 92, swing: 0.32, stabs: [2, 8, 11], chordType: 'triangle', chordVol: 0.035, chordDur: 1.8,
      mel: part('D5:3 F5:1 G5:4 Bb5:4 A5:4 G5:3 E5:1 C5:4 E5:4 G5:4 A5:3 C6:1 E6:4 C6:4 A5:4 F5:3 A5:1 D6:6 -:2 C6:4', 'triangle', 0.14, 1.0),
      bass: part('G2:4 A2:4 Bb2:4 B2:4 C3:4 D3:4 E3:4 Eb3:4 F2:4 A2:4 C3:4 A2:4 D3:4 C3:4 A2:4 F2:4', 'triangle', 0.2, 0.9),
      chords: [['F3', 'Bb3', 'D4', 'G4'], ['E3', 'Bb3', 'D4', 'G4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4']],
      drums: 'K..b..h...b.h.h.'
    },
    h2: { // folk, Sol maior, boom-chick e dedilhado
      bpm: 100,
      mel: part('D5:2 G5:2 B5:4 A5:2 G5:2 E5:4 D5:2 G5:2 B5:4 D6:4 B5:4 C6:2 B5:2 A5:2 G5:2 A5:4 F#5:4 G5:8 -:8', 'triangle', 0.15, 1.0),
      arp: part('G3:2 B3:2 D4:2 B3:2 G3:2 B3:2 D4:2 B3:2 E3:2 G3:2 B3:2 G3:2 E3:2 G3:2 B3:2 G3:2 C4:2 E4:2 G4:2 E4:2 D4:2 F#4:2 A4:2 F#4:2 G3:2 B3:2 D4:2 B3:2 G3:8', 'triangle', 0.06, 0.6),
      bass: part('G2:4 D3:4 G2:4 D3:4 E2:4 B2:4 E2:4 B2:4 C3:4 G3:4 D3:4 A3:4 G2:4 D3:4 G2:8', 'triangle', 0.18, 0.7),
      drums: 'K...S...K...S...'
    },
    h3: { // bossa nova, Ré menor, clave
      bpm: 120, stabs: [3, 6, 12], chordType: 'sine', chordVol: 0.035, chordDur: 1.6,
      mel: part('A5:3 F5:1 A5:4 D6:4 C6:4 Bb5:3 G5:1 Bb5:4 D6:4 C6:4 C#6:3 E5:1 G5:4 Bb5:4 A5:4 F5:3 A5:1 D6:8 -:4', 'triangle', 0.13, 1.0),
      bass: part('D2:6 A2:2 D2:6 A2:2 G2:6 D3:2 G2:6 D3:2 A2:6 E3:2 A2:6 E3:2 D2:6 A2:2 D2:6 A2:2', 'sine', 0.24, 0.9),
      chords: [['F4', 'A4', 'C5', 'E5'], ['F4', 'Bb4', 'D5', 'G4'], ['E4', 'G4', 'Bb4', 'C#5'], ['F4', 'A4', 'C5', 'E5']],
      drums: 'x..x..x...x.x...'
    },
    h4: { // lo-fi, Mi bemol maior, lento, com chiado
      bpm: 74, swing: 0.25, dust: 0.3, stabs: [0, 8], chordType: 'sine', chordVol: 0.04, chordDur: 7,
      mel: part('G5:4 -:2 Bb5:2 D6:6 -:2 C6:4 Bb5:4 G5:8 Ab5:4 C6:4 Eb6:6 -:2 D6:4 C6:4 Bb5:8', 'triangle', 0.1, 1.1),
      bass: part('Eb2:8 Eb2:4 G2:4 C2:8 C2:4 Eb2:4 Ab1:8 Ab2:4 C3:4 Bb1:8 Bb2:4 F2:4', 'sine', 0.24, 0.9),
      chords: [['G3', 'Bb3', 'D4', 'Eb4'], ['G3', 'Bb3', 'C4', 'Eb4'], ['Ab3', 'C4', 'Eb4', 'G4'], ['Ab3', 'D4', 'F4', 'Bb3']],
      drums: 'K..h..S...Kh..Sh'
    },
    h5: { // clássico, Lá maior, baixo de Alberti
      bpm: 112,
      mel: part('C#6:4 E6:2 C#6:2 A5:4 C#6:4 D6:4 F#6:2 D6:2 B5:4 D6:4 E6:4 G#6:2 E6:2 B5:4 D6:4 C#6:8 A5:8', 'triangle', 0.14, 1.0),
      bass: part(rep('A2:2 E3:2 C#3:2 E3:2', 2) + ' ' + rep('D3:2 A3:2 F#3:2 A3:2', 2) + ' ' + rep('E3:2 B3:2 G#3:2 B3:2', 2) + ' ' + rep('A2:2 E3:2 C#3:2 E3:2', 2), 'triangle', 0.13, 0.8)
    },
    h6: { // celta, jig 6/8 (12 steps), Lá dórico, bordão e bodhran
      bpm: 118, barLen: 12,
      mel: part('A4:2 C5:2 E5:2 A5:4 G5:2 E5:2 G5:2 D5:2 E5:4 D5:2 C5:2 E5:2 G5:2 A5:4 B5:2 A5:6 G5:2 E5:4 E5:2 A5:2 B5:2 C6:4 B5:2 A5:2 G5:2 E5:2 D5:4 E5:2 G5:2 A5:2 B5:2 C6:4 D6:2 E6:6 C6:2 A5:4', 'triangle', 0.15, 0.85),
      bass: part(rep('A2:6 E3:6 A2:6 E3:6 G2:6 D3:6 A2:6 E3:6', 2), 'triangle', 0.16, 0.9),
      drums: 'K..t..K.t.t.'
    },
    library: { // biblioteca: silêncio, notas esparsas
      bpm: 54,
      mel: part('G4:6 -:26 Bb4:4 -:12 Eb5:8 -:20 D5:4 -:12', 'sine', 0.12, 2.2),
      bass: part('Eb2:64 C2:32 Bb1:32', 'sine', 0.1, 3)
    },
    tribunal: { // tribunal: épico, grave, solene, Fá menor
      bpm: 62, stabs: [0], chordType: 'sawtooth', chordVol: 0.02, chordDur: 15,
      mel: part('F4:8 Ab4:4 C5:4 F5:8 Eb5:4 Db5:4 C5:8 Bb4:4 Ab4:4 G4:16', 'sawtooth', 0.055, 1.3),
      bass: part('F2:8 F2:8 Db2:8 Db2:8 Ab1:8 Ab1:8 C2:8 C2:8', 'triangle', 0.26, 1.3),
      chords: [['F3', 'C4', 'F4', 'Ab4'], ['Db3', 'Ab3', 'Db4', 'F4'], ['Ab3', 'Eb4', 'Ab4', 'C5'], ['C3', 'G3', 'C4', 'E4']],
      drums: 'K.......t.t.....'
    },
    revision: { // revisão: assombrada, trítonos, coração pulsando
      bpm: 90, drip: true, stabs: [0], chordType: 'sine', chordVol: 0.03, chordDur: 14,
      mel: part('B4:4 -:4 F5:4 -:4 E5:2 F5:2 E5:4 -:8 Bb4:8 -:8 C5:2 -:2 F#5:4 -:8', 'triangle', 0.14, 1.2),
      arp: part(rep('F6:1 B5:1 F6:1 B5:1 -:12', 3) + ' Eb6:1 A5:1 Eb6:1 A5:1 -:12', 'square', 0.022, 0.3),
      bass: part('B2:2 B2:2 -:12 B2:2 B2:2 -:12 C3:2 C3:2 -:12 F2:2 F2:2 -:12', 'triangle', 0.22, 0.8),
      chords: [['B3', 'D4', 'F4', 'Ab4'], ['B3', 'D4', 'F4', 'G#4'], ['C4', 'Eb4', 'Gb4', 'A4'], ['Bb3', 'Db4', 'E4', 'G4']],
      drums: 'K.K.............'
    },
  };

  function scheduleStep(td, step, t, sd) {
    if (td.swing && (step & 1)) t += sd * td.swing; // swing nas semicolcheias ímpares
    var parts = ['mel', 'bass', 'sub', 'arp'];
    for (var pi = 0; pi < parts.length; pi++) {
      var p = td[parts[pi]];
      if (!p) continue;
      var pos = step % p.len;
      // evento começando neste step (busca linear curta)
      for (var i = 0; i < p.ev.length; i++) {
        if (p.ev[i].at === pos) {
          var e = p.ev[i];
          tone(trackGain, e.f, t, Math.max(0.05, e.d * sd * p.dur), p.type, p.vol, 0, 0.008);
          break;
        }
        if (p.ev[i].at > pos) break;
      }
    }
    // percussão
    var dr = td.drums;
    if (dr) {
      var c = dr.charAt(step % dr.length);
      if (c === 'k') {
        tone(trackGain, 140, t, 0.12, 'triangle', 0.4, 45);
      } else if (c === 's') {
        noise(trackGain, t, 0.1, 0.16, 'highpass', 1800);
        tone(trackGain, 200, t, 0.06, 'triangle', 0.08, 120);
      } else if (c === 'h') {
        noise(trackGain, t, 0.035, 0.07, 'highpass', 7000);
      } else if (c === 'o') {
        noise(trackGain, t, 0.12, 0.07, 'highpass', 6000);
      } else if (c === 'K') { // kick suave
        tone(trackGain, 120, t, 0.14, 'triangle', 0.26, 45);
      } else if (c === 'S') { // snare suave
        noise(trackGain, t, 0.08, 0.07, 'highpass', 2500);
      } else if (c === 'b') { // vassourinha
        noise(trackGain, t, 0.09, 0.05, 'bandpass', 5000);
      } else if (c === 'x') { // woodblock / clave
        tone(trackGain, 1100, t, 0.05, 'triangle', 0.09, 800);
      } else if (c === 't') { // tom grave
        tone(trackGain, 110, t, 0.22, 'triangle', 0.3, 60);
      }
    }
    // acordes: 1 por compasso (barLen steps, padrão 16), stabs configuráveis (padrão 0 e 10)
    if (td.chords) {
      var bl = td.barLen || 16, sb = step % bl, bar = Math.floor(step / bl) % td.chords.length;
      var stabs = td.stabs || [0, 10];
      if (stabs.indexOf(sb) >= 0) {
        var cv = td.chordVol || 0.045, ct = td.chordType || 'triangle', cd = sd * (td.chordDur || 5);
        td.chords[bar].forEach(function (n) {
          tone(trackGain, freq(n), t, cd, ct, cv, 0, 0.02);
        });
      }
    }
    // chiado de vinil (lo-fi)
    if (td.dust && Math.random() < td.dust) noise(trackGain, t, 0.012, 0.025, 'highpass', 3500);
    // gotas (cave)
    if (td.drip && step % 32 === 13) {
      tone(trackGain, 1800, t, 0.12, 'triangle', 0.06, 700);
      tone(trackGain, 1800, t + sd * 3, 0.15, 'triangle', 0.03, 700);
    }
  }

  function tick() {
    if (!ctx || !trackData) return;
    var td = trackData, now = ctx.currentTime;
    if (nextTime < now - 0.2) nextTime = now + 0.05; // recuperação após aba em background
    while (nextTime < now + 0.15) {
      var sd = 60 / td.bpm / 4 / tempoMul;
      scheduleStep(td, stepIdx, nextTime, sd);
      nextTime += sd;
      stepIdx++;
    }
  }

  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }

  function fadeOutGain(g) {
    var t = ctx.currentTime;
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(g.gain.value, t);
    g.gain.linearRampToValueAtTime(0, t + 0.3);
    setTimeout(function () { try { g.disconnect(); } catch (e) {} }, 800);
  }

  var pending = null; // track pedida antes do init

  SFX.music = function (track) {
    track = track || null;
    if (!ctx) { pending = track; return; }
    if (track === curTrack && (track === null || timer)) return;
    if (track && !TRACKS[track]) return;
    stopTimer();
    if (trackGain) { fadeOutGain(trackGain); trackGain = null; }
    curTrack = track; trackData = null; tempoMul = 1;
    if (!track) return;
    trackGain = ctx.createGain();
    var t = ctx.currentTime;
    trackGain.gain.setValueAtTime(0, t + 0.05);
    trackGain.gain.linearRampToValueAtTime(1, t + 0.35);
    trackGain.connect(musBus);
    trackData = TRACKS[track];
    stepIdx = 0;
    nextTime = t + 0.3;
    timer = setInterval(tick, 25);
    tick();
  };

  SFX.tempoMul = function (x) {
    x = +x;
    if (!(x > 0)) return;
    tempoMul = Math.max(0.25, Math.min(x, 3));
  };

  SFX.mute = function (b) { SFX.muted = !!b; applyMaster(); };

  SFX.setVolume = function (v) {
    v = +v; if (isNaN(v)) return;
    volume = Math.max(0, Math.min(1, v));
    applyMaster();
  };

  SFX.init = function () {
    try {
      if (!ctx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctx = new AC();
        var comp = ctx.createDynamicsCompressor();
        comp.threshold.value = -14; comp.knee.value = 20; comp.ratio.value = 6;
        comp.attack.value = 0.003; comp.release.value = 0.2;
        master = ctx.createGain();
        master.gain.value = SFX.muted ? 0 : MASTER * volume;
        sfxBus = ctx.createGain(); sfxBus.gain.value = 0.9;
        musBus = ctx.createGain(); musBus.gain.value = 0.55;
        sfxBus.connect(comp); musBus.connect(comp);
        comp.connect(master); master.connect(ctx.destination);
        var len = ctx.sampleRate;
        noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
        var d = noiseBuf.getChannelData(0);
        for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      }
      if (ctx.state === 'suspended') ctx.resume();
      if (pending !== null) { var p = pending; pending = null; SFX.music(p); }
    } catch (e) {}
  };

  /* ====== MÚSICA DE FOCO: ambiente generativo (substitui as trilhas chiptune) ======
     Camadas: ruído marrom suave + pad lento em acordes maj7/m7/sus + sinos esparsos
     (pentatônica) com eco + batida binaural alfa (10 Hz, opcional, fones recomendados). */
  SFX.binaural = true;
  var amb = null, curAmb = null, brownBuffer = null;
  var MAJ = [[0,7,11,16],[-3,0,4,7],[-7,-3,0,4],[-5,0,2,4]];
  var MIN = [[0,7,10,14],[-4,0,3,7],[3,7,10,17],[-2,2,5,7]];
  var SUS = [[0,7,14,16],[-5,0,7,14],[2,9,14,21],[0,5,12,17]];
  var JAZZ = [[0,4,7,11,14],[-3,0,4,7,10],[2,5,9,12],[-5,-1,2,5]];
  var PMAJ = [0,2,4,7,9,12,14,16,19], PMIN = [0,3,5,7,10,12,15,17,19];
  function prof(root, chords, o) {
    var p = { root: root, chords: chords, scale: chords === MIN ? PMIN : PMAJ, padLP: 900, pad: 1, noise: 0.05,
      noiseLP: 380, notes: 1, gap: [4, 9], chordSec: 18, pulse: 0, beat: 10 };
    for (var k in o) p[k] = o[k];
    return p;
  }
  var PROF = {
    town: prof(50, MAJ, {}),
    north: prof(53, MAJ, { padLP: 1100, gap: [3.5, 7.5], chordSec: 20 }),
    west: prof(45, MIN, { noise: 0.09, noiseLP: 600, gap: [5, 10] }),
    east: prof(55, MAJ, { padLP: 1200, gap: [3, 6.5] }),
    south: prof(51, JAZZ, { gap: [3, 6.5], noise: 0.04 }),
    nook: prof(60, SUS, { pad: 0.6, notes: 1.3, gap: [2.5, 6], noise: 0.02, chordSec: 22 }),
    h1: prof(48, MAJ, { noise: 0.03, notes: 0.8 }),
    h2: prof(52, MIN, { noise: 0.03, notes: 0.8 }),
    h3: prof(43, JAZZ, { noise: 0.03, notes: 0.8 }),
    h4: prof(47, SUS, { noise: 0.03, notes: 0.8 }),
    h5: prof(55, MAJ, { noise: 0.03, notes: 0.8, chordSec: 22 }),
    h6: prof(53, MIN, { noise: 0.03, notes: 0.8, chordSec: 22 }),
    library: prof(46, SUS, { pad: 0.5, notes: 0.5, gap: [8, 16], noise: 0.035 }),
    cafe: prof(50, JAZZ, { noise: 0.045, noiseLP: 900, gap: [2.5, 5.5] }),
    cave: prof(38, MIN, { padLP: 500, pad: 1.1, notes: 0.8, gap: [7, 14], noise: 0.07, noiseLP: 250, chordSec: 26 }),
    tribunal: prof(43, SUS, { padLP: 700, pad: 1.2, notes: 0.9, gap: [8, 14], chordSec: 24 }),
    revision: prof(45, MIN, { padLP: 650, gap: [5, 10] }),
    battle: prof(52, MIN, { pulse: 64, gap: [2, 4.5], noise: 0.03, padLP: 1000, beat: 14 }),
    battle2: prof(52, MIN, { pulse: 76, gap: [1.5, 3.5], noise: 0.03, padLP: 1300, beat: 14 }),
    victory: prof(55, MAJ, { gap: [1.2, 2.5], chordSec: 10, notes: 1.2 }),
    mini: prof(50, MAJ, { pulse: 72, gap: [1.5, 3.5], padLP: 1100, beat: 14 })
  };
  function brownBuf() {
    if (brownBuffer) return brownBuffer;
    var len = ctx.sampleRate * 6, b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (var c = 0; c < 2; c++) {
      var d = b.getChannelData(c), last = 0;
      for (var i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
    }
    return (brownBuffer = b);
  }
  function ambStart(name) {
    var P = PROF[name] || PROF.town, t0 = ctx.currentTime;
    if (musBus) musBus.gain.value = 0.9;
    var out = ctx.createGain(); out.gain.setValueAtTime(0.0001, t0); out.gain.linearRampToValueAtTime(1, t0 + 4); out.connect(musBus);
    var src = ctx.createBufferSource(); src.buffer = brownBuf(); src.loop = true;
    var nlp = ctx.createBiquadFilter(); nlp.type = 'lowpass'; nlp.frequency.value = P.noiseLP;
    var ng = ctx.createGain(); ng.gain.value = P.noise; src.connect(nlp); nlp.connect(ng); ng.connect(out); src.start();
    // eco suave (cauda de reverb)
    var del = ctx.createDelay(2); del.delayTime.value = 0.53;
    var fb = ctx.createGain(); fb.gain.value = 0.45;
    var dlp = ctx.createBiquadFilter(); dlp.type = 'lowpass'; dlp.frequency.value = 1800;
    del.connect(dlp); dlp.connect(fb); fb.connect(del);
    var wet = ctx.createGain(); wet.gain.value = 0.55; dlp.connect(wet); wet.connect(out);
    // pad
    var padLP = ctx.createBiquadFilter(); padLP.type = 'lowpass'; padLP.frequency.value = P.padLP; padLP.Q.value = 0.3;
    var padG = ctx.createGain(); padG.gain.value = 0.9; padLP.connect(padG); padG.connect(out);
    var send = ctx.createGain(); send.gain.value = 0.25; padG.connect(send); send.connect(del);
    var lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.05; lg.gain.value = P.padLP * 0.2;
    lfo.connect(lg); lg.connect(padLP.frequency); lfo.start();
    var noteG = ctx.createGain(); noteG.gain.value = 1; noteG.connect(out); noteG.connect(del);
    // binaural alfa
    var binG = ctx.createGain(); binG.gain.value = SFX.binaural ? 1 : 0; binG.connect(out);
    var binOsc = [];
    if (ctx.createStereoPanner) {
      [[200, -1], [200 + P.beat, 1]].forEach(function (c) {
        var o = ctx.createOscillator(), g = ctx.createGain(), pn = ctx.createStereoPanner();
        o.type = 'sine'; o.frequency.value = c[0]; g.gain.value = 0.02; pn.pan.value = c[1];
        o.connect(g); g.connect(pn); pn.connect(binG); o.start(); binOsc.push(o);
      });
    }
    var A = { out: out, P: P, padLP: padLP, noteG: noteG, binG: binG, srcs: [src, lfo].concat(binOsc),
      nextChord: t0 + 0.2, chordIdx: 0, nextNote: t0 + 2.5, nextBeat: t0 + 1, ni: 3, timer: null };
    A.timer = setInterval(function () { ambTick(A); }, 250);
    ambTick(A);
    return A;
  }
  function ambTick(A) {
    var now = ctx.currentTime, P = A.P;
    while (A.nextChord < now + 1) { ambChord(A, A.nextChord); A.nextChord += P.chordSec; A.chordIdx++; }
    while (A.nextNote < now + 1) { ambNote(A, A.nextNote); A.nextNote += P.gap[0] + Math.random() * (P.gap[1] - P.gap[0]); }
    if (P.pulse) while (A.nextBeat < now + 1) { ambPulse(A, A.nextBeat); A.nextBeat += 60 / P.pulse; }
  }
  function ambChord(A, t) {
    var P = A.P, ch = P.chords[A.chordIdx % P.chords.length], end = t + P.chordSec, v = 0.045 * P.pad;
    ch.forEach(function (n) {
      var f = mtof(P.root + n);
      [['sine', f, 1], ['triangle', f * 1.003, 0.35]].forEach(function (s) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = s[0]; o.frequency.value = s[1];
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(v * s[2], t + 4.5);
        g.gain.setValueAtTime(v * s[2], end);
        g.gain.linearRampToValueAtTime(0.0001, end + 5);
        o.connect(g); g.connect(A.padLP); o.start(t); o.stop(end + 5.2);
      });
    });
  }
  function ambNote(A, t) {
    var P = A.P;
    if (Math.random() < 0.15) return;
    var step = [-2, -1, -1, 0, 1, 1, 2][Math.floor(Math.random() * 7)];
    A.ni = Math.max(0, Math.min(P.scale.length - 1, A.ni + step));
    var f = mtof(P.root + 12 + P.scale[A.ni]), v = 0.06 * P.notes;
    [[f, 1], [f * 2, 0.22]].forEach(function (h) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = h[0];
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(v * h[1], t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 3.5);
      o.connect(g); g.connect(A.noteG); o.start(t); o.stop(t + 3.6);
    });
  }
  function ambPulse(A, t) {
    var f = mtof(A.P.root - 12), o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 0.6, t + 0.25);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.1, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g); g.connect(A.out); o.start(t); o.stop(t + 0.35);
  }
  function ambStop(A) {
    clearInterval(A.timer);
    var t = ctx.currentTime;
    A.out.gain.cancelScheduledValues(t); A.out.gain.setValueAtTime(A.out.gain.value, t); A.out.gain.linearRampToValueAtTime(0, t + 2.5);
    setTimeout(function () { A.srcs.forEach(function (s) { try { s.stop(); } catch (e) {} }); try { A.out.disconnect(); } catch (e) {} }, 3000);
  }
  SFX.music = function (track) {
    track = track || null;
    if (!ctx) { pending = track; return; }
    if (track === curAmb && (track === null || amb)) return;
    if (amb) { ambStop(amb); amb = null; }
    curAmb = track;
    if (track) amb = ambStart(track);
  };
  SFX.tempoMul = function () {};
  SFX.setBinaural = function (b) {
    SFX.binaural = !!b;
    if (amb && ctx) { var t = ctx.currentTime; amb.binG.gain.cancelScheduledValues(t); amb.binG.gain.setTargetAtTime(SFX.binaural ? 1 : 0, t, 0.3); }
  };
  // sons de interface irritantes em estudo longo: sem "tick" de digitação nem passos
  var _play = SFX.play;
  SFX.play = function (name, arg) { if (name === 'tick' || name === 'step') return; return _play(name, arg); };

  window.SFX = SFX;
})();

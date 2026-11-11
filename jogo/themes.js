(function () {
  'use strict';
  var rd = Math.round;
  function R(g, c, x, y, w, h) { g.fillStyle = c; g.fillRect(rd(x), rd(y), rd(w), rd(h)); }
  function hs(x, y, s) { var v = Math.sin(x * 127.1 + y * 311.7 + (s || 0) * 74.7) * 43758.5453; return v - Math.floor(v); }
  function disc(g, c, cx, cy, r) { g.fillStyle = c; g.beginPath(); g.arc(rd(cx), rd(cy), r, 0, 6.2832); g.fill(); }
  // scatter n specks of colour c inside the tile
  function specks(g, c, X, Y, x, y, n, seed, w, h) {
    for (var i = 0; i < n; i++) {
      R(g, c, X + 1 + hs(x, y, seed + i) * 13, Y + 1 + hs(y, x, seed + i + 9) * 13, w || 1, h || 1);
    }
  }
  // triangle by rows: apex at (cx,y0), height hh, half-base hb
  function tri(g, c, cx, y0, hh, hb) {
    for (var i = 0; i < hh; i++) {
      var half = Math.max(1, rd(hb * (i + 1) / hh));
      R(g, c, cx - half, y0 + i, half * 2, 1);
    }
  }

  /* ================= HOUSE ENGINE ================= */
  function roofOf(g, b, X, Y, c, o) {
    var i, col = b.color || '#c55', t = o.t || 0;
    switch (c.roof) {
      case 'curve':
        for (i = 0; i < 23; i++) {
          var k = (22 - i) / 22, inset = rd(38 * (1 - Math.sqrt(1 - k * k)));
          R(g, (i % 5 === 4) ? c.roof2 : col, X + 2 + inset, Y + 6 + i, 76 - inset * 2, 1);
        }
        R(g, c.roof2, X + 1, Y + 28, 78, 2);
        for (i = 0; i < 9; i++) R(g, '#fff', X + 4 + i * 9, Y + 29, 3, 1);
        R(g, '#fff', X + 16, Y + 12, 3, 3); R(g, '#fff', X + 58, Y + 16, 3, 3);
        break;
      case 'gable':
        for (i = 0; i < 23; i++) {
          var ins = rd(38 * (1 - (i + 1) / 23));
          R(g, (i % 4 === 3) ? c.roof2 : col, X + 1 + ins, Y + 6 + i, 78 - ins * 2, 1);
        }
        R(g, c.roof2, X, Y + 28, 80, 2);
        R(g, '#6b4a3a', X + 58, Y + 3, 7, 12);
        break;
      case 'pedi':
        for (i = 0; i < 16; i++) {
          var p = rd(38 * (1 - (i + 1) / 16));
          R(g, c.roofc, X + 2 + p, Y + 12 + i, 76 - p * 2, 1);
        }
        R(g, col, X + 2, Y + 26, 76, 2);
        R(g, c.roof2, X + 2, Y + 28, 76, 2);
        break;
      case 'gray':
        R(g, '#8a8f98', X, Y + 8, 80, 20);
        for (i = 0; i < 5; i++) R(g, '#6f747d', X, Y + 12 + i * 4, 80, 1);
        R(g, '#5a5f68', X, Y + 26, 80, 3);
        R(g, '#c0392b', X + 30, Y + 12, 14, 12); R(g, '#f4e9e0', X + 32, Y + 14, 10, 8);
        R(g, '#c0392b', X + 35, Y + 17, 4, 2);
        R(g, '#a4532f', X + 60, Y + 0, 9, 10); R(g, '#7a3a20', X + 59, Y + 0, 11, 2);
        R(g, col, X, Y + 8, 80, 2);
        break;
      case 'geo':
        for (i = 0; i < 5; i++) {
          var w = 36 + i * 11;
          R(g, i % 2 ? '#4d3590' : '#6a4cc0', X + 40 - w / 2, Y + 6 + i * 5, w, 5);
          R(g, '#4ff2ff', X + 40 - w / 2, Y + 6 + i * 5, w, 1);
        }
        R(g, col, X + 36, Y + 14, 8, 8);
        R(g, '#4ff2ff', X + 38, Y + 16, 4, 4);
        R(g, '#4ff2ff', X + 2, Y + 29, 76, 1);
        break;
      case 'server':
        R(g, '#17251f', X, Y + 10, 80, 19);
        R(g, '#00ff9c', X, Y + 10, 80, 1);
        for (i = 0; i < 8; i++) R(g, '#0b3a2a', X + 4 + i * 9, Y + 14, 6, 10);
        for (i = 0; i < 8; i++) R(g, '#00c27a', X + 5 + i * 9, Y + 16, 4, 1);
        R(g, '#2c4a3d', X + 64, Y + 2, 2, 9);
        R(g, (Math.floor(t * 2) % 2) ? '#ff3860' : '#601020', X + 63, Y + 0, 4, 3);
        R(g, col, X, Y + 28, 80, 1);
        break;
      case 'flat': // prédio moderno: andar de vidro + painéis solares no terraço
        R(g, '#c9d0d6', X + 2, Y + 10, 76, 3);
        R(g, '#eef1f4', X + 4, Y + 13, 72, 15);
        R(g, '#8cc4ea', X + 7, Y + 16, 66, 9);
        for (i = 0; i < 7; i++) R(g, '#5a6670', X + 7 + i * 11, Y + 16, 1, 9);
        R(g, 'rgba(255,255,255,0.5)', X + 9, Y + 17, 6, 2); R(g, 'rgba(255,255,255,0.5)', X + 42, Y + 17, 6, 2);
        for (i = 0; i < 4; i++) {
          R(g, '#24497a', X + 8 + i * 17, Y + 3, 14, 6); R(g, '#3a6aa8', X + 9 + i * 17, Y + 4, 12, 1);
          R(g, '#1a355a', X + 15 + i * 17, Y + 3, 1, 6); R(g, '#8a939c', X + 10 + i * 17, Y + 9, 2, 1);
        }
        R(g, col, X + 4, Y + 26, 72, 2);
        break;
      case 'clay':
        R(g, '#b5593a', X, Y + 10, 80, 19);
        for (i = 0; i < 20; i++) R(g, i % 2 ? '#9a4528' : '#c96c48', X + i * 4, Y + 10, 3, 19);
        R(g, '#d98b64', X, Y + 10, 80, 2);
        R(g, col, X, Y + 24, 80, 2);
        R(g, '#5a2f1a', X, Y + 28, 80, 2);
        for (i = 0; i < 6; i++) R(g, '#6b3a22', X + 4 + i * 14, Y + 29, 4, 3);
        break;
    }
  }

  function windowAt(g, x, y, lit, c, round) {
    R(g, c.trim, x - 1, y - 1, 14, 12);
    R(g, lit ? '#ffe58a' : c.glass, x, y, 12, 10);
    if (lit) { R(g, '#fff6c8', x + 1, y + 1, 4, 3); }
    else R(g, 'rgba(255,255,255,0.35)', x + 1, y + 1, 3, 3);
    R(g, c.trim, x + 5, y, 2, 10); R(g, c.trim, x, y + 4, 12, 2);
  }

  function kindExtras(g, b, X, Y, o, c, lit) {
    var i, kind = b.kind, col = b.color || '#c55';
    if (kind === 'library') {
      for (i = 0; i < 6; i++) {
        R(g, ['#7a4a2a', '#2f5d50', '#5a3a6a', '#8a2f2f', '#2f4a7a', '#8a7a2a'][i], X + 10 + i * 2, Y + 49, 2, 6);
        R(g, ['#2f5d50', '#8a2f2f', '#2f4a7a', '#8a7a2a', '#7a4a2a', '#5a3a6a'][i], X + 58 + i * 2, Y + 49, 2, 6);
      }
      R(g, '#3a2a20', X + 9, Y + 55, 14, 1); R(g, '#3a2a20', X + 57, Y + 55, 14, 1);
      disc(g, c.trim, X + 40, Y + 39, 6);
      disc(g, lit ? '#ffe58a' : '#6a7a88', X + 40, Y + 39, 4.5);
      R(g, c.trim, X + 39, Y + 34, 2, 10); R(g, c.trim, X + 35, Y + 38, 10, 2);
      R(g, 'rgba(40,30,20,0.18)', X + 4, Y + 28, 72, 36);
    } else if (kind === 'cafe') {
      for (i = 0; i < 18; i++) R(g, i % 2 ? '#fffaf0' : col, X + 4 + i * 4, Y + 30, 4, 6);
      for (i = 0; i < 18; i++) R(g, i % 2 ? '#fffaf0' : col, X + 4 + i * 4, Y + 36, 4, 1);
      R(g, 'rgba(0,0,0,0.18)', X + 4, Y + 37, 72, 2);
      R(g, '#fffaf0', X + 62, Y + 53, 8, 6); R(g, '#8a5a3a', X + 63, Y + 53, 6, 2);
      R(g, '#fffaf0', X + 70, Y + 54, 2, 3);
      R(g, 'rgba(255,255,255,0.7)', X + 64, Y + 50, 1, 2); R(g, 'rgba(255,255,255,0.7)', X + 67, Y + 49, 1, 3);
    } else if (kind === 'tribunal') {
      var gold = '#e8c040', gd = '#a98a1a';
      for (i = 0; i < 4; i++) {
        var cx = [6, 26, 50, 70][i];
        R(g, gold, X + cx, Y + 28, 4, 36); R(g, gd, X + cx + 3, Y + 28, 1, 36);
        R(g, gold, X + cx - 1, Y + 28, 6, 2); R(g, gold, X + cx - 1, Y + 62, 6, 2);
      }
      R(g, gold, X + 2, Y + 26, 76, 3); R(g, gd, X + 2, Y + 28, 76, 1);
      tri(g, gold, X + 40, Y + 8, 18, 38);
      tri(g, col, X + 40, Y + 13, 12, 28);
      disc(g, gold, X + 40, Y + 21, 3);
      R(g, '#6a6a6a', X + 40, Y - 2, 1, 12);
      R(g, '#d83030', X + 41, Y - 2, 8, 5);
    }
  }

  function makeHouse(c) {
    return function (g, b, X, Y, o) {
      b = b || {}; o = o || {};
      var lit = !!(o.night || o.lit);
      var dx = o.dx != null ? o.dx : X + 32, dy = o.dy != null ? o.dy : Y + 48;
      var col = b.color || '#c55';
      if (b.kind !== 'tribunal' || c.roof === 'pedi') { if (b.kind !== 'tribunal') roofOf(g, b, X, Y, c, o); }
      // wall
      R(g, c.wall, X + 4, Y + 28, 72, 36);
      R(g, c.wall2, X + 4, Y + 60, 72, 4);
      R(g, c.wall2, X + 4, Y + 28, 72, 2);
      if (c.pat) c.pat(g, X, Y, lit, o);
      windowAt(g, X + 11, Y + 34, lit, c);
      windowAt(g, X + 57, Y + 34, lit, c);
      // door
      R(g, c.trim, dx + 1, dy, 14, 16);
      R(g, c.door, dx + 2, dy + 2, 12, 14);
      R(g, 'rgba(0,0,0,0.18)', dx + 8, dy + 2, 1, 14);
      R(g, '#ffd24a', dx + 11, dy + 9, 2, 2);
      R(g, c.wall2, dx - 1, dy + 15, 18, 1);
      kindExtras(g, b, X, Y, o, c, lit);
      if (c.post) c.post(g, X, Y, lit, o, b);
      if (lit) { R(g, 'rgba(255,220,120,0.25)', dx + 2, dy + 16, 12, 1); }
    };
  }

  /* ================= THEMES ================= */
  var T = [];

  // 0 Vila das Letras
  T.push({
    name: 'Vila das Letras',
    ground: function (g, X, Y, x, y, t) {
      R(g, '#bfe3b4', X, Y, 16, 16);
      specks(g, '#cdeec2', X, Y, x, y, 3, 1, 2, 1);
      specks(g, '#a8d49e', X, Y, x, y, 3, 8, 1, 2);
      if (hs(x, y, 20) < 0.22) {
        var fx = X + 3 + hs(x, y, 21) * 9, fy = Y + 3 + hs(x, y, 22) * 9;
        R(g, hs(x, y, 23) < 0.5 ? '#ffb6cf' : '#fff2f6', fx, fy, 2, 2);
        R(g, '#ffe27a', fx, fy, 1, 1);
      }
    },
    path: function (g, X, Y, x, y, t) {
      R(g, '#f3dcc3', X, Y, 16, 16);
      specks(g, '#e6c8a8', X, Y, x, y, 4, 40, 2, 1);
      specks(g, '#fff1e0', X, Y, x, y, 2, 50, 1, 1);
      if (hs(x, y, 60) < 0.18) R(g, '#ffc9d9', X + 4 + hs(x, y, 61) * 8, Y + 4 + hs(x, y, 62) * 8, 2, 1);
    },
    tree: function (g, X, Y, x, y, t) {
      R(g, '#7a5a48', X + 7, Y + 8, 3, 8);
      R(g, '#5e4436', X + 9, Y + 8, 1, 8);
      disc(g, '#ff9fc0', X + 8, Y + 3, 7);
      disc(g, '#ffb8d0', X + 5, Y + 1, 4.5);
      disc(g, '#ff86ae', X + 11, Y + 5, 4);
      R(g, '#fff0f5', X + 4, Y - 1, 2, 2); R(g, '#fff0f5', X + 10, Y + 1, 2, 2); R(g, '#fff0f5', X + 7, Y + 6, 2, 1);
      var sw = Math.sin(t * 1.2 + x) > 0.6 ? 1 : 0;
      R(g, '#ffc7da', X + 3 + sw, Y + 14, 1, 1); R(g, '#ffc7da', X + 12 - sw, Y + 15, 1, 1);
    },
    house: makeHouse({
      roof: 'curve', roof2: '#e7a0b8', wall: '#ffe6ee', wall2: '#f1bfd0', trim: '#fffafc', glass: '#bfe6ff', door: '#c57a92',
      pat: function (g, X, Y) { R(g, '#ffd6e3', X + 4, Y + 44, 72, 1); R(g, '#ffd6e3', X + 4, Y + 54, 72, 1); }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // cherry bush
        R(g, '#7a5a48', X + 7, Y + 10, 3, 5);
        disc(g, '#ff9fc0', X + 8, Y + 8, 6); disc(g, '#ffc4d8', X + 6, Y + 6, 3); R(g, '#fff', X + 10, Y + 7, 2, 2);
      } else if (kind === 'b') { // scroll stack
        R(g, '#f6e8c8', X + 2, Y + 10, 12, 4); R(g, '#d8b878', X + 1, Y + 10, 2, 4); R(g, '#d8b878', X + 13, Y + 10, 2, 4);
        R(g, '#fbf3dc', X + 3, Y + 6, 10, 4); R(g, '#c97a8a', X + 2, Y + 6, 2, 4); R(g, '#c97a8a', X + 12, Y + 6, 2, 4);
        R(g, '#e08a9a', X + 4, Y + 3, 8, 3);
        R(g, '#a89a80', X + 4, Y + 14, 8, 1);
      } else { // book pedestal
        R(g, '#d9c0d0', X + 3, Y + 11, 10, 4); R(g, '#e9d4e0', X + 4, Y + 7, 8, 4);
        R(g, '#8a4a6a', X + 3, Y + 3, 10, 5); R(g, '#fff6e0', X + 4, Y + 4, 4, 3); R(g, '#fff6e0', X + 8, Y + 4, 4, 3);
        R(g, '#6a3a52', X + 7, Y + 4, 2, 4);
      }
    },
    map: { ground: ['#bfe3b4', '#cdeec2'], path: '#f3dcc3', tree: '#ff9fc0' }
  });

  // 1 Cidade da Justica
  T.push({
    name: 'Cidade da Justiça',
    ground: function (g, X, Y, x, y, t) {
      var alt = ((x + y) & 1) ? '#ece8df' : '#e3dfd5';
      R(g, alt, X, Y, 16, 16);
      R(g, 'rgba(160,155,145,0.35)', X + 15, Y, 1, 16); R(g, 'rgba(160,155,145,0.35)', X, Y + 15, 16, 1);
      if (hs(x, y, 3) < 0.4) { R(g, '#cfcabf', X + 3 + hs(x, y, 4) * 6, Y + 3 + hs(x, y, 5) * 8, 5, 1); }
      if (hs(x, y, 6) < 0.25) R(g, '#f7f4ec', X + 2 + hs(x, y, 7) * 10, Y + 2 + hs(x, y, 8) * 10, 2, 1);
    },
    path: function (g, X, Y, x, y, t) {
      R(g, '#c9a64a', X, Y, 16, 16);
      R(g, '#dcbd62', X + 1, Y + 1, 14, 14);
      R(g, '#f1d98a', X + 1, Y + 1, 14, 1);
      R(g, '#b08d30', X + 7, Y, 2, 16);
      R(g, '#b08d30', X, Y + 7, 16, 2);
    },
    tree: function (g, X, Y, x, y, t) {
      R(g, '#4a3a2a', X + 7, Y + 12, 2, 4);
      R(g, '#123a22', X + 7, Y - 6, 2, 2);
      R(g, '#123a22', X + 6, Y - 4, 4, 3);
      R(g, '#15422a', X + 5, Y - 1, 6, 4);
      R(g, '#123a22', X + 4, Y + 3, 8, 5);
      R(g, '#15422a', X + 5, Y + 8, 6, 4);
      R(g, '#0c2a18', X + 9, Y - 1, 2, 12);
      R(g, '#2a6a44', X + 6, Y + 1, 1, 8);
    },
    house: makeHouse({
      roof: 'pedi', roofc: '#f4f1ea', roof2: '#c8c3b6', wall: '#f1eee6', wall2: '#d2cdc0', trim: '#fffdf6', glass: '#a9c8e0', door: '#5a4a3a',
      pat: function (g, X, Y) { R(g, '#e0dbd0', X + 4, Y + 44, 72, 1); R(g, '#e0dbd0', X + 4, Y + 56, 72, 1); },
      post: function (g, X, Y, lit, o, b) {
        if (b.kind === 'tribunal') return;
        var i; for (i = 0; i < 2; i++) { var cx = [24, 52][i]; R(g, '#fffdf6', X + cx, Y + 30, 4, 32); R(g, '#cfc9bb', X + cx + 3, Y + 30, 1, 32); R(g, '#fffdf6', X + cx - 1, Y + 29, 6, 2); R(g, '#fffdf6', X + cx - 1, Y + 61, 6, 2); }
        R(g, b.color || '#c55', X + 36, Y + 16, 8, 2);
      }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // statue
        R(g, '#cfcabf', X + 3, Y + 12, 10, 4); R(g, '#e8e4da', X + 4, Y + 10, 8, 3);
        R(g, '#f6f3ec', X + 6, Y + 4, 4, 7); disc(g, '#f6f3ec', X + 8, Y + 3, 2.2); R(g, '#d8d3c8', X + 9, Y + 5, 1, 5);
        R(g, '#f6f3ec', X + 4, Y + 5, 2, 1);
      } else if (kind === 'b') { // scales
        R(g, '#a98a1a', X + 7, Y + 4, 2, 10); R(g, '#d8b43a', X + 4, Y + 13, 8, 3);
        R(g, '#d8b43a', X + 2, Y + 4, 12, 1);
        R(g, '#d8b43a', X + 2, Y + 5, 1, 3); R(g, '#d8b43a', X + 13, Y + 5, 1, 3);
        R(g, '#ecd06a', X + 1, Y + 8, 4, 1); R(g, '#ecd06a', X + 11, Y + 8, 4, 1);
        R(g, '#d8b43a', X + 7, Y + 2, 2, 2);
      } else { // urn
        R(g, '#d8d2c4', X + 4, Y + 14, 8, 2); R(g, '#efe9dc', X + 5, Y + 9, 6, 5); R(g, '#efe9dc', X + 3, Y + 6, 10, 4);
        R(g, '#cfc9bb', X + 10, Y + 7, 3, 7); R(g, '#a98a1a', X + 3, Y + 6, 10, 1);
        R(g, '#15422a', X + 5, Y + 2, 6, 4); R(g, '#2a6a44', X + 6, Y + 1, 3, 2);
      }
    },
    map: { ground: ['#ece8df', '#e3dfd5'], path: '#dcbd62', tree: '#15422a' }
  });

  // 2 Burgo Administrativo
  T.push({
    name: 'Burgo Administrativo',
    ground: function (g, X, Y, x, y, t) {
      R(g, '#8b8f96', X, Y, 16, 16);
      R(g, '#7a7e86', X, Y + 7, 16, 1); R(g, '#7a7e86', X, Y + 15, 16, 1);
      var o1 = (y & 1) ? 4 : 0;
      R(g, '#7a7e86', X + 3 + o1, Y, 1, 8); R(g, '#7a7e86', X + 11 + o1, Y, 1, 8);
      R(g, '#7a7e86', X + 7 - o1 + 4, Y + 8, 1, 8); R(g, '#7a7e86', X + 15 - o1, Y + 8, 1, 8);
      specks(g, '#9da1a8', X, Y, x, y, 3, 11, 2, 1);
    },
    path: function (g, X, Y, x, y, t) {
      R(g, '#c9a074', X, Y, 16, 16);
      R(g, '#b98a5c', X, Y + 3, 16, 1); R(g, '#b98a5c', X, Y + 8, 16, 1); R(g, '#b98a5c', X, Y + 13, 16, 1);
      var k = (y & 1) * 4;
      R(g, '#b98a5c', X + 4 + k, Y, 1, 3); R(g, '#b98a5c', X + 12 + k - (k ? 8 : 0), Y + 4, 1, 4);
      R(g, '#b98a5c', X + 8, Y + 9, 1, 4); R(g, '#b98a5c', X + 2, Y + 14, 1, 2);
      specks(g, '#dcb88c', X, Y, x, y, 2, 15, 2, 1);
    },
    tree: function (g, X, Y, x, y, t) { // square hedge
      R(g, '#2d5a2e', X + 1, Y + 1, 14, 14);
      R(g, '#3f7a3c', X + 1, Y + 1, 14, 3);
      R(g, '#244a26', X + 1, Y + 12, 14, 3);
      for (var i = 0; i < 5; i++) { R(g, '#4a8a46', X + 2 + ((i * 5 + x * 3) % 11), Y + 5 + ((i * 3) % 6), 2, 1); }
      R(g, '#6a4a32', X + 5, Y + 14, 6, 2);
      R(g, '#1c3a1e', X + 1, Y + 1, 14, 1);
    },
    house: makeHouse({
      roof: 'gray', roof2: '#6f747d', wall: '#c8643c', wall2: '#9a4a2a', trim: '#f1e6d2', glass: '#9cc4dc', door: '#3a4a6a',
      pat: function (g, X, Y) {
        for (var r = 0; r < 9; r++) {
          R(g, '#a85430', X + 4, Y + 31 + r * 4, 72, 1);
          for (var k = 0; k < 9; k++) R(g, '#a85430', X + 4 + ((r & 1) ? 4 : 0) + k * 8, Y + 28 + r * 4, 1, 4);
        }
      }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // lamp post
        R(g, '#3a3f48', X + 7, Y + 4, 2, 12); R(g, '#3a3f48', X + 5, Y + 14, 6, 2);
        R(g, '#2a2e36', X + 5, Y + 1, 6, 4);
        R(g, '#ffe48a', X + 6, Y + 2, 4, 2);
        R(g, 'rgba(255,228,138,0.25)', X + 3, Y + 5, 10, 2);
      } else if (kind === 'b') { // mailbox
        R(g, '#4a4f58', X + 7, Y + 9, 2, 7); R(g, '#2f5fa8', X + 3, Y + 3, 10, 7);
        R(g, '#4a85d8', X + 3, Y + 3, 10, 2); R(g, '#ffd24a', X + 11, Y + 1, 2, 3); R(g, '#16345e', X + 5, Y + 6, 5, 1);
      } else { // stamped crate
        R(g, '#b88a52', X + 2, Y + 5, 12, 11); R(g, '#8a6234', X + 2, Y + 5, 12, 1); R(g, '#8a6234', X + 2, Y + 10, 12, 1);
        R(g, '#d9ab6c', X + 3, Y + 6, 10, 1);
        R(g, '#c0392b', X + 5, Y + 7, 6, 5); R(g, '#f4e9e0', X + 6, Y + 8, 4, 3);
      }
    },
    map: { ground: ['#8b8f96', '#7a7e86'], path: '#c9a074', tree: '#2d5a2e' }
  });

  // 3 Vale da Logica
  T.push({
    name: 'Vale da Lógica',
    ground: function (g, X, Y, x, y, t) {
      R(g, '#241545', X, Y, 16, 16);
      R(g, '#33205e', X, Y, 16, 1); R(g, '#33205e', X, Y, 1, 16);
      R(g, '#2c1b55', X + 8, Y + 1, 1, 15); R(g, '#2c1b55', X + 1, Y + 8, 15, 1);
      if (hs(x, y, 5) < 0.3) { R(g, '#4a3490', X + 6 + hs(x, y, 6) * 3, Y + 6 + hs(x, y, 7) * 3, 2, 2); }
      if (hs(x, y, 8) < 0.1) R(g, (Math.sin(t * 2 + x + y) > 0) ? '#4ff2ff' : '#2a8a9a', X + 1, Y + 1, 1, 1);
    },
    path: function (g, X, Y, x, y, t) {
      var p = 0.5 + 0.5 * Math.sin(t * 2 + (x + y) * 0.7);
      R(g, '#1b2a55', X, Y, 16, 16);
      R(g, p > 0.5 ? '#2fd6e8' : '#22b8cc', X + 2, Y + 2, 12, 12);
      R(g, '#7ff8ff', X + 4, Y + 4, 8, 8);
      R(g, p > 0.5 ? '#d8ffff' : '#aaf8ff', X + 6, Y + 6, 4, 4);
      R(g, '#1b2a55', X + 7, Y + 7, 2, 2);
    },
    tree: function (g, X, Y, x, y, t) {
      var gl = Math.sin(t * 2 + x * 2 + y) > 0;
      R(g, '#3a2a70', X + 3, Y + 13, 10, 3);
      R(g, '#6a4cc0', X + 6, Y - 6, 4, 2);
      R(g, '#7f60e0', X + 5, Y - 4, 6, 3);
      R(g, '#6a4cc0', X + 4, Y - 1, 8, 4);
      R(g, '#8a6cf0', X + 5, Y + 3, 6, 4);
      R(g, '#5a3cb0', X + 6, Y + 7, 4, 6);
      R(g, gl ? '#d8ffff' : '#7ff8ff', X + 7, Y - 3, 1, 8);
      R(g, '#4ff2ff', X + 5, Y + 1, 1, 3);
      R(g, '#3a2a70', X + 10, Y + 2, 2, 10);
    },
    house: makeHouse({
      roof: 'geo', roof2: '#4d3590', wall: '#3a2a6a', wall2: '#241545', trim: '#4ff2ff', glass: '#1c1040', door: '#16102e',
      pat: function (g, X, Y) {
        for (var i = 0; i < 9; i++) { R(g, '#4a3a8a', X + 4 + i * 8, Y + 28, 1, 36); }
        R(g, '#4a3a8a', X + 4, Y + 46, 72, 1);
        R(g, '#4ff2ff', X + 4, Y + 28, 72, 1);
        R(g, '#6a4cc0', X + 30, Y + 30, 4, 4); R(g, '#6a4cc0', X + 46, Y + 30, 4, 4);
      }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // puzzle cube
        R(g, '#6a4cc0', X + 3, Y + 6, 10, 9); R(g, '#8a6cf0', X + 3, Y + 3, 10, 3); R(g, '#4d3590', X + 11, Y + 6, 2, 9);
        R(g, '#4ff2ff', X + 5, Y + 8, 2, 2); R(g, '#ff7ad9', X + 8, Y + 11, 2, 2); R(g, '#ffe27a', X + 8, Y + 8, 2, 2);
      } else if (kind === 'b') { // crystal cluster
        R(g, '#4ff2ff', X + 3, Y + 8, 3, 8); R(g, '#7ff8ff', X + 4, Y + 6, 1, 3);
        R(g, '#8a6cf0', X + 7, Y + 3, 4, 13); R(g, '#c8b8ff', X + 8, Y + 1, 2, 3);
        R(g, '#4ff2ff', X + 11, Y + 9, 3, 7);
        R(g, '#d8ffff', X + 8, Y + 5, 1, 6);
      } else { // rune stone
        var gl = 0.5 + 0.5 * Math.sin(t * 2.5);
        R(g, '#4a4270', X + 3, Y + 3, 10, 13); R(g, '#5a5288', X + 4, Y + 2, 8, 2);
        R(g, gl > 0.5 ? '#7ff8ff' : '#2fd6e8', X + 7, Y + 5, 2, 7); R(g, gl > 0.5 ? '#7ff8ff' : '#2fd6e8', X + 5, Y + 8, 6, 1);
      }
    },
    map: { ground: ['#241545', '#33205e'], path: '#2fd6e8', tree: '#8a6cf0' }
  });

  // 4 Cyber Vale — bairro tecnológico: gramado aparado, calçadas de concreto, prédios de vidro
  T.push({
    name: 'Cyber Vale',
    ground: function (g, X, Y, x, y, t) {
      R(g, (x & 1) ? '#79c26a' : '#72b964', X, Y, 16, 16);
      if (hs(x, y, 3) < 0.35) { R(g, '#8fd27e', X + 3 + hs(x, y, 4) * 9, Y + 4 + hs(x, y, 5) * 8, 2, 1); }
      if (hs(x, y, 6) < 0.08) { R(g, '#ffffff', X + 9, Y + 9, 2, 2); R(g, '#ffd84a', X + 9, Y + 9, 1, 1); }
    },
    path: function (g, X, Y, x, y, t) {
      R(g, '#d5dadf', X, Y, 16, 16);
      R(g, '#bcc3ca', X, Y + 7, 16, 1); R(g, '#bcc3ca', X, Y + 15, 16, 1);
      R(g, '#bcc3ca', X + 7, Y, 1, 7); R(g, '#bcc3ca', X + 15, Y + 8, 1, 7);
      specks(g, '#c7cdd3', X, Y, x, y, 2, 21, 2, 1);
    },
    tree: function (g, X, Y, x, y, t) { // árvore em canteiro
      R(g, '#8a939c', X + 3, Y + 12, 10, 4); R(g, '#a7b0b8', X + 3, Y + 12, 10, 1);
      R(g, '#7a5a3a', X + 7, Y + 6, 2, 7);
      disc(g, '#2f7d43', X + 8, Y + 3, 6.5);
      disc(g, '#3f9a52', X + 7, Y + 2, 5.5);
      disc(g, '#5cbf6c', X + 5, Y, 2.2);
    },
    house: makeHouse({
      roof: 'flat', roof2: '#c9d0d6', wall: '#f2f4f6', wall2: '#c9d0d6', trim: '#5a6670', glass: '#8cc4ea', door: '#3a4652',
      pat: function (g, X, Y) { R(g, '#e3e7eb', X + 4, Y + 46, 72, 1); }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // poste moderno
        R(g, '#5a6670', X + 7, Y + 3, 2, 13); R(g, '#5a6670', X + 7, Y + 2, 6, 2);
        R(g, '#f4f7fa', X + 10, Y + 4, 4, 1); R(g, '#8a939c', X + 5, Y + 14, 6, 2);
      } else if (kind === 'b') { // bicicletário com bike
        R(g, '#8a939c', X + 2, Y + 14, 12, 1);
        disc(g, '#3a4652', X + 4, Y + 11, 3); disc(g, '#72b964', X + 4, Y + 11, 1.6);
        disc(g, '#3a4652', X + 12, Y + 11, 3); disc(g, '#72b964', X + 12, Y + 11, 1.6);
        R(g, '#e8453c', X + 4, Y + 8, 8, 1); R(g, '#e8453c', X + 7, Y + 6, 1, 5); R(g, '#3a4652', X + 6, Y + 5, 3, 1);
      } else { // totem de Wi-Fi
        R(g, '#3b82f6', X + 5, Y + 2, 6, 13); R(g, '#2a60c0', X + 10, Y + 2, 1, 13);
        R(g, '#ffffff', X + 7, Y + 5, 2, 1); R(g, '#ffffff', X + 6, Y + 4, 4, 1); R(g, '#ffffff', X + 7, Y + 7, 2, 1);
        R(g, '#8a939c', X + 4, Y + 14, 8, 2);
      }
    },
    map: { ground: ['#79c26a', '#72b964'], path: '#d5dadf', tree: '#3f9a52' }
  });

  // 5 Sertao dos Tribunais
  T.push({
    name: 'Sertão dos Tribunais',
    ground: function (g, X, Y, x, y, t) {
      R(g, '#e6cc94', X, Y, 16, 16);
      specks(g, '#d4b676', X, Y, x, y, 4, 3, 2, 1);
      specks(g, '#f3e0b0', X, Y, x, y, 3, 12, 2, 1);
      if (hs(x, y, 30) < 0.18) { var sx = X + 2 + hs(x, y, 31) * 10, sy = Y + 3 + hs(x, y, 32) * 9; R(g, '#c9a45a', sx, sy, 4, 1); R(g, '#c9a45a', sx + 1, sy + 1, 2, 1); }
      if (hs(x, y, 33) < 0.1) R(g, '#9a8a6a', X + 3 + hs(x, y, 34) * 9, Y + 3 + hs(x, y, 35) * 9, 2, 2);
    },
    path: function (g, X, Y, x, y, t) {
      R(g, '#c9a064', X, Y, 16, 16);
      specks(g, '#b58a4c', X, Y, x, y, 5, 70, 2, 1);
      specks(g, '#dbb67c', X, Y, x, y, 3, 80, 2, 1);
      R(g, '#b58a4c', X + 3 + hs(x, y, 90) * 2, Y, 1, 16);
    },
    tree: function (g, X, Y, x, y, t) {
      if (hs(x, y, 3) < 0.5) { // palm
        R(g, '#8a6a42', X + 7, Y + 4, 2, 12); R(g, '#6a4e2e', X + 7, Y + 7, 2, 1); R(g, '#6a4e2e', X + 7, Y + 11, 2, 1);
        var sw = Math.sin(t * 1.5 + x) > 0.5 ? 1 : 0;
        R(g, '#3f9a3a', X + 1, Y + 2 + sw, 6, 2); R(g, '#3f9a3a', X + 9, Y + 2 + sw, 6, 2);
        R(g, '#2f7a2c', X + 2, Y + 4, 5, 2); R(g, '#2f7a2c', X + 9, Y + 4, 5, 2);
        R(g, '#4fba48', X + 5, Y - 3, 6, 3); R(g, '#3f9a3a', X + 4, Y, 8, 2);
        R(g, '#5a3a1a', X + 7, Y + 3, 2, 2);
      } else { // cactus
        R(g, '#2f7a3a', X + 6, Y - 3, 4, 18); R(g, '#4a9a52', X + 6, Y - 3, 1, 18);
        R(g, '#2f7a3a', X + 2, Y + 3, 4, 2); R(g, '#2f7a3a', X + 2, Y + 0, 3, 4);
        R(g, '#2f7a3a', X + 10, Y + 5, 4, 2); R(g, '#2f7a3a', X + 11, Y + 2, 3, 4);
        R(g, '#4a9a52', X + 2, Y + 0, 1, 4);
        R(g, '#f0e6b0', X + 8, Y + 2, 1, 1); R(g, '#f0e6b0', X + 8, Y + 8, 1, 1);
        R(g, '#ff7a9a', X + 7, Y - 4, 2, 1);
      }
    },
    house: makeHouse({
      roof: 'clay', roof2: '#7a3a1e', wall: '#e0b882', wall2: '#b88a54', trim: '#fff3dc', glass: '#6a8fa8', door: '#6a3f22',
      pat: function (g, X, Y) {
        R(g, '#cfa56e', X + 4, Y + 44, 10, 3); R(g, '#cfa56e', X + 60, Y + 52, 14, 4); R(g, '#efce9c', X + 20, Y + 32, 3, 1);
        R(g, '#a8784a', X + 4, Y + 28, 72, 1);
      }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // cow skull
        R(g, '#f3ecd8', X + 5, Y + 6, 6, 7); R(g, '#f3ecd8', X + 6, Y + 12, 4, 3);
        R(g, '#f3ecd8', X + 1, Y + 4, 5, 2); R(g, '#f3ecd8', X + 10, Y + 4, 5, 2);
        R(g, '#f3ecd8', X + 0, Y + 2, 2, 3); R(g, '#f3ecd8', X + 14, Y + 2, 2, 3);
        R(g, '#3a2a1a', X + 6, Y + 8, 2, 2); R(g, '#3a2a1a', X + 9, Y + 8, 2, 2); R(g, '#3a2a1a', X + 7, Y + 13, 1, 1); R(g, '#3a2a1a', X + 9, Y + 13, 1, 1);
        R(g, '#cfc6a8', X + 5, Y + 6, 1, 7);
        R(g, '#9a7a4a', X + 3, Y + 15, 10, 1);
      } else if (kind === 'b') { // barrel
        R(g, '#8a5a32', X + 3, Y + 4, 10, 12); R(g, '#a8743f', X + 4, Y + 4, 3, 12);
        R(g, '#4a4a4a', X + 3, Y + 6, 10, 1); R(g, '#4a4a4a', X + 3, Y + 13, 10, 1);
        R(g, '#5a3a1e', X + 4, Y + 3, 8, 1);
      } else { // well
        R(g, '#9a8a6a', X + 2, Y + 9, 12, 7); R(g, '#b8a888', X + 2, Y + 9, 12, 2);
        R(g, '#4a3a2a', X + 4, Y + 11, 8, 3);
        R(g, '#7a4a2a', X + 3, Y + 2, 1, 8); R(g, '#7a4a2a', X + 12, Y + 2, 1, 8); R(g, '#a8452a', X + 2, Y + 1, 12, 2);
        R(g, '#cfa564', X + 7, Y + 4, 1, 5);
      }
    },
    map: { ground: ['#e6cc94', '#d4b676'], path: '#c9a064', tree: '#3f9a3a' }
  });

  // 6 Paraiba Central
  T.push({
    name: 'Paraíba Central',
    ground: function (g, X, Y, x, y, t) {
      R(g, '#5fb05a', X, Y, 16, 16);
      specks(g, '#74c46c', X, Y, x, y, 4, 2, 2, 1);
      specks(g, '#4a9a48', X, Y, x, y, 4, 12, 1, 2);
      if (hs(x, y, 40) < 0.12) { var fx = X + 3 + hs(x, y, 41) * 9, fy = Y + 3 + hs(x, y, 42) * 9; R(g, '#fff6a0', fx, fy, 2, 2); R(g, '#ff9a3a', fx, fy, 1, 1); }
    },
    path: function (g, X, Y, x, y, t) {
      R(g, '#d8c08a', X, Y, 16, 16);
      specks(g, '#c4a870', X, Y, x, y, 5, 50, 2, 1);
      specks(g, '#ead4a0', X, Y, x, y, 3, 60, 2, 1);
    },
    tree: function (g, X, Y, x, y, t) {
      R(g, '#6a4a2e', X + 7, Y + 8, 3, 8); R(g, '#4e3420', X + 9, Y + 8, 1, 8);
      disc(g, '#2f7a34', X + 8, Y + 3, 7); disc(g, '#3f9a44', X + 6, Y + 1, 5); disc(g, '#58b85a', X + 5, Y - 1, 2.5);
      R(g, '#276a2c', X + 10, Y + 5, 3, 2);
    },
    house: makeHouse({
      roof: 'gable', roof2: '#7a3a2a', wall: '#f6dca0', wall2: '#d8b070', trim: '#fff8e6', glass: '#a8d4f0', door: '#8a4a2a',
      pat: function (g, X, Y) { R(g, '#e8c888', X + 4, Y + 44, 72, 1); R(g, '#e8c888', X + 4, Y + 56, 72, 1); }
    }),
    prop: function (g, kind, X, Y, t) {
      if (kind === 'a') { // fountain
        R(g, '#a8aeb8', X + 1, Y + 10, 14, 6); R(g, '#d0d6dc', X + 1, Y + 10, 14, 2);
        R(g, '#4a9ae0', X + 3, Y + 12, 10, 3);
        R(g, '#a8aeb8', X + 6, Y + 5, 4, 6);
        var f = Math.floor(t * 4) % 2;
        R(g, '#b8e4ff', X + 7, Y + 1 + f, 2, 5); R(g, '#e4f6ff', X + 5 + f, Y + 4, 1, 2); R(g, '#e4f6ff', X + 10 - f, Y + 4, 1, 2);
      } else if (kind === 'b') { // bench
        R(g, '#8a5a32', X + 1, Y + 6, 14, 3); R(g, '#a8743f', X + 1, Y + 6, 14, 1);
        R(g, '#8a5a32', X + 1, Y + 10, 14, 2); R(g, '#4a3a2a', X + 2, Y + 12, 2, 4); R(g, '#4a3a2a', X + 12, Y + 12, 2, 4);
        R(g, '#4a3a2a', X + 2, Y + 4, 2, 3); R(g, '#4a3a2a', X + 12, Y + 4, 2, 3);
      } else { // flowerbed
        R(g, '#8a5a32', X + 1, Y + 9, 14, 6); R(g, '#3a7a34', X + 2, Y + 7, 12, 4);
        var cs = ['#ff5a7a', '#ffd24a', '#ff9a3a', '#fff', '#c47aff'];
        for (var i = 0; i < 6; i++) R(g, cs[i % 5], X + 2 + i * 2, Y + 5 + (i % 3) * 2, 2, 2);
      }
    },
    map: { ground: ['#5fb05a', '#74c46c'], path: '#d8c08a', tree: '#2f7a34' }
  });

  window.THEMES = T;
})();

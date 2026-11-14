const CACHE = 'tjpb-quest-v11';
const ASSETS = [
  './',
  './index.html',
  './fontes.html',
  './fontes/index.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './edital.js?v=2',
  './engine.js?v=9',
  './themes.js',
  './audio.js',
  './fx.js',
  './minidata.js',
  './minigames.js?v=4',
  './content1.js',
  './content2.js',
  './study1.js',
  './study2.js',
  './study3.js',
  './materias/infra.js',
  './materias/engsoft.js',
  './materias/arqsoft.js',
  './materias/algoritmos.js',
  './materias/bd.js',
  './materias/linguagens.js',
  './materias/sysdesign.js',
  './materias/devops.js',
  './materias/seguranca.js',
  './materias/lgpd.js',
  './materias/govti.js',
  './materias/govjud.js',
  './materias/ia.js',
  './materias/interfaces.js',
  './materias/discursiva.js',
  './materias/matematica.js',
  './aulas/aula.css?v=7',
  './aulas/aula.js?v=7'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});


/* Service Worker — офлайн-кэш для Psyche. При обновлении контента меняй версию. */
const CACHE = "psyche-v2";
const ASSETS = [
  "./", "./index.html", "./styles.css", "./app.js", "./manifest.json",
  "./content_base.js",
  "./content_vocab_foundations.js", "./content_vocab_freud.js", "./content_vocab_technique.js",
  "./content_vocab_defenses.js", "./content_vocab_klein.js", "./content_vocab_winnicott.js",
  "./content_vocab_bion.js", "./content_vocab_lacan.js", "./content_vocab_ego_self.js",
  "./content_vocab_development.js", "./content_vocab_clinical.js", "./content_vocab_contemporary.js",
  "./content_reading_a.js", "./content_reading_b.js", "./content_termcheck.js",
  "./content_vocab_foundations_w2.js", "./content_vocab_freud_w2.js", "./content_vocab_technique_w2.js",
  "./content_vocab_defenses_w2.js", "./content_vocab_klein_w2.js", "./content_vocab_winnicott_w2.js",
  "./content_vocab_bion_w2.js", "./content_vocab_lacan_w2.js", "./content_vocab_ego_self_w2.js",
  "./content_vocab_development_w2.js", "./content_vocab_clinical_w2.js", "./content_vocab_contemporary_w2.js",
  "./content_vocab_alvarez.js", "./content_vocab_relational.js",
  "./content_reading_sources.js", "./content_termcheck_sources.js",
  "./audio_manifest.js", "./icons/icon-192.png", "./icons/icon-512.png",
];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return res; }).catch(() => cached)));
});

/* Собирает озвучиваемые строки Psyche → JSON (stdout).
   node tools_collect_strings.js > /tmp/psy_strings.json */
global.window = {};
const fs = require("fs");
fs.readdirSync(__dirname).filter(f => /^content.*\.js$/.test(f))
  .sort((a, b) => (a === "content_base.js" ? -1 : b === "content_base.js" ? 1 : a.localeCompare(b)))
  .forEach(f => require("./" + f));
const C = window.CONTENT;
const set = new Set();
const add = (s) => { if (s && typeof s === "string") { const n = s.trim(); if (n) set.add(n); } };
const splitSentences = (t) => (String(t).match(/[^.!?]+[.!?]*\s*/g) || [t]).map(s => s.trim()).filter(Boolean);

for (const mod of Object.keys(C.vocab || {})) (C.vocab[mod] || []).forEach(v => add(v.en));
for (const mod of Object.keys(C.reading || {})) (C.reading[mod] || []).forEach(r => { add(r.text); splitSentences(r.text).forEach(add); });
add("This is the reading voice for psychoanalytic texts. Transference and countertransference.");

console.log(JSON.stringify([...set], null, 0));

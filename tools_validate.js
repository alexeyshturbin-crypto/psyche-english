/* Валидация контента Psyche. node tools_validate.js */
global.window = {};
const fs = require("fs");
fs.readdirSync(__dirname).filter(f => /^content.*\.js$/.test(f))
  .sort((a, b) => (a === "content_base.js" ? -1 : b === "content_base.js" ? 1 : a.localeCompare(b)))
  .forEach(f => require("./" + f));
const C = window.CONTENT;
const ids = new Map(); const errors = [];
const seen = (id, w) => { if (!id) errors.push("пустой id " + w); else if (ids.has(id)) errors.push("ДУБЛЬ " + id + " (" + ids.get(id) + " / " + w + ")"); else ids.set(id, w); };
let totals = {};
for (const track of ["vocab", "reading", "termcheck"]) {
  totals[track] = 0;
  for (const mod of Object.keys(C[track] || {})) {
    const arr = C[track][mod] || [];
    totals[track] += arr.length;
    arr.forEach((it, i) => {
      const w = `${track}.${mod}[${i}]`; seen(it.id, w);
      if (track === "vocab" && (!it.en || !it.ru)) errors.push(w + ": нет en/ru");
      if (track === "reading" || track === "termcheck") (it.questions || []).forEach((q, j) => {
        if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`${w}.q[${j}] мало options`);
        if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= (q.options || []).length) errors.push(`${w}.q[${j}] answer вне диапазона`);
      });
    });
  }
}
console.log("vocab по модулям:");
for (const m of Object.keys(C.vocab)) console.log("  " + m.padEnd(14), C.vocab[m].length);
console.log("ИТОГО vocab:", totals.vocab, "| reading:", totals.reading, "| termcheck:", totals.termcheck);
console.log("уникальных id:", ids.size);
console.log(errors.length ? "ОШИБКИ(" + errors.length + "):\n" + errors.slice(0, 30).join("\n") : "ОШИБОК НЕТ ✓");

"""Нейросетевая озвучка (Microsoft edge-tts) всех фраз приложения → mp3 + манифест.
Запуск:
  node tools_collect_strings.js > /tmp/strings.json
  python3 tools_gen_audio_edge.py
"""
import asyncio
import json
import os
import glob

VOICE = "en-GB-SoniaNeural"      # натуральный британский нейроголос (под Cambridge/IELTS)
STRINGS = "/tmp/psy_strings.json"
OUT_DIR = os.path.join(os.path.dirname(__file__), "audio")
MANIFEST = os.path.join(os.path.dirname(__file__), "audio_manifest.js")
CONCURRENCY = 12

os.makedirs(OUT_DIR, exist_ok=True)


def norm(s):
    return " ".join(s.strip().lower().split())


def fnv1a(s):
    """FNV-1a 32-bit — идентичен audioHash() в app.js (ASCII)."""
    h = 0x811C9DC5
    for ch in s:
        h ^= (ord(ch) & 0xFFFF)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


async def synth(sem, communicate_cls, text, path):
    async with sem:
        for attempt in range(3):
            try:
                c = communicate_cls(text, VOICE)
                await c.save(path)
                if os.path.exists(path) and os.path.getsize(path) > 0:
                    return True
            except Exception as e:
                await asyncio.sleep(1.5 * (attempt + 1))
        return False


async def main():
    import edge_tts

    # убираем старую озвучку (была .wav от Piper)
    for old in glob.glob(os.path.join(OUT_DIR, "*.wav")):
        os.remove(old)

    strings = json.load(open(STRINGS, encoding="utf-8"))
    has = {}
    todo = []
    for s in strings:
        key = fnv1a(norm(s))
        has[key] = 1
        path = os.path.join(OUT_DIR, key + ".mp3")
        if not (os.path.exists(path) and os.path.getsize(path) > 0):
            todo.append((s, path))

    sem = asyncio.Semaphore(CONCURRENCY)
    tasks = [synth(sem, edge_tts.Communicate, s, p) for s, p in todo]
    done = 0
    ok = 0
    for fut in asyncio.as_completed(tasks):
        r = await fut
        done += 1
        ok += 1 if r else 0
        if done % 50 == 0:
            print(f"... {done}/{len(todo)}")
    print(f"сгенерировано: {ok}/{len(todo)} (всего фраз {len(strings)})")

    with open(MANIFEST, "w", encoding="utf-8") as f:
        f.write("/* Автогенерация (tools_gen_audio_edge.py, голос " + VOICE + "). */\n")
        f.write('window.AUDIO = { ext: "mp3", has: ')
        f.write(json.dumps(has, separators=(",", ":")))
        f.write(" };\n")

    total = sum(os.path.getsize(os.path.join(OUT_DIR, f)) for f in os.listdir(OUT_DIR))
    print(f"файлов mp3: {len(glob.glob(os.path.join(OUT_DIR, '*.mp3')))}, размер {total/1024/1024:.1f} MB")


if __name__ == "__main__":
    asyncio.run(main())

"""Иконки Psyche: градиент + Ψ (psi)."""
from PIL import Image, ImageDraw, ImageFont
import os
OUT = os.path.join(os.path.dirname(__file__), "icons"); os.makedirs(OUT, exist_ok=True)

def gradient(size, c1, c2):
    img = Image.new("RGB", (size, size), c1); top = Image.new("RGB", (size, size), c2)
    mask = Image.new("L", (size, size)); md = mask.load()
    for y in range(size):
        for x in range(size):
            md[x, y] = int(255 * ((x + y) / (2 * size)))
    return Image.composite(top, img, mask)

def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Unicode.ttf","/System/Library/Fonts/Supplemental/Arial Bold.ttf","/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, sz)
            except Exception: pass
    return ImageFont.load_default()

def make(size, name, maskable=False):
    img = gradient(size, (124, 58, 237), (14, 165, 164))
    d = ImageDraw.Draw(img)
    f = font(int(size * 0.62)); txt = "Ψ"
    bb = d.textbbox((0, 0), txt, font=f); w = bb[2]-bb[0]; h = bb[3]-bb[1]
    d.text((size/2 - w/2 - bb[0], size/2 - h/2 - bb[1]), txt, font=f, fill=(255,255,255))
    img.save(os.path.join(OUT, name)); print("wrote", name, size)

make(192,"icon-192.png"); make(512,"icon-512.png"); make(180,"icon-180.png"); make(512,"icon-512-maskable.png", True)

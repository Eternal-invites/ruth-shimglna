# የሩት ሽምግልና — Luxury Mocha, Nude & Antique Gold Digital Invitation

A luxury Ethiopian Shimglna (ሽምግልና) digital invitation website, built with **pure HTML5, CSS3 and Vanilla JavaScript** — no frameworks, no build tools.

**Brand:** Eternal Invites · **Theme:** Luxury Mocha Brown, Nude Beige & Antique Gold
`#493329 · #33231D · #765440 · #C6A58A · #E8D8C8 · #D4AF37 · #E8C982 · #FFF9F0`

---

## ✨ Features

- **Cinematic 3-stage opening** — deep-mocha intro screen → realistic 3D nude-paper envelope with antique-gold wax-seal break, flap opening, golden light and a rising invitation card → main invitation reveal
- **Live countdown** in Ethiopian local time (East Africa Time, UTC+3) with flip animations and a celebration message when the event starts
- **Heart monogram crest** — Ruth's initial inside a delicate antique-gold heart on the intro screen, wax seal, invitation card and footer
- **Script typography accents** — flowing calligraphy (*Great Vibes*) for the name and brand, paired with Noto Serif Ethiopic for Amharic
- **Photo-led romantic hero** — the Habesha kemis photo in an arched gold frame at the center of the invitation card, with a slow Ken Burns zoom
- **Event details cards** — date, time, location (with Google Maps link) and ceremony
- **Optional background music** (off by default, elegant player control)
- Scroll-reveal animations, letter-by-letter headings, floating gold dust
- Fully responsive (desktop / tablet / phone), touch-friendly
- Accessible: semantic HTML, keyboard support, `prefers-reduced-motion` honored
- Everything configured from **one CONFIG object** in `js/script.js`

---

## 📁 Project structure

```
shimglna-invitation/
├── index.html              # All page markup + inline SVG art
├── css/
│   └── style.css           # All styling & animations
├── js/
│   └── script.js           # CONFIG + all interactivity
├── images/
│   ├── habesha-kemis.jpg   # the featured portrait photo ← replace with yours
│   └── decorations/        # (optional) place decorative images here
├── audio/
│   └── background-music.mp3  # ← add your own music file here
└── README.md
```

## ▶️ Run it locally

No installation needed. Either open `index.html` directly in a browser, or serve the folder:

```bash
# with Python
python -m http.server 8000

# then open http://localhost:8000
```

---

## 🛠 Customizing the event — everything in one place

Open **`js/script.js`** and edit the `CONFIG` object at the top. Every section updates automatically — you never need to touch the HTML.

| Field | What it controls |
|---|---|
| `eventTitle` | Title on the envelope, invitation card and footer (e.g. `የሩት ሽምግልና`) |
| `welcomeMessage` | Stage-1 intro text |
| `tagline` | Line below the main title |
| `invitationMessage` | Main invitation text — separate paragraphs with a blank line |
| `eventDateTime` | **The countdown target** — format `YYYY-MM-DDTHH:MM:SS+03:00` |
| `dateDisplay`, `timeDisplay` | Date/time text on the detail cards (Ethiopian calendar text) |
| `venue`, `address` | Location card text |
| `mapUrl` | Google Maps link (see below) |
| `ceremonyTitle` | Ceremony card |
| `celebrationMessage` | Shown when the countdown reaches zero |
| `monogramLetter` | The initial inside the heart crest (intro, wax seal, hero, footer) |
| `scriptName` | The flowing script name shown above the Amharic title |
| `photoCaption` | Caption under the arched hero photo |
| `footerThanks` | Footer thank-you message |
| `musicFile` | Path to your music file, or `''` to hide the music button |

### 📅 Changing the date (current default: ህዳር 6፣ 2019 ዓ.ም.)

- Set `dateDisplay` to the Ethiopian date text, e.g. `'ህዳር 6፣ 2019 ዓ.ም.'`
- Set `eventDateTime` to the matching Gregorian date in ISO format with the `+03:00` Ethiopian time offset, e.g. `'2026-11-15T09:00:00+03:00'` (= ህዳር 6፣ 2019 · 9:00 AM EAT).
  The `+03:00` keeps the countdown correct for guests in any timezone.

### 🗺 Adding the Google Maps location

1. Open Google Maps and search for your home/venue.
2. Click **Share → Copy link**.
3. Paste it into `CONFIG.mapUrl`. The "ቦታውን ይመልከቱ" button will open it in a new tab.

### 🎵 Replacing the music

1. Use only music you own or that is properly licensed.
2. Copy your `.mp3` into the `audio/` folder as `background-music.mp3`
   (or set `CONFIG.musicFile` to your file name).
3. Music is always **off until the guest presses the play button** — never autoplayed.
   If the file is missing, the music button hides itself automatically. Set `musicFile: ''` to remove the feature.

---

## 🌐 Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `ruth-shimglna`).
2. Upload all files in the `shimglna-invitation/` folder to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Royal Emerald & Gold Shimglna invitation"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ruth-shimglna.git
   git push -u origin main
   ```
3. In the repository: **Settings → Pages → Source: Deploy from a branch → `main` → `/ (root)` → Save**.
4. Your invitation will be live at `https://<your-username>.github.io/ruth-shimglna/` within a minute.

---

## 📝 Notes

- **Changing the hero photo:** replace `images/habesha-kemis.jpg` with your own photo (same file name, ideally portrait orientation). Its caption is set via `photoCaption` in the CONFIG.
- The decorative visuals are generated with CSS/SVG. Extra decorations you add can go in `images/decorations/`.
- Fonts are loaded from Google Fonts (`Noto Serif Ethiopic`, `Noto Sans Ethiopic`, `Cormorant Garamond`).

Designed with love by **Eternal Invites**.

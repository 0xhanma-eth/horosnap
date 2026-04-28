# ✨ Zodiac Horoscope Snap — Farcaster

A monthly horoscope Farcaster Snap with 12 zodiac signs, finance insights, and Stoic quotes.  
Embedded directly in Farcaster casts. Updated monthly via GitHub → auto-deployed to Vercel.

## 🔮 Features

- **12 zodiac sign grid** — tap any sign to get details
- **Finance insight** — monthly money/life reading per sign
- **Stoic quote** — wisdom from Marcus Aurelius, Seneca, Epictetus
- **Monthly updates** — edit one file, push, done

---

## 🚀 Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial zodiac snap"
git remote add origin https://github.com/YOUR_USERNAME/zodiac-snap.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Set **Framework Preset** to `Other`
4. Add Environment Variable:
   - Key: `SNAP_PUBLIC_BASE_URL`
   - Value: `https://YOUR-PROJECT.vercel.app` *(fill in after first deploy)*
5. Click **Deploy**

After first deploy, copy the URL, update `SNAP_PUBLIC_BASE_URL` in Vercel env vars, and redeploy.

### 3. Test your snap

```bash
curl -H 'Accept: application/vnd.farcaster.snap+json' https://YOUR-PROJECT.vercel.app/
```

Expect: `200 OK` with `application/vnd.farcaster.snap+json` content type.

### 4. Share on Farcaster

Cast the URL: `https://YOUR-PROJECT.vercel.app/`  
Farcaster clients will render it as an interactive snap in the feed.

---

## 🗓️ Monthly Update Workflow

Every month, edit **`src/horoscope.ts`** only:

1. Change the month label at the top: `// Current: May 2026`
2. Update the `finance` string for each sign (~2 sentences)
3. Optionally rotate the `stoic` quote
4. Commit and push:

```bash
git add src/horoscope.ts
git commit -m "Update horoscope: May 2026"
git push
```

Vercel auto-deploys on every push to `main`. Done! ✅

---

## 🛠️ Local Development

```bash
pnpm install          # or npm install
pnpm dev              # starts at http://localhost:3003
```

Test locally:
```bash
curl -H 'Accept: application/vnd.farcaster.snap+json' http://localhost:3003/
curl -H 'Accept: application/vnd.farcaster.snap+json' 'http://localhost:3003/?sign=aries'
```

---

## 📁 Project Structure

```
zodiac-snap/
├── src/
│   ├── index.ts        # Snap handler + UI layout
│   ├── horoscope.ts    # ← EDIT THIS every month
│   └── server.ts       # Local dev server
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## 🪐 Zodiac Signs Covered

♈ Aries · ♉ Taurus · ♊ Gemini · ♋ Cancer · ♌ Leo · ♍ Virgo  
♎ Libra · ♏ Scorpio · ♐ Sagittarius · ♑ Capricorn · ♒ Aquarius · ♓ Pisces

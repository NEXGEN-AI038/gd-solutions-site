# GD Solutions — website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS rebuild of the GD
Solutions site, structured so you can customize it without touching
component code.

**Design direction:** a dark "systems" palette (ink navy + phosphor-teal
signal accent) with a signature circuit-trace spine that tracks your
scroll position down the right edge of the page, and a literal trace
connecting the four-step process — a nod to the automation / infrastructure
/ OSINT work the site describes.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Customize everything from one file

Open **`lib/content.ts`**. Every headline, paragraph, service, course,
stat, nav label, email address and social link on the site lives in this
one file — no component code needs to change for content edits.

To restyle instead of just re-word:

- **Colors** — `tailwind.config.ts` → `theme.extend.colors` (`ink`,
  `panel`, `paper`, `muted`, `signal`, `warm`).
- **Fonts** — `app/layout.tsx` (currently Space Grotesk / Inter /
  JetBrains Mono, loaded via `next/font/google`).
- **Sections** — each section is its own file in `components/`
  (`Hero.tsx`, `Services.tsx`, `Contact.tsx`, etc). Reorder or remove
  sections in `app/page.tsx`.

## 3. Connect the contact form

The form posts to `app/api/contact/route.ts`, which is already wired to
send an email via [Resend](https://resend.com) — it just needs an API key.

**Setup (5 minutes, free):**

1. Create a free account at [resend.com](https://resend.com) — no credit
   card required, 100 emails/day on the free tier.
2. In the Resend dashboard, go to **API Keys** → **Create API Key**, and
   copy it.
3. In Vercel: your project → **Settings → Environment Variables** → add
   `RESEND_API_KEY` = *(the key you copied)* → Save.
4. Redeploy (Vercel → Deployments → ⋯ → Redeploy), or just push any new
   commit.

That's it — submissions will now arrive by email at
`business.gdsolutions@gmail.com` (change `NOTIFY_EMAIL` in the route file
to send elsewhere). Until the API key is set, submissions are still
accepted and visible in Vercel → your project → **Logs**, but no email
goes out.

**Optional next step:** the email currently sends *from*
`onboarding@resend.dev` (Resend's shared test address, which works
immediately with no setup). Once you verify your own domain on
resend.com, update the `from` field in `app/api/contact/route.ts` to
something like `"GD Solutions <enquiries@gdsolutions.com>"` so it sends
from your own domain instead.

## 4. Deploy on Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts; `vercel --prod` promotes it to your production URL.

**Option B — GitHub**

1. Push this project to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as **Next.js** — no config needed.
4. Add any environment variables (e.g. `RESEND_API_KEY`) under
   Project → Settings → Environment Variables.
5. Deploy. Every push to `main` redeploys automatically.

## 5. Project structure

```
app/
  layout.tsx        — fonts, <html>, metadata
  page.tsx           — assembles the page from components
  globals.css        — Tailwind layers + base styles
  api/contact/route.ts — contact form handler
components/           — one file per section
lib/content.ts         — ← all editable copy lives here
tailwind.config.ts      — design tokens (color, font, motion)
```

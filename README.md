# EPICJARED Exclusive Offer – Bolder Adventure Park

Single-page landing page for the EPICJARED promotion at Bolder Adventure Park.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and shadcn/ui.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

Everything on the page (prices, ticket links, countdown end time, Jared’s quotes,
reviews, FAQ, hours) lives in [`lib/offer.ts`](lib/offer.ts). Components only render it.

Rules for Jared’s quotes (from Paul):

- Anything shown as a Jared quote must be copied **word for word** from his Oct 12 Facebook post.
- Never include the 75% / 100% admission-coverage or $6.25 part of that post.

## Before launch (Friday 10:00 AM CT)

- [ ] **Ticket links:** replace `ticketUrl` for both passes in `lib/offer.ts` with the EPICJARED Roller links from Kyle.
- [ ] **Promo code:** confirm whether checkout uses the code `EPICJARED`. If not, set `offer.code` to `null` to hide it.
- [ ] **Countdown:** confirm the offer really ends Sunday at close (`offer.endsAt`). Set it to `null` to hide the countdown.
- [ ] **Testimonials:** reviewer names are shortened to first name + last initial. Confirm we’re OK quoting the Facebook comments.
- [ ] **Photos:** images load from bolderadventurepark.com and epicjared.com. If Jezam sends final assets, drop them in `public/` and update the paths.

## Deploy to Vercel

1. Push this folder to a GitHub repo (this folder is the project root).
2. In Vercel, choose **Add New → Project**, import the repo and keep the defaults (Framework: Next.js).
   If the repo root is the parent folder, set **Root Directory** to `epic-jared-landing`.
3. Deploy. The share links and social preview image pick up the production URL automatically.
   For a custom domain, add the environment variable `NEXT_PUBLIC_SITE_URL=https://your-domain.com` and redeploy.

Or deploy from the terminal with the Vercel CLI:

```bash
npx vercel --prod
```

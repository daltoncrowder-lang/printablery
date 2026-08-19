# printablery.com — bingo + word search + flashcards

Static Astro site / printables hub. Every `/bingo/<topic>/`,
`/word-search/<topic>/`, and `/flashcards/<topic>/` page is real
server-rendered HTML built at compile time (the SEO moat), with each generator
running as a client-side island on top. Shared themes cross-link across tools.

- **Bingo:** 37 themes, 3×3–5×5, free-space toggle, print a stack of unique cards.
- **Word search:** 26 themes, 11×11–15×15, easy/medium/hard, optional answer key.
- **Flashcards:** 21 sets, fold-over cards (single-sided print, cut, fold),
  reversible for recall-first study.

## Local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
```

## Deploy (Cloudflare Pages)

1. Push this folder to a new GitHub repo.
2. Cloudflare Pages → Create project → connect the repo.
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - Framework preset: Astro (or None).
3. Add the custom domain `printablery.com` in the Pages project.

## Go-live checklist (in order)

1. **Ship content first.** All 37 topic pages + homepage, guide, FAQ, About,
   Privacy, Terms are already here. Deploy and let Google index them before
   turning on ads.
2. **Search Console:** add the property, drop the verification token into
   `SITE.googleSiteVerification` in `src/site.js`, redeploy, submit
   `https://printablery.com/sitemap.xml`.
3. **AdSense review:** `ads.txt` is already at the root. Submit for review.
   Ad units and the consent script are intentionally OFF right now
   (`SITE.adsenseApproved = false`) so the review site is clean content.
4. **After AdSense approval:**
   - In AdSense → Ads, create the ad unit(s), copy the real slot IDs into
     `AD_SLOTS` in `src/site.js`.
   - In AdSense → Privacy & messaging, enable the **GDPR/Funding Choices**
     message (this is Google's TCF v2.2-certified CMP — do not hand-roll a
     cookie banner).
   - Flip `SITE.adsenseApproved = true` and redeploy. Ads then appear only in
     the prose regions of content pages — never on the bare generator.
5. **Pro tier (later):** pricing on `/pricing/` is a placeholder and checkout
   is not wired. Add Stripe + real prices when ready.

## Where things live

- `src/data/topics.js` (bingo), `src/data/wordsearch.js`, `src/data/flashcards.js`
  — the topic sets. Add a topic in any file and its page + sitemap entry are
  generated automatically; if a slug exists in more than one tool, the pages
  cross-link.
- `src/components/*Generator.astro` — the three tools.
- `src/lib/wordsearch.js` — the placement engine (seedable, used for the
  server-rendered sample puzzles).
- `src/pages/<tool>/[slug].astro` — the per-topic pages for each tool.

## Adding a fourth tool

Same recipe: add `src/data/<tool>.js`, a generator component, and a
`src/pages/<tool>/` index + `[slug]` pair, then add it to `NAV` in `site.js` and
to the sitemap. The homepage hub and cross-link pattern extend the same way.

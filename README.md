# VIBE.
**Ticket platform for Costa Rica** — parties, concerts, and unique events. Instant secure payments via card, SINPE Móvil, and Apple Pay.

---

## Project structure

```
vibe/
├── vibe-v5.html          # Public site (SPA)
├── css/
│   └── styles.css        # All CSS — desktop + responsive (430px breakpoint)
├── js/
│   ├── config.js         # ← Edit this to update events, prices, PINs, codes
│   └── app.js            # Public site logic
├── admin/
│   └── index.html        # CEO Sales Dashboard (standalone)
├── organizer/
│   └── index.html        # Organizer Dashboard (standalone)
├── public/
│   ├── images/           # rawdeo.jpg, mansita.jpg, karlo.jpg, retana.jpg, qr.svg, logo.jpg
│   └── fonts/            # bulkside.otf
└── vercel.json           # Cache headers (images/fonts 1yr, CSS/JS 24h, HTML no-cache)
```

---

## Editing events, prices & settings

**All configurable data lives in `js/config.js`.**
No logic — just data. Safe to edit without touching any other file.

```js
// Change a ticket price
EVENTS.rawdeo.tiers[1].price = 45;

// Add a discount code
DISCOUNT_CODES['LAUNCH30'] = 30;  // 30% off

// Update SINPE number
VIBE_CONFIG.sinpeNumber = "7019-8460";

// Change dashboard PINs
VIBE_CONFIG.adminPIN = "NEWPIN2026";
VIBE_CONFIG.orgPIN   = "ORG2026";

// Hide an event from the public listing
EVENTS.underground.active = false;
```

Each event supports these fields per tier:
| Field | Type | Description |
|---|---|---|
| `price` | number | USD price (0 = complimentary) |
| `priceCRC` | number | Colones price |
| `capacity` | number | Total seats |
| `sold` | number | Tickets sold (update from backend) |
| `fee` | number | VIBE. service fee in USD |
| `soldout` | boolean | Force sold-out state |

---

## Dashboards

Both dashboards are standalone HTML files — no shared state with the public site.

| Dashboard | URL | PIN |
|---|---|---|
| CEO Sales | `/admin/` | `VIBE2026` |
| Organizer | `/organizer/` | `ORG2026` |

Access is URL-only (not linked from the public site). Share the URL directly with organizers.

---

## Deploy (Vercel)

```bash
# Push to GitHub → Vercel auto-deploys from main branch
git push origin main
```

`vercel.json` handles cache headers automatically:
- Fonts & images → 1 year immutable
- CSS & JS → 24 hours
- HTML → no-cache (updates go live instantly)

---

## Local development

No build step. Open directly in browser:

```bash
# macOS
open vibe-v5.html

# Or serve locally to avoid CORS issues with fonts
npx serve .
```

---

## Tech stack

| Layer | Technology |
|---|---|
| Markup | Vanilla HTML5 |
| Styles | Vanilla CSS (no framework) |
| Logic | Vanilla JS ES5 (no bundler) |
| Fonts | Bulkside (local) + Google Fonts |
| Payments | OnvoPay · SINPE Móvil · Apple Pay |
| Hosting | Vercel |

---

## Commit history

```
4177763  perf: lazy loading, font preload, null checks, vercel cache headers
4b25241  fix(mobile): responsive layout for iPhone 15/16/17 (393px)
2e8a168  refactor: extract JS into config.js and app.js
1a9e8a2  refactor: separate dashboards, extract CSS, translate to English
```

// ════════════════════════════════════════════════════════════════
//  VIBE. — CONFIG.JS
//  All editable settings in one place.
//  No logic here — just data. Edit freely.
// ════════════════════════════════════════════════════════════════

// ─── PLATFORM ────────────────────────────────────────────────────
var VIBE_CONFIG = {

  // Contact & support
  whatsapp:    "+50670198460",          // WhatsApp Business number
  sinpeNumber: "7019-8460",            // SINPE Móvil recipient number
  supportEmail: "hola@vibeticketscr.com",
  exchangeRate: 525,                   // ₡ per $1 (reference only, adjust manually)

  // VIBE. service fee charged to buyer (USD)
  // Set per tier inside each event's tiers array (field: fee)
  defaultFee: 5,                       // fallback if tier has no fee set

  // Dashboard PINs  ← change before going live
  adminPIN:    "VIBE2026",             // CEO Sales Dashboard  (/admin/)
  orgPIN:      "ORG2026",              // Organizer Dashboard  (/organizer/)

};


// ─── DISCOUNT CODES ──────────────────────────────────────────────
// Format: 'CODE': percentOff
// Example: 'PROMO50': 50  →  50% off
var DISCOUNT_CODES = {
  'VIBE10':   10,   // 10% off — general promo
  'RAWDEO20': 20,   // 20% off — RAWDEO 2 promo
  'VIP15':    15,   // 15% off — VIP upsell
};


// ─── IMAGE PATHS ─────────────────────────────────────────────────
// Relative to the root HTML file that loads this script.
// If you move images, update only here.
var IMAGES = {
  logo:    "public/images/logo.jpg",
  qr:      "public/images/qr.svg",
  rawdeo:  "public/images/rawdeo.jpg",
  mansita: "public/images/mansita.jpg",
  karlo:   "public/images/karlo.jpg",
  retana:  "public/images/retana.jpg",
};

// Legacy aliases used by existing JS — do not remove
var RAWDEO_B64  = IMAGES.rawdeo;
var MANSITA_B64 = IMAGES.mansita;
var KARLO_B64   = IMAGES.karlo;
var RETANA_B64  = IMAGES.retana;
var QR_B64      = IMAGES.qr;


// ─── EVENTS ──────────────────────────────────────────────────────
// Each key is the event slug used throughout the app (e.g. "rawdeo").
// Fields per event:
//   name        — display name (ALL CAPS recommended)
//   sub         — short subtitle shown on cards
//   date        — full date string shown in checkout
//   place       — venue name shown in checkout and ticket
//   price       — base/lowest USD price (used for display on card)
//   priceCRC    — base price in colones
//   active      — true = visible in public listing; false = hidden
//   isMansita   — enables Mansita-specific hero layout
//   isRawdeo    — enables RAWDEO-specific hero layout (DJs, flyer)
//   tiers       — array of ticket types (see tier fields below)
//
// Tier fields:
//   id          — unique string, used as DOM key
//   name        — displayed in the checkout tier selector
//   price       — USD price (0 = complimentary)
//   priceCRC    — colones price (0 = complimentary)
//   capacity    — total seats/tickets for this tier
//   sold        — tickets sold so far (update from backend)
//   color       — accent color for charts and badges
//   soldout     — true forces sold-out state regardless of capacity/sold
//   fee         — VIBE. service fee in USD added on top of price
// ─────────────────────────────────────────────────────────────────

var EVENTS = {

  // ── RAWDEO 2 — RAW FITNESS ───────────────────────────────────
  rawdeo: {
    name:      "RAWDEO 2",
    sub:       "Jun 6 · Pedregal · Karlo & Retana",
    date:      "June 6, 2026",
    place:     "Pedregal Event Center",
    price:     20,
    priceCRC:  10000,
    active:    true,
    isMansita: false,
    isRawdeo:  true,
    tiers: [
      { id:"raw-earlybird", name:"Raw Fitness Early Bird", price:20,  priceCRC:10000, capacity:200, sold:200, color:"#4488ff", soldout:true, fee:5 },
      { id:"raw-tier1",     name:"Raw Fitness Tier 1",     price:40,  priceCRC:20000, capacity:400, sold:287, color:"#39ff14",              fee:5 },
      { id:"raw-tier2",     name:"Raw Fitness Tier 2",     price:50,  priceCRC:25000, capacity:400, sold:142, color:"#ffb800",              fee:5 },
      { id:"raw-vip",       name:"Raw Fitness VIP",        price:75,  priceCRC:37500, capacity:100, sold:61,  color:"#ff6b35",              fee:5 },
      { id:"raw-cortesia",  name:"Complimentary",          price:0,   priceCRC:0,     capacity:50,  sold:18,  color:"#888",                 fee:0 },
    ]
  },

};

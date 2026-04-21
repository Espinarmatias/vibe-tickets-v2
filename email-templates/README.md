# VIBE Email Templates

HTML templates for transactional emails sent by VIBE.

## Templates

| File | Trigger | Description |
|------|---------|-------------|
| `ticket-confirmation.html` | After purchase | Sent to each attendee with QR code and ticket details |

## Preview

Open any `.html` file directly in a browser to see the template rendered with dummy data.

## Variables

Each template uses `{{variable_name}}` syntax. See the comment block at the top of each file for the full variable list.

### `ticket-confirmation.html`

| Variable | Example value |
|----------|---------------|
| `{{attendee_name}}` | `Matías Espinar` |
| `{{attendee_first_name}}` | `Matías` |
| `{{event_name}}` | `RAWDEO 2` |
| `{{event_date}}` | `Jun 6, 2026 · 8:00 PM` |
| `{{event_date_short}}` | `Jun 6` |
| `{{event_venue}}` | `Pedregal Event Center` |
| `{{event_image_url}}` | Absolute URL to event flyer (square, 544×544px recommended) |
| `{{tier_name}}` | `VIP` |
| `{{qr_code_url}}` | Absolute URL to QR image (160×160px PNG) |
| `{{ticket_id}}` | `TKT-240420-001` |
| `{{view_tickets_url}}` | `https://vibeticketscr.com/my-tickets` |
| `{{apple_wallet_url}}` | URL to `.pkpass` file (generated in FASE 7) |
| `{{help_url}}` | `https://vibeticketscr.com/help` |

## Integration

Email sending is implemented in **FASE 7** using [Resend](https://resend.com).  
Template variables use `{{variable_name}}` syntax compatible with Resend's Handlebars / React Email integration.

At integration time:
1. Strip the dummy-value preview comments at the top of each template
2. Replace all hardcoded dummy values with `{{variable}}` placeholders
3. Use Resend's template rendering to inject real values per send

## Design System

Emails follow the VIBE visual language:

| Token | Value |
|-------|-------|
| Background body | `#0a0a0a` |
| Background card | `#111111` |
| Background dark strip | `#050505` |
| Accent green | `#6ab04c` |
| Text primary | `#f0f0f0` |
| Text secondary | `#999999` |
| Text tertiary | `#666666` |
| Border | `#1a1a1a` |
| Max width | `600px` |

### Typography stacks

```css
/* Headlines */
font-family: 'Barlow Condensed', 'Arial Narrow', Impact, sans-serif;

/* Body */
font-family: 'Barlow', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

## Email Client Compatibility

| Rule | Reason |
|------|--------|
| Tables-only layout (no flex/grid) | Outlook uses Word engine — flex/grid break |
| Inline styles as primary | Some clients block `<style>` blocks |
| `width` + `height` on every `<img>` | Prevents layout shift before images load |
| No JavaScript | Gmail, Yahoo block all JS |
| No external fonts at send time | Most clients ignore `<link>` — fallback chains handle rendering |
| Max 600px width | Industry standard for email clients |
| `color-scheme: dark` meta | Enables native dark mode in supported clients |
| Hex colors only | No CSS variables — clients don't resolve them |

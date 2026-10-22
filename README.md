# Five Tables

Invitation-led private community for Black professionals in London.

**Tagline:** Good Company. Exceptional Conversation.  
**Positioning:** Five Sectors. One Community.

This repository contains the early-access website and waitlist experience.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Database | Neon (PostgreSQL) |
| ORM | Drizzle |
| Hosting | Vercel (recommended) |

## Features (current)

- Compact landing page with brand-aligned design
- Early-access waitlist form (name, email, phone, sector)
- Private event page: `/events/poolhouse` with Stripe Payment Link
- Server-side validation and persistence to Neon
- Responsive layout for desktop and mobile

## Getting started

### Requirements

- Node.js 20+
- pnpm
- A Neon PostgreSQL database

### Setup

```bash
pnpm install
cp .env.example .env.local
```

Add your database connection string to `.env.local`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Push the database schema:

```bash
pnpm db:push
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local development |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Lint the project |
| `pnpm db:push` | Sync Drizzle schema to Neon |
| `pnpm db:studio` | Open Drizzle Studio |

## Design

- **Fonts:** Cormorant Garamond (headings), Jost (body / UI)
- **Palette:** Black, ivory, muted champagne gold
- See [docs/design-system.md](docs/design-system.md) for brand and visual guidelines

## Environment

Never commit `.env.local`. Use `.env.example` as a template.

### Vercel

In the Vercel project → **Settings → Environment Variables**, add:

| Name | Value |
|------|--------|
| `DATABASE_URL` | Neon connection string (`sslmode=require`) |
| `NEXT_PUBLIC_APP_URL` | `https://fivetables.co.uk` |
| `RESEND_API_KEY` | Resend API key |
| `EMAIL_FROM` | `Five Tables <hello@fivetables.co.uk>` |
| `WAITLIST_NOTIFY_EMAIL` | `fivetablesuk@gmail.com` |
| `STRIPE_SECRET_KEY` | Stripe secret key (for post-payment emails) |
| `STRIPE_WEBHOOK_SECRET` | Webhook signing secret for `/api/stripe/webhook` |

Apply to Production (and Preview if needed), then redeploy.

### Poolhouse payments

Event page: `/events/poolhouse`  
Payment button uses the Stripe Payment Link. After payment, Stripe can redirect to `/events/poolhouse/success`.

To send confirmation emails automatically after successful payment:

1. In Stripe Dashboard → Payment Link → After payment → set success URL to `https://fivetables.co.uk/events/poolhouse/success`
2. Add a webhook endpoint: `https://fivetables.co.uk/api/stripe/webhook`
3. Listen for `checkout.session.completed`
4. Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in Vercel

### Domain: fivetables.co.uk

Point the domain to Vercel (A/CNAME records from the Vercel project → Domains), then verify the same domain in Resend for sending.

### Waitlist emails

On each successful submission the app sends:

1. **Team notification** → `fivetablesuk@gmail.com` (applicant details)
2. **Confirmation** → the applicant’s email address

Emails are sent with [Resend](https://resend.com) from `hello@fivetables.co.uk` once the domain is verified.

## Licence

Private — all rights reserved. © Five Tables, London.

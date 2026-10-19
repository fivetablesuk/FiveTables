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
| `NEXT_PUBLIC_APP_URL` | Production site URL |
| `RESEND_API_KEY` | Resend API key |
| `EMAIL_FROM` | Verified sender, e.g. `Five Tables <hello@yourdomain.com>` |
| `WAITLIST_NOTIFY_EMAIL` | `fivetablesuk@gmail.com` |

Apply to Production (and Preview if needed), then redeploy.

### Waitlist emails

On each successful submission the app sends:

1. **Team notification** → `fivetablesuk@gmail.com` (applicant details)
2. **Confirmation** → the applicant’s email address

Emails are sent with [Resend](https://resend.com). For production, verify your domain in Resend and set `EMAIL_FROM` to an address on that domain. Until then, Resend’s test sender (`onboarding@resend.dev`) can only deliver reliably to the email on your Resend account.

## Licence

Private — all rights reserved. © Five Tables, London.

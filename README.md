# MASwebsite

Michigan Avenue Storage website rebuild.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- Vercel-ready App Router structure

## Goals for v1
- Preserve current public routes where practical
- Replace WordPress form handling with Resend + Turnstile
- Keep payment handling on an external hosted checkout
- Build a simple, fast, maintainable marketing site

## Local development
```bash
npm install
npm run dev
```

## Environment
Copy `.env.example` to `.env.local` and fill in values as needed.

```bash
cp .env.example .env.local
```

Variables:
- `RESEND_API_KEY`
- `TURNSTILE_SECRET_KEY`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `NEXT_PUBLIC_PAYMENT_URL`

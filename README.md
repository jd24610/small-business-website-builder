
# Transition From The Hearts — Website

The official website for [Transition From The Hearts](https://transitionfromthehearts.org), a nonprofit supporting young adults through life's transitions with mentorship, home essentials, and community resources.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool / dev server)
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **React Router** for client-side routing
- **React Hook Form** + **Zod** for form validation
- **TanStack Query** for data fetching
- **Vitest** + **React Testing Library** for tests

## Features

- Home page with About, Mission, Contact, and Donate sections
- Separate pages for Impact, Event Tickets (Gala), Privacy Policy, and Terms of Service
- "Get Help" modal that routes youth and caseworkers to separate intake forms
- Donation flow with preset/custom amounts, linking out to PayPal and Zeffy
- Contact form powered by [Web3Forms](https://web3forms.com/)
- Event ticket sales via Zeffy

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (this repo also has a `bun.lockb`, but npm is the primary supported package manager — see [Notes](#notes))

### Installation

```bash
git clone https://github.com/jd24610/small-business-website-builder.git
cd small-business-website-builder
npm install
```

### Development

```bash
npm run dev
```

Runs the dev server at `http://localhost:8080`.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`. Use `npm run build:dev` for a development-mode build (useful for debugging build output without full minification).

### Preview a production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm run test        # run once
npm run test:watch  # watch mode
```

> Note: test coverage is currently minimal — only a placeholder test exists. Contributions adding real component/form tests are welcome.

## Project Structure

```
src/
  components/       # Reusable page sections (Hero, About, Contact, Donate, Footer, etc.)
  components/ui/     # shadcn/ui component primitives
  pages/            # Route-level pages (Index, Impact, EventTickets, DonatePage, etc.)
  hooks/            # Custom React hooks
  lib/              # Utilities
public/             # Static assets (images, favicon, robots.txt)
```

## Deployment

This project deploys to [Vercel](https://vercel.com/) (see `vercel.json`, which rewrites all routes to `index.html` for client-side routing to work correctly).

## Notes

- No environment variables are currently required — the Web3Forms access key is a public-safe client key by design.
- Both `bun.lockb` and `package-lock.json` are present; pick one package manager going forward to avoid dependency drift.
- Social media links in the footer are currently placeholders and need to be updated with real URLs.

## License

No license file is currently included. Add one (e.g. MIT) if you intend this repo to be reused or contributed to publicly.

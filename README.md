# Next Start (Frontend Only)

> [!IMPORTANT]  
> All branches have been updated to the latest patched version of React / Next.js as of 2025-12-05. Be sure to update your deployments as well. See the notes [here](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components) and [here](https://nextjs.org/blog/CVE-2025-66478).

A lightweight Next.js starter that now ships without any backend pieces. All API routes, auth, database code, and server actions have been removed so you can plug in your own Express + TypeScript backend later.

- [Stack](#stack)
- [Branches](#branches)
- [Setup](#setup)
- [Notes for adding your backend](#notes-for-adding-your-backend)

## Stack

- Linting / Code Style
  - eslint, eslint-config-prettier, eslint-plugin-check-file, eslint-plugin-n
  - prettier, @trivago/prettier-plugin-sort-imports, prettier-plugin-tailwindcss
- Styles / UI
  - tailwindcss
  - @nextui-org/react
  - next-themes
  - @tabler/icons-react

## Branches

The main branch is now frontend-only (no auth, DB, or API routes). Historical branches in the upstream repo still show progressive additions:

- base – eslint / prettier settings
- nextui – layout / styles + theme toggle

## Setup

1) Install dependencies:

```sh
pnpm install
```

2) Run the app:

```sh
pnpm dev
```

## Notes for adding your backend

- The guestbook and profile pages are stubbed with client-side state; wire them to your Express API when ready.
- The `.env.example` file is empty because no server-side secrets are required now. Add any `NEXT_PUBLIC_*` variables you need for your API endpoints.
- Docker and Drizzle configs were removed. Reintroduce your own tooling as needed for your backend stack.

## SafeSpeak integration notes

- Dashboard home now routes to explicit SafeSpeak scope flows for reporting, support, ScamShield, resources, local-intelligence placeholder, and Smart Dialler.
- Persistent dashboard safety controls include Quick Exit, 000, 1800RESPECT, language toggle, covert-mode state, and Smart Dialler access.
- Learn & Resources now uses `/dashboard?view=resources` as the main library entry, while micro-education remains separately reachable.
- Landing page internals were intentionally left unchanged in this task.

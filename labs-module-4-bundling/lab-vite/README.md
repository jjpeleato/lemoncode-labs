# Module 4 - Vite Lab

A bundling lab using **Vite 7** with **TypeScript**. It includes a fast development server, TypeScript type checking, gzip/Brotli compression, and bundle analysis.

## Getting started

1. Install dependencies:

```bash
cd labs-module-4-bundling/lab-vite
npm i --save-dev
```

2. Start the development server:

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment variables

Use a `.env` file to define environment variables. Vite exposes variables prefixed with `VITE_` to the client.

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` | Starts the dev server |
| `npm run build` | Type-checks and builds for production |
| `npm run preview` | Previews the production build locally |

## Tech stack

- **Vite 7** — fast build tool and dev server
- **TypeScript** — static typing
- **vite-plugin-checker** — runs TypeScript checks during dev
- **vite-plugin-compression** — generates gzip and Brotli compressed assets
- **rollup-plugin-visualizer** — opens `stats.html` with bundle size analysis after build

Greetings [**@jjpeleato**.](https://www.jjpeleato.com/)

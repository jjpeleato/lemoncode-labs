# Module 4 - Webpack Lab

A bundling lab using **Webpack 5** with **React 19** and **TypeScript**. It includes a development server, SCSS support, linting, and production build optimization.

## Getting started

1. Install dependencies:

```bash
cd labs-module-4-bundling/lab-webpack
npm i --save-dev
```

2. Start the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Environment variables

Copy `.env` and set your variables before running any script.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the dev server with HMR |
| `npm run build` | Builds the app for production |
| `npm run build:stats` | Production build + bundle analyzer report |
| `npm start` | Serves the production build |

## Tech stack

- **Webpack 5** — module bundler and dev server
- **React 19 + TypeScript** — UI library with static typing
- **Babel** — transpiles TypeScript and JSX
- **SCSS** — styles compiled via sass-loader and extracted with MiniCssExtractPlugin
- **ESLint + Stylelint** — code and style linting
- **dotenv-webpack** — environment variables from `.env`
- **webpack-bundle-analyzer** — visual analysis of bundle size

Greetings [**@jjpeleato**.](https://www.jjpeleato.com/)

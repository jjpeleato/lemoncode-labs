# Module 8 - Basic Laboratory - Exercise: Next.js - Rural Houses

A rural houses rental portal built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**. Users can browse a catalog of rural houses, search by name or location, view a house's detail page, and reserve/unreserve houses through a persistent cart drawer.

## Rendering strategy

| Page | Strategy | Why |
|---|---|---|
| `/houses` | ISR (`revalidate: 60`) | The catalog can grow without needing a fresh render on every request. |
| `/houses/[id]` | SSG (`generateStaticParams`) + ISR | House content changes rarely — pre-rendered at build, revalidated in the background. |

## Notes

- `src/app/api/houses/**` endpoints are not consumed by the app itself — pages read data directly from `src/lib/houses.ts` to avoid a self-referential fetch. The endpoints exist to satisfy the exercise's API requirement and remain independently testable with `curl`.
- The cart has no persistence by design — it resets on page reload.

## Installation to develop

1. Install the Node.js dependencies:
    ```bash
    cd labs-module-8-frameworks/lab-basic/exercise-nextjs
    npm i --save-dev
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```
3. If you want to validate the code according standard only, run:
    ```bash
    npm run lint
    ```
4. End and happy coding!

## Finally

More info in the following commits. If required.

Grettings [**@jjpeleato**.](https://www.jjpeleato.com/)

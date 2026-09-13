# Module 8 - Basic Laboratory - Exercise: TanStack Start - Rural Houses

A rural houses rental portal built with **TanStack Start**, **TypeScript** and **Tailwind CSS**. Users can browse a catalog of rural houses, search by name or location and view a house's detail page.

## Rendering strategy

| Page | Strategy |
| --- | --- |
| `/houses` | SSR (framework default) |
| `/houses/$id` | Static prerendering, configured in `vite.config.ts` |

## Notes

- Server Routes (`src/routes/api/houses*.ts`) are not consumed by the app — pages read data directly from `src/lib/houses.ts` to avoid a self-referential fetch. They exist to satisfy the exercise's API requirement and are testable with `curl`.
- Images are optimized with [Unpic](https://unpic.pics/), auto-detected against Unsplash's CDN.
- No reservation cart for this framework.

## Installation to develop

1. Install the Node.js dependencies:

    ```bash
    cd labs-module-8-frameworks/lab-basic/exercise-tanstack
    npm install
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

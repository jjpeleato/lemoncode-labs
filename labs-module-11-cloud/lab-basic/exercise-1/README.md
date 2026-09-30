# Module 11 - Basic Laboratory - Exercise: Binnacle

Binnacle of every lab from the LemonCode Front-End Master, built with **Next.js**, **TypeScript** and **Tailwind CSS** and generated as a static site (`output: 'export'`).

It is deployed automatically to **GitHub Pages** and **Vercel** with **GitHub Actions**, and it can be run locally with **Docker**.

- GitHub Pages: <https://jjpeleato.github.io/lemoncode-labs/>
- Vercel: <https://lemoncode-labs.vercel.app/>

## What is included

Mandatory:

- Manual deployment to GitHub Pages: `deploy:pages` script.
- Automatic deployment to GitHub Pages on merge to `main`: `.github/workflows/cloud-lab-pages.yml`.

Optional:

- Automatic deployment to Vercel with GitHub Actions and Vercel CLI: `.github/workflows/cloud-lab-vercel.yml`.
- Multi-stage Docker image (built with Node, served with nginx) to run locally, path: `docker/`.
- Docker image validation in CI: `.github/workflows/cloud-lab-docker.yml`.

## Notes

- **Static export**: there is no Node server at runtime. The build generates `out/` with HTML, CSS and JS, and any static hosting can serve it.
- **Variable `basePath`**: GitHub Pages serves the site under the `/lemoncode-labs` subpath, while Vercel and Docker serve it at the root. `next.config.ts` reads the `BASE_PATH` environment variable and the `build:pages` script sets it; every other build leaves it empty.

## Installation to develop

1. Install the Node.js dependencies:

    ```bash
    cd labs-module-11-cloud/lab-basic/exercise-1
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

## GitHub Pages deployment

GitHub Pages only supports one publishing source at a time (*Settings → Pages → Source*): **branch** or **GitHub Actions**. It is currently set to **GitHub Actions**, so the manual deployment no longer affects the published site.

### Manual

Requires the *Deploy from a branch* source with the `gh-pages` branch on `/ (root)`.

```bash
npm run deploy:pages
```

The script builds with `BASE_PATH=/lemoncode-labs` and publishes `out/` to the `gh-pages` branch using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

### Automatic

Requires the *GitHub Actions* source. The `cloud-lab-pages.yml` workflow runs on every push to `main` with changes in this exercise, or manually from the *Actions* tab (`workflow_dispatch`).

## Vercel deployment

Deployment is driven by GitHub Actions instead of Vercel's Git integration, to keep the whole CI/CD pipeline versioned in the repository. The build runs on the GitHub runner and only the output is uploaded to Vercel.

## Docker

The image is built in two stages: `node:24-alpine` generates the build and `nginx:stable-alpine` serves only `out/`. The final image contains no Node, `node_modules` or source code.

```text
docker/
├── Dockerfile
├── Dockerfile.dockerignore
├── compose.yaml
└── nginx.conf
```

| Script | Description |
| --- | --- |
| `npm run docker:build` | Builds the `lemoncode-labs` image. |
| `npm run docker:run` | Runs the container at <http://localhost:8080>. |
| `npm run docker:up` | Builds and starts the service with Docker Compose. |
| `npm run docker:down` | Stops and removes the Docker Compose service. |

In CI, `cloud-lab-docker.yml` runs on every push or pull request with changes in this exercise: it builds the image, starts the container and checks with `curl` that `/` responds successfully. The image is not published to any registry.

## Finally

More info in the following commits. If required.

Greetings [**@jjpeleato**.](https://www.jjpeleato.com/)

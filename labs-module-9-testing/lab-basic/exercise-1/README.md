# Module 9 - Basic Laboratory - Exercise: Testing

Unit tests run with **Vitest** and **Testing Library**, end-to-end tests with **Cypress**, and both are wired to GitHub Actions.

## What is tested

Mandatory:

- Project mapper: `src/pods/project/project.mapper.spec.ts`
- Confirmation dialog component: `src/common/components/confirmation-dialog/confirmation-dialog.component.spec.tsx`
- Confirmation dialog hook: `src/common/components/confirmation-dialog/confirmation-dialog.hook.spec.ts`

Optional:

- Spinner component: `src/common/components/spinner/spinner.component.spec.tsx`
- E2E with Cypress: `cypress/e2e/login.cy.ts` and `cypress/e2e/project-list.cy.ts`
- CI with GitHub Actions: `.github/workflows/testing-lab-unit-tests.yml` and `.github/workflows/testing-lab-e2e.yml`

## Installation to develop

1. Install the Node.js dependencies:

    ```bash
    cd labs-module-9-testing/lab-basic/exercise-1
    npm install
    ```

2. Start the development server:

    ```bash
    npm start
    ```

3. End and happy coding!

## Unit tests

Run all the unit tests in watch mode:

```bash
npm test
```

Run all the unit tests once:

```bash
npm test -- run
```

Run only the tests of this lab:

```bash
# Project mapper
npm test -- run src/pods/project/project.mapper.spec.ts

# Confirmation dialog component
npm test -- run src/common/components/confirmation-dialog/confirmation-dialog.component.spec.tsx

# Confirmation dialog hook
npm test -- run src/common/components/confirmation-dialog/confirmation-dialog.hook.spec.ts

# Spinner component
npm test -- run src/common/components/spinner/spinner.component.spec.tsx
```

## E2E tests

Requires Google Chrome. The e2e tests run against the production build, so build first:

```bash
npm run build
npm run e2e
```

## Finally

More info in the following commits. If required.

Grettings [**@jjpeleato**.](https://www.jjpeleato.com/)

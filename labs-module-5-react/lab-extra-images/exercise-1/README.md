# Module 5 - Extra Laboratory - Exercise Image bank

This project is a gallery cart application built with React, TypeScript, Material UI, and React Router, following a Clean Architecture approach. Users can browse pictures across two independent galleries (Kitties and Puppies) and select any number of them using a checkbox on each image card. Selected pictures are added to a shopping cart that stays visible at all times, outside the page routing, and can be toggled open or closed without losing its contents. The cart lets users remove individual items or clear it entirely, and any change made from the cart or from either gallery page is reflected everywhere instantly, since all views share a single source of truth through a React Context. The codebase is organized into domain, application, infrastructure, and presentation layers, keeping business rules such as cart selection logic fully independent from React and from how the picture data is fetched.

## Installation to develop

1. Install the Node.js dependencies:

    ```bash
    cd labs-module-5-react/lab-extra-images/exercise-1
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

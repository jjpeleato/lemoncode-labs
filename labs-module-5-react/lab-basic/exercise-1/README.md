# Module 5 - Basic Laboratory - Exercise 1

This application is a GitHub Organization Member Explorer built with React, TypeScript and Material UI. It allows users to search for any GitHub organization by name and browse its public members in a paginated grid. Each member is displayed as a card showing their avatar and username, and clicking on a card navigates to a detail page with additional information such as their full name, biography, location, company, personal website, and stats like public repositories, followers and following count.

The search input includes a debounce feature, which means the search triggers automatically after the user stops typing, without needing to press the button every time. The application also preserves the search state in the URL using query parameters, so users can share a direct link to a specific organization and page, use the browser back button to return to their previous results, and open multiple independent searches in different tabs.

## Installation to develop

1. Install the Node.js dependencies:
    ```bash
    cd labs-module-5-react/lab-basic/exercise-1
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

# Module 10 - Basic Laboratory - Exercise: Rick and Morty

A React, TypeScript and Material UI app that consumes the [Rick and Morty REST API](https://rickandmortyapi.com/documentation#rest) with Axios, plus a local mock server to simulate writes.

## Features

Mandatory:

- Character list and character detail (a second REST call).
- Edit and save each character's best sentence against the local mock server (`server/`).

Optional:

- Pagination and search by name.
- Locations and episodes, fetching their characters in a single batch call.

## Two modes

| Command | Backend | Notes |
| --- | --- | --- |
| `npm start` | Local mock server | Edit the best sentence. Only 5 characters, no search or pagination. |
| `npm run start:remote` | Public API | All characters with search and pagination. Read-only. |

Locations and episodes always use the public API, since the mock only serves characters.

## Installation to develop

1. Install the Node.js dependencies (this also installs the mock server's):

    ```bash
    cd labs-module-10-api/lab-basic/exercise-1
    npm install
    ```

2. Start the app with the local mock server:

    ```bash
    npm start
    ```

    Or against the public API:

    ```bash
    npm run start:remote
    ```

3. Open <http://localhost:8080>.

4. End and happy coding!

## Finally

More info in the following commits. If required.

Greetings [**@jjpeleato**.](https://www.jjpeleato.com/)

# Module 6 - Extra Laboratory - Exercise: RxJS Lab

An extension of the mandatory Angular layout exercise (`lab-basic`), adapting the `Auth` service to work reactively with RxJs instead of synchronous calls.

## Features

- `Auth.login()` returns `Observable<boolean>` using `of()` + `delay(2000)` to simulate a real network request
- Session side effects (activating state, persisting to `localStorage`) run inside `tap()`, triggered only on actual emission
- Login form subscribes to the observable, showing a themed CSS loading spinner while the request is in flight
- Submit button disabled during the simulated request to prevent duplicate submissions

## Test credentials

username: `master@lemoncode.net`
password: `12345678`

## Installation to develop

1. Install the Node.js dependencies:

    ```bash
    cd labs-module-6-angular/lab-extra-rxjs/exercise-1
    npm install
    ```

2. Start the development server:

    ```bash
    npm run start
    ```

3. End and happy coding!

## Finally

More info in the following commits. If required.

Grettings [**@jjpeleato**.](https://www.jjpeleato.com/)

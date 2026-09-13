# Module 6 - Extra Laboratory - Exercise: Gallery Lab

A photo gallery and a custom `rotate` attribute directive.

## Source

### Gallery

- Large photo viewer with a fixed-size frame that clips zoomed images instead of overflowing the page
- Thumbnail strip, paginated by 3 using the `slice` pipe, with the active thumbnail highlighted
- Thumbnail page is derived from the selected photo index, so both always stay in sync
- Previous/next navigation with boundary-aware disabled states, zoom in/out/reset, and a looping auto-play mode

### Rotate directive

- Custom `img[rotate]` attribute directive using signal-based `input()`
- Configurable initial angle (`rotate="45"`) and rotation step (`step="15"`)
- Click to rotate, shift+click to reverse direction

## Installation to develop

1. Install the Node.js dependencies:

    ```bash
    cd labs-module-6-angular/lab-extra-gallery/exercise-1
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

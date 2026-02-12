# Module 3 - Basic Laboratory - Exercise 3 - Clone & Merge

Implement clone and merge functions for JavaScript objects. Clone copies an object, merge combines two objects with source overwriting target properties.

### Clone

Implement a `clone` function that takes an input object `source` and returns a new object with the properties of `source`:

```js
function clone(source) {
  // Implementation here.
}
```

### Merge

Implement a `merge` function that takes two input objects `source` and `target` and returns a new object with all properties from both `target` and `source`. If properties have the same name, `source` overwrites `target`.

For example, given these 2 objects:

```js
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
```

the result of merging `a` over `b` would be:

```js
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
```

TIP: You can use the `clone` function from section A.

```js
function merge(source, target) {
  // Implementation here.
}
```

## Installation to develop

1. Install the Node.js dependencies:
   ```bash
   cd labs-module-3-language/lab-basic/exercise-3
   npm i --save-dev
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
4. End and happy coding!

## Finally

More info in the following commits. If required.

Grettings [**@jjpeleato**.](https://www.jjpeleato.com/)
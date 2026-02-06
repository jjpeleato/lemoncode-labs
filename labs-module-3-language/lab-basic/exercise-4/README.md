# Module 3 - Basic Laboratory - Exercise 4 - Read books

Create an `isBookRead` function that receives a list of books and a title, and returns whether that book has been read or not. A book is an object with `title` as a string and `isRead` as a boolean. If the book does not exist, return `false`.

TIP: There is an `Array.prototype` method that will help you search by pattern.

```js
function isBookRead(books, titleToSearch) {
  // Implementation here
}
```

#### Example

```js
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));					// true
console.log(isBookRead(books, "Canción de hielo y fuego"));		// false
console.log(isBookRead(books, "Los Pilares de la Tierra"));		// false
```

#### Optional

Use TypeScript to add the appropriate types.

## Installation to develop

1. Install the Node.js dependencies:
   ```bash
   cd labs-module-3-language/lab-basic/exercise-2
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
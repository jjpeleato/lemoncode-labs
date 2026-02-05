import { concat, multiple } from "./functions";

console.log("########## Module 3 - Basic Laboratory - Exercise 2 - Concat ##########");

console.log("########## START: Concat function ##########");

console.log(concat([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]));    // Return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(concat(['a', 'b'], ['c', 'd']));              // Return 'a', 'b', 'c', 'd'
console.log(concat([], []));                              // Return []

console.log("########## END: Concat function ##########");

console.log("########## START: Multiple concat function ##########");

// Return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
console.log(
  multiple(
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19]
  )
);

// Return 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
console.log(
  multiple(
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f'],
    ['g', 'h']
  )
);

// Return []
console.log(multiple([], [], [], []));

console.log("########## END: Multiple concat function ##########");

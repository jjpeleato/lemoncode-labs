import { concat } from "./functions";

console.log("########## Module 3 - Basic Laboratory - Exercise 2 - Concat ##########");

console.log("########## START: Concat function ##########");

console.log(concat([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]));		// Return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(concat(['a', 'b'], ['c', 'd']));				// Return 'a', 'b', 'c', 'd'
console.log(concat([], []));								// Return []

console.log("########## END: Concat function ##########");

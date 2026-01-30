import { head, tail } from "./functions";

console.log("########## Module 3 - Basic Laboratory - Exercise 1 - Array operations ##########");

console.log("########## START: Head function ##########");

console.log(head([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));		// Return 0
console.log(head(['a', 'b', 'c', 'd']));				// Return 'a'
console.log(head([]));									// Return undefined

console.log("########## END: Head function ##########");

console.log("########## START: Tail function ##########");

console.log(tail([0, 1, 2, 3]));						// Return [1, 2, 3]
console.log(tail(['a', 'b', 'c', 'd']));				// Return ['b', 'c', 'd']
console.log(tail([]));									// Return undefined

console.log("########## END: Tail function ##########");

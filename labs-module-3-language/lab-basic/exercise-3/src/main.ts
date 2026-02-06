import { clone } from "./functions";

console.log("########## Module 3 - Basic Laboratory - Exercise 3 - Clone & Merge ##########");

console.log("########## START: Clone function ##########");

const original = {
  name: "Kakarotto",
  alias: "Son Goku",
  planet: "Planet Vegeta",
};
const copy = clone(original);

console.log(copy);                // Return { name: "Kakarotto", "alias": "Son Goku", planet: "Planet Vegeta"}
console.log(original === copy);   // Return false

console.log("########## END: Clone function ##########");

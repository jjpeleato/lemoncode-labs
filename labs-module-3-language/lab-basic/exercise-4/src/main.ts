import { isBookRead } from "./functions";
import type { Book } from "./interfaces";

console.log("########## Module 3 - Basic Laboratory - Exercise 4 - Read books ##########");

console.log("########## START: Read book function ##########");

const books: Book[] = [
  { title: "1984", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Cien años de soledad", isRead: false },
  { title: "Devastación", isRead: true },
  { title: "Dune", isRead: false },
  { title: "El código Da Vinci", isRead: true },
  { title: "El Hobbit", isRead: true },
  { title: "El juego de Ender", isRead: true },
  { title: "El marciano", isRead: true },
  { title: "El nombre del viento", isRead: true },
  { title: "El Señor de los Anillos", isRead: true },
  { title: "Ender el xenocida", isRead: false },
  { title: "Fahrenheit 451", isRead: true },
  { title: "Fundación", isRead: true },
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "La sombra del viento", isRead: false },
  { title: "Los pilares de la Tierra", isRead: false },
  { title: "Neuromante", isRead: false },
  { title: "Project Hail Mary", isRead: false },
  { title: "Ready Player One", isRead: false },
];

console.log(isBookRead(books, "Canción de hielo y fuego"));   // Return false
console.log(isBookRead(books, "Devastación"));                // Return true
console.log(isBookRead(books, "El Hobbit"));                  // Return true
console.log(isBookRead(books, "El Señor de los Anillos"));    // Return true
console.log(isBookRead(books, "Hábitos átomicos"));           // Return false
console.log(isBookRead(books, "Los pilares de la Tierra"));   // Return false

console.log("########## END: Read book function ##########");

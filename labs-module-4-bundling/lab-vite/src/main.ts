import classes from "./styles.module.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const h1 = document.createElement("h1");

  h1.textContent = "Hello, Vite!";
  h1.className = classes.title;

  app.appendChild(h1);
}

console.log("--- Environment configuration ---");
console.log("Mode:", import.meta.env.MODE);
console.log("Value of my variable:", import.meta.env.VITE_APP_MESSAGE);

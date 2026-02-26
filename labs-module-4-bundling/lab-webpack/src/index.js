import "./style.scss";
import logoImg from "./img/github.svg";

const img = document.createElement("img");
img.src = logoImg;
document.body.appendChild(img);

const h1 = document.createElement("h1");
h1.textContent = "Hello Webpack!";
document.body.appendChild(h1);

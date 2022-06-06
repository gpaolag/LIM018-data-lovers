import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    })

/* const dataPeliculas = data.films;
console.log(dataPeliculas); */


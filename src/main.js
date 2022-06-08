import data from './data/ghibli/ghibli.js';
import { orderAZ, orderZA, orderAntigua, orderReciente } from './data.js';

//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    })
    
const films = data.films;
const mainmovies = document.querySelector("#carruselPeliculas");

function showInfoMovies (arrayData){
    mainmovies.innerHTML = "";
    arrayData.forEach((filmsPublished) => {
        const divFilm = document.createElement("div"); //div para cada tarjeta
        divFilm.classList.add("div_content_movies");
        divFilm.innerHTML=`<img src="${filmsPublished.poster}" class="div_img_movie" />
        <b><h3 class="contenedor_section_h3__movti"><p class="films-titles">${filmsPublished.title}</h3></b>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);
    });
}
showInfoMovies(films);

let btnAZ = document.querySelector('#aZ');
btnAZ.addEventListener("click",()=>{
  showInfoMovies(orderAZ());
});


let btnZA = document.querySelector('#zA');
btnZA.addEventListener("click",()=>{
  showInfoMovies(orderZA());
});

let btnAntigua = document.querySelector('#antigua');
btnAntigua.addEventListener("click",()=>{
  showInfoMovies(orderAntigua());
});

let btnReciente = document.querySelector('#reciente');
btnReciente.addEventListener("click",()=>{
  showInfoMovies(orderReciente());
});
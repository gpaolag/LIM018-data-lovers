/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    })
    
const films = data.films;
const mainmovies = document.querySelector("#carruselPeliculas");
let showFilms = films;

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

let btnAZ = document.querySelector('#aZ');
btnAZ.addEventListener("click",orderAZ);
function orderAZ(){
   let aZ = films.sort((a,b) =>{
        if(a.title>b.title){
            return 1;
        }
        return -1;
    })
    showFilms = aZ;
    showInfoMovies(showFilms);
}

let btnZA = document.querySelector('#zA');
btnZA.addEventListener("click",orderZA);
function orderZA(){
   let zA = films.sort((a,b) =>{
        if(a.title<b.title){
            return 1;
        }
        return -1;
    })
    showFilms = zA;
    showInfoMovies(showFilms);
}

let btnAntigua = document.querySelector('#antigua');
btnAntigua.addEventListener("click",orderAntigua);
function orderAntigua(){
   let antigua = films.sort((a,b) =>{
        if(a.release_date>b.release_date){
            return 1;
        }
        return -1;
    })
    showFilms = antigua;
    showInfoMovies(showFilms);
}

let btnReciente = document.querySelector('#reciente');
btnReciente.addEventListener("click",orderReciente);
function orderReciente(){
   let reciente = films.sort((a,b) =>{
        if(a.release_date<b.release_date){
            return 1;
        }
        return -1;
    })
    showFilms = reciente;
    showInfoMovies(showFilms);
}
showInfoMovies(showFilms);


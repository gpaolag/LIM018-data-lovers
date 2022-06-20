import data from './data/ghibli/ghibli.js';
import { orderAZ, orderZA, orderAntigua, orderReciente, newArrayPeople, peopleforMovie, SearchDirector, filterSpecie, filterGender, relatedDirector} from './data.js';

//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    })
    
const films = data.films;
const mainmovies = document.querySelector("#carruselPeliculas");
const modal = document.getElementById("modalP");

function showInfoMovies (arrayData){
    mainmovies.innerHTML = "";
    arrayData.forEach((filmsPublished) => {
        const divFilm = document.createElement("div"); //div para cada tarjeta
        divFilm.classList.add("div_content_movies");
        divFilm.innerHTML=`<img src="${filmsPublished.poster}" class="div_img_movie" />
        <b><h3 class="contenedor_section_h3"><p class="films-titles">${filmsPublished.title}</h3></b>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);

      const mainpeople = document.querySelector("#carruselPers_Relacionados");
      const identityMovie = document.getElementById(filmsPublished.id)
        identityMovie.addEventListener("click", ()=>{
          document.getElementById("paginaPrincipal").style.display="none";
          document.getElementById("cabecera").style.display="none";
          document.getElementById("topTres").style.display="none";
          document.getElementById("Peliculas").style.display="flex";
          mainpeople.innerHTML="";
          infoMovie();
          showInfoPeople(peopleforMovie(arrayData,`${filmsPublished.id}`),mainpeople);
        });

        //metodo de info individual de pelicula
        function infoMovie(){
            document.getElementById("posterPelicula").innerHTML= `<img src="${filmsPublished.poster}" class="div_img_movie" />`;
            document.getElementById("tituloPelicula").innerHTML= `<b><h3 ><p class="films-titles">${filmsPublished.title}</h3></b>`;
            document.getElementById("DescripcionPelicula").innerHTML= `  <div class="descripcion_movie"> <h2>${filmsPublished.description}</h2></div>`;
            document.getElementById("director_Individual").innerHTML= `  <h3 class="descripcion_titles">DIRECTOR : </H3> <h2 class="descripcion_movie">${filmsPublished.director}</h2>`;
            document.getElementById("productor_Individual").innerHTML= `  <h3 class="descripcion_titles">PRODUCTOR : </H3> <h2 class="descripcion_movie">${filmsPublished.producer}</h2>`;
            document.getElementById("añoLanzamiento_Individual").innerHTML= `  <h3 class="descripcion_titles">LANZAMIENTO: </H3> <h2 class="descripcion_movie">${filmsPublished.release_date}</h2>`;
            document.getElementById("ranking_Individual").innerHTML= `  <h3 class="descripcion_titles">RANKING : </h3> <h2 class="descripcion_movie">${filmsPublished.rt_score}</h2>`;
            document.getElementById("barraBusqueda").style.display="none";
          }
    });
}

showInfoMovies(films);

/* Permite el funcionamiento del carrusel  */
const carrusel = document.querySelector("#carruselPeliculas");
const flechaIzq = document.querySelector("#flechaIzquierda");
const flechaDer = document.querySelector("#flechaDerecha");
flechaDer.addEventListener("click", ()=>{
  carrusel.scrollLeft += carrusel.offsetWidth;
});
flechaIzq.addEventListener("click", ()=>{
  carrusel.scrollLeft -= carrusel.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */
let btnAZ = document.querySelector('#aZ');
btnAZ.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderAZ(films));
});

let btnZA = document.querySelector('#zA');
btnZA.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderZA(films));
});

let btnAntigua = document.querySelector('#antigua');
btnAntigua.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderAntigua(films));
});

let btnReciente = document.querySelector('#reciente');
btnReciente.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderReciente(films));
});

let ingreso = document.querySelector('#inputBuscar');
  ingreso.addEventListener("keyup",()=>{
    carrusel.scrollLeft=0;
    showInfoMovies(search(films));
    showInfoPeople(searchPeople(newArrayPeople(films),films),mainmovies);
    if(document.getElementById("inputBuscar").value==""){
        showInfoMovies(films);
      }
  });

//metodo para mostrar cualquier personaje
function showInfoPeople (arrayData,mainmovies){
  arrayData.forEach((filmsPublished) => {
      const divFilm = document.createElement("div"); //div para cada tarjeta de personaje
      divFilm.classList.add("div_content_movies");
      divFilm.innerHTML=`<img src="${filmsPublished.img}" class="div_img_movie" />
      <b><h3 class="contenedor_section_h3"><p class="films-titles">${filmsPublished.name}</h3></b>`;
      divFilm.setAttribute("id", filmsPublished.id);
      mainmovies.appendChild(divFilm);

    const peopleclick=document.getElementById(filmsPublished.id);
    const span = document.getElementsByClassName("close")[0];
    span.addEventListener("click",()=>{
      modal.style.display = "none";
    })
    peopleclick.addEventListener("click" , ()=>{
      infoPeople(filmsPublished);
      modal.style.display="block";        
    });
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
}

//arreglo de peliculas destacadas
const principales=[
    {
      "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
      "title": "Howl's Moving Castle",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
      "release_date": "2004"},
    {
      "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
      "title": "Spirited Away",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png",
      "release_date": "2001"},
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988"}];
const bestmovies = document.querySelector("#bestFilms");
//metodo de mostrar peliculas destacadas
function showBestMovies (arrayData){
    bestmovies.innerHTML="";
    arrayData.forEach((filmsPublished) => {
        const div2Film = document.createElement("div"); //div para cada tarjeta
        div2Film.classList.add("div_best_movies");
        div2Film.innerHTML=`<img src="${filmsPublished.poster}" class="img_movie" />
        <div class="best_textos"><h3 class="contenedor_section_h3"><p>${filmsPublished.title}</h3>
      <h2 class="section_h2"> ${filmsPublished.director}</h2>
      <h3 class="contenedor_section_h3"><p>${filmsPublished.release_date}</h3></div>`;
      bestmovies.appendChild(div2Film);
    });
}
showBestMovies(principales);

//vistas de los menus
const peliculas_men=document.getElementById("peliculas_menu");
peliculas_men.addEventListener("click",()=>{
  document.getElementById("paginaPrincipal").style.display="flex";
  document.getElementById("paginaDirectores").style.display="none";
  document.getElementById("Peliculas").style.display="none";
  document.getElementById("cabecera").style.display="none";
  document.getElementById("topTres").style.display="none";
  document.getElementById("contenedorCarrusel").style.width="100%";
  document.getElementById("flechaIzquierda").style.display="none";
  document.getElementById("flechaDerecha").style.display="none";
  document.getElementById("carruselPeliculas").classList.remove("carruselPeliculas");
  document.getElementById("carruselPeliculas").classList.add("carruselPeliculas__pgPeliculas");
  document.getElementById("barraBusqueda").style.display="flex";
  document.getElementById("gender").style.display="none";
  document.getElementById("specie").style.display="none";
  showInfoMovies(films);
  document.getElementById("botonesOrdenar").style.display="block";
});

const personajes_men=document.getElementById("personajes_menu");
personajes_men.addEventListener("click",()=>{
  document.getElementById("paginaPrincipal").style.display="flex";
  document.getElementById("Peliculas").style.display="none";
  document.getElementById("cabecera").style.display="none";
  document.getElementById("topTres").style.display="none";
  document.getElementById("flechaIzquierda").style.display="none";
  document.getElementById("flechaDerecha").style.display="none";
  document.getElementById("paginaDirectores").style.display="none";
  document.getElementById("contenedorCarrusel").style.width="100%";
  document.getElementById("carruselPeliculas").classList.remove("carruselPeliculas");
  document.getElementById("carruselPeliculas").classList.add("carruselPeliculas__pgPeliculas");
  document.getElementById("barraBusqueda").style.display="flex";
  document.getElementById("gender").style.display="flex";
  document.getElementById("specie").style.display="flex";
  mainmovies.innerHTML = "";
  showInfoPeople(newArrayPeople(films),mainmovies);
  document.getElementById("botonesOrdenar").style.display="none";
});

// hover de Directores
let inDirectores = document.getElementById("directores");
inDirectores.addEventListener("mouseenter",()=>{
  document.getElementById("listaDirectores").style.display="flex";
})
let outDirectores = document.getElementById("listaDirectores");
outDirectores.addEventListener("mouseleave",()=>{
  document.getElementById("listaDirectores").style.display="none";
})

//funciones de Busqueda
function search(films){
    let showFilms = films;
  let resultado = films.filter( all => 
    `${all.title.toLowerCase()} ${all.director.toLowerCase()} ${all.producer.toLowerCase()} ${all.release_date.toLowerCase()}`.includes(document.querySelector('#inputBuscar').value.toLowerCase()));
  showFilms = resultado;
  return showFilms;
}

function searchPeople(arrayIngreso,films){
    let showFilms2 = films;
    let resultado = arrayIngreso.filter( all => 
      `${all.name.toLowerCase()} `.includes(document.querySelector('#inputBuscar').value.toLowerCase()));
    showFilms2 = resultado;
    return showFilms2;
  }

//Arreglo para página de Directores
const directores =[
{
  "id":"dir1",
  "name": "Hayao Miyazaki",
  "description": "Es uno de los fundadores de Studio Ghibli, junto con Isao Takahada. Dentro de sus ocupaciones encontramos director de cine de animación, animador, ilustrador, mangaka y productor de anime japonés de renombre. <br> Dentro de sus filmes de animación más populares podemos encontrar El viaje de Chihiro, Mi Vecino Totoro,  La princesa Mononoke y otros más.",
  "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg"
},
{
  "id":"dir2",
  "name": "Isao Takahata",
  "description": "Fue un director, escritor, productor y guionista japones. Fue, junto a Hayao Miyazaki fundador de Studio Ghibli. El cuento de la princesa Kaguya (2013), fue su última película, y la misma estuvo nominada en la categoría de mejor película de animación en los 87.º Premios Óscar.",
  "img": "http://pm1.narvii.com/6365/aad8c69e3a811ccabf0439a2a2a0fae70ebaebac_00.jpg"
},
{
  "id":"dir3",
  "name": "Tomomi Mochizuki",
  "description": "Es un artista japonés de guiones gráficos, guionista y director, conocido por haber colaborado con estudios de animación líderes como Studio Ghibli, Nippon Animation, Pierrot y Sunrise. A veces usa el alias Gō Sakamoto cuando escribe guiones o trabaja en guiones gráficos.",
  "img": "https://desucon.fi/media/uploads/16506079029782.jpg"
},
{
  "id":"dir4",
  "name": "Yoshifumi Kondō",
  "description": "Fue un animador japonés que trabajó para Studio Ghibli en sus últimos años. Se esperaba que se convirtiera en uno de los principales directores de Ghibli, junto a Hayao Miyazaki y Isao Takahata pero murió por un aneurisma en 1998. Tenía apenas 47 años de edad. También trabajo como supervisor de animación y diseñador de personajes en el departamento de animación de Ghibli.",
  "img": "https://image.tmdb.org/t/p/w235_and_h235_face/kMGHxgP7tz4diYcGp4P4a7sHsBC.jpg"
},
{
  "id":"dir5",
  "name": "Hiroyuki Morita",
  "description": "Es un director y animador japonés. Es mejor conocido por trabajar en la película Haru en el reino de los gatos, así como por hacer animación clave para la producción de Mis vecinos los Yamada y la animación de Nicky, la aprendiz de bruja.",
  "img": "https://images.moviefit.me/p/o/34421-hiroyuki-morita.jpg"
},
{
  "id":"dir6",
  "name": "Gorō Miyazaki",
  "description": "Es un arquitecto, director, animador y guionista de animación japonesa. Es también el hijo de Hayao Miyazaki. Inicialmente era reacio a seguir los pasos de su padre y se dedicó al paisajismo antes que a la animación. Sin embargo, después que Toshio Suzuki le convenciera para trabajar en el Museo Ghibli, empezó a relacionarse con el Studio Ghibli.",
  "img": "https://image.tmdb.org/t/p/w500/44FdzDvvVhhiPT3xJXRLnfVgFbs.jpg"}];


//metodo de info individual de directores

const mainDirectores = document.getElementById("paginaDirectores");

function showDirector(dataDirector){
    mainDirectores.innerHTML ="";
    dataDirector.forEach((allDirectors) =>{
        const divDirector = document.createElement("div");
        divDirector.classList.add("contenedorGlobalDirectores");
        divDirector.innerHTML=`<div  id="nombreDirectores__paginaDirectores" class="titulos">${allDirectors.name}</div>
        <div id="contDirector">
            <img id="imgDirector" class="imgDirector" src="${allDirectors.img}"/>
            <b><h3 id="descriptionDirector" class="descriptionDirector">${allDirectors.description}</h3></b>
        </div>
        <div id="contRelacionado__PgDirectores" class="contRelacionado__PgDirectores">
            <div class="relacionadasDirectores titulos" id="relacionadasDirectores">PELICULAS DIRIGIDAS</div>
            <div id="contRelacionadasDirectores" class="contRelacionadasDirectores"></div>
        </div>`;
        divDirector.setAttribute("id", allDirectors.id);
        mainDirectores.appendChild(divDirector);
    });
}

const dir1 = document.getElementById("dir1");
dir1.addEventListener("click",() =>{
  pgDirectores("Hayao Miyazaki");
});
const dir2 = document.getElementById("dir2");
dir2.addEventListener("click",() =>{
  pgDirectores("Isao Takahata");
});
const dir3 = document.getElementById("dir3");
dir3.addEventListener("click",() =>{
  pgDirectores("Tomomi Mochizuki");
});
const dir4 = document.getElementById("dir4");
dir4.addEventListener("click",() =>{
  pgDirectores("Yoshifumi Kondō");
});
const dir5 = document.getElementById("dir5");
dir5.addEventListener("click",() =>{
  pgDirectores("Hiroyuki Morita");
});
const dir6 = document.getElementById("dir6");
dir6.addEventListener("click",() =>{
  pgDirectores("Gorō Miyazaki");
});

function pgDirectores(name){
  document.getElementById("paginaDirectores").style.display="flex";
  document.getElementById("paginaPrincipal").style.display="none";
  document.getElementById("Peliculas").style.display="none";
  document.getElementById("cabecera").style.display="none";
  document.getElementById("topTres").style.display="none";
  document.getElementById("botonesOrdenar").style.display="none";
  document.getElementById("gender").style.display="none";
  document.getElementById("specie").style.display="none";
  document.getElementById("barraBusqueda").style.display="none";
  let arregloDirectores = SearchDirector(directores, name);
  showDirector(arregloDirectores);
  showRelatedFilms(relatedDirector(films, name));
}


let btnGender = document.getElementById("gender");
btnGender.addEventListener("click",()=>{
  mainmovies.innerHTML = "";
  let arrayPeople = filterGender(newArrayPeople(films));
  showInfoPeople(arrayPeople, mainmovies);
})

let btnSpecie = document.getElementById("specie");
btnSpecie.addEventListener("click",()=>{
  mainmovies.innerHTML = "";
  let arrayPeople = filterSpecie(newArrayPeople(films));
  showInfoPeople(arrayPeople, mainmovies);
})

//metodo para las vistas de personajes

function infoPeople(filmsPublished){
  document.getElementById("nombre").innerHTML=`${filmsPublished.name}`;
  document.getElementById("genero").innerHTML=`${filmsPublished.gender}`;
  document.getElementById("edad").innerHTML=`${filmsPublished.age}`;
  document.getElementById("color_ojos").innerHTML=`${filmsPublished.eye_color}`;
  document.getElementById("color_cabello").innerHTML=`${filmsPublished.hair_color}`;
  document.getElementById("especie").innerHTML=`${filmsPublished.specie}`;
}

//metodo para peliculas relacionadas 

function showRelatedFilms(relatedData){
  let contRelated = document.getElementById("contRelacionadasDirectores");
  mainmovies.innerHTML = "";
  relatedData.forEach((relatedFilms) => {
      const divFilm = document.createElement("div"); //div para cada tarjeta
      divFilm.classList.add("div_content_movies");
      divFilm.innerHTML=`<img src="${relatedFilms.img}" class="div_img_movie" />
      <b><h3 class="contenedor_section_h3"><p class="films-titles">${relatedFilms.title}</h3></b>`;
      divFilm.setAttribute("id", relatedFilms.name);
      contRelated.appendChild(divFilm);
})}
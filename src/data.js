import data from './data/ghibli/ghibli.js';
const films = data.films;
let showFilms = films;


export function orderAZ(){
   let aZ = films.sort((a,b) =>{
        if(a.title>b.title){
            return 1;
        }
        return -1;
    })
    showFilms = aZ;
    return showFilms;
}

export function orderZA(){
   let zA = films.sort((a,b) =>{
        if(a.title<b.title){
            return 1;
        }
        return -1;
    })
    showFilms = zA;
    return showFilms;
}

export function orderAntigua(){
   let antigua = films.sort((a,b) =>{
        if(a.release_date>b.release_date){
            return 1;
        }
        return -1;
    })
    showFilms = antigua;
    return showFilms;
}

export function orderReciente(){
   let reciente = films.sort((a,b) =>{
        if(a.release_date<b.release_date){
            return 1;
        }
        return -1;
    })
    showFilms = reciente;
    return showFilms;
}

export function search(){
    let txtIngresado = document.querySelector('#inputBuscar').value;
    let resultado = films.filter( x => 
      `${x.title.toLocaleLowerCase()} ${x.director.toLocaleLowerCase()} ${x.producer.toLocaleLowerCase()} 
      ${x.release_date.toLocaleLowerCase()} ${x.rt_score.toLocaleLowerCase()}`.includes(txtIngresado.toLowerCase()));
    showFilms = resultado;
    return showFilms;
  }
  
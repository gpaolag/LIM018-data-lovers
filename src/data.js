import data from './data/ghibli/ghibli.js';
const films = data.films;
let showFilms = films;
let showFilms2 = films;


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

export function newArrayPeople(){
    let peoplelist=[];
    for(let i=0; i<films.length; i++){
        for(let j=0;j<films[i].people.length;j++){
            let variable = {"id": `${films[i].people[j].id}`,
                            "name": `${films[i].people[j].name}`,
                            "img": `${films[i].people[j].img}`};
            peoplelist.push(variable);
        }}
    return peoplelist;
}


export function search(){
  let resultado = films.filter( all => 
    `${all.title.toLowerCase()} ${all.director.toLowerCase()} ${all.producer.toLowerCase()} ${all.release_date.toLowerCase()}`.includes(document.querySelector('#inputBuscar').value.toLowerCase()));
  showFilms = resultado;
  return showFilms;
}

export function searchPeople(arrayIngreso){
    let resultado = arrayIngreso.filter( all => 
      `${all.name.toLowerCase()} `.includes(document.querySelector('#inputBuscar').value.toLowerCase()));
    showFilms2 = resultado;
    return showFilms2;
  }
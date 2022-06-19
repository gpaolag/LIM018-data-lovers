export function orderAZ(films){
    let showFilms = films;
   let aZ = films.sort((a,b) =>{
        if(a.title>b.title){
            return 1;
        }
        return -1;
    })
    showFilms = aZ;
    return showFilms;
}

export function orderZA(films){
    let showFilms = films;
   let zA = films.sort((a,b) =>{
        if(a.title<b.title){
            return 1;
        }
        return -1;
    })
    showFilms = zA;
    return showFilms;
}

export function orderAntigua(films){
    let showFilms = films;
   let antigua = films.sort((a,b) =>{
        if(a.release_date<b.release_date){
            return -1;
        }
        return 1;
    })
    showFilms = antigua;
    return showFilms;
}

export function orderReciente(films){
    let showFilms = films;
   let reciente = films.sort((a,b) =>{
        if(a.release_date<b.release_date){
            return 1;
        }
        return -1;
    })
    showFilms = reciente;
    return showFilms;
}

export function newArrayPeople(films){
    let peoplelist=[];
    for(let i=0; i<films.length; i++){
        for(let j=0;j<films[i].people.length;j++){
            let variable = {"id": `${films[i].people[j].id}`,
                            "gender": `${films[i].people[j].gender}`,
                            "specie": `${films[i].people[j].specie}`,
                            "name": `${films[i].people[j].name}`,
                            "img": `${films[i].people[j].img}`};
            peoplelist.push(variable);
        }}
    return peoplelist;
}

export function peopleforMovie(films, id){
    let peoplelist=[];
     for(let i=0; i<films.length; i++){
       if(films[i].id==id){
         for(let j=0;j<films[i].people.length;j++){
             let variable = {"id": `${films[i].people[j].id}`,
                             "name": `${films[i].people[j].name}`,
                             "img": `${films[i].people[j].img}`};
             peoplelist.push(variable);
         }
       }
     }
     return peoplelist;
 }

 
 export function SearchDirector(directores, id){
    let newDirector=[];
    for(let i=0;i<directores.length; i++){
        if(directores[i].id == id){
            let arrayDirect ={"id":`${directores[i].id}`,
                          "name":`${directores[i].name}`,
                          "description":`${directores[i].description}`,
                          "img":`${directores[i].img}`};
            newDirector.push(arrayDirect);
        }
     }
     return newDirector;
}

 export function filterSpecie(peoplelist){
    let orderSpecie = [];
    let newOrder = peoplelist.sort((a,b) =>{
        if(a.specie>b.specie){
            return 1;
        }if(a.specie<b.specie){
            return -1;
        }
        return 0;
    })
    orderSpecie = newOrder;
    return orderSpecie;
}

export function filterGender(peoplelist){
    let orderGender = [];
    let newOrder = peoplelist.sort((a,b) =>{
        if(a.gender>b.gender){
            return 1;
        }if(a.gender<b.gender){
            return -1;
        }
        return 0;
    })
    orderGender = newOrder;
    return orderGender;
}
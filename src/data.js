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
        if(a.release_date>b.release_date){
            return 1;
        }
        return -1;
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
                            "name": `${films[i].people[j].name}`,
                            "img": `${films[i].people[j].img}`};
            peoplelist.push(variable);
        }}
    return peoplelist;
}

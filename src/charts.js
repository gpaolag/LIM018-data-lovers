//metodo para crear gráficas
 export function chartFilms (films, mainchart){
    const titles=films.map(x => x.title);
    const ranking = films.map(x => x.rt_score);
    // eslint-disable-next-line no-undef
    let chartMovies = new Chart(mainchart,{
      type:"bar",
          data:{
              labels:titles,
              datasets:[{
                    label:"RANKING DE SUS PELICULAS",
                    data:ranking,
                    backgroundColor:["#070065"],
              }]
    }})
    return chartMovies;
  }
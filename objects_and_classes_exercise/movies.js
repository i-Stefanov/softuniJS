function movies(moviesList) {
  let movies = {};
  let movieName = ``;
  let onDate = ``;
  let director = ``;
  for (let i = 0; i < moviesList.length; i++) {
    let movieInfo = moviesList[i].split(` `);
    if (movieInfo[0] === "addMovie") {
      movies[movieName] = movieInfo[1];
      console.log(movies);
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

function movies(moviesList) {
  let movies = [];

  moviesList.forEach((movieInfo) => {
    if (movieInfo.includes("addMovie ")) {
      let name = movieInfo.split(`addMovie `)[1];
      movies.push({ name });
    } else if (movieInfo.includes("onDate")) {
      let [name, date] = movieInfo.split(" onDate ");
      let movie = movies.find((el) => el.name === name);
      if (movie) {
        movie.date = date;
      }
    } else if (movieInfo.includes(" directedBy ")) {
      // console.log(movieInfo.split(" directedBy "));
      let [name, director] = movieInfo.split(" directedBy ");
      let movie = movies.find((el) => el.name === name);
      // console.log(movie);
      if (movie) {
        movie.director = director;
      }
    }
  });
  movies.forEach((movie) => {
    if (movie.name && movie.date && movie.director) {
      console.log(JSON.stringify(movie));
    }
  });
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

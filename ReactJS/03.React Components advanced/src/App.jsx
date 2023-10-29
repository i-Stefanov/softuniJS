import { useEffect, useState } from "react";
// import { movies as moviesData } from "../public/movies";
import MovieList from "./components/MovieList";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5173/movies.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.movies);
      });
  }, []);
  const onMovieDelete = (id) => {
    // the oldMovieList is the mvies array but in order to change it we use different name
    setMovies((oldMovieList) => oldMovieList.filter((x) => x.id !== id));
  };
  const onMovieSelect = (id) => {
    //check all the movies in the state (movies array) if their id matches the selected id and add selected key with value true to the movie object else return the movie unchanged
    setMovies((state) =>
      state.map(
        (movie) => ({ ...movie, selected: movie.id === id }) // after each click on the select button changes the selected value in each movie to be equalt to movie.id === id (true or false)
        //* movie.id === id ? { ...movie, selected: true } : movie - doesn't rerender all the movies and if one is selected it stays selected even if another movie is selected
      )
    );
  };

  return (
    <>
      <MovieList
        movies={movies}
        onMovieDelete={onMovieDelete}
        onMovieSelect={onMovieSelect}
      />
      <h1>Movie collection!</h1>
    </>
  );
}

export default App;

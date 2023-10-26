import { useState } from "react";
import { movies as moviesData } from "../public/movies";
import MovieList from "./components/MovieList";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const onMovieDelete = (id) => {
    // the oldMovieList is the mvies array but in order to change it we use different name
    setMovies((oldMovieList) => oldMovieList.filter((x) => x.id !== id));
  };

  return (
    <>
      <MovieList movies={movies} onMovieDelete={onMovieDelete} />
      <h1>Movie collection!</h1>
    </>
  );
}

export default App;

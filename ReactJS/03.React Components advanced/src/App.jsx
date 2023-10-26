import { useState } from "react";
import { movies } from "../public/movies";
import MovieList from "./components/MovieList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MovieList movies={movies.slice(0, 10)} />
      <h1>Movie collection!</h1>
    </>
  );
}

export default App;

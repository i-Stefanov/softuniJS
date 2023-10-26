import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./assets/movies";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <h1>My first dynamic react app</h1>
      <Timer startTime={5} />
      <MovieList movies={movies} headingText="Movie List!!!" />
    </div>
  );
}

export default App;

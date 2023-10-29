import React from "react";
import Movie from "./Movie";

// {movies} is the destructured props object from the MovieList component in the app.jsx file
export default function MovieList({ movies, onMovieDelete, onMovieSelect }) {
  let movieElements = [];
  //   for (const movie of movies) {
  // movieElements.push(React.createElement(Movie, movie));
  //* for each movie in the list movies create a component Movie with props the spreaded movie object
  //     movieElements.push(
  //       <li>
  //         <Movie {...movie} />
  //       </li>
  //     );
  //   }
  //   const firstMovie = movies[0];
  return (
    <ul>
      {movies.map((movie) => (
        // the key should be a uznique value for each element that is repetative
        // the key should be in the element which is the parent  (wraper) in this case li element
        <li key={movie.id}>
          <Movie
            {...movie}
            onMovieDelete={onMovieDelete}
            onMovieSelect={onMovieSelect}
          />
        </li>
      ))}
    </ul>
  );
  //   return (
  //     <Movie
  //       {...firstMovie}
  //! using the spread operator to pass props to the component works the same as the code below
  //   title={firstMovie.title}
  //   director={firstMovie.director}
  //   year={firstMovie.year}
  //   plot={firstMovie.plot}
  //   posterUrl={firstMovie.posterUrl}
  // />
  //   );
}

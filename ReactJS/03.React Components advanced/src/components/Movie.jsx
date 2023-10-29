import { useEffect } from "react";
import styeles from "./Movie.module.css";

export default function Movie({
  id,
  title,
  year,
  plot,
  posterUrl,
  director,
  onMovieDelete,
  onMovieSelect,
  selected,
}) {
  // the [] as a second parameter means that we want the code in the hook to be executed only one single time when the components are rendered
  useEffect(() => {
    console.log(`Movie ${title} mounted.`);
  }, []);
  // useEffect monitors the values in the array for a change and then executes the code inside itself
  useEffect(() => {
    console.log(`Movie ${title} updated.`);
  }, [selected]);
  // executes when element is unmounted (deleted from the dom)
  useEffect(() => {
    return () => console.log(`Movie ${title} unmounted.`);
  }, []);
  return (
    <article className={styeles["movie-article"]}>
      <h2>{title}</h2>
      <h3> Year: {year}</h3>
      {/* if the movie has the key selected equal to true then render <h3>Selected</h3> */}
      {selected && <h3>Selected</h3>}
      <div>
        <p>{plot}</p>
        <img src={posterUrl} alt={title} />
      </div>
      <footer>
        <p>Director: {director}</p>
        <button onClick={() => onMovieDelete(id)}>Delete</button>
        <button onClick={() => onMovieSelect(id)}>Select</button>
      </footer>
    </article>
  );
}

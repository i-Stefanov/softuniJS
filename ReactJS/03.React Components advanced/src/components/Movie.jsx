export default function Movie({
  id,
  title,
  year,
  plot,
  posterUrl,
  director,
  onMovieDelete,
}) {
  return (
    <article>
      <h2>{title}</h2>
      <h3> Year: {year}</h3>
      <div>
        <p>{plot}</p>
        <img src={posterUrl} alt={title} />
      </div>
      <footer>
        <p>Director: {director}</p>
        <button onClick={() => onMovieDelete(id)}>Delete</button>
      </footer>
    </article>
  );
}

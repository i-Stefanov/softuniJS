export default function Movie({ title, year, plot, posterUrl, director }) {
  return (
    <article>
      <h2>{title}</h2>
      <h3> Year: {year}</h3>
      <div>
        <p>{plot}</p>
        <img src={posterUrl} alt={title} />
      </div>
      <footer>Director: {director}</footer>
    </article>
  );
}

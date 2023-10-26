import Movie from "./Movie";
import Heading from "./Heading";
export default function MovieList(props) {
  return (
    <div>
      {/* the text between the open and close tag of the Heading element is the value of the key children in the props object */}
      <Heading>Some text here!</Heading>
      <ul>
        <li>{<Movie data={props.movies[0]} />}</li>
        <li>{<Movie data={props.movies[1]} />}</li>
        <li>{<Movie data={props.movies[2]} />}</li>
        <li>{<Movie data={props.movies[3]} />}</li>
      </ul>
    </div>
  );
}

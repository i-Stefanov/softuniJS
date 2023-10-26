export default function Heading(props) {
  // every props object has the key children without adding it
  return <h2 className="site-header">{props.children}</h2>;
}

import { ListGroup, Button } from "react-bootstrap";

export default function TodoItem({ todo }) {
  return (
    <ListGroup.Item action variant="info">
      {todo.text}
      <Button variant="dark">X</Button>
    </ListGroup.Item>
  );
}

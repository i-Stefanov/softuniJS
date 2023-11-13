import { ListGroup, Button } from "react-bootstrap";

export default function TodoItem({ todo, onTodoDeleteClick }) {
  return (
    <ListGroup.Item
      action
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {todo.text}
      <Button variant="dark" onClick={() => onTodoDeleteClick(todo._id)}>
        X
      </Button>
    </ListGroup.Item>
  );
}

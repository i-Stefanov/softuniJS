import { ListGroup, Button } from "react-bootstrap";

import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { onTodoDeleteClick } = useContext(TodoContext);
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

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onTodoAddClick, onTodoDeleteClick }) {
  return (
    <div className="col-sm-3" style={{ margin: "20px auto" }}>
      <h1>Todo list</h1>
      <ListGroup>
        {todos.map(
          (todo) =>
            todo && (
              <TodoItem
                onTodoDeleteClick={onTodoDeleteClick}
                key={todo._id}
                todo={todo}
              />
            )
        )}
      </ListGroup>
      <Button
        variant="primary"
        style={{ marginTop: "15px" }}
        onClick={onTodoAddClick}
      >
        Add todo
      </Button>
    </div>
  );
}

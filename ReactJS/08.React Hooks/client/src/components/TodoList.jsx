import ListGroup from "react-bootstrap/ListGroup";

export default function TodoList({ todos }) {
  return (
    <div className="col-sm-3" style={{ margin: "20px auto" }}>
      <h1>Todo list</h1>
      <ListGroup>
        {todos.map(
          (todo) =>
            todo && (
              <ListGroup.Item key={todo._id} action variant="info">
                {todo.text}
              </ListGroup.Item>
            )
        )}
      </ListGroup>
    </div>
  );
}

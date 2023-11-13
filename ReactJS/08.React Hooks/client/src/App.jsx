import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";

function App() {
  const baseUrl = "http://localhost:3030/jsonstore/todos";
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((result) => {
        setTodos(Object.values(result));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onTodoAddSubmit = async (values) => {
    console.log(values);
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    setShowAddTodo(false);
    setTodos((state) => [...state, result]);
  };
  const onTodoAddClick = () => {
    setShowAddTodo(true);
  };
  const hideModal = () => {
    setShowAddTodo(false);
  };

  return (
    <>
      <Header />

      <TodoList onTodoAddClick={onTodoAddClick} todos={todos} />
      <AddTodoModal
        onTodoAddSubmit={onTodoAddSubmit}
        show={showAddTodo}
        hideModal={hideModal}
      />
    </>
  );
}

export default App;

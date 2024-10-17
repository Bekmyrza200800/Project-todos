import { useState } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const heandleCreateTodo = (inputValue) => {
    const newTodo = {
      title: inputValue,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const heandleDeleteTodo = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  const heandleCompleteTodo = (todoId) => {
    setTodos(
      todos.map((item) =>
        item.id === todoId ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const heandleClearAllTodo = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <TodoForm onSubmit={heandleCreateTodo} onClear={heandleClearAllTodo} />
      <TodoList
        todos={todos}
        onDelete={heandleDeleteTodo}
        onComplete={heandleCompleteTodo}
      />
    </div>
  );
}

export default App;

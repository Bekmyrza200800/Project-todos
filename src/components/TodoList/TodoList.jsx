import Button from "../button/Button";
import "./TodoList.css";

export default function TodoItem({ todos, onDelete, onComplete }) {
  return (
    <div className="todo-list-main">
      {todos?.map((item) => (
        <div key={item.id} className="todo-item">
          <Button variant="red" onClick={() => onDelete(item.id)}>
            delete
          </Button>
          <p
            className={`todo-title ${item.completed && "completed"}`}
            onClick={() => onComplete(item.id)}
          >
            {item.title}
          </p>
        </div>
      ))}

      {todos.length === 0 && (
        <p className="empty-text">
          ¯\_(ツ)_/¯ <br />
          No todos yet...
        </p>
      )}
    </div>
  );
}

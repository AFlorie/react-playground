import React from "react";

export function TodoItem({ todo, toggleCompleted, handleDelete }) {
  console.log("test", todo.isCompleted);
  return (
    <div className="lign">
      <div className={`${todo.isCompleted ? "completed" : "notCompleted"}`}>
        {todo.isCompleted === false ? "Not completed" : "Completed"}
      </div>
      <button
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {!todo.isCompleted ? "Done" : "Undo"}{" "}
      </button>
      <button
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        X
      </button>
    </div>
  );
}

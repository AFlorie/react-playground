import React from "react";
import { TodoItem, TodoInput } from ".";

export function TodoList({
  list,
  toggleCompleted,
  handleDelete,
  handleDoubleClick,
  showInput,
  handleEdit,
  handleEditKey,
}) {
  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          <div className="liste">
            <span
              onDoubleClick={() => handleDoubleClick(todo.id)}
              className={`${todo.isCompleted ? "done" : "undone"}`}
            >
              {todo.title}{" "}
            </span>
            <TodoItem
              todo={todo}
              toggleCompleted={toggleCompleted}
              handleDelete={handleDelete}
            />
            {showInput.show && showInput.id === todo.id && (
              <input
                type="text"
                value={todo.title}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                onKeyDown={(e) => handleEditKey(e)}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

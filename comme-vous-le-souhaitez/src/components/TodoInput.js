import React from "react";

export function TodoInput({ newToDo, setNewToDo, handleKey }) {
  return (
    <input
      value={newToDo.title}
      onKeyDown={(e) => handleKey(e)}
      onChange={(e) => {
        setNewToDo({ ...newToDo, title: e.target.value });
      }}
    />
  );
}

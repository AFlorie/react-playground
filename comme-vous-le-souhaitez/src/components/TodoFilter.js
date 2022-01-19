import React from "react";

export function TodoFilter({ handleFilter }) {
  return (
    <div className="filterContainer">
      <button onClick={() => handleFilter("none")}>All</button>
      <button onClick={() => handleFilter("done")}>Completed</button>
      <button onClick={() => handleFilter("to do")}>To Do</button>
    </div>
  );
}

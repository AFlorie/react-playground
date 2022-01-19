import { useState, useEffect } from "react";
import { TodoInput, TodoList, TodoFilter } from "./components/";
import "./App.css";

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newToDo, setNewToDo] = useState({
    id: 0,
    title: "",
    isCompleted: false,
    isEditing: false,
  });
  const [filteredList, setFilteredList] = useState([]);
  const [showInput, setShowInput] = useState({ show: false, id: null });

  useEffect(() => {
    setFilteredList(toDoList);
  }, [toDoList]);

  const handleKey = (e) => {
    if (e.key === "Escape") {
      setNewToDo({ ...newToDo, title: "" });
    }
    if (e.key === "Enter" && newToDo.title !== "") {
      setNewToDo((item) => ({ ...newToDo, id: item.id + 1 }));
      setTodoList([...toDoList, newToDo]);
      setNewToDo((item) => ({ ...newToDo, title: "", id: item.id }));
    }
  };

  const toggleCompleted = (id) => {
    setTodoList(
      toDoList.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    let test = toDoList.filter((item) => item.id !== id);
    setTodoList(test);
  };

  const handleFilter = (filter) => {
    switch (filter) {
      case "done":
        setFilteredList(toDoList.filter((item) => item.isCompleted === true));
        break;
      case "to do":
        setFilteredList(toDoList.filter((item) => item.isCompleted === false));
        break;
      case "none":
        setFilteredList(toDoList);
        break;
      default:
        break;
    }
  };

  const handleDoubleClick = (id) => {
    setShowInput({ show: true, id });
  };

  const handleEditKey = (e) => {
    if (e.key === "Enter") {
      handleEdit();
      setShowInput({ show: false, id: null });
    }
  };

  const handleEdit = (id, value) => {
    setTodoList(
      toDoList.map((todo) => {
        if (todo.id === id) {
          todo.title = value;
        }
        return todo;
      })
    );
  };

  const handleDeleteDone = () => {
    let test = toDoList.filter((item) => item.isCompleted === false);
    setTodoList(test);
  };

  return (
    <div className="App">
      <div>
        {" "}
        <TodoInput
          newToDo={newToDo}
          setNewToDo={setNewToDo}
          handleKey={handleKey}
        />
        <button onClick={handleDeleteDone}>Remove completed task(s)</button>
      </div>
      <TodoFilter handleFilter={handleFilter} />
      <TodoList
        list={filteredList}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
        showInput={showInput}
        handleEdit={handleEdit}
        handleEditKey={handleEditKey}
      />
    </div>
  );
}

export default App;

import styles from "./AddTodo.module.css";

import { MdAddBox } from "react-icons/md";

import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kv-row">
        <div className="col-12 col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-12 col-sm-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-12 col-sm-2">
          <button
            type="button"
            className="btn btn-success kv-button"
            onClick={handleAddButtonClicked}
          >
            ADD
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

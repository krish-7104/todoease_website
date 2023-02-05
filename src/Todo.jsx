import React from "react";
import "./styles/Todo.css";
import { MdDeleteOutline } from "react-icons/md";
const Todo = (props) => {
  return (
    <div className="individualTodo">
      <p className="todoText">{props.todo}</p>
      <button
        className="removeTodoBtn"
        onClick={() => props.removeTodoHandler(props.todo)}
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
};

export default Todo;

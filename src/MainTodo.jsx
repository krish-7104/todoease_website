import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { MdAdd } from "react-icons/md";
import "./styles/MainTodo.css";
import Todo from "./Todo";
import { motion } from "framer-motion";

const MainTodo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodoLocal();
  }, []);

  useEffect(() => {
    setTodoLocal();
  }, [todos]);

  const getTodoLocal = () => {
    const value = localStorage.getItem("todos");
    if (value !== null) {
      setTodos(JSON.parse(value));
    } else {
      setTodos([]);
    }
  };

  const setTodoLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todoInput]);
    setTodoInput("");
    setTodoLocal();
  };

  const removeTodoHandler = (value) => {
    console.log(todos.filter((x) => x !== value));
    setTodos(todos.filter((x) => x !== value));
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="todoContainer">
      <p className="todoDivTitle">Your Todo's</p>
      <motion.div
        className="todoShowDiv"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {todos &&
          todos.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                key={index}
                removeTodoHandler={removeTodoHandler}
              />
            );
          })}
        {todos.length === 0 && (
          <div className="noTodoDiv">
            <img
              src={require("./assets/noTodo.webp")}
              className="noTodoImage"
              alt="No Todo"
            />
            <p className="noTodo">
              Maximize Your Productivity : Create Todo List!
            </p>
          </div>
        )}
      </motion.div>

      <form className="todoInputDiv">
        <input
          type="text"
          className="addTodoInput"
          value={todoInput}
          placeholder="Add Todo Here"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="addTodoBtn" type="submit" onClick={addTodoHandler}>
          <MdAdd />
        </button>
      </form>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default MainTodo;

import React from "react";
import "./styles/Todo.css";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Todo = (props) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="individualTodo" variants={item}>
      <p className="todoText">{props.todo}</p>
      <motion.button
        className="removeTodoBtn"
        onClick={() => props.removeTodoHandler(props.todo)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MdDeleteOutline />
      </motion.button>
    </motion.div>
  );
};

export default Todo;

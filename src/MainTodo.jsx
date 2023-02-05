import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { MdAdd } from "react-icons/md";
import "./styles/MainTodo.css";
import Todo from "./Todo";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./backend/config";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
const MainTodo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          name: user.displayName,
          uid: user.uid,
        });
        getTodoDatabase(user.uid);
      } else {
        getTodoLocal();
      }
    });
  }, []);

  useEffect(() => {
    setTodoLocal();
    userData && removeTodoDatabase(userData.uid);
  }, [todos]);

  const getTodoDatabase = async (uid) => {
    const docRef = doc(db, "userTodos", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTodos(docSnap.data().todos);
    } else {
    }
  };

  const removeTodoDatabase = async (uid) => {
    const removeTodo = doc(db, "userTodos", uid);
    const docSnap = await getDoc(removeTodo);
    if (docSnap.exists()) {
      await updateDoc(removeTodo, {
        todos,
        timestamp: serverTimestamp(),
      });
    } else {
      setTodoDatabase();
    }
  };

  const setTodoDatabase = async () => {
    await setDoc(doc(db, "userTodos", userData.uid), {
      todos,
      timestamp: serverTimestamp(),
    });
  };

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
  const removeAllTodoHandler = () => {
    setTodos([]);
  };
  return (
    <div className="todoContainer">
      <p className="todoDivTitle">Your Todo's</p>
      <div className="todoShowDiv">
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
              src={require("./assets/noTodo.png")}
              className="noTodoImage"
              alt="No Todo"
            />
            <p className="noTodo">
              Maximize Your Productivity : Create Todo List!
            </p>
          </div>
        )}
      </div>

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

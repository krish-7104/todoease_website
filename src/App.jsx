import React from "react";
import Navbar from "./Navbar";
import "./styles/App.css";
import MainTodo from "./MainTodo";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainTodo />
    </div>
  );
};

export default App;

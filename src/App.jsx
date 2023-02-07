import React from "react";
import Navbar from "./Navbar";
import "./styles/App.css";
import MainTodo from "./MainTodo";
import Footer from "./Footer";
import AppPopup from "./AppPopup";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainTodo />
      <Footer />
      <AppPopup />
    </div>
  );
};

export default App;

import React from "react";
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <p className="navTitle">TodoEase</p>
      <div className="navBtns">
        <button className="loginNavBtn">Login</button>
        <button className="signupNavBtn">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;

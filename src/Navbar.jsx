import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <p className="navTitle">TodoEase</p>
      <div>
        <button className="loginNavBtn">Login</button>
        <button className="signupNavBtn">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;

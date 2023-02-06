import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";
import { HiOutlineDownload } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation();
  return (
    <div className="navContainer">
      <p className="navTitle" onClick={() => navigate("/")}>
        TodoEase
      </p>
      {path.pathname !== "/app" && (
        <button className="appDownBtn" onClick={() => navigate("/app")}>
          Download App{" "}
          <span className="downIcon">
            <HiOutlineDownload />
          </span>
        </button>
      )}
      {path.pathname === "/app" && (
        <button className="appBackBtn" onClick={() => navigate("/")}>
          <span className="backIcon">
            <BiArrowBack />
          </span>
          Back Home
        </button>
      )}
    </div>
  );
};

export default Navbar;

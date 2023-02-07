import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";
import { HiOutlineDownload } from "react-icons/hi";
import { BiArrowToRight } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation();
  return (
    <div className="navContainer">
      <p className="navTitle" onClick={() => navigate("/")}>
        TodoEase
      </p>
      {path.pathname !== "/" && (
        <button className="appDownBtn" onClick={() => navigate("/")}>
          Download App{" "}
          <span className="downIcon">
            <HiOutlineDownload />
          </span>
        </button>
      )}
      {path.pathname === "/" && (
        <button className="appBackBtn" onClick={() => navigate("/web")}>
          Todo Web
          <span className="backIcon">
            <BiArrowToRight />
          </span>
        </button>
      )}
    </div>
  );
};

export default Navbar;

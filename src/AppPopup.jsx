import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AppPopup.css";
const AppPopup = () => {
  const navigate = useNavigate();
  return (
    <div className="popupApp" onClick={() => navigate("/")}>
      <img
        src={require("./assets/logo.png")}
        alt="logo"
        srcset=""
        className="logoPopup"
      />
      <span className="divider"></span>
      <div className="textPopupArea">
        <p className="popupTitle">Todo Ease App</p>
        <p className="popupSubTitle">Download Now</p>
      </div>
    </div>
  );
};

export default AppPopup;

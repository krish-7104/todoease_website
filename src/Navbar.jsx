import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./backend/config";
import toast from "react-hot-toast";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [userData, setUserData] = useState();
  const [path, setPath] = useState("");
  const root = useLocation();

  useEffect(() => {
    setPath(root.pathname);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          name: user.displayName,
          uid: user.uid,
        });
      } else {
      }
    });
  }, []);

  const googleSignInHandler = () => {
    toast.loading("Logging Initiated!");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.dismiss();
        toast.success("Login Successful!");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Something Went Wrong!");
      });
  };
  const navigate = useNavigate();

  return (
    <div className="navContainer">
      <p className="navTitle" onClick={() => navigate("/")}>
        TodoEase
      </p>
      <div className="navBtns">
        {!userData && (
          <button className="loginNavBtn" onClick={googleSignInHandler}>
            Login With Google
            <span className="googleIcon">
              <FcGoogle />
            </span>
          </button>
        )}
        {userData && (
          <div className="hoverMenuDiv">
            <button className="menuIconBtn" onClick={() => setMenu(!menu)}>
              {!menu ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
            {menu && (
              <ul className="menuList">
                {path !== "/" && (
                  <li className="menuItem" onClick={() => navigate("/")}>
                    Home
                  </li>
                )}
                {path !== "/myaccount" && (
                  <li
                    className="menuItem"
                    onClick={() => navigate("/myaccount")}
                  >
                    My Account
                  </li>
                )}
                {path !== "/app" && (
                  <li className="menuItem" onClick={() => navigate("/app")}>
                    Download App
                  </li>
                )}
                <li
                  className="menuItem"
                  onClick={() => window.open("https://www.krishjotaniya.live")}
                >
                  Developer
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

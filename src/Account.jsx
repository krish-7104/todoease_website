import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "./backend/config";
import Navbar from "./Navbar";
import "./styles/Account.css";
const Account = () => {
  const [data, setData] = useState();
  const [created, setCreated] = useState();
  const [lastLogin, setLastLogin] = useState();
  const logoutAccount = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Success!");
        window.open("/", "_self");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong!");
      });
  };

  useEffect(() => {
    document.title = "My Account - TodoEase";
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setData(user);
        let date1 = new Date(user.metadata.creationTime);
        setCreated(date1);
        let date2 = new Date(user.metadata.lastSignInTime);
        setLastLogin(date2);
      } else {
        window.open("/", "_self");
      }
    });
  }, []);
  return (
    <div className="container">
      <Navbar />
      <div className="detailCard">
        <p className="accountTitle">Account Details</p>
        {data && (
          <ul className="userDataList">
            <li className="accountInfo">
              <span className="boldTitle">Name:</span> {data.displayName}
            </li>
            <li className="accountInfo">
              <span className="boldTitle">Email Address:</span> {data.email}
            </li>
            <li className="accountInfo">
              <span className="boldTitle">Account Created:</span>{" "}
              {created.toLocaleString()}
            </li>
            <li className="accountInfo">
              <span className="boldTitle">Last Login:</span>{" "}
              {lastLogin.toLocaleString()}
            </li>
          </ul>
        )}
      </div>
      <div>
        <button className="logoutBtn" onClick={logoutAccount}>
          Logout Account
        </button>
      </div>
      {/* <div className="divider"></div>
      <div className="deleteCard">
        <p className="deleteTitle">Danger Zone</p>
        <button className="deleteBtn">Delete My Account</button>
      </div> */}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Account;

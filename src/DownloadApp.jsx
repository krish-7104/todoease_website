import React from "react";
import Navbar from "./Navbar";
import "./styles/DownloadApp.css";
import { HiOutlineDownload } from "react-icons/hi";
const DownloadApp = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="appMainDiv">
        <div className="appDescription">
          <p className="appTitle">
            Download <span className="highlight">TodoEase</span> App Now
          </p>
          <p className="appSubTitle">
            "Sync All Todo's On The App To Increase 100x Productivity"
          </p>
          <ul className="appDesc">
            <li className="appDesList">Minimal App UI</li>
            <li className="appDesList">Sync Your Todo's</li>
            <li className="appDesList">User Friendly</li>
            <li className="appDesList">No ADS</li>
          </ul>
          <div className="appBtnArea">
            <button className="downloadAppBtn">
              Download App Now
              <span className="downIcon">
                <HiOutlineDownload />
              </span>
            </button>
          </div>
        </div>
        <img
          src={require("./assets/todoease_app.png")}
          alt="todoease app"
          className="appPreviewImage"
        />
      </div>
    </div>
  );
};

export default DownloadApp;

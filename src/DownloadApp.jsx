import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./styles/DownloadApp.css";
import { HiOutlineDownload } from "react-icons/hi";
import { toast, Toaster } from "react-hot-toast";
const DownloadApp = () => {
  useEffect(() => {
    document.title = "Download App - TodoEase";
  }, []);
  const downloadHandler = () => {
    toast.success("Download Started");
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/todoease.appspot.com/o/App%20Data%2FTodoEase.apk?alt=media&token=b65329f0-0b15-4b23-aa9e-c48f7db38870",
      "_self"
    );
  };
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
          <div className="appDownArea">
            <div className="qrArea">
              <img
                className="qrCode"
                src="https://firebasestorage.googleapis.com/v0/b/todoease.appspot.com/o/App%20Data%2Fqrcode.png?alt=media&token=6c289878-1429-4188-a6f2-6cdb67a8dd00"
                alt=""
              />
            </div>
            <button className="downloadAppBtn" onClick={downloadHandler}>
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
      <Toaster position="bottom-center" />
    </div>
  );
};

export default DownloadApp;

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./styles/DownloadApp.css";
import { HiOutlineDownload } from "react-icons/hi";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

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
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="container">
      <Navbar />
      <div className="appMainDiv">
        <div className="appDescription">
          <motion.p
            className="appTitle"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            Download <span className="highlight">TodoEase</span> App Now
          </motion.p>
          <motion.p
            className="appSubTitle"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            "Sync All Todo's On The App To Increase 100x Productivity"
          </motion.p>
          <motion.ul
            className="appDesc"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="appDesList" variants={item}>
              Minimal App UI
            </motion.li>
            <motion.li className="appDesList" variants={item}>
              Sync Your Todo's
            </motion.li>
            <motion.li className="appDesList" variants={item}>
              User Friendly
            </motion.li>
            <motion.li className="appDesList" variants={item}>
              No ADS
            </motion.li>
          </motion.ul>
          <div className="appDownArea">
            <div className="qrArea">
              <img
                loading="lazy"
                className="qrCode"
                src={require("./assets/qrcode.webp")}
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
          loading="lazy"
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

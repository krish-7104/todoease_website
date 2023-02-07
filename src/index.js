import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DownloadApp from "./DownloadApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/web" element={<App />} />
        <Route path="/" element={<DownloadApp />} />
      </Routes>
    </BrowserRouter>
  </>
);

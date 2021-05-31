// import Slide from './Slide';
import React from "react";
import "./Page.css";
import Popups from "./Popups";

function Page() {
  return (
    // <div className="page" id="page">
    <div className="hero-container">
      <video src="/video/video-1.mp4" autoPlay loop muted />
      <h1>VOICE ASSISTANT</h1>
      <Popups />
      {/* <Slide /> */}
    </div>
    // </div>
  );
}

export default Page;

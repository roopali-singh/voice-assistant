import React, { useState } from "react";
import "./StartButton.css";
import SpeechRecognition from "react-speech-recognition";

function StartButton() {
  const [listen, setListen] = useState("");

  const strListen = () => {
    if (listen === false) {
      SpeechRecognition.startListening({ continuous: true });
      setListen(true);
    } else {
      SpeechRecognition.abortListening();
      setListen(false);
    }
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div className="noSupport">Browser does not support Web Speech API. Please download latest Chrome.</div>;
  }

  return (
    <div className="startButton">
      <button className="button__start" onClick={strListen}>
        {/* Start Listening */}
        <span>{listen ? "Stop Listening" : "Start Listening"}</span>
      </button>
    </div>
  );
}
export default StartButton;

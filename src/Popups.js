import React from "react";
import "./Popups.css";

function Popups() {
  return (
    <div className="popups">
      {/* POPUP BUTTON 1 */}
      <a className="button" href="#popup1">
        Introduction
      </a>

      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Welcome</h2>
          {/* <hr> */}
          <a className="close" href="#">
            &times;
          </a>
          <div className="content1 content">
            This project is an attempt to make a Voice
            Assistant baptized as Aether. It was build with ReactJs using the
            Web Speech Api.
          </div>
        </div>
      </div>
      {/* POPUP BUTTON 2 */}
      <a className="button" href="#popup2">
        Objective
      </a>

      <div id="popup2" className="overlay">
        <div className="popup">
          <h2>Objective</h2>
          {/* <hr> */}
          <a className="close" href="#">
            &times;
          </a>
          <div className="content2 content">
            <h4>
              To build a personal AI Voice Assistance Program using javascript.
              It will recognize what you say and answer accordingly.
            </h4>
            <ul>
              <li>It can perform the following tasks : </li>
              <li>Does Google ,Youtube ,Wikipedia searches.</li>
              <li>
                Open websites like Google,Unsplash, Spotify, in a web browser.
              </li>
              <li>Sends mail.</li>
              <li>Tells the current date and time.</li>
              <li>Also tells the current weather conditions.</li>
              <li>Plays music.</li>
              <li>Know the current covid details.</li>
              <li>Tells you a random qoute.</li>
              <li>Perform mathematical calculations.</li>
              <li>You can have a nice conversation with it.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* POPUP BUTTON 3 */}
      <a className="button" href="#popup3">
        Instructions
      </a>

      <div id="popup3" className="overlay">
        <div className="popup">
          <h2>Instructions</h2>
          {/* <hr> */}
          <a className="close" href="#">
            &times;
          </a>
          <div className="content3 content">
            <ul className="instruction">
              <h2>Try Saying</h2>
              <li>Hello</li>
              <li>What's your name</li>
              <li>Play Music</li>
              <li>Stop Music</li>
              <li>What time is it?</li>
              <li>What's the date today?</li>
              <li>What was the day on September 18 1956?</li>
              <li>Weather in ..Delhi..</li>
              <li>Send mail with subject *** and content ***</li>
              <li>Open Google/Youtube/Wikipedia</li>
              <li>Search ... on G/Y/W..</li>
              <li>Cube root of 265</li>
              <li>Coronavirus cases in India/France</li>
              <li>Vaccines in India/France</li>
              <li>Tell a random quote</li>
              <li>Clear</li>
            </ul>
          </div>
        </div>
      </div>
      {/* POPUP BUTTON 4 */}
      <a className="button" href="#popup4">
        References
      </a>

      <div id="popup4" className="overlay links">
        <div className="popup">
          <h2>References</h2>
          {/* <hr> */}
          <a className="close" href="#">
            &times;
          </a>
          <div className="content4">
            <ul>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <li>React</li>
              </a>
              <a
                href="https://www.npmjs.com/package/react-speech-recognition"
                target="_blank"
                rel="noreferrer"
              >
                <li>react-speech-recognition</li>
              </a>
              <a
                href="https://www.npmjs.com/package/react-speech-kit"
                target="_blank"
                rel="noreferrer"
              >
                <li>react-speech-kit</li>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <li>JavaScript</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popups;

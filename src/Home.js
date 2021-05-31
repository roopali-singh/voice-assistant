import React from "react";
import Circle from "./Circle";
import "./Home.css";
import Output from "./Output";
import StartButton from "./StartButton";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home__main">
        <div className="home__main1">
          <h1 className="home__heading">Meet Aether</h1>
          <StartButton />
        </div>
        <div className="home__main2">
          <Circle />
          <Output />
        </div>
      </div>
    </div>
  );
}

export default Home;

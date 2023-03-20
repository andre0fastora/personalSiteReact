import { Canvas } from "@react-three/fiber";
import React from "react";
import "./IntroPage.css";

const IntroPage = () => {
  return (
    <div id="intro-page-div">
      <div id="text-and-img-div">
        <div>
          <h2>Hi!</h2>
          <h2>My name is</h2>
          <h2 id="name">Andre Jacques Pujol</h2>
          <h2>and I am a Web Developer</h2>
          <div>
            <button
              onClick={() => {
                document.getElementById("navbar").style.display = "flex";
                document.getElementById("footer").style.display = "flex";
                document.getElementById("about-me-container").style.display =
                  "flex";
                document.getElementById("intro-page-div").style.display =
                  "none";
              }}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;

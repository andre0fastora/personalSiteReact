import React from "react";
import "./IntroPage.css";

const IntroPage = () => {
  return (
    <div id="intro-page-div">
      <h2>Hi!</h2>
      <h2>My name is</h2>
      <h2 id="name">Andre Jacques Pujol</h2>
      <h2>and I am a Web Developer</h2>
      <button
        onClick={() => {
          document.getElementById("navbar").style.display = "flex";
          document.getElementById("about-me-container").style.display = "flex";
        }}
      >
        See More
      </button>
    </div>
  );
};

export default IntroPage;

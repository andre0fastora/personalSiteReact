import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div id="about-me-container">
        <p>
          My name is Andre Jacques Pujol and I am a web developer based out of
          Baton Rouge Louisiana. My love for coding started a few years back
          when I started teaching myself how to make video games in Unreal and
          Unity. I then made the pivot to web technologies and graduated from
          Full Stack Academy's Web Development bootcamp in April 2023.
        </p>
        <img src={require("../../img/aiMe.jpg")}></img>
        <button
          onClick={() => {
            document.getElementById("projects-div").style.display = "inline";
            document.getElementById(
              ("about-me-container".style.display = "none")
            );
          }}
        >
          See Projects
        </button>
      </div>
    </>
  );
};

export default AboutMe;

import React from "react";
import "./Navibar.css";

const Navibar = () => {
  return (
    <div id="navbar">
      <h2
        onClick={() => {
          document.getElementById("intro-page-div").style.display = "flex";
          document.getElementById("about-me-container").style.display = "none";
          document.getElementById("projects-div").style.display = "none";
          document.getElementById("contact-me-container").style.display =
            "none";
          document.getElementById("resume-container").style.display = "none";
        }}
      >
        Andre Jacques Pujol
      </h2>

      <div id="links">
        <h2
          onClick={() => {
            document.getElementById("about-me-container").style.display =
              "flex";
            document.getElementById("intro-page-div").style.display = "none";
            document.getElementById("projects-div").style.display = "none";
            document.getElementById("contact-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "none";
          }}
        >
          About Me
        </h2>
        <h2
          onClick={() => {
            document.getElementById("projects-div").style.display = "inline";
            document.getElementById("about-me-container").style.display =
              "none";

            document.getElementById("intro-page-div").style.display = "none";
            document.getElementById("contact-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "none";
          }}
        >
          Projects
        </h2>
        <h2
          onClick={() => {
            document.getElementById("contact-me-container").style.display =
              "flex";
            document.getElementById("contact-form").style.display = "flex";
            document.getElementById("intro-page-div").style.display = "none";

            document.getElementById("projects-div").style.display = "none";
            document.getElementById("about-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "none";
          }}
        >
          Contact
        </h2>

        <h2
          onClick={() => {
            document.getElementById("contact-me-container").style.display =
              "none";
            document.getElementById("contact-form").style.display = "flex";
            document.getElementById("intro-page-div").style.display = "none";

            document.getElementById("projects-div").style.display = "none";
            document.getElementById("about-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "flex";
          }}
        >
          Resume
        </h2>
      </div>
    </div>
  );
};

export default Navibar;

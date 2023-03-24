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
          document.getElementById("success-message").style.display = "none";

          document.getElementById("aboutMeNav").classList.remove("isActive");
          document.getElementById("projectsNav").classList.remove("isActive");
          document.getElementById("contactNav").classList.remove("isActive");
          document.getElementById("resumeNav").classList.remove("isActive");
        }}
      >
        Andre Jacques Pujol
      </h2>

      <div id="links">
        <h2
          id="aboutMeNav"
          onClick={() => {
            document.getElementById("about-me-container").style.display =
              "flex";
            document.getElementById("intro-page-div").style.display = "none";
            document.getElementById("projects-div").style.display = "none";
            document.getElementById("contact-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "none";
            document.getElementById("success-message").style.display = "none";
            document.getElementById("aboutMeNav").classList.add("isActive");
            document.getElementById("projectsNav").classList.remove("isActive");
            document.getElementById("contactNav").classList.remove("isActive");
            document.getElementById("resumeNav").classList.remove("isActive");
          }}
        >
          About Me
        </h2>
        <h2
          id="projectsNav"
          onClick={() => {
            document.getElementById("projects-div").style.display = "inline";
            document.getElementById("about-me-container").style.display =
              "none";

            document.getElementById("intro-page-div").style.display = "none";
            document.getElementById("contact-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "none";
            document.getElementById("success-message").style.display = "none";
            document.getElementById("aboutMeNav").classList.remove("isActive");
            document.getElementById("projectsNav").classList.add("isActive");
            document.getElementById("contactNav").classList.remove("isActive");
            document.getElementById("resumeNav").classList.remove("isActive");
          }}
        >
          Projects
        </h2>
        <h2
          id="contactNav"
          onClick={() => {
            document.getElementById("contact-me-container").style.display =
              "flex";
            document.getElementById("contact-form").style.display = "flex";
            document.getElementById("contact-me-header").style.display =
              "inline";
            document.getElementById("intro-page-div").style.display = "none";

            document.getElementById("projects-div").style.display = "none";
            document.getElementById("about-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "none";
            document.getElementById("success-message").style.display = "none";
            document.getElementById("aboutMeNav").classList.remove("isActive");
            document.getElementById("projectsNav").classList.remove("isActive");
            document.getElementById("contactNav").classList.add("isActive");
            document.getElementById("resumeNav").classList.remove("isActive");
          }}
        >
          Contact
        </h2>

        <h2
          id="resumeNav"
          onClick={() => {
            document.getElementById("contact-me-container").style.display =
              "none";
            document.getElementById("contact-form").style.display = "flex";
            document.getElementById("intro-page-div").style.display = "none";

            document.getElementById("projects-div").style.display = "none";
            document.getElementById("about-me-container").style.display =
              "none";
            document.getElementById("resume-container").style.display = "flex";
            document.getElementById("success-message").style.display = "none";
            document.getElementById("aboutMeNav").classList.remove("isActive");
            document.getElementById("projectsNav").classList.remove("isActive");
            document.getElementById("contactNav").classList.remove("isActive");
            document.getElementById("resumeNav").classList.add("isActive");
          }}
        >
          Resume
        </h2>
      </div>
    </div>
  );
};

export default Navibar;

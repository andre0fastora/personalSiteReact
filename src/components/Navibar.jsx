import React from "react";
import "./Navibar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
          }}
        >
          Contact
        </h2>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/19ziRHmOG5-A5T_Odip1Y50CZiwr4YFPE8VLCd85C8-c/edit?usp=sharing"
        >
          <h2>Resume</h2>
        </a>
      </div>
    </div>
  );
};

export default Navibar;

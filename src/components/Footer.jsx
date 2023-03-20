import React from "react";
import "./Footer.css";
import gh from "../img/github-mark-white.png";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-links">
        <a target="_blank" href="https://github.com/andre0fastora">
          <img src={gh}></img>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/ajpujol/">
          <img src="https://cdn.svgporn.com/logos/linkedin-icon.svg"></img>
        </a>
        <a target="_blank" href="mailto: andre.jacques.pujol@gmail.com">
          <img src="https://cdn.svgporn.com/logos/google-gmail.svg"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> Andre Jacques Pujol</h2>
      <div id="links">
        <a target="_blank" href="https://github.com/andre0fastora">
          <img src="https://cdn.svgporn.com/logos/github-icon.svg"></img>
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

export default Navbar;

import React from "react";
import { Navbar, IntroPage, AboutMe, Projects } from "./";

const Main = () => {
  return (
    <div id="main">
      <IntroPage />
      <AboutMe />
      <Projects />
      <Navbar />
    </div>
  );
};

export default Main;

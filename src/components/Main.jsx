import React from "react";
import { Navbar, Intro, ProjectList, TechStack } from "./";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Intro />
      <TechStack />
      <ProjectList />
    </div>
  );
};

export default Main;

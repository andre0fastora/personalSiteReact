import React from "react";
import { Navibar, IntroPage, AboutMe, Projects, Footer, ContactMe } from "./";

const Main = () => {
  return (
    <div id="main">
      <IntroPage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Navibar />
      <Footer />
    </div>
  );
};

export default Main;

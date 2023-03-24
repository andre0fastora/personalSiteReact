import React from "react";
import {
  Resume,
  Navibar,
  IntroPage,
  AboutMe,
  Projects,
  Footer,
  ContactMe,
} from "./";

const Main = () => {
  return (
    <div id="main">
      <IntroPage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Resume />
      <Navibar />
      <Footer />
    </div>
  );
};

export default Main;

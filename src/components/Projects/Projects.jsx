import React from "react";
import { ProjectCard } from "../index";
import "./Projects.css";

import st from "../../img/StrangersThings.png";
import jb from "../../img/JuiceBox.png";
import ac from "../../img/arcade.png";

const projectsArr = [
  {
    name: "Stranger's Things",
    img: st,
    description:
      "Paired project of a craigs list style site built in React using an API supplied by Full Stack Academy",
    githubF: "https://github.com/andre0fastora/strangerthings",
    githubB: "",
    deployed: "https://andrepujol-strangers-things.netlify.app",
  },
  {
    name: "Juice Box",
    img: jb,
    description:
      "Paired project, tumbler styled web app built in React with a back end PSQL database and a server built in express",
    githubF: "https://github.com/josie-p/juicebox-frontend",
    githubB: "https://github.com/andre0fastora/juicebox",
    deployed: "https://ap-jp-juicebox.netlify.app",
  },
  {
    name: "Arcade",
    img: ac,
    description:
      "Solo project in vanilla JS, simple landing page with a couple of playable games such as tic tac toe and snake",
    githubF: "https://github.com/andre0fastora/strangerthings",
    githubB: "",
    deployed: "https://andrepujol-strangers-things.netlify.app",
  },
];

const Projects = () => {
  return (
    <div
      // onAnimationEndCapture={() => {
      //   document
      //     .getElementById("project-card-holder")
      //     .classList.add("animate__backInLeft");
      // }}
      id="projects-div"
    >
      <h1>Projects</h1>
      <div id="project-card-holder">
        {projectsArr.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
      <button
        id="restartButton"
        onClick={() => {
          location.reload();
        }}
      >
        Back to Start
      </button>
    </div>
  );
};

export default Projects;

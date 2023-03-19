import React from "react";
import { ProjectCard } from "../index";
import "./Projects.css";

const projectsArr = [
  {
    name: "Stranger's Things",
    description:
      "Paired project of a craigs list style site built in React using an API supplied by Full Stack Academy",
    githubF: "https://github.com/andre0fastora/strangerthings",
    githubB: "",
    deployed: "https://andrepujol-strangers-things.netlify.app",
  },
  {
    name: "Juice Box",
    description:
      "Paired project, tumbler styled web app built in React with a back end PSQL database and a server built in express",
    githubF: "https://github.com/josie-p/juicebox-frontend",
    githubB: "https://github.com/andre0fastora/juicebox",
    deployed: "https://ap-jp-juicebox.netlify.app",
  },
  {
    name: "Arcade",
    description:
      "Solo project in vanilla JS, simple landing page with a couple of playable games such as tic tac toe and snake",
    githubF: "https://github.com/andre0fastora/strangerthings",
    githubB: "",
    deployed: "https://andrepujol-strangers-things.netlify.app",
  },
];

const Projects = () => {
  return (
    <div id="projects-div">
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

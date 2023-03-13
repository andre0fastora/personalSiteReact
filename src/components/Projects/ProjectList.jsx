import { textAlign } from "@mui/system";
import React from "react";
import ProjectCard from "./ProjectCard";
import "./projectList.css";

const projects = [
  {
    name: "Project1",
    description: "Lorem Ipsum nananna booo booo",
    deployedLink: "http://www.netifly.com",
    gitHubLink: "https://www.github.com",
  },
  {
    name: "Project2",
    description: "Lorem Ipsum nananna booo booo",
    deployedLink: "http://www.netifly.com",
    gitHubLink: "http://www.github.com",
  },
  {
    name: "Project3",
    description: "Lorem Ipsum nananna booo booo",
    deployedLink: "http://www.netifly.com",
    gitHubLink: "http://www.github.com",
  },
];

const ProjectList = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div id="project-list-div">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;

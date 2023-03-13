import React from "react";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div id="project-card-div">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a target="_blank" href={project.deployedLink}>
        Link to Deployed Project
      </a>
      <br />
      <a target={"_blank"} href={project.gitHubLink}>
        Link to GitHub
      </a>
    </div>
  );
};

export default ProjectCard;

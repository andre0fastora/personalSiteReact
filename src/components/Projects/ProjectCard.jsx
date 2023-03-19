import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div id="project-card-div">
      {project.img ? (
        <img src={project.img} className="project-img"></img>
      ) : null}
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a target={"_blank"} href={project.githubF}>
        <p>Github Repo for Frontend</p>
      </a>
      <>
        {project.githubB ? (
          <a target={"_blank"} href={project.githubB}>
            <p>Github Repo for BackEnd</p>
          </a>
        ) : null}
      </>
      <a target={"_blank"} href={project.deployed}>
        <p>Deployed Project</p>
      </a>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { ProjectCard } from "../index";
import "./Projects.css";

import poke from "../../img/Pokeball-1.png"
import auto from "../../img/ac.png";

const projectsArr = [
  {
    name: "The Autonomous Collective",
    img: auto,
    description:
      "Made with a group of 4. Full relational PSQL database, server powered by express. React front end. E-commerce site mock up with functioning register, login and  persistent cart between sessions and devices. Also has a fully flushed out Admin page to add products, adjust tags, and edit users. Styled with BootStrap.",
    githubF:
      "https://github.com/Autonomous-Collective/Autonomous-Collective-Client",
    githubB:
      "https://github.com/Autonomous-Collective/Autonomous-Collective-Backend",
    deployed: "https://autonomous-collective.netlify.app",
  },
  {
    name: "Pokemon Team Builder",
    img: poke,
    description:
      "React App that connects to the PokeApi to pull stats for various pokemon and even build your own teams!",
    githubF:
      "https://github.com/andre0fastora/pokemonApp",
    
    deployed: "https://ajppokemonteambuilder.netlify.app",
  },
  
];

const Projects = () => {
  return (
    <div
    
      id="projects-div"
    >
      <h1>Projects</h1>
      <div id="project-card-holder">
        {projectsArr.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

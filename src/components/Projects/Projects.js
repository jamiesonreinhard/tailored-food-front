import React, { useState } from 'react';
import Project from './Project';
import {projects} from '../../data/projects';
import { Container } from 'react-bootstrap';

const Projects = () => {

  const projectData = projects;
  console.log(projectData);
  const [active, setActive] = useState(projectData[0]);

  const projectDeck = projectData.map((project) => {
    return(
      <div>
        <span className={active === project ? "project-name-active" : "project-name"} onClick={() => setActive(project)} key={project.location} active={active === project}>{project.location}</span><br />
      </div>
      
    )
  })
  
  return(
    <div className="projects">
      <Container>
        <div className="row">
          <div className="project-menu col-lg-4">
          
            {projectDeck}
          </div> 
          <div className="col-lg-8">
            <Project project={active} />
          </div>
        </div>
        
        
      </Container>
    </div>
  )
}

export default Projects;

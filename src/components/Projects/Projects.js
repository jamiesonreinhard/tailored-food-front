import react from 'react';
import Project from './Project';
import {projects} from '../../data/projects';
import { Container } from 'react-bootstrap';

const Projects = () => {

  const projectData = projects;
  console.log(projectData);

  const projectDeck = projectData.map((project, index) => {
    return(
      <Project key={index} project={project} />
    )
  })
  
  return(
    <div className="projects">
      <Container>
        <h2 className="projects-heading mb-3">Our Projects</h2>
        <div className="project-grid">
          {projectDeck}
        </div>
      </Container>
    </div>
  )
}

export default Projects;

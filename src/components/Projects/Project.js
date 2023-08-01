import React from 'react';
import chevron from '../../images/chevron.svg';

const Project = (props) => {
  
  const {partner_name, image, description, link} = props.project;

  return(
    <div className="project-card">
      <img className="project-image" src={`/images/${image}`} alt="project" />
      <h2>In partnership with {partner_name}</h2>
      <p className="project-description">{description}</p>
      {link && (
        <a href={link} className="project-link" target='_blank' style={{marginLeft: "auto"}}>
          {`Partner website`}
          <img src={chevron} alt="" style={{rotate: "270deg"}} className='project-link-chevron' />
        </a>
      )}
    </div>
  )
}

export default Project;

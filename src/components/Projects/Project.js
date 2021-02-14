import React from 'react';

const Project = (props) => {
  
  const {partner_name, image, description} = props.project;

  return(
    <div className="project-card">
      <img className="project-image" src={`/images/${image}`} alt="project" />
      <h2>In partnership with {partner_name}</h2>
      <p className="project-description">{description}</p>
    </div>
  )
}

export default Project;

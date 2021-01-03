import React from 'react';

const Project = (props) => {
  
  const {partner_name, image} = props.project;

  return(
    <div className="project-card">
      <h5>{partner_name}</h5>
      <img className="project-image" src={`/images/${image}`} alt="project" />
    </div>
  )
}

export default Project;

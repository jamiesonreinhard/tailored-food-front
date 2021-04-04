import React from 'react';
import { Container } from 'react-bootstrap';
import {team} from '../../data/team';

const Team = () => {
  const showTeam = team.map((member) => {
    return(
      <div className="member-card">
        <div className="member-card-image-box mb-2">
          <img src={`/images/${member.image}`} className="member-card-image mb-2" alt="team-member"></img>
          <div className="member-card-image-overlay">
          <p>{member.bio}</p>
        </div>
        </div>
        <h4>{member.name}</h4>
        <h5>{member.role}</h5>
      </div>
    )
  })
  return (  
    <div className="about">
      <div>
        <div className="team-grid">
          {showTeam}
        </div>
      </div>
    </div>
  )
}

export default Team;

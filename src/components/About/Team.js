import React from 'react';
import { Container } from 'react-bootstrap';
import {team} from '../../data/team';

const Team = () => {
  const showTeam = team.map((member) => {
    return(
      <div className="member-card">
        <img src={`/images/${member.image}`} className="member-card-image mb-2" alt="team-member"/>
        <h4>{member.name}</h4>
        <h5>{member.role}</h5>
      </div>
    )
  })
  return (  
    <div className="about">
      <div className="container">
        <div className="team-grid">
          {showTeam}
        </div>
      </div>
    </div>
  )
}

export default Team;

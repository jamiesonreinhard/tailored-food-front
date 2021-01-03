import React from 'react';
import {partners} from '../../data/partners';
import { Container } from 'react-bootstrap';

const Partners = () => {

  const partnerData = partners;
  console.log(partnerData);

  const partnerList = partnerData.map(partner => {
    return (
      <li>
        {partner.name}
      </li>
    )
  })
  
  return(
    <div className="partners">
      <Container>
      <h2 className="projects-heading mb-5">Our Partners</h2>
        <ul>
          {partnerList}
        </ul>
      </Container>
    </div>
  )
}

export default Partners;

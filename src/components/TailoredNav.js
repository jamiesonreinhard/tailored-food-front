import React, { useState } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/tailored_food_logo.svg';
import {GiHamburgerMenu} from 'react-icons/gi';

const TailoredNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [active, setActive] = useState(null)
  const navLinks = ["About", "Projects", "Contact"]
  const linkList = navLinks.map((link) => {
    return(
      <Nav.Link 
        className={`nav-item ${
          location.pathname === ("/" || "/about") ? null : "black"
      }`} 
        onClick={() => setActive(link)} key={link} active={active === link}
      >
         <Link className={active === link ? `nav-link active ${
           location.pathname === ("/" || "/about") ? null : "black"
         }` : `nav-link ${
           location.pathname === ("/" || "/about") ? null : "black"
         }`} to={link.toLowerCase()}>{link}</Link>
      </Nav.Link>
    )
  })
  return(
      <Navbar expand="lg">
        <Navbar.Brand onClick={() => setActive(null)} className="pl-5"><Link to="/"><img src={logo} alt="logo" className="nav-logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu style={{color: "#48b4e0"}} size={36}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {linkList}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default TailoredNav;

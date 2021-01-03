import react from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/tailored_food_logo.svg';

const TailoredNav = () => {
  return(
      <Navbar expand="lg">
        <Navbar.Brand><Link to="/"><img src={logo} alt="logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/about">Who Are We?</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/partners">Partners</Link></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/media">Media</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default TailoredNav;

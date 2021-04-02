import React, { useState } from 'react';
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
      <div 
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
      </div>
    )
  })
  return(
     <div className="navbar">
       <div className="navbar-brand">
        <Link to="/"><img src={logo} alt="logo" className="pl-5 nav-logo" /></Link>
       </div>
       <div className="nav-items">
          {linkList}
         <GiHamburgerMenu className="navbar-toggler" color={{'#e0ad3e'}} />
       </div>
     </div>
  )
}

export default TailoredNav;

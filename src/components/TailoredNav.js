import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/tailored_food_logo.svg';
import {GiHamburgerMenu} from 'react-icons/gi';

const TailoredNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [active, setActive] = useState(null)
  const [show, setShow] = useState(false)
  const navLinks = ["About", "Projects", "Contact"]
  const linkList = navLinks.map((link) => {
    return(
      <div 
        className={`nav-item ${
          location.pathname === ("/" || "/about") ? "" : "black"
      }`} 
        onClick={() => {
          setActive(link)
          setShow(false)
        }} key={link} active={active === link}
      >
         <Link className={active === link ? `nav-link active ${
           location.pathname === ("/" || "/about") ? "" : "black"
         }` : `nav-link ${
           location.pathname === ("/" || "/about") ? "" : "black"
         }`} to={link.toLowerCase()}>{link}</Link>
      </div>
    )
  })
  const SideNav = () => {
    if(show){
      return(
        <div className="side-nav">
          <div className="side-nav-links">
            {linkList}
          </div>
        </div>
      )
    } else {
     return null
    }
  }
  return(
    <>
      <div className="navbar">
       <div className="navbar-brand" onClick={() => {
         setActive(null)
         setShow(false)
       }}>
        <Link to="/"><img src={logo} alt="logo" className="pl-5 nav-logo" /></Link>
       </div>
       <div className="nav-items">
          <div className="nav-links">
            {linkList}
          </div> 
          <div className={show ? "smaller-screens active-side-nav" : "smaller-screens"}>
            <div className="dropdown-toggler" onClick={() => {
              setShow(!show)
              console.log(show)
            }}>
              <GiHamburgerMenu style={{color: "#e0ad3e"}} size={36} />
            </div>
            <SideNav />
          </div>
       </div>
     </div>
    </>
  )
}

export default TailoredNav;

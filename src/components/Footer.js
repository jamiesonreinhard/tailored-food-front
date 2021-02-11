import react from 'react';
import { FaLinkedin, FaYammer } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-left">
        <div>
        <GoLocation size={36} class="mr-2" />
        <span className="mr-5">Canada</span>
        <small className="footer-copyright">{`© ${(new Date().getFullYear())} Tailoredfood`}</small>
        </div>
      </div>
      <div className="footer-right">
      <a href="https://www.linkedin.com/company/tailored-food/"><FaLinkedin size={36} color="white" className="mr-3" /></a>
      {/* <a href="instagram.com"><FaInstagramSquare size={36} color="white" /></a> */}
      </div>
    </div>
  )
}

export default Footer;

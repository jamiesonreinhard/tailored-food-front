import react from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return(
    <div className="footer">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-lg-7">
              <p>
              Tailored Food is a lean social enterprise consultancy that partners with food entrepreneurs, farmers, and market vendors to ensure nutritious delicious low-cost food is available to families suffering from malnutrition.
              <br /><br />
              We are building a grassroots movement to <span style={{textDecorationLine: 'underline', fontWeight: 'bolder'}}>end hunger by 2030.</span>
              </p>
              <br />
              <p><strong>TAYLOR QUINN</strong></p>
              <small><strong>CEO</strong></small>
            </div>
            <div className="col-lg-5 footer-contact">
              <div className="footer-contact-info">
                <p><strong>CONTACT</strong></p>
                <small>taylor@tailoredfood.org</small>
                <small>+1-415-510-0910</small>
                <div className="social-links">
                  <a href="linkedin.com"><FaLinkedin size={48}/></a>
                  <a href="instagram.com"><FaInstagramSquare size={48}/></a>
                </div>
              </div>
              
            </div>

          </div>
         
        </div>
    </div>
  )
}

export default Footer;

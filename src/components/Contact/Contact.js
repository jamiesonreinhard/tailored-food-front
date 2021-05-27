import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import Flash from '../Flash';

const Contact = () => {

  return(
    <div className="contact">
      <div className="container">
        <div className="d-flex flex-row justify-content-center align-items-start">
          <div className="text-center">
            <div className="contact-image">
              <img className="contact-image-1" src="images/contactLeft.png"/>
              <img className="contact-image-2" src="images/contactRight.png" />
            </div>
          </div>
          <div className="contact-column">
            <h2 className="mb-4">Contact Us</h2>
            <div className="contact-info">
              <h6 className="mr-3">Phone: <span style={{color: 'rgba(81, 182, 136, 1)'}}>+1-415-510-0910</span></h6>
              <h6>Email: <a href="mailto: taylor@tailoredfood.org" style={{color: 'rgba(81, 182, 136, 1)'}}>taylor@tailoredfood.org</a></h6>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Flash />
    </div>
  )
}

export default Contact;

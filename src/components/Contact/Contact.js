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
            <img src="/images/split-contact-image.png" alt="contact-image" className="contact-image"></img>
          </div>
          <div className="contact-column">
            <h2 className="mb-4">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <Flash />
    </div>
  )
}

export default Contact;

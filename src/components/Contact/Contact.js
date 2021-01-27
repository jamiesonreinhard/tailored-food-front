import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import Flash from '../Flash';

const Contact = () => {

  return(
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="contact-cta">
              <h1 className="contact-cta-title">we want to hear from you!</h1>
              <h5>Relationships and partnerships are what help us to keep growing. If you think we can help each other, or if you're just hoping to learn more about Tailored Food, please let us know!</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ContactForm />
          </div>
        </div>
      </div>
      <Flash />
    </div>
  )
}

export default Contact;

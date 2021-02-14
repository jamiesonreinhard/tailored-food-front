import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [ inquiry, setInquiry ] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setInquiry(Object.assign({}, inquiry, {[name]: value}));
    console.log('inquiry ', inquiry);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    const {name, email, subject, message} = inquiry;
    console.log(name);
    
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    setInquiry({});
    if(emailjs.send('jamiesongmail', 'template_c1bv88l', templateParams, 'user_4zNk2mQBDz0bycg2XAfpw')) {
      setShow(true);
      
    }
  }

  const SubmitAlert = () => {
    if(show){
      setTimeout(()=> {
        setShow(false)
      }, 5000);
      return(
        <h5>Thanks for reaching out. We'll get back to you soon!</h5>
      );
    } else return null;
  }


  return(
    <div>
      <div className="contact-form mb-3">
        <Form id="contactForm" onSubmit={handleSubmit}>
          <Row style={{width: "575px"}}>
            <Col>
              <Form.Group>
                <Form.Control onChange={handleChange} type="text" name="name" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control onChange={handleChange} type="email" name="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control onChange={handleChange} type="text" name="subject" placeholder="Subject" />
              </Form.Group>
              <Form.Group>
                <Form.Control onChange={handleChange} as="textarea" rows={3} name="message" placeholder="Message" />
              </Form.Group>
            </Col>
          </Row>
            
          <Button type="submit" className="btn btn-primary">
            Send
          </Button>
        </Form>
      
      </div>
      <div>
          <SubmitAlert />
      </div>
    </div>
    
  )
}

export default ContactForm;

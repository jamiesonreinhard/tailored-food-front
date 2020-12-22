import React, { useState, useEffect } from 'react';

const Flash = () => {

  let [visibility, setVisibility] = useState(false);
  let [message, setMessage] = useState('');
  let [type, setType] = useState('');

  return(
    visibility && <div className={`alert alert-${type}`}>
      <span className="close"><strong>X</strong></span>
      <p>{message}</p>
    </div>
  )
}

export default Flash;

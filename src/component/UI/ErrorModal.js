import React from 'react';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>


       
          <h2>{props.title}</h2>
    
     
          <p>{props.message}</p>
     
     
    
    </div>
  );
};

export default ErrorModal;

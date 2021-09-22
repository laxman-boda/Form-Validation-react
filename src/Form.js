import React, { useState } from 'react';
import './Form.css';
import FormSignUp from './FormSignUp';
import FormSuceess from './FormSuceess';
import rocket from './images/rocket.jpg'
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={rocket} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuceess />
        )}
      </div>
    </>
  );
};

export default Form;
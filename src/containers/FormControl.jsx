import React, { useState } from 'react';
import Form from '../components/Form/Form';


const FormControl = () => {
  const [url, setUrl] = useState('');
  const [radio, setRadio] = useState('');
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState('');
  
  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleRadioButton = ({ target }) => {
    setRadio(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setText(target.value);
  };
  
  return (
    <Form 
      inputURL={url} onUrlChange={handleUrlChange} 
      radio={radio} handleRadioButton={handleRadioButton} 
      body={text} onBodyChange={handleBodyChange}
    />
  );
};

export default FormControl;








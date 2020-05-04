import React, { useState } from 'react';
import Form from '../components/Form/Form';
import { makeRequest } from '../services/makeRequest';


const FormControl = () => {
  const [url, setUrl] = useState('');
  const [radio, setRadio] = useState('POST');
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState([]);
  
  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleRadioButton = ({ target }) => {
    setRadio(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setText(target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    makeRequest(url, radio, text)
      .then(submit => setSubmit(submit));
  };

  return (
    <Form 
      submit={submit} onSubmit={handleSubmit}
      inputURL={url} onUrlChange={handleUrlChange} 
      radio={radio} handleRadioButton={handleRadioButton} 
      body={text} onBodyChange={handleBodyChange}
    />
  );
};

export default FormControl;








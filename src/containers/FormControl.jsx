import React, { useState } from 'react';
import Form from '../components/Form/Form';


const FormControl = () => {
  const [url, setUrl] = useState('');
  const [radio, setRadio] = useState('');

  
  const handleChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleRadioButton = ({ target }) => {
    setRadio(target.value);
  };

  return (
    <Form inputURL={url} onUrlChange={handleChange} radio={radio}handleRadioButton={handleRadioButton} />
  );
};

export default FormControl;








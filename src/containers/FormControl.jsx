import React, { useState } from 'react';
import Form from '../components/Form/Form';
import { makeRequest } from '../services/makeRequest';
import Response from '../components/Response/Response';


const FormControl = () => {
  const [url, setUrl] = useState('');
  const [radio, setRadio] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState([]);
  
  const handleUrlChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setRadio(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    makeRequest(url, radio, body)
      .then(response => {
        setResponse(json)
        setHistory(prevHistory => [{ url, method}, ...prevHistory]);
      });
  }; 
      
  
  return (
    
    <>
      <Form 
        onSubmit={handleSubmit}
        onChange={}
        inputURL={handleUrlChange}  
        url={}
        method={}
        body={}
      />
      <Response response={response}/>
    </>
  );
};

export default FormControl;



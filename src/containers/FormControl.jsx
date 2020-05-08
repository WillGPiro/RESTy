import React, { useState } from 'react';
import Form from '../components/Form/Form';
// import { makeRequest } from '../services/makeRequest';
import Response from '../components/Response/Response';


const FormControl = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  // const [response, setResponse] = useState({});
  // const [history, setHistory] = useState([]);
  
  //Handles user input based on name. 
  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('This is a test of the handle sumbit function, if this was a real handle submit you would need to make a request to', url, method, body);
  }; 
      
  
  return (
    
    <>
      <Form 
        onSubmit={handleSubmit}
        onChange={handleChange}
        url={url}
        method={method}
        body={body}
      />
      {/* <Response response={response}/> */}
    </>
  );
};

export default FormControl;



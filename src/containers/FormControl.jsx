import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Response from '../components/Response/Response';
import { makeRequest } from '../services/makeRequest';
import HistoryList from '../components/History/HistoryList';

const FormControl = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState(localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []);
  
  //Anytime history changes set local storage.
  useEffect (() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);
  
  //Handles user input based on name. 
  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(json => {
        setResponse(json);
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);

      });
  }; 
      
  return (
    
    <>
      <HistoryList history={history}/>
      <Form 
        onSubmit={handleSubmit}
        onChange={handleChange}
        url={url}
        method={method}
        body={body}
      />
      <Response response={response}/>
    </>
  );
};

export default FormControl;



import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onUrlChange, method, inputURL, buttonText = 'Go!', body, handleRadioButton, onBodyChange }) => (
  <section>
    <form onSubmit={onSubmit}>
      <input type ="text" name="URL" value={inputURL} onChange={onUrlChange}/>
      <button>{buttonText}</button>
      <label> 
        Get: <input type ="radio" name="urlSearch" value="get" onChange={handleRadioButton} checked={method === 'get'}> </input>
        Post:<input type ="radio" name="urlSearch" value="post" onChange={handleRadioButton} checked={method === 'post'}></input>
        Put:<input type ="radio" name="urlSearch" value="put" onChange={handleRadioButton} checked={method === 'put'}></input>
        Patch:<input type ="radio" name="urlSearch" value="patch" onChange={handleRadioButton} checked={method === 'patch'}></input>
        Delete: <input type ="radio" name="urlSearch" value="delete" onChange={handleRadioButton} checked={method === 'delete'}></input>
      </label>
      <textarea name="RawJsonBody" value={body} onChange={onBodyChange}> </textarea>
    </form>
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  inputURL: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleRadioButton: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
};

export default Form;






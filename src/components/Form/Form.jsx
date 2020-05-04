import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onUrlChange, inputURL, buttonText = 'Go!', body, handleRadioButton, onBodyChange }) => (
  <section>
    <form onSubmit={onSubmit}>
      <input type ="text" name="URL" value={inputURL} onChange={onUrlChange}/>
      <button>{buttonText}</button>
      <label> 
        Get: <input type ="radio" name="method" value="GET" onChange={handleRadioButton} /> 
        Post:<input type ="radio" name="method" value="POST" onChange={handleRadioButton} />
        Put:<input type ="radio" name="method" value="PUT" onChange={handleRadioButton} />
        Patch:<input type ="radio" name="method" value="PATCH" onChange={handleRadioButton} />
        Delete: <input type ="radio" name="method" value="DELETE" onChange={handleRadioButton} />
      </label>
      <textarea name="RawJsonBody" value={body} onChange={onBodyChange}> </textarea>
    </form>
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  inputURL: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleRadioButton: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
};

export default Form;






import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, inputURL, buttonText = 'Go!', body, handleRadioButton  }) => (
  <section>
    <form onSubmit={onSubmit}>
      <input type ="text" name="URL" value={inputURL}/>
      <button>{buttonText}</button>
      <label> 
        Get: <input type ="radio" name="urlSearch" value="get" onChange={handleRadioButton}></input>
        Post:<input type ="radio" name="urlSearch" value="post" onChange={handleRadioButton}></input>
        Put:<input type ="radio" name="urlSearch" value="put" onChange={handleRadioButton}></input>
        Patch:<input type ="radio" name="urlSearch" value="patch" onChange={handleRadioButton}></input>
        Delete: <input type ="radio" name="urlSearch" value="delete" onChange={handleRadioButton}></input>
      </label>
      <textarea name="RawJsonBody" value={body}></textarea>
    </form>
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputURL: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleRadioButton: PropTypes.func.isRequired,
};

export default Form;






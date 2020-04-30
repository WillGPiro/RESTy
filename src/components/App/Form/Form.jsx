import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, inputURL, buttonText = 'Go!', body  }) => (
  <section>
    <form onSubmit={onSubmit}>
      <input type ="text" name="URL" value={inputURL}/>
      <button>{buttonText}</button>
      <label> 
        Get: <input type ="radio" name="urlSearch" value="get"></input>
        Post:<input type ="radio" name="urlSearch" value="post"></input>
        Put:<input type ="radio" name="urlSearch" value="put"></input>
        Patch:<input type ="radio" name="urlSearch" value="patch"></input>
        Delete: <input type ="radio" name="urlSearch" value="delete"></input>
      </label>
      <textarea name="RawJsonBody" value={body}></textarea>
    </form>
  </section>
);

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputURL: PropTypes.string,
  buttonText: PropTypes.string,
  body: PropTypes.string
};

export default Form;






import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';



const Form = ({ onSubmit, onChange, inputURL, buttonText = 'Go!', body, method }) => (
  <section>
    <form className={styles.Request} onSubmit={onSubmit}>
      <input type ="text" name="url" value={inputURL} onChange={onChange}/>
      
      <input id="GET" type ="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} /> 
      <label htmlFor="GET"> GET:</label>

      <input id="POST" type ="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />
      <label htmlFor="POST"> POST:</label>

      <input id="PUT" type ="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />
      <label htmlFor="PUT"> PUT:</label>

      <input id="PATCH" type ="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />
      <label htmlFor="PATCH"> PATCH:</label>

      <input id="DELETE" type ="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />
      <label htmlFor="DELETE"> DELETE: </label>

      <button>{buttonText}</button>
      <textarea name="body" value={body} onChange={onChange}> </textarea>
      
    </form>
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputURL: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleRadioButton: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired
};

export default Form;






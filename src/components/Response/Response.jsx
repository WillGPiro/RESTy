import React from 'react';
import PropTypes from 'prop-types';
// import ReactJson from 'react-json-view';

const Response = ({ response }) => (
  <section>
    <p>{JSON.stringify(response)}</p>
  </section>
);

Response.propTypes = {
  response: PropTypes.string.isRequired
};

export default Response;

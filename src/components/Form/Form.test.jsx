import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form container', () => {
  it('matches a snapshot of Form.jsx', () => {
    const wrapper = shallow(<Form
      onSubmit={()=>{}}
      onUrlChange={()=>{}}
      method='get'
      inputURL="https://xfiles-api.herokuapp.com/api/v1/characters"
      buttonText="Go"
      body="JSON body"
      handleRadioButton={()=>{}}
      onBodyChange={()=>{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});


import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

import { Title, Logo } from './styles';

describe('[Component] Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Should contains the Title element', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('Should contains a Logo', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
});

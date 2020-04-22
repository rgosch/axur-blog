import React from 'react';
import { shallow } from 'enzyme';

import { Select } from '.';

import { SelectNative } from './styles';

const baseProps = {
  id: 'select',
  onChange: () => {},
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
  ],
  selected: 1,
};

describe('[Component] Select', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Select {...baseProps} />);
  });

  it('Should contains a DOM select', () => {
    expect(wrapper.find(SelectNative)).toHaveLength(1);
  });

  it('Should contains 4 options', () => {
    expect(wrapper.find('option')).toHaveLength(4);
  });
});

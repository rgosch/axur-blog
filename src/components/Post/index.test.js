import React from 'react';
import { shallow } from 'enzyme';

import Post from '.';
import Large from './Large';
import Small from './Small';

const baseProps = {
  title: 'Post title',
  author: {
    name: 'Author Name',
  },
  date: 1431006432000,
  body: 'The post content',
};

describe('[Component] Post', () => {
  describe('Large size', () => {
    let wrapper;

    it('Should renders without crashing', () => {
      wrapper = shallow(<Post {...baseProps} />);
    });

    it(`Should don't renders the Small`, () => {
      expect(wrapper.contains(<Small {...baseProps} />)).toEqual(false);
    });

    it(`Should renders the Large`, () => {
      expect(wrapper.contains(<Large {...baseProps} />)).toEqual(true);
    });
  });

  describe('Small size', () => {
    let wrapper;

    it(`Should don't renders the Large`, () => {
      wrapper = shallow(<Post {...baseProps} small={true} />);
      expect(wrapper.contains(<Large {...baseProps} />)).toEqual(false);
    });

    it('Should renders the Small', () => {
      const { title, date } = baseProps;
      expect(wrapper.contains(<Small title={title} date={date} />)).toEqual(true);
    });
  });
});

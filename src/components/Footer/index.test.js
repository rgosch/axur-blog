import React from 'react';
import { shallow } from 'enzyme';

import Footer from '.';

describe('[Component] Footer', () => {
  it('Should renders without crashing', () => {
    shallow(<Footer />);
  });
});

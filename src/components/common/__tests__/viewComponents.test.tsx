import React from 'react';
import { shallow } from 'enzyme';
import { PaddedView } from '../viewComponents';

describe('View components', () => {
  it('PaddedView renders as expected', () => {
    const wrapper = shallow(<PaddedView />);
    expect(wrapper).toMatchSnapshot();
  });
});

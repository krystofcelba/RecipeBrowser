import React from 'react';
import { shallow } from 'enzyme';
import { View, PaddedView } from '../viewComponents';

describe('View components', () => {
  it('View renders as expected', () => {
    const wrapper = shallow(<View />);
    expect(wrapper).toMatchSnapshot();
  });

  it('PaddedView renders as expected', () => {
    const wrapper = shallow(<PaddedView />);
    expect(wrapper).toMatchSnapshot();
  });
});

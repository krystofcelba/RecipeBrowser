import React from 'react';
import { shallow } from 'enzyme';

import TextInputCell from '../TextInputCell';

describe('FormInputCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<TextInputCell name="input" placeholder="placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with index', () => {
    const wrapper = shallow(<TextInputCell index={0} name="input" placeholder="placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import TextInputCell from '../TextInputCell';

describe('FormInputCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<TextInputCell name="input" placeholder="placeholder" value="" onChangeText={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

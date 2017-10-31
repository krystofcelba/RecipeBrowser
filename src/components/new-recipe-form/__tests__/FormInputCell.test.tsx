import React from 'react';
import { shallow } from 'enzyme';

import FormInputCell from '../FormInputCell';

describe('FormInputCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<FormInputCell placeholder="placeholder" value="" onChangeText={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

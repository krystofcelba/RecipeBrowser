import React from 'react';
import { shallow } from 'enzyme';

import ButtonCell from '../ButtonCell';

describe('FormButtonCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<ButtonCell testID="test:add" title="test" onPress={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('call onPress as expected', () => {
    const onPress = jest.fn();
    const wrapper = shallow(<ButtonCell testID="test:add" title="test" onPress={onPress} />);
    shallow(wrapper.prop('cellContentView')).simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

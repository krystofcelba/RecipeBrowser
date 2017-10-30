import React from 'react';
import { shallow } from 'enzyme';

import FormButtonCell from '../FormButtonCell';

describe('FormButtonCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<FormButtonCell title="test" onPress={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('call onPress as expected', () => {
    const onPressSpy = jest.fn();
    const wrapper = shallow(<FormButtonCell title="test" onPress={onPressSpy} />);
    wrapper.simulate('press');
    expect(onPressSpy).toHaveBeenCalledTimes(1);
  });
});

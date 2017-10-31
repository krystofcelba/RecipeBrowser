import React from 'react';
import { shallow } from 'enzyme';

import FormStepCell from '../FormStepCell';

describe('FormStepCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<FormStepCell step={{ id: 1, step: 'test' }} onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('call onChange as expected', () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<FormStepCell step={{ id: 1, step: 'test' }} onChange={onChangeSpy} />);
    wrapper.simulate('changeText', 'a');
    expect(onChangeSpy.mock.calls).toMatchSnapshot();
  });
});

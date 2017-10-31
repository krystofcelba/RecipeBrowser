import React from 'react';
import { shallow } from 'enzyme';

import FormSeasoningCell from '../FormSeasoningCell';

describe('FormSeasoningCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<FormSeasoningCell seasoning={{ id: 1, seasoning: 'test' }} onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('call onChange as expected', () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<FormSeasoningCell seasoning={{ id: 1, seasoning: 'test' }} onChange={onChangeSpy} />);
    wrapper.simulate('changeText', 'a');
    expect(onChangeSpy.mock.calls).toMatchSnapshot();
  });
});

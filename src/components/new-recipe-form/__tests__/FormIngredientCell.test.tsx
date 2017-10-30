import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FormIngredientCell from '../FormIngredientCell';

describe('FormIngredientCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <FormIngredientCell ingredient={{ id: 1, name: 'test', amount: '0', unit: 'kg' }} onChange={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('call onChange as expected', () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(
      <FormIngredientCell ingredient={{ id: 1, name: 'test', amount: '0', unit: 'kg' }} onChange={onChangeSpy} />,
    );
    shallow(wrapper.prop('cellContentView'))
      .find('Input')
      .forEach(child => {
        child.simulate('changeText', 'a');
      });
    expect(onChangeSpy.mock.calls).toMatchSnapshot();
  });
});

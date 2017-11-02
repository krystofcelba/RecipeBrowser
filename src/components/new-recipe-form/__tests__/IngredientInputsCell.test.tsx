import React from 'react';
import { shallow } from 'enzyme';

import IngredientInputsCell from '../IngredientInputsCell';

describe('FormIngredientCell component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<IngredientInputsCell name="ingredient0" />);
    expect(wrapper).toMatchSnapshot();
  });
});

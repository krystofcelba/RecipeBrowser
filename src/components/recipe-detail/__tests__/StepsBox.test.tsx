import React from 'react';
import { shallow } from 'enzyme';
import StepsBox from '../StepsBox';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

describe('StepsBox component', () => {
  const mockedRecipe = mockedRecipes[0];
  it('renders as expected', () => {
    const wrapper = shallow(<StepsBox style={{}} steps={mockedRecipe.steps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

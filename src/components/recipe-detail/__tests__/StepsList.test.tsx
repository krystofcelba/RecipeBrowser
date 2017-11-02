import React from 'react';
import { shallow } from 'enzyme';
import StepsList from '../StepsList';

const mockedRecipes = require('src/__mockData__/recipes.json');

describe('StepsList component', () => {
  const mockedRecipe = mockedRecipes[0];
  it('renders as expected', () => {
    const wrapper = shallow(<StepsList steps={mockedRecipe.steps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

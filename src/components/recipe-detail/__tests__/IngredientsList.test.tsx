import React from 'react';
import { shallow } from 'enzyme';
import IngredientsList from '../IngredientsList';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

describe('IngredientsList component', () => {
  const mockedRecipe = mockedRecipes[2];
  it('renders as expected', () => {
    const wrapper = shallow(
      <IngredientsList ingredients={mockedRecipe.ingredients} seasonings={mockedRecipe.seasonings} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

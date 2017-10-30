import React from 'react';
import { shallow } from 'enzyme';
import IngredientsBox from '../IngredientsBox';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

describe('IngredientsBox component', () => {
  const mockedRecipe = mockedRecipes[2];
  it('renders as expected', () => {
    const wrapper = shallow(
      <IngredientsBox style={{}} ingredients={mockedRecipe.ingredients} seasonings={mockedRecipe.seasonings} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

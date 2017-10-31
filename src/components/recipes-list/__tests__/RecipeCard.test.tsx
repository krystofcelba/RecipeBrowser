import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from '../RecipeCard';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

describe('RecipeCard component', () => {
  const mockedRecipe = mockedRecipes[0];
  it('renders as expected', () => {
    const wrapper = shallow(<RecipeCard recipe={mockedRecipe} onPress={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls actions as expected on press', () => {
    const wrapper = shallow(
      <RecipeCard
        recipe={mockedRecipe}
        onPress={recipe => {
          expect(recipe).toEqual(mockedRecipe);
        }}
      />,
    );
    wrapper.simulate('press');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import { Platform } from 'react-native';

import RecipeDetail from '../RecipeDetail';

const mockedRecipes = require('../../services/__mockData__/recipes.json');
const mockedRecipe = mockedRecipes[0];

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  recipes: {
    recipes: { [mockedRecipe.id]: mockedRecipe },
  },
};

describe('RecipeDetail component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<RecipeDetail recipeId={mockedRecipe.id} />, {
      context: { store: mockStore(initialState) },
    });
    expect(wrapper.dive()).toMatchSnapshot();
  });
});

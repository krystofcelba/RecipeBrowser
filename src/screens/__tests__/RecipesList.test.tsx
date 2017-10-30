import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import { Platform } from 'react-native';

import RecipesList from '../RecipesList';
import { concatIngredientsNames } from '../../redux/reducers/recipes';

const mockedRecipes = require('../../services/__mockData__/recipes.json');

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  recipes: {
    recipesById: mockedRecipes.map(recipe => recipe.id) as [number],
    recipes: mockedRecipes.reduce(
      (recipesHash, recipe) => ({
        ...recipesHash,
        [recipe.id]: {
          ...recipe,
          ingredientsNames: concatIngredientsNames(recipe),
        },
      }),
      {},
    ),
  },
  ui: {
    recipesList: { searchInput: { text: '' } },
  },
};

describe('RecipesList component', () => {
  const setStyleSpy = sinon.spy();
  const showModalSpy = sinon.spy();
  const navigator = {
    setStyle: setStyleSpy,
    showModal: showModalSpy,
  };

  it('renders as expected', () => {
    const wrapper = shallow(<RecipesList navigator={navigator} />, { context: { store: mockStore(initialState) } });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(setStyleSpy.args).toMatchSnapshot();
  });

  it('renders as expected on android', () => {
    Platform.OS = 'android';
    const wrapper = shallow(<RecipesList navigator={navigator} />, { context: { store: mockStore(initialState) } });
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('show modal as expected on add button press', () => {
    const wrapper = shallow(<RecipesList navigator={navigator} />, { context: { store: mockStore(initialState) } });
    const render = wrapper.dive();
    render.find('ActionButton').forEach(child => {
      child.simulate('press');
      expect(showModalSpy.args).toMatchSnapshot();
    });
  });
});

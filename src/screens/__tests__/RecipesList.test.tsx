import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
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
  const navigator = {
    setStyle: () => {},
  };

  it('renders as expected', () => {
    const setStyle = jest.fn();
    const wrapper = shallow(<RecipesList navigator={{ ...navigator, setStyle }} />, {
      context: { store: mockStore(initialState) },
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(setStyle.mock.calls).toMatchSnapshot();
  });

  it('renders as expected on android', () => {
    Platform.OS = 'android';
    const wrapper = shallow(<RecipesList navigator={navigator} />, { context: { store: mockStore(initialState) } });
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('call show modal as expected on add button press', () => {
    const showModal = jest.fn();
    const wrapper = shallow(<RecipesList navigator={{ ...navigator, showModal }} />, {
      context: { store: mockStore(initialState) },
    });
    const render = wrapper.dive();
    render.find('ActionButton').forEach(child => {
      child.simulate('press');
      expect(showModal.mock.calls).toMatchSnapshot();
    });
  });

  it('returns recipe id as key', () => {
    const recipe = mockedRecipes[0];
    const wrapper = shallow(<RecipesList navigator={navigator} />, { context: { store: mockStore(initialState) } });
    expect(
      wrapper
        .dive()
        .instance()
        .recipeKeyExtractor(recipe),
    ).toBe(recipe.id);
  });

  it('renders recipe flat list item as expected', () => {
    const wrapper = shallow(<RecipesList navigator={navigator} />, { context: { store: mockStore(initialState) } });
    expect(
      wrapper
        .dive()
        .instance()
        .renderRecipeFlatListItem({ item: mockedRecipes[0] }),
    ).toMatchSnapshot();
  });

  it('calls push screen as expected on recipe flat list item press', () => {
    const push = jest.fn();
    const wrapper = shallow(<RecipesList navigator={{ ...navigator, push }} />, {
      context: { store: mockStore(initialState) },
    });

    const itemWrapper = shallow(
      wrapper
        .dive()
        .instance()
        .renderRecipeFlatListItem({ item: mockedRecipes[0] }),
    );
    itemWrapper.simulate('press');

    expect(push.mock.calls).toMatchSnapshot();
  });
});

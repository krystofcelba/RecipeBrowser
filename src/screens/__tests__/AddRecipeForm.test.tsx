import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import AddRecipeForm from '../AddRecipeForm';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  ui: {
    addRecipeForm: {
      newRecipe: {
        name: 'recipe',
        description: 'desc',
        ingredients: { 1: { id: 1, name: 'potatoes', amount: '1', unit: 'kg' } },
        seasonings: { 2: { id: 2, seasoning: 'red powder' } },
        steps: { 3: { id: 3, step: 'do that' } },
      },
    },
  },
};

describe('AddRecipeForm component', () => {
  const navigator = {
    setOnNavigatorEvent: () => {},
  };

  it('renders as expected', () => {
    const setOnNavigatorEvent = jest.fn();

    const wrapper = shallow(<AddRecipeForm navigator={{ ...navigator, setOnNavigatorEvent }} />, {
      context: { store: mockStore(initialState) },
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(setOnNavigatorEvent).toBeCalled();
  });

  it('renders as expected with image', () => {
    const image = { type: 'image/jpeg', data: 'data:image/jpeg;base64,xxxxxxxx' };
    const state = {
      ...initialState,
      ui: { addRecipeForm: { newRecipe: { ...initialState.ui.addRecipeForm.newRecipe, image } } },
    };
    const wrapper = shallow(<AddRecipeForm navigator={navigator} />, {
      context: {
        store: mockStore(state),
      },
    });
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('dispatches open image picker action as expected on pick image button press', () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<AddRecipeForm navigator={navigator} />, { context: { store } });
    const render = wrapper.dive();
    render.find('TouchableOpacity').forEach(child => {
      child.simulate('press');
    });
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches reset add recipe form action as expected and dismiss the modal on cancel button press', () => {
    const dismissModal = jest.fn();
    const store = mockStore(initialState);
    const wrapper = shallow(<AddRecipeForm navigator={{ ...navigator, dismissModal }} />, { context: { store } });
    const render = wrapper.dive();
    render.instance().onNavigatorEvent({ type: 'NavBarButtonPress', id: 'cancel' });
    expect(dismissModal).toBeCalled();
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches submit recipe form action as expected on add button press', () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<AddRecipeForm navigator={navigator} />, { context: { store } });
    const render = wrapper.dive();
    render.instance().onNavigatorEvent({ type: 'NavBarButtonPress', id: 'add' });
    expect(store.getActions()).toMatchSnapshot();
  });

  it('does not do anything as expected on any other navigator action', () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<AddRecipeForm navigator={navigator} />, { context: { store } });
    const render = wrapper.dive();
    render.instance().onNavigatorEvent({ type: 'anything' });
    expect(store.getActions()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import TopSearchBar from '../TopSearchBar';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
  ui: {
    recipesList: { searchInput: { text: '' } },
  },
};

const stateWithSomeInputText = {
  ui: {
    recipesList: { searchInput: { text: 'grape' } },
  },
};

describe('TopSearchBar component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<TopSearchBar />, { context: { store: mockStore(initialState) } });
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('renders as expected with clear icon when there is some text', () => {
    const wrapper = shallow(<TopSearchBar />, { context: { store: mockStore(stateWithSomeInputText) } });
    expect(wrapper.dive()).toMatchSnapshot();
  });
});

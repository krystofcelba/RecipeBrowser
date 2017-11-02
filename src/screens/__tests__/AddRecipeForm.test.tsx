import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { AddRecipeFormComponent } from '../AddRecipeForm';

describe('AddRecipeForm component', () => {
  const navigator = {
    setOnNavigatorEvent: () => {},
    setButtons: () => {},
  };

  it('renders as expected', () => {
    const setOnNavigatorEvent = jest.fn();
    const setButtons = jest.fn();

    const wrapper = shallow(
      <AddRecipeFormComponent
        navigator={{ ...navigator, setOnNavigatorEvent, setButtons }}
        validationErrors={{ name: 'error', description: 'description error' }}
        invalid={true}
        submit={() => new Promise<any>(resolve => resolve())}
      />,
      {},
    );
    expect(wrapper).toMatchSnapshot();
    expect(setOnNavigatorEvent).toBeCalled();
    expect(setButtons.mock.calls).toMatchSnapshot();
  });

  it('renders valid form as expected', () => {
    const setButtons = jest.fn();

    const wrapper = shallow(
      <AddRecipeFormComponent
        navigator={{ ...navigator, setButtons }}
        validationErrors={{}}
        invalid={false}
        submit={() => new Promise<any>(resolve => resolve())}
      />,
      {},
    );
    expect(wrapper).toMatchSnapshot();
    expect(setButtons.mock.calls).toMatchSnapshot();
  });

  it('calls updateNavigatorButtons on componentWillReceiveProps', () => {
    const wrapper = shallow(
      <AddRecipeFormComponent
        navigator={{ ...navigator }}
        validationErrors={{}}
        invalid={false}
        submit={() => new Promise<any>(resolve => resolve())}
      />,
      {},
    );
    const updateNavigatorButtons = jest.fn();
    wrapper.instance().updateNavigatorButtons = updateNavigatorButtons;
    wrapper.setProps({ navigator, validationErrors: {}, invalid: true });
    expect(updateNavigatorButtons).toBeCalledWith(true);
  });

  it('calls dismissModal on cancel button', () => {
    const dismissModal = jest.fn();

    const wrapper = shallow(
      <AddRecipeFormComponent
        navigator={{ ...navigator, dismissModal }}
        validationErrors={{}}
        invalid={false}
        submit={() => new Promise<any>(resolve => resolve())}
      />,
      {},
    );
    wrapper.instance().onNavigatorEvent({ type: 'NavBarButtonPress', id: 'cancel' });
    expect(dismissModal).toBeCalled();
  });

  it('calls submit on add button', () => {
    const submit = jest.fn();

    const wrapper = shallow(
      <AddRecipeFormComponent navigator={{ ...navigator }} validationErrors={{}} invalid={false} submit={submit} />,
      {},
    );
    wrapper.instance().onNavigatorEvent({ type: 'NavBarButtonPress', id: 'add' });
    expect(submit).toBeCalled();
  });

  it('does not do anything as expected on any other navigator action', () => {
    const wrapper = shallow(
      <AddRecipeFormComponent
        navigator={navigator}
        validationErrors={{}}
        invalid={false}
        submit={() => new Promise<any>(resolve => resolve())}
      />,
    );
    wrapper.instance().onNavigatorEvent({ type: 'anything' });
  });
});

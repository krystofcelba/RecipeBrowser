import React from 'react';
import { Platform } from 'react-native';
import { shallow } from 'enzyme';
import { View, PaddedView, KeyboardAvoidingView } from '../viewComponents';

describe('View components', () => {
  it('View renders as expected', () => {
    const wrapper = shallow(<View />);
    expect(wrapper).toMatchSnapshot();
  });

  it('PaddedView renders as expected', () => {
    const wrapper = shallow(<PaddedView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('KeyboardAvoidingView renders as expected', () => {
    const wrapper = shallow(
      <KeyboardAvoidingView>
        <View />
      </KeyboardAvoidingView>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('KeyboardAvoidingView renders as expected on Android', () => {
    Platform.OS = 'android';
    const wrapper = shallow(
      <KeyboardAvoidingView>
        <View />
      </KeyboardAvoidingView>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Input placeholder="placeholder" value="" onChangeText={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with defined style', () => {
    const wrapper = shallow(
      <Input placeholder="placeholder" value="" onChangeText={() => {}} style={{ margin: 10 }} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('call onChangeText as expected', () => {
    const mockedText = 'a';
    const wrapper = shallow(
      <Input
        placeholder="placeholder"
        value=""
        onChangeText={text => {
          expect(text).toBe(mockedText);
        }}
        style={{ margin: 10 }}
      />,
    );
    wrapper.simulate('changeText', mockedText);
  });
});

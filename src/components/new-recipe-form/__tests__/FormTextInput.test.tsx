import React from 'react';
import { shallow } from 'enzyme';
import FormTextInput from '../FormTextInput';

describe('FormTextInput component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <FormTextInput placeholder="placeholder" input={{ name: '', value: '', onChange: () => {} }} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with defined style', () => {
    const wrapper = shallow(
      <FormTextInput
        placeholder="placeholder"
        input={{ name: '', value: '', onChange: () => {} }}
        style={{ margin: 10 }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('call onChange as expected', () => {
    const mockedText = 'a';
    const wrapper = shallow(
      <FormTextInput
        placeholder="placeholder"
        input={{
          name: '',
          value: '',
          onChange: text => {
            expect(text).toBe(mockedText);
          },
        }}
      />,
    );
    wrapper.simulate('changeText', mockedText);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import FormImageInput from '../FormImageInput';
import { base64Uri } from 'src/__mockData__';

describe('FormImageInput component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<FormImageInput input={{ name: 'image', value: '', onChange: () => {} }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with image', async () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <FormImageInput
        input={{
          name: 'image',
          value: base64Uri,
          onChange,
        }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onChange as expected', async () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <FormImageInput
        input={{
          name: '',
          value: '',
          onChange,
        }}
      />,
    );
    await wrapper.instance().onPress();
    expect(onChange.mock.calls).toMatchSnapshot();
  });
});

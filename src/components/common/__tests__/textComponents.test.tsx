import React from 'react';
import { shallow } from 'enzyme';
import { Text, BoldText, LeftPaddedText, TitleText, SubTitleText } from '../textComponents';

describe('Text components', () => {
  const text = 'text';
  it('Text renders as expected', () => {
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('BoldText renders as expected', () => {
    const wrapper = shallow(<BoldText>{text}</BoldText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('LeftPaddedText renders as expected', () => {
    const wrapper = shallow(<LeftPaddedText>{text}</LeftPaddedText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('TitleText renders as expected', () => {
    const wrapper = shallow(<TitleText>{text}</TitleText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('SubTitleText renders as expected', () => {
    const wrapper = shallow(<SubTitleText>{text}</SubTitleText>);
    expect(wrapper).toMatchSnapshot();
  });
});

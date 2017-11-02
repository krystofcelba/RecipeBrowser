import React from 'react';
import { shallow } from 'enzyme';

import ErrorsSectionFooter from '../ErrorsSectionFooter';

describe('ValidationErrors component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<ErrorsSectionFooter errors={{}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with defined errors', () => {
    const wrapper = shallow(<ErrorsSectionFooter errors={{ name: 'error', description: 'error1', test: undefined }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with defined errors for arrays', () => {
    const wrapper = shallow(<ErrorsSectionFooter errors={{ '0': 'array error 0', '1': 'array error 1' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

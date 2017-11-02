import React from 'react';
import { shallow } from 'enzyme';

import FieldArraySection from '../FieldArraySection';
import TextInputCell from '../TextInputCell';

describe('FieldArraySection component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<FieldArraySection fields={[]} header="header" fieldComponent={TextInputCell} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with fields', () => {
    const wrapper = shallow(<FieldArraySection placeholder="placeholder" fields={['field[0]']} header="header" fieldComponent={TextInputCell} />);
    expect(wrapper).toMatchSnapshot();
  });
});

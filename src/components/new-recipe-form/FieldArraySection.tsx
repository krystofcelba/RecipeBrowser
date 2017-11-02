import React from 'react';
import { Section } from 'react-native-tableview-simple';
import { GenericFieldArray } from 'redux-form';

import i18n from 'src/assets/i18n';
import ErrorsSectionFooter from './ErrorsSectionFooter';
import ButtonCell from './ButtonCell';

interface Props {
  header?: string;
  fields: GenericFieldArray;
  fieldComponent: React.SFC<any> | React.ComponentClass<any> | string;
  errors?: [string];
}

const FieldArraySection = ({ fields, errors = {}, header, fieldComponent, ...otherProps }: Props) => (
  <Section header={header} footerComponent={<ErrorsSectionFooter errors={errors} />}>
    {fields.map((field, i) => React.createElement(fieldComponent, { ...otherProps, key: i, index: i, name: field }))}
    <ButtonCell title={`+ ${i18n.t('add')}`} onPress={fields.push} />
  </Section>
);

export default FieldArraySection;

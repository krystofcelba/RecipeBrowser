import React from 'react';

import FormInputCell from './FormInputCell';
import { NewStep } from '../../redux/reducers/ui';
import i18n from '../../assets/i18n';

interface Props {
  step: NewStep;
  onChange: (step: NewStep) => void;
}

const FormStepCell = ({ step, onChange }: Props) => (
  <FormInputCell
    placeholder={i18n.t('step')}
    value={step.step}
    onChangeText={text => onChange({ ...step, step: text })}
    numberOfLines={3}
  />
);

export default FormStepCell;

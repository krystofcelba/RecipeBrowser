import React from 'react';

import FormInputCell from './FormInputCell';
import { NewSeasoning } from '../../redux/reducers/ui';
import i18n from '../../assets/i18n';

interface Props {
  seasoning: NewSeasoning;
  onChange: (seasoning: NewSeasoning) => void;
}

const FormSeasoningCell = ({ seasoning, onChange }: Props) => (
  <FormInputCell
    placeholder={i18n.t('seasoning')}
    value={seasoning.seasoning}
    onChangeText={text => onChange({ ...seasoning, seasoning: text })}
  />
);

export default FormSeasoningCell;

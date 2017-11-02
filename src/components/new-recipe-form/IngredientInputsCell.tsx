import React from 'react';
import { StyleSheet } from 'react-native';
import { Cell } from 'react-native-tableview-simple';
import { Field } from 'redux-form/immutable';

import { View, BoldText } from 'src/components/common';
import AppTheme from 'src/assets/appTheme';
import i18n from 'src/assets/i18n';
import FormTextInput from './FormTextInput';

interface Props {
  index: number;
  name: string;
}

const IngredientInputsCell = ({ index, name }: Props) => (
  <Cell
    cellContentView={
      <View flex={1} flexDirection="row">
        <BoldText>#{index + 1}</BoldText>
        <View style={styles.container}>
          <Field
            style={styles.nameInput}
            placeholder={i18n.t('name')}
            name={`${name}.name`}
            component={FormTextInput}
          />
          <Field
            style={styles.amountInput}
            placeholder={i18n.t('amount')}
            name={`${name}.amount`}
            component={FormTextInput}
          />
          <Field
            style={styles.unitInput}
            placeholder={i18n.t('unit')}
            name={`${name}.unit`}
            component={FormTextInput}
          />
        </View>
      </View>
    }
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppTheme.defaultPadding,
    width: '100%',
    flexDirection: 'row',
  },
  nameInput: {
    width: '60%',
  },
  amountInput: {
    width: '20%',
    textAlign: 'center',
  },
  unitInput: {
    width: '20%',
    textAlign: 'right',
  },
});

export default IngredientInputsCell;

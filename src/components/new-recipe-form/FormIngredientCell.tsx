import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import { StylesConstants } from '../../assets/constants';
import { NewIngredient } from '../../redux/reducers/ui';
import Input from './Input';
import i18n from '../../assets/i18n';

interface Props {
  ingredient: NewIngredient;
  onChange: (ingredient: NewIngredient) => void;
}

const FormIngredientCell = ({ ingredient, onChange }: Props) => (
  <Cell
    cellContentView={
      <View style={styles.container}>
        <Input
          style={styles.nameInput}
          placeholder={i18n.t('name')}
          value={ingredient.name}
          onChangeText={name => onChange({ ...ingredient, name })}
        />
        <Input
          style={styles.amountInput}
          placeholder={i18n.t('amount')}
          value={ingredient.amount}
          onChangeText={amount => onChange({ ...ingredient, amount })}
        />
        <Input
          style={styles.unitInput}
          placeholder={i18n.t('unit')}
          value={ingredient.unit}
          onChangeText={unit => onChange({ ...ingredient, unit })}
        />
      </View>
    }
  />
);

const styles = StyleSheet.create({
  container: { width: '100%', paddingVertical: 10, flexDirection: 'row' },
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

export default FormIngredientCell;

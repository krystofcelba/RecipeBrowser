import React from 'react';
import glamorous from 'glamorous-native';
const { View } = glamorous;

import i18n from 'src/assets/i18n';
import { Ingredient } from 'src/services/api';
import { SubTitleText, BoldText, LeftPaddedText } from 'src/components/common';

interface Props {
  ingredients: [Ingredient];
  seasonings: [string];
}

const IngredientsList = ({ ingredients, seasonings }: Props) => (
  <View flex={1}>
    <SubTitleText>{i18n.t('ingredients')}</SubTitleText>
    {ingredients.map(({ amount, unit, name }, i) => (
      <View flexDirection="row" key={i}>
        <LeftPaddedText>{'\u2022'}</LeftPaddedText>
        <LeftPaddedText>{`${amount} ${unit} ${name}`}</LeftPaddedText>
      </View>
    ))}
    <View flexDirection="column">
      <BoldText>Seasonings</BoldText>
      <LeftPaddedText>
        {seasonings.map((seasoning, i) => `${seasoning}${i < seasonings.length - 1 ? ', ' : ''}`)}
      </LeftPaddedText>
    </View>
  </View>
);

export default IngredientsList;

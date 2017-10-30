import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import { StylesConstants, Colors } from 'src/assets/constants';
import i18n from 'src/assets/i18n';
import { Ingredient } from 'src/services/api';

interface Props {
  style: StyleProp<ViewStyle>;
  ingredients: [Ingredient];
  seasonings: [string];
}

const IngredientsBox = ({ style, ingredients, seasonings }: Props) => (
  <View style={[styles.container, style]}>
    <Text style={styles.heading}>{i18n.t('ingredients')}</Text>
    {ingredients.map(({ amount, unit, name }, i) => (
      <View style={styles.ingredientTextContainer} key={i}>
        <Text style={styles.ingredientText}>{'\u2022'}</Text>
        <Text style={styles.ingredientText}>{`${amount} ${unit} ${name}`}</Text>
      </View>
    ))}
    <View style={styles.seasoningsContainer}>
      <Text style={styles.seasoningsTitle}>Seasonings</Text>
      <Text style={styles.seasoningsText}>
        {seasonings.map((seasoning, i) => `${seasoning}${i < seasonings.length - 1 ? ', ' : ''}`)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: StylesConstants.detailBoxHeadingFontSize,
    fontWeight: 'bold',
    fontFamily: StylesConstants.fontFamily,
  },
  ingredientTextContainer: { flexDirection: 'row' },
  ingredientText: { fontFamily: StylesConstants.fontFamily, paddingLeft: StylesConstants.defaultMargin / 2 },
  seasoningsContainer: {
    flexDirection: 'column',
    marginTop: StylesConstants.defaultMargin / 2,
    marginRight: StylesConstants.defaultMargin,
  },
  seasoningsTitle: { fontFamily: StylesConstants.fontFamily, fontWeight: 'bold' },
  seasoningsText: { fontFamily: StylesConstants.fontFamily, paddingLeft: StylesConstants.defaultMargin / 2 },
});

export default IngredientsBox;

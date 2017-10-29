import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import { StylesConstants } from 'src/assets/constants';
import i18n from 'src/assets/i18n';

interface Props {
  style: StyleProp<ViewStyle>;
  steps: [string];
}

const StepsBox = ({ style, steps }: Props) => (
  <View style={[styles.container, style]}>
    <Text style={styles.heading}>{i18n.t('steps')}</Text>
    {steps.map((step, i) => (
      <View style={styles.stepTextContainer} key={i}>
        <Text style={styles.stepNum}>{`${1 + i}.`}</Text>
        <Text style={styles.stepText}>{step}</Text>
      </View>
    ))}
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
  stepTextContainer: { flexDirection: 'row' },
  stepNum: {
    fontFamily: StylesConstants.fontFamily,
    fontWeight: 'bold',
    paddingLeft: StylesConstants.defaultMargin / 2,
  },
  stepText: { fontFamily: StylesConstants.fontFamily, paddingLeft: StylesConstants.defaultMargin / 2 },
  seasoningsContainer: {
    flexDirection: 'column',
    marginTop: StylesConstants.defaultMargin / 2,
    marginRight: StylesConstants.defaultMargin,
  },
});

export default StepsBox;

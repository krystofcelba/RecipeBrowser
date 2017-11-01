import React from 'react';
import glamorous from 'glamorous-native';
const { View } = glamorous;

import i18n from 'src/assets/i18n';
import { SubTitleText, LeftPaddedBoldText, LeftPaddedText } from 'src/components/common';

interface Props {
  steps: [string];
}

const StepsList = ({ steps }: Props) => (
  <View flex={1}>
    <SubTitleText>{i18n.t('steps')}</SubTitleText>
    {steps.map((step, i) => (
      <View flexDirection="row" key={i}>
        <LeftPaddedBoldText>{`${1 + i}.`}</LeftPaddedBoldText>
        <LeftPaddedText>{step}</LeftPaddedText>
      </View>
    ))}
  </View>
);

export default StepsList;

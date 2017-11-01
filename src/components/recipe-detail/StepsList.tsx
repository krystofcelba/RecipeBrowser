import React from 'react';

import i18n from 'src/assets/i18n';
import { View, SubTitleText, LeftPaddedBoldText, LeftPaddedText } from 'src/components/common';

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

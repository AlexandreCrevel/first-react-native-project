import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { ThemedText } from '../ThemedText';

type ProgressBarProps = {
  step: number;
  numberOfQuestions: number;
};
const ProgressBar = ({ step, numberOfQuestions }: ProgressBarProps) => {
  return (
    <View style={{ width: '100%', padding: 15 }}>
      <Progress.Bar progress={step / numberOfQuestions} width={null} />
      <ThemedText>
        {step} / {numberOfQuestions}
      </ThemedText>
    </View>
  );
};

export default ProgressBar;

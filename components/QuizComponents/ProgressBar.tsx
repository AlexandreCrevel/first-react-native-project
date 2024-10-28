import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { ThemedText } from '../ThemedText';

type ProgressBarProps = {
  style?: Object;
  step: number;
  numberOfQuestions: number;
};
const ProgressBar = ({ style, step, numberOfQuestions }: ProgressBarProps) => {
  return (
    <View style={style}>
      <Progress.Bar progress={step / numberOfQuestions} width={null} />
      <ThemedText>
        {step} / {numberOfQuestions}
      </ThemedText>
    </View>
  );
};

export default ProgressBar;

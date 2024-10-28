import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';

const Answer = ({
  answer,
  onPress,
}: {
  answer: string;
  onPress: () => void;
}) => {
  return (
    <ThemedText style={style.container} onPress={onPress}>
      {answer}
    </ThemedText>
  );
};

export default Answer;

const style = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
  },
});

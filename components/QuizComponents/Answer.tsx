import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';

const Answer = ({
  answer,
  onPress,
}: {
  answer: string;
  onPress: () => void;
}) => {
  return (
    <View style={style.container}>
      <ThemedText onPress={onPress}>{answer}</ThemedText>
    </View>
  );
};

export default Answer;

const style = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

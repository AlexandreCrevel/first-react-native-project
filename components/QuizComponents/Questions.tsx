import { questionsType } from '@/types/quiz';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import Answer from './Answer';

type QuestionProps = {
  question: questionsType;
  addAnswer: (answer: string) => void;
};

const Questions = ({ question, addAnswer }: QuestionProps) => {
  return (
    <View style={{ width: '100%' }}>
      <ThemedText
        style={{ textAlign: 'center', marginBottom: 20, fontSize: 25 }}
        type='subtitle'
      >
        {question.question}
      </ThemedText>
      {question.choices.map((choice, index) => (
        <TouchableOpacity key={choice} activeOpacity={0.8}>
          <Answer answer={choice} onPress={() => addAnswer(choice)} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Questions;

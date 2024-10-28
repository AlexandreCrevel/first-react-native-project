import React from 'react';
import { Text, View } from 'react-native';

interface Question {
  correct_answer: string;
  question: string;
  choices: string[];
}

interface RecapProps {
  minimum_score: number;
  success_message: string;
  failure_message: string;
  questions: Question[];
  answers: (string | null)[];
}
const Recap = ({
  minimum_score,
  success_message,
  failure_message,
  questions,
  answers,
}: RecapProps) => {
  const score = () => {
    if (!questions || !answers) return 0;
    return questions.reduce((acc, question, index) => {
      if (answers[index] === question.correct_answer) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  const has_won = () => {
    return score() >= minimum_score;
  };

  return (
    <View>
      <Text>Your score: {score() / questions.length}</Text>
      <Text>{has_won() ? success_message : failure_message}</Text>
    </View>
  );
};

export default Recap;
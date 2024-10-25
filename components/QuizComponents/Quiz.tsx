import ProgressBar from '@/components/QuizComponents/ProgressBar';
import { ThemedText } from '@/components/ThemedText';
import { quizType } from '@/types/quiz';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Quiz = ({ datas }: { datas: quizType }) => {
  const { title, minimum_score, success_message, failure_message, questions } =
    datas;
  const numberOfQuestions = questions.length;
  const [step, setStep] = useState(0);

  return (
    <View>
      <ThemedText type='title' style={style.title}>
        {datas.title}
      </ThemedText>
      <ProgressBar step={step} numberOfQuestions={numberOfQuestions} />
    </View>
  );
};

export default Quiz;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

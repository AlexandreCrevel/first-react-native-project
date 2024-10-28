import ProgressBar from '@/components/QuizComponents/ProgressBar';
import { ThemedText } from '@/components/ThemedText';
import { quizType } from '@/types/quiz';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Questions from './Questions';
import Recap from './Recap';

const Quiz = ({ datas }: { datas: quizType }) => {
  const { title, minimum_score, success_message, failure_message, questions } =
    datas;
  const numberOfQuestions = questions.length;
  const [step, setStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[step]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [state, setState] = useState<'quiz' | 'results'>('quiz');

  const addAnswer = (answer: string) => {
    if (step + 1 === numberOfQuestions) {
      console.log('results');
      setState('results');
    } else {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
      setCurrentQuestion(questions[step + 1]);
      setStep(step + 1);
    }
  };

  return (
    <View style={style.container}>
      <ThemedText type='title' style={style.title}>
        {title}
      </ThemedText>
      <ProgressBar
        style={style.progressBar}
        step={step}
        numberOfQuestions={numberOfQuestions}
      />
      {state === 'quiz' && (
        <Questions addAnswer={addAnswer} question={currentQuestion} />
      )}
      {state === 'results' && (
        <Recap
          minimum_score={minimum_score}
          success_message={success_message}
          failure_message={failure_message}
          questions={questions}
          answers={answers}
        />
      )}
    </View>
  );
};

export default Quiz;
const style = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  progressBar: {
    marginVertical: 30,
    width: '100%',
  },
});

export type quizType = {
  title: string;
  minimum_score: number;
  success_message: string;
  failure_message: string;
  questions: questionsType[];
};

export type questionsType = {
  question: string;
  choices: string[];
  correct_answer: string;
};

import React, { useState } from 'react';
import { default as questions } from '../data/questions.json';

export type answer = {
  answer_content: string;
  correct: boolean;
  active?: boolean;
};

export type data = {
  id: string;
  question_content: string;
  answers: answer[];
};

const AppContext = React.createContext({
  question: {
    id: '',
    question_content: '',
    answers: [
      {
        answer_content: '',
        correct: false,
      },
    ],
  },
  curQuestion: 0,
  type: '',
  score: 0,
  complete: false,
  onStart: (): void => {},
  onNext: (): void => {},
  onPrevious: (): void => {},
  onSubmit: (): void => {},
  onReview: (): void => {},
  onAgain: (): void => {},
  onTimeOut: (): void => {},
});

let count = 0;
let score = 0;
let complete = false;
const data: data[] = [...questions];
data.forEach((ques) => {
  ques.answers.map((answer: answer) => {
    answer.active = false;
  });
});

export const AppContextProvider = (props: any) => {
  const [question, setQuestion] = useState(data[count]);
  const [type, setType] = useState('START');

  // Start game
  const onStart = () => {
    setType('IN__GAME');
  };

  // Next question
  const onNext = () => {
    if (count === data.length - 1) {
      return;
    }
    count = count + 1;
    setQuestion(data[count]);
  };

  //Previous question
  const onPrevious = () => {
    if (count === 0) {
      return;
    }
    count = count - 1;
    setQuestion(data[count]);
  };

  // Submit and calculator score
  const onSubmit = () => {
    complete = true;
    data.forEach((a, i) => {
      a.answers.forEach((answer) => {
        if (
          answer.correct === answer.active &&
          answer.active === true &&
          answer.correct === true
        ) {
          score = score + 1;
        }
        return;
      });
    });
    if (window.confirm('Do you want to submit!')) setType('END__GAME');
  };

  const onTimeOut = () => {
    complete = true;
    data.forEach((a, i) => {
      a.answers.forEach((answer) => {
        if (
          answer.correct === answer.active &&
          answer.active === true &&
          answer.correct === true
        ) {
          score = score + 1;
        }
        return;
      });
    });
    setType('END__GAME');
  };

  // Try Again or Restart
  const onAgain = () => {
    if (type === 'END__GAME' || type === 'REVIEW') {
      data.forEach((ques) => {
        ques.answers.forEach((answer) => {
          answer.active = false;
        });
      });
      count = 0;
      score = 0;
      complete = false;
      setType('START');
      setQuestion(data[count]);
    }
  };

  // Review
  const onReview = () => {
    count = 0;
    setType('REVIEW');
    setQuestion(data[count]);
  };

  return (
    <AppContext.Provider
      value={{
        question: question,
        type: type,
        curQuestion: count,
        score: score,
        complete: complete,
        onStart: onStart,
        onNext: onNext,
        onPrevious: onPrevious,
        onSubmit: onSubmit,
        onReview: onReview,
        onAgain: onAgain,
        onTimeOut: onTimeOut,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

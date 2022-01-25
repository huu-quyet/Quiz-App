import React, { useEffect, useState } from 'react';
import { answer } from '../Store/AppContext';
import Answer from './Answer';
import classes from './AnswerList.module.scss';

type Props = {
  answers: answer[];
};

const AnswerList = (props: Props) => {
  const [answers, setAnswer] = useState(props.answers);

  useEffect(() => {
    setAnswer(props.answers);
  }, [props.answers]);

  const toggle = (index: number) => {
    const newAnswerActive: any = answers.map((answer, i) => {
      answer.active = false;
      if (index === i) {
        answer.active = true;
        return answer;
      } else {
        return answer;
      }
    });
    setAnswer(newAnswerActive);
  };

  const answerList = answers?.map((answer, index) => {
    return (
      <Answer
        toggle={() => toggle(index)}
        key={index}
        index={index}
        answer={answer}
      ></Answer>
    );
  });
  return <ul className={classes.answers}>{answerList}</ul>;
};

export default AnswerList;

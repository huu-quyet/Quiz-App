import React from 'react';
import classes from './Question.module.scss';

type Props = {
  question: string;
  id: string;
};

const Question = (props: Props) => {
  return (
    <div className={classes.question}>
      <h4 className={classes['question--title']}>
        Question <span>{props.id}</span>/5
      </h4>
      <p className={classes['question--description']}>{props.question}</p>
    </div>
  );
};

export default Question;

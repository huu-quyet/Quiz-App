import React, { useContext } from 'react';
import Button from '../UI/Button';
import Timer from '../Components/Timer';
import Question from '../Components/Question';
import AnswerList from '../Components/AnswerList';
import AppContext from '../Store/AppContext';
import classes from './ReviewGame.module.scss';

interface State {
  title: string[];
  time: number;
}

const ReviewGame = () => {
  const { question, ...other } = useContext(AppContext);
  const state: State = {
    title: ['Previous', 'Next', 'Restart'],
    time: 0,
  };

  return (
    <section className={classes.inGame}>
      <div className={`${classes.inGame} ${classes.action}`}>
        <Button
          onClick={other.onPrevious}
          type={'PREVIOUS'}
          title={state.title[0]}
          curQuestion={other.curQuestion}
        />
        <Button
          onClick={other.onNext}
          type={'PRIMARY'}
          title={state.title[1]}
          curQuestion={other.curQuestion}
        />
        <Button
          onClick={other.onAgain}
          type={'SUBMIT'}
          title={state.title[2]}
        />
      </div>
      <div className={classes.form}>
        <Timer time={state.time} />
        <Question id={question.id} question={question.question_content} />
      </div>
      <div className={classes.answers}>
        <AnswerList answers={question.answers} />
      </div>
    </section>
  );
};

export default ReviewGame;

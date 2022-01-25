import React, { useContext } from 'react';
import Button from '../UI/Button';
import Timer from '../Components/Timer';
import Question from '../Components/Question';
import AnswerList from '../Components/AnswerList';
import classes from './InGame.module.scss';
import AppContext from '../Store/AppContext';

const InGame = () => {
  const { question, ...other } = useContext(AppContext);
  const state = {
    title: ['Previous', 'Next', 'Submit'],
    time: 90,
  };

  const onSubmit = () => {
    other.type = 'SUBMIT';
    other.onSubmit();
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
        {other.curQuestion === 4 && (
          <Button onClick={onSubmit} type={'SUBMIT'} title={state.title[2]} />
        )}
      </div>
      <div className={classes.form}>
        <Timer time={state.time} />
        <Question id={question.id} question={question.question_content} />
      </div>
      <AnswerList answers={question.answers} />
    </section>
  );
};

export default InGame;

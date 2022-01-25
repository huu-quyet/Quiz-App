import React, { useContext } from 'react';
import AppContext from '../Store/AppContext';
import Button from '../UI/Button';
import classes from './EndGame.module.scss';

const EndGame = () => {
  const endGameCtx = useContext(AppContext);
  const state = {
    title: ['Try Again', 'Review'],
  };
  return (
    <div>
      <h2 className={classes.title}>
        Your score is: <span>{endGameCtx.score}</span>
      </h2>
      <div className={classes['control-button']}>
        <Button
          onClick={endGameCtx.onAgain}
          type={'TRY AGAIN'}
          title={state.title[0]}
          curQuestion={endGameCtx.curQuestion}
        />
        <Button
          onClick={endGameCtx.onReview}
          type={'VIEW'}
          title={state.title[1]}
          curQuestion={endGameCtx.curQuestion}
        />
      </div>
    </div>
  );
};

export default EndGame;

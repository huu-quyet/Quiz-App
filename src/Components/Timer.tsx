import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Store/AppContext';
import classes from './Timer.module.scss';

type Props = {
  time: number;
};

const Timer = (props: Props) => {
  const timerCtx = useContext(AppContext);
  const state = {
    time: props.time,
  };

  const [timer, setTimer] = useState(state.time);

  useEffect(() => {
    const time = setTimeout(() => {
      if (timer > 0) {
        setTimer((prev: number) => {
          return prev - 1;
        });
      } else if (timer === 0 && timerCtx.type !== 'REVIEW') {
        timerCtx.onTimeOut();
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [timer]);

  let minute = Math.floor(timer / 60);
  let second = timer % 60;

  return (
    <div className={classes.timer}>
      <div
        className={timer > 0 ? classes['timer--text'] : classes['timer--end']}
      >
        {timer === 0 ? 'End!' : <span>{`0${minute}: ${second}`}</span>}
      </div>
      {timerCtx.type === 'IN__GAME' && (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="circle"
          className={classes.svg}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
      )}
    </div>
  );
};

export default React.memo(Timer, (prevProps, nextProps) => {
  return prevProps.time === nextProps.time;
});

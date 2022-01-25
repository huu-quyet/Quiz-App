import React from 'react';
import classes from './Button.module.scss';

type Props = {
  title: string;
  curQuestion?: number;
  type: 'PRIMARY' | 'VIEW' | 'NEXT' | 'PREVIOUS' | 'SUBMIT' | 'TRY AGAIN';
  onClick: () => void;
};

const Button = (props: Props) => {
  let styleBtn: string = classes['button-primary'];
  switch (props.type) {
    case 'VIEW':
      styleBtn = classes['button-view'];
      break;
    case 'PREVIOUS':
      if (props.curQuestion === 0) {
        styleBtn = classes['button-limited'];
      } else {
        styleBtn = classes['button-previous'];
      }
      break;
    case 'PRIMARY':
      if (props.curQuestion === 4) {
        styleBtn = classes['button-limited'];
      } else {
        styleBtn = classes['button-primary'];
      }
      break;
    case 'SUBMIT':
      styleBtn = classes['button-submit'];
      break;
    case 'TRY AGAIN':
      styleBtn = classes['button-primary'];
      break;
  }

  return (
    <button onClick={props.onClick} className={`${classes.button} ${styleBtn}`}>
      {props.title}
    </button>
  );
};

export default Button;

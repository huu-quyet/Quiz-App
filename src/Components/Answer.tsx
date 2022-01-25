import React, { useContext } from 'react';
import AppContext, { answer } from '../Store/AppContext';
import classes from './Answer.module.scss';

type Props = {
  toggle: () => void;
  answer: answer;
  index: number;
};

const Answer = (props: Props) => {
  const { ...answerCtx } = useContext(AppContext);
  const answer = props.answer;
  let styled: string = `${classes.answer} ${classes.none}`;

  if (
    (answer.active === true && answer.correct === true) ||
    answer.correct === true
  ) {
    styled = `${classes.complete} ${classes.true}`;
  } else if (answer.active === true && answer.correct === false) {
    styled = `${classes.complete} ${classes.false}`;
  } else {
    styled = `${classes.complete} ${classes.none}`;
  }

  return (
    <React.Fragment>
      {answerCtx.complete && (
        <li className={styled}>
          <span>
            {props.index + 1}) {props.answer.answer_content}
          </span>
        </li>
      )}
      {!answerCtx.complete && (
        <li
          onClick={props.toggle}
          className={`${
            props.answer.active
              ? `${classes.answer} ${classes.active}`
              : `${classes.answer} ${classes.none}`
          }`}
        >
          <span>
            {props.index + 1}) {props.answer.answer_content}
          </span>
        </li>
      )}
    </React.Fragment>
  );
};

export default Answer;

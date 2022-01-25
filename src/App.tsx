import React, { useContext } from 'react';
import StartGame from './Layout/StartGame';
import EndGame from './Layout/EndGame';
import InGame from './Layout/InGame';
import ReviewGame from './Layout/ReviewGame';
import './App.scss';
import AppContext from './Store/AppContext';

const App = () => {
  const appCtx = useContext(AppContext);

  return (
    <React.Fragment>
      {appCtx.type === 'START' && <StartGame />}
      {appCtx.type === 'IN__GAME' && <InGame />}
      {appCtx.type === 'END__GAME' && <EndGame />}
      {appCtx.type === 'REVIEW' && <ReviewGame />}
    </React.Fragment>
  );
};

export default App;

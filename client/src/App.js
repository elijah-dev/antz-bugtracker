import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navpanel from './components/nav/Navpanel';
import Popup from './components/modal/Popup';
import Board from './components/board/Board';
import InitialDispatcher from './InitialDispatcher';

function App() {
  return (
    <div className='App'>
      <InitialDispatcher />
      <Popup />
      <Navpanel />
      <Board />
    </div>
  );
}

export default App;

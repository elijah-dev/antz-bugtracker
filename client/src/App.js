import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navpanel from './components/nav/navpanel';
import AuthPopup from './components/popup';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './actions/auth-actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCurrentUser()), [dispatch]);
  return (
    <div className='App'>
      <AuthPopup />
      <Navpanel />
    </div>
  );
}

export default App;

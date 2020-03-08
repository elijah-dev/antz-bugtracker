import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navpanel from './components/navpanel';
import Cloudinary from './components/cloudinary';

function App() {
  return (
    <div className='App'>
      <Navpanel />
      <Cloudinary />
    </div>
  );
}

export default App;

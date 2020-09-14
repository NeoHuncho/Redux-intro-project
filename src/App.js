import React from 'react';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {Provider} from 'react-redux';
import Store from './Store'
function App() {
  return (
    <Provider store={Store} >
      <div className='App' >
        <div className='Content'>
        <Postform/>
        <hr/>
        <Posts />
      </div>
       </div>
    </Provider>
  );

}

export default App;

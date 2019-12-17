import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';


const EarringsPage = () => (
  <div>
    <h1>EARRINGS</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/earrings' component={EarringsPage} />
      </Switch>
    </div>
  );
}

export default App;

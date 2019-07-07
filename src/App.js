import React from 'react';
import './App.css';
import Lost from './Lost';
import { Route } from 'react-router-dom';
import Details from './Details'
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Lost} />
      <Route path='/details/:id' component={Details} />
    </div>
  );
}

export default App;

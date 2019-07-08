import React, {Component} from 'react';
import './App.css';
import Lost from './Lost';
import { Route } from 'react-router-dom';
import Details from './Details';
import MapContainer from './MapContainer'
import Nav from './Nav';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Route ecact path='/' component={MapContainer} />
        <Route exact path='/lost/' component={Lost} />
        <Route exact path='/details/:id' component={Details} />
      </div>
    );
  }
}

export default App;

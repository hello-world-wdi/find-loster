import React, {Component} from 'react';
import './App.css';
import Lost from './Lost';
import { Route } from 'react-router-dom';
import Details from './Details';
import MapContainer from './MapContainer'
import Nav from './Nav';
import NewLostInf from './NewLostInf'
class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' component={MapContainer} />
        <Route exact path='/lost/' component={Lost} />
        <Route exact path='/lost/details/:id' component={Details} />
        <Route exact path='/newLostInf' component={NewLostInf} />
      </div>
    );
  }
}

export default App;

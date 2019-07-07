import React, { Component } from "react";
// import { Route ,Link} from 'react-router-dom'
import Details from './Details';
import Lost from './Lost';
import NewLostInf from './NewLostInf';
import Api from './api.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Lost from './Lost'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lost />
      </header>
    </div>
  );
}

class App extends Component{
  render(){
    return (
      <div className="App">
      <h1>Find Losters App</h1>
            
      <button><Link to="/lost">Help</Link></button>
      <button><Link to="/newLostInf">New Lost</Link></button>
      <Route exact path="/lost" component={Lost} />
      <Route exact path="/newLostInf" component={NewLostInf} />
      
      <Api/>
      </div>
    );
  }}


export default App;

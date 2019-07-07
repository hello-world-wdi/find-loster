import React from 'react';
import './App.css';
import Lost from './Lost'


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

import React, { Component } from "react";
// import logo from './logo.svg';
import {Route ,Link } from 'react-router-dom';
import Details from './Details';
import Lost from './Lost';
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

export default App;

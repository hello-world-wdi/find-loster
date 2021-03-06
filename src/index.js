import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
const AppJsx = (
    <HashRouter>
      <App />
    </HashRouter>
  )
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(AppJsx, rootElement);
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



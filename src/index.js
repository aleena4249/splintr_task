import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/components/home/home';
import SignIn from './SignIn/components/signin/signIn'
import { BrowserRouter as Router, Route } from "react-router-dom";


const routing = (
  <React.StrictMode>
    <Router>
      <div className="main-style">
        <Route path="/" exact component={Home} />
        <Route path="/signIn" component={SignIn} />
      </div>
    </Router>
  </React.StrictMode>
);
ReactDOM.render(routing, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
export { Router, Route, Switch, withRouter } from "react-router-dom";

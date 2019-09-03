import React, {useState, Fragment} from 'react';
import Navbar from './components/layout/Narbar';

import User from './components/users/User';
import Home from './components/pages/home';
import notFound from './components/pages/notFound';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

const App =() =>{
  return (
    <GithubState>
    <AlertState>
    <Router>
    <div className="App">
      <Navbar/>
      
      <div className="container">
      <Alert/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/user/:login"  component={User}/>
          <Route component={notFound}/>
        </Switch>
        
      
      </div>
      
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
  
}

export default App;

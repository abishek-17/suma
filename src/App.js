import React, { Component } from 'react';
import Appointment from './components/Appointment'
import View from './components/view'
import './App.css'
import Nav from './components/Nav'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
class App extends Component {

  render() { 
    return (  
      <Router>
         <div className="App">
        <h1> Welcome</h1>
    <Nav/>
    <Switch>
    <Route path="/appointment" component={Appointment}/>
    <Route path="/view" component={View}/>
    </Switch>
  </div>
      </Router> 
   
  );
  }
  
}
 
export default App;

import React from 'react';
import Login from './components/Login';

import { BrowserRouter as Router,Route } from 'react-router-dom';
// import {FormUserDetails} from './components/FormUserDetails';
// import {FormUserDetail} from './components/FormUserDetail';

import './App.css';
import Dashboard from './components/Dashboard';
import UserForm from './components/UserForm';
import HallTicket from './components/HallTicket'
import Profile from './components/Profile'




class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="App">
        
      <Route exact path="/" component={Login}/>
      
      <Route path="/dashboard" component={Dashboard}/>
      
      <Route path="/userform" component={UserForm}/>

      <Route path="/hallticket" component={HallTicket}/>

      <Route path = "/profile" component = {Profile} />

        
      </div>
      </Router>
    );
    }
  }
  

export default App;

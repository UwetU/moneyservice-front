import React from 'react';
import LoginForm from "../login-form";
import RegistrationForm from "../registration-form";
import UserPage from "../pages/user-page";
import Header from "../header";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route path="/" render={() => <div className="pages"><LoginForm/></div>} exact/>
        <Route path="/signin" render={() => <div className="pages"><LoginForm/></div>}/>
        <Route path="/signup" render={() => <div className="pages"><RegistrationForm/></div>}/>
        <Route path="/userpage" component={UserPage}/>
      </div>
    </Router>
  );
}

export default App;

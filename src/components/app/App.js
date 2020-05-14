import React from 'react';
import SigninPage from "../pages/signin-page";
import SignupPage from "../pages/signup-page";
import UserPage from "../pages/user-page";
import Header from "../header";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <div className="pages">
          <Route path="/" component={SigninPage} exact/>
          <Route path="/signin" component={SigninPage}/>
          <Route path="/signup" component={SignupPage}/>
          <div className="user--page">
            <Route path="/userpage" component={UserPage}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, {Component} from 'react';
import { LoginForm } from "../login-form";
import { RegistrationForm } from "../registration-form";
import { PrivateRoute } from "../private-router";
import { UserPage } from "../pages/user-page";
import { Header } from "../header";
import { alertActions } from "../../actions";
import { history } from "../../helpers";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Header/>
          <Switch>
            <PrivateRoute exact path="/" component={UserPage} />
            <Route path="/" render={() => <div className="pages"><LoginForm/></div>} exact/>
            <Route path="/login" render={() => <div className="pages"><LoginForm/></div>}/>
            <Route path="/register" render={() => <div className="pages"><RegistrationForm/></div>}/>
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App}


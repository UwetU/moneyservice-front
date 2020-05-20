import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom";

import './login-form.css';
import {userActions} from "../../actions";

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 9,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 9,
  },
};

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.props.logout();
  }

  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const {email, password } = this.state;
    this.props.login(email, password);
  };

  render() {

    const { email, password } = this.state;

    return (
      <Form
        {...layout}
        name="Login"
        className="login-form"
        onFinish={this.handleSubmit}
        initialValues={{
          remember: true,
        }}
      >
        <h1>Sign In</h1>
        <Form.Item
          label="E-mail"
          name="email"
          onChange={this.handleChange}
          value={email}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input name="email"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value={password}
          onChange={this.handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password name="password"/>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log In
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.auth;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
}

const connectedLoginPage = connect(mapState, actionCreators)(LoginForm);
export { connectedLoginPage as LoginForm };
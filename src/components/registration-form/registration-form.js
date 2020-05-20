import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userActions } from "../../actions";
import {
  Form,
  Input,
  Checkbox,
  Button
} from 'antd';

import './registration-form.css';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};

class RegistrationForm extends Component{

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.register(this.state);
    console.log(this.state);
  };

  render() {

    const { firstName, lastName, email, password } = this.state;

    return (
      <Form
        {...formItemLayout}
        name="register"
        onFinish={this.handleSubmit}
      >
        <h1>Sign Up</h1>
        <Form.Item
          label="First name"
          onChange={this.handleChange}
          value={firstName}
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
              whitespace: true,
            },
          ]}
        >
          <Input name="firstName"/>
        </Form.Item>

        <Form.Item
          label="Last name"
          onChange={this.handleChange}
          value={lastName}
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
              whitespace: true,
            },
          ]}
        >
          <Input name="lastName"/>
        </Form.Item>

        <Form.Item
          label="E-mail"
          onChange={this.handleChange}
          value={email}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input name="email"/>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          onChange={this.handleChange}
          value={password}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password name="password"/>
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegistrationForm);
export { connectedRegisterPage as RegistrationForm };


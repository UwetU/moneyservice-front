import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from "react-router-dom";

import './login-form.css';

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

const LoginForm = () => {

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...layout}
      name="Login"
      className="login-form"
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
    >
      <h1>Sign In</h1>
      <Form.Item
        label="E-mail"
        name="email"
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log In
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
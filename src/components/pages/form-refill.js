import React, {Component} from "react";
import { Form, Button, Select, Input} from "antd";

const { Option } = Select;

export default class FormRefill extends Component {

  state = {
    accountsList: null
  }

  componentDidMount() {
    const { accounts } = this.props;
    this.setState({
      accountsList: accounts
    });
  }

  renderAccountsNumber(arr) {
    return arr.map((account) => {
      const {id} = account;
      const lable = account.number;
      return (
        <Option key={id} value={account.number}>{lable}</Option>
      );
    });
  }

  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {

    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };

    const { accountsList } = this.state;

    if (!accountsList)
      return <span>Загрузка</span>;

    const items = this.renderAccountsNumber(accountsList);

    return (
      <Form
        {...layout}
        name="refillForm"
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Номер счета"
          name="numberAccount"
          rules={[
            {
              required: true,
              message: 'Пожалуйста выберите счет для пополнения!',
            },
          ]}
        >
          <Select name="numberAccount">
            {items}
          </Select>
        </Form.Item>

        <Form.Item
          label="Сумма пополнения"
          name="sumRefill"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите сумму пополнения!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }
}
import React, { Component } from "react";
import { Input, Layout, Button, Table, DatePicker, Select } from "antd";

import "./user-page.css";

const { Content } = Layout;
const { RangePicker } = DatePicker;
const { Option } = Select;

export default class UserPage extends Component {

  render() {
    const columns = [
      {
        title: '№ счета',
        dataIndex: 'number',
        width: 100,
      },
      {
        title: 'Cумма',
        dataIndex: 'money',
        width: 160,
        sorter: (a, b) => a.money - b.money,
      },
      {
        title: 'Дата',
        dataIndex: 'date',
      }
    ];

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
    <Layout className="user-page">
      <Content className="user-information">
        <h1>Информация о счете</h1>
        <div className="user-account">
          <div className="account-information">
            <Input className="disabled-input" prefix="№" value="4567457632" disabled />
            <Input className="disabled-input" prefix="₽" value="32445.04" suffix="RUB" disabled />
            <div className="user-choose-accounts">
              <p>Выберите счет:</p>
              <Select defaultValue="№ счета" onChange={handleChange}>
                <Option value="4454359893">4454359893</Option>
                <Option value="4454359893">4454359893</Option>
              </Select>
            </div>
            <div className="account-action">
              <Button type="primary" htmlType="submit" size="large">Пополнить</Button>
              <Button type="primary" htmlType="submit" size="large">Перевести</Button>
              <Button type="primary" htmlType="submit" size="large">Выписка</Button>
              <Button type="primary" htmlType="submit" size="large">Закрыть</Button>
            </div>
          </div>
          <div className="transaction-information">
            <RangePicker className="range-picker" />
            <Button type="primary" htmlType="submit">Посмотреть</Button>
            <Table columns={columns} pagination={false} scroll={{ y: 240 }} />
          </div>
        </div>
      </Content>
      <div className="support-chat"></div>
    </Layout>
    );
  };
};

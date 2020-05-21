import React, { Component } from "react";
import { Input, Layout, Button, Table, DatePicker, Select, Modal } from "antd";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import FormRefill from "./form-refill";

import "./user-page.css";
import {accounts} from "../../_reducers/accounts";

const { Content } = Layout;
const { RangePicker } = DatePicker;
const { Option } = Select;

class UserPage extends Component {

  state = {
    modalRefill: false,
    modalTransfer: false,
    listAccounts: null
  }

  handleChange = value => {
    console.log(`selected ${value}`);
  }

  setModalRefillVisible(modalRefill) {
    this.setState({ modalRefill });
  }

  setModalTransferVisible(modalTransfer) {
    this.setState({ modalTransfer });
  }

  componentDidMount() {
    this.props.getAccounts(this.props.user.id);
    this.props.getTransactions(this.props.user.id);
    if (!this.props.accounts.loading)
      this.setState({
        listAccount: accounts
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

  render() {

    const { user, accounts, transactions } = this.props;

    console.log(accounts);

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


    return (
    <Layout className="user-page">
      <Content className="user-information">
        <h1>Информация о счете</h1>
        <div className="user-account">
          <div className="account-information">
            <Input
              className="disabled-input"
              prefix="№"
              value={accounts[0] ? accounts[0].number : "У вас нет активный счетов"}
              disabled
            />
            <Input
              className="disabled-input"
              prefix="₽"
              value={accounts[0] ? accounts[0].balance : {}}
              suffix="RUB"
              disabled
            />
            <div className="user-choose-accounts">
              <p>Выберите счет:</p>
              <Select
                defaultValue={accounts[0] ? accounts[0].number : "Номер счета"}
                onChange={this.handleChange}
              >
                {
                  accounts[0] ? this.renderAccountsNumber(accounts) : <></>
                }
              </Select>
            </div>
            <div className="account-action">
              <Button
                type="primary"
                onClick={() => this.setModalRefillVisible(true)}
                htmlType="submit"
                size="large"
              >
                Пополнить
              </Button>
              <Modal
                title="Пополнение счета"
                centered
                visible={this.state.modalRefill}
                onOk={() => {this.setModalRefillVisible(false)}}
                onCancel={() => this.setModalRefillVisible(false)}
              >
                <FormRefill accounts={accounts} />
              </Modal>
              <Button type="primary" onClick={() => this.setModalTransferVisible(true)} htmlType="submit" size="large">Перевести</Button>
              <Modal
                title="Перевод средств"
                centered
                visible={this.state.modalTransfer}
                onOk={() => this.setModalTransferVisible(false)}
                onCancel={() => this.setModalTransferVisible(false)}
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
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
  }
}

function mapState(state) {
  const { auth, accounts, transactions } = state;
  const { user } = auth;
  return { user, accounts, transactions};
}

const actionCreators = {
  getAccounts: userActions.getUserAccounts,
  getTransactions: userActions.getUserTransactions
}

const connectedUserPage = connect(mapState, actionCreators)(UserPage);

export { connectedUserPage as UserPage };

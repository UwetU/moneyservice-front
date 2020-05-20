import React, {Component} from "react";
import { DatePicker, Avatar, Button } from "antd";
import { UserOutlined, SettingOutlined, CloseOutlined} from '@ant-design/icons';
import moment from "moment";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import "./header.css";

class Header extends Component {

  render() {

    const { user } = this.props;

    function disabledDate(currentDate) {
      let now = moment().format("YYYY-MM-DD");
      return currentDate < moment(now, "YYYY-MM-DD") || currentDate > moment(now,  "YYYY-MM-DD");
    }

    if (user) {
      return (
        <nav className="nav-bar authorized">
          <p className="overall-balance">Общий баланс: 98070.09 руб.</p>
          <div className="user-functional">
            <DatePicker defaultValue={moment()} allowClear={false} disabledDate={disabledDate}/>
            <p className="user-name">{user.firstName}</p>
            <Avatar size="large" icon={<UserOutlined />} />
            <Button className="setting-btn" type="primary" shape="circle" icon={<SettingOutlined />} />
            <Link to="/login">
              <Button type="primary" htmlType="submit" shape="circle" icon={<CloseOutlined />} />
            </Link>
          </div>
        </nav>
      );
    };

    return (
      <nav className="nav-bar">
        <ul className="nav-bar--list">
          <li className="item">
            <Link to="/login">Sign In</Link>
          </li>
          <li className="item">
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapState(state) {
  const { auth } = state;
  const { user } = auth;
  return { user };
}

const actionCreators = {

}

const connectedHeader = connect(mapState, actionCreators)(Header);
export { connectedHeader as Header };
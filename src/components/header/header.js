import React from "react";
import { DatePicker, Avatar, Button } from "antd";
import { UserOutlined, SettingOutlined, CloseOutlined} from '@ant-design/icons';
import moment from "moment";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {

  const isАuthorized = true;
  
  function disabledDate(currentDate) {
    let now = moment().format("YYYY-MM-DD");
    return currentDate < moment(now, "YYYY-MM-DD") || currentDate > moment(now,  "YYYY-MM-DD");
  }

  if (isАuthorized) {
    return (
      <nav className="nav-bar authorized">
        <p className="overall-balance">Общий баланс: 98070.09 руб.</p>
        <div className="user-functional">
          <DatePicker defaultValue={moment()} allowClear={false} disabledDate={disabledDate}/>
          <p className="user-name">UwetU</p>
          <Avatar size="large" icon={<UserOutlined />} />
          <Button className="setting-btn" type="primary" shape="circle" icon={<SettingOutlined />} />
          <Button type="primary" htmlType="submit" shape="circle" icon={<CloseOutlined />} />
        </div>
      </nav>
    );
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-bar--list">
        <li className="item">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
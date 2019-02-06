import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import TPlogo from "../assets/tp-logo.png";

// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = () => (
  <div>
    <Menu>
      <Menu.Item>
        <img src={TPlogo} alt="tp-logo" />
        Twin Peaks Gazette
      </Menu.Item>

      <Link className="nav-item" to="/feed">
        <Icon name="home" />
      </Link>

      <Link className="nav-item" to="/friends">
        <Icon name="users" />
      </Link>

      <Link className="nav-item" to="/compose">
        <Icon name="compose" />
      </Link>

      <Link className="nav-item" to="/">
        <Icon name="sign-out" />
      </Link>
    </Menu>
  </div>
);

export default MenuExampleAttached;

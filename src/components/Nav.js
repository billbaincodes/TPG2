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
      </Menu.Item>
      <Dropdown text="Menu" item simple>
        <Dropdown.Menu>
          <Link to="/feed">
            <Dropdown.Item>Feed</Dropdown.Item>
          </Link>

          <Link to="/feed">
            <Dropdown.Item>Friends</Dropdown.Item>
          </Link>

          <Link to="/feed">
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Link to="/feed">
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
);

export default MenuExampleAttached;

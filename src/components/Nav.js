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
      <Link to="/feed">
        <Dropdown.Item>Feed</Dropdown.Item>
      </Link>

      <Link to="/comments">
        <Dropdown.Item>Friends</Dropdown.Item>
      </Link>

      <Link to="/compose">
        <Dropdown.Item>
          {" "}
          <Icon name="compose" />
        </Dropdown.Item>
      </Link>
      <Link to="/">
        <Dropdown.Item>
          {" "}
          <Icon name="sign-out" />
        </Dropdown.Item>
      </Link>
    </Menu>
  </div>
);

export default MenuExampleAttached;

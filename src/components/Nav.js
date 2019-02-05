import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import tpLogo from '../assets/tp-logo.png'
import { Link } from 'react-router-dom'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img alt="site-logo" src={tpLogo} />
        </Menu.Item>

        <Link class="nav-link" to="/feed">
          Feed
        </Link>


        <Link class="nav-link" to="/feed">
          Friends
        </Link>

        <Link class="nav-link" to="/feed">
          Profile
        </Link>
      </Menu>
    )
  }
}
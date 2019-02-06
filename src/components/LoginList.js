import React, { Component } from 'react'
import {Accordion, Icon} from 'semantic-ui-react'



class LoginList extends Component {


  constructor(props){
    super(props)
    this.state = {
      activeIndex: undefined
    }
  }


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render(){
  return(
      <Accordion styled>
        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Help
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0}>
          <p>
            Welcome to the Twin Peaks Gazette. You can use the information below to login as that character. While logged in you can
            view, create and delete posts, but be careful, changes are stored persistently!
          </p>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Dale Cooper
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 1}>
          <p>
            Login: DamnFineCoffee
          </p>
          <p>
            Password: t1b3t
          </p>
        </Accordion.Content>
      </Accordion>
  )}
}

export default LoginList
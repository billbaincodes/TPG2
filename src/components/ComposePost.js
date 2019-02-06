import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Redirect } from 'react-router-dom'
import Nav from "./Nav.js"

class ComposePost extends Component {
  state = {
    title: '',
    imageURL: '',
    body: ''
  };

  titleHandler = (e) => {
    e.preventDefault()
    this.setState({title: e.target.value})
    console.log(this.state.title)
  }

  imageURLHandler = (e) => {
    e.preventDefault()
    this.setState({imageURL: e.target.value})
    console.log(this.state.imageURL)
  }

  bodyHandler = (e) => {
    e.preventDefault()
    this.setState({body: e.target.value})
    console.log(this.state.body)
  }

  submitPost = (e) => {
    e.preventDefault()

    fetch("https://tp-classic-back.herokuapp.com/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.state.title,
          imageURL: this.state.imageURL,
          body: this.state.body,
          character_id: 4
        })
      })
        .then(response => response.json())
        .then(json => window.location.assign("https://twinpeaksgazette.surge.sh/feed"));



  }

  render() {
    return (
      <div>
      <Nav />
        <Form className="compose-form">
          <Form.Group widths="equal">
            <Form.Input onChange={this.titleHandler} fluid label="Title" placeholder="Title" />
            <Form.Input onChange={this.imageURLHandler} fluid label="Image URL" placeholder="Image URL" />
          </Form.Group>
          <Form.TextArea
            onChange={this.bodyHandler}
            label="Caption"
            placeholder="Tell us more about this picture..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button onClick={this.submitPost}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ComposePost;

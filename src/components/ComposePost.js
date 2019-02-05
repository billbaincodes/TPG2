import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form className="compose-form">
        <Form.Group widths="equal">
          <Form.Input fluid label="Title" placeholder="Title" />
          <Form.Input fluid label="Image URL" placeholder="Image URL" />
        </Form.Group>
        <Form.TextArea
          label="Caption"
          placeholder="Tell us more about this picture..."
        />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default FormExampleSubcomponentControl;

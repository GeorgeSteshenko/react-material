import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import FormInput from "../common/formInput";

class Contact extends Component {
  state = {
    contactForm: {
      name: "",
      email: "",
      message: ""
    },
    errors: {}
  };

  validate = () => {
    const errors = {};

    const { contactForm } = this.state;
    if (contactForm.name.trim() === "") errors.name = "Name is required.";
    if (contactForm.email.trim() === "") errors.email = "Email is required.";
    if (contactForm.message.trim() === "")
      errors.message = "Message is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Name is required.";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required.";
    }
    if (name === "message") {
      if (value.trim() === "") return "Message is required.";
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const contactForm = { ...this.state.contactForm };
    contactForm[input.name] = input.value;

    this.setState({ contactForm, errors });
  };

  render() {
    const { contactForm, errors } = this.state;
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <h1>Contact Form</h1>
          <FormInput
            name="name"
            value={contactForm.name}
            label="Name"
            type="text"
            onChange={this.handleChange}
            error={errors.name}
          />
          <FormInput
            name="email"
            value={contactForm.email}
            label="Email"
            type="text"
            onChange={this.handleChange}
            error={errors.email}
          />
          <FormInput
            name="message"
            value={contactForm.message}
            label="Message"
            type="text"
            onChange={this.handleChange}
            multiline="multiline"
            rows="10"
            error={errors.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Send
          </Button>
        </form>
      </Container>
    );
  }
}

export default Contact;

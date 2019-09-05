import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import FormInput from "../common/formInput";
import Joi from "joi-browser";

class Contact extends Component {
  state = {
    contactForm: {
      fullname: "",
      email: "",
      message: ""
    },
    errors: {}
  };

  schema = {
    fullname: Joi.string()
      .required()
      .label("Full Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    message: Joi.string()
      .required()
      .label("Message")
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      this.state.contactForm,
      this.schema,
      options
    );
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
            name="fullname"
            value={contactForm.fullname}
            label="Full Name"
            type="text"
            onChange={this.handleChange}
            error={errors.fullname}
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
            multiline
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

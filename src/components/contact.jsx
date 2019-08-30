import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Container
} from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <Container>
        <form>
          <h1>Contact Form</h1>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="">Message</InputLabel>
            <Input id="message" multiline rows={10} />
          </FormControl>
          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </Container>
    );
  }
}

export default Contact;

import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { Home, Book, AccountBox, Info } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  handleChange = value => {
    this.props.history.push(value);
  };

  render() {
    return (
      <div>
        <Tabs
          value={this.props.history.location.pathname}
          onChange={this.handleChange}
          centered
          style={{ backgroundColor: indigo[700] }}
        >
          <Tab
            icon={<Home />}
            label="Home"
            value="/"
            component={Link}
            to="/"
          ></Tab>
          <Tab
            icon={<Book />}
            label="Posts"
            value="/posts"
            component={Link}
            to="/posts"
          ></Tab>
          <Tab
            icon={<Info />}
            label="About"
            value="/about"
            component={Link}
            to="/about"
          ></Tab>
          <Tab
            icon={<AccountBox />}
            label="Contact"
            value="/contact"
            component={Link}
            to="/contact"
          ></Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Navbar);

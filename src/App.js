import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Navbar from "./components/navbar";
import { getPosts } from "./services/dummy-posts";
import Posts from "./components/posts";
import Contact from "./components/contact";
import Home from "./components/home";
import NotFound from "./components/notFound";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const posts = [...getPosts()];
    this.setState({ posts });
  }

  render() {
    return (
      <Fragment>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              My header
            </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route
            path="/posts"
            render={props => <Posts posts={this.state.posts} {...props} />}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;

import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Home, Book, AccountBox } from "@material-ui/icons";

const Navbar = props => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography variant="h6">
            <NavLink to="/">
              Home <Home />
            </NavLink>
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography variant="h6">
            <NavLink to="/posts">
              Posts <Book />
            </NavLink>
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography variant="h6">
            <NavLink to="/contact">
              Contact <AccountBox />
            </NavLink>
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Navbar;

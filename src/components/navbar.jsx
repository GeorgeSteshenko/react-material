import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Home, Book, AccountBox } from "@material-ui/icons";

const Navbar = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography variant="h6" component={NavLink} to="/" color="inherit">
            Home <Home />
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography
            variant="h6"
            component={NavLink}
            to="/posts"
            color="inherit"
          >
            Posts <Book />
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography
            variant="h6"
            component={NavLink}
            to="/contact"
            color="inherit"
          >
            Contact <AccountBox />
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Navbar;

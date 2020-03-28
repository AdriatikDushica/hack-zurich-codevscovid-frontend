import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Register from "./Pages/Register";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ history, location: { pathname } }) => {
  const classes = useStyles();

  let currentTabIndex = -1;

  if (pathname === "/") currentTabIndex = 0;
  else if (pathname === "/requests") currentTabIndex = 1;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" align="left" className={classes.title}>
          Suppy demand
        </Typography>
        <Button color="inherit">Login</Button>
        <Typography>or</Typography>
        <Register />
      </Toolbar>
      <Tabs value={currentTabIndex} centered>
        <Tab
          tabIndex={0}
          label="Available Resources"
          onClick={() => history.push("/")}
        />
        <Tab
          tabIndex={1}
          label="requests"
          onClick={() => history.push("/requests")}
        />
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);

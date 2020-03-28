import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ history, location: { pathname } }) => {
  const classes = useStyles();

  let currentTabIndex = -1;

  if (pathname === "/hack-zurich-codevscovid-frontend/") currentTabIndex = 0;
  else if (pathname === "/hack-zurich-codevscovid-frontend//requirements")
    currentTabIndex = 1;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" align="left" className={classes.title}>
          Suppy demand
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Tabs value={currentTabIndex} centered>
        <Tab
          tabIndex={0}
          label="Available Resources"
          onClick={() => history.push("/hack-zurich-codevscovid-frontend/")}
        />
        <Tab
          tabIndex={1}
          label="Requirements"
          onClick={() =>
            history.push("/hack-zurich-codevscovid-frontend/requirements")
          }
        />
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);

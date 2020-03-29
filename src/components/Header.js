import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import { isLogged } from "../redux/selectors";
import { connect } from "react-redux";
import Logged from "./Logged";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ isLogged, history, location: { pathname } }) => {
  const classes = useStyles();

  let currentTabIndex = -1;

  if (pathname === "/") currentTabIndex = 0;
  else if (pathname === "/needs") currentTabIndex = 1;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" align="left" className={classes.title}>
          Cosoli
        </Typography>
        {isLogged ? (
          <Logged />
        ) : (
          <>
            <Login />
            <Typography>or</Typography>
            <Register />
          </>
        )}
      </Toolbar>
      <Tabs value={currentTabIndex} centered>
        <Tab
          tabIndex={0}
          label="Available Resources"
          onClick={() => history.push("/")}
        />
        <Tab
          tabIndex={1}
          label="needs"
          onClick={() => history.push("/needs")}
        />
      </Tabs>
    </AppBar>
  );
};

export default connect((state) => ({
  isLogged: isLogged(state),
}))(withRouter(Header));

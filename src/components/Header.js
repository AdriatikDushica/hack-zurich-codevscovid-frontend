import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../Pages/Login";
import { isLogged } from "../redux/selectors";
import { connect } from "react-redux";
import Logged from "./Logged";
import Button from "@material-ui/core/Button";
import Logo from "../logo.png";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  buttonSpacing: {
    marginRight: theme.spacing(2),
  },
  headerLogo: {
    cursor: "pointer",
  },
}));

const Header = ({ isLogged, history, location: { pathname } }) => {
  const classes = useStyles();

  let currentTabIndex = 0;

  if (pathname === "/available-resources") currentTabIndex = 1;
  else if (/\/needs.*/.test(pathname)) currentTabIndex = 0;

  return (
    <AppBar position="static" className={"animated fadeInDown"}>
      <Toolbar>
        <Typography align="left" className={classes.title}>
          <img
            src={Logo}
            className={classes.headerLogo}
            onClick={() => history.push("/")}
          />
        </Typography>
        <Button className={classes.buttonSpacing}>ABOUT</Button>
        <Button className={classes.buttonSpacing}>PLATFORM</Button>
        <Button className={classes.buttonSpacing}>GET INVOLVED</Button>
        {isLogged ? (
          <Logged />
        ) : (
          <>
            <Login />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default connect((state) => ({
  isLogged: isLogged(state),
}))(withRouter(Header));

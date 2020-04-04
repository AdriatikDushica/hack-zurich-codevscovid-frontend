import React from "react";
import Button from "@material-ui/core/Button";
import LandingPage from "../landing-page.png";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh - 65px)",
    overflow: "hidden",
  },
  verticalAlign: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  flexContainer: { display: "flex", height: "100%" },
  title: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n" +
      "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',",
    fontWeight: 300,
    fontSize: "calc(10px + 5vw)",
    color: "#015C5D",
    margin: 0,
  },
  button: {
    marginTop: "calc(10px + 5vw)",
  },
}));

const Homepage = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flexContainer}>
        <div
          className={"animated fadeInLeft"}
          style={{ width: "50%", marginLeft: "10%" }}
        >
          <div className={classes.verticalAlign}>
            <div style={{ textAlign: "left" }}>
              <h1 className={classes.title}>Connecting Solidarity</h1>
              <Button
                className={classes.button}
                variant={"contained"}
                color={"primary"}
                onClick={() => history.push("/get-started")}
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>

        <div className={"animated fadeInRight"} style={{ width: "40%" }}>
          <div className={classes.verticalAlign}>
            <img src={LandingPage} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Homepage);

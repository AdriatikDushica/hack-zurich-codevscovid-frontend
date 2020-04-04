import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Box, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
}));

const GetStarted = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Stepper activeStep={0} alternativeLabel style={{ width: "100%" }}>
        <Step>
          <StepLabel>Account info</StepLabel>
        </Step>
        <Step>
          <StepLabel>Hospital details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Inventory list</StepLabel>
        </Step>
      </Stepper>

      <Route path="/">
        <Box m={2}>
          <TextField
            placeholder={"name@email.com"}
            label={"Email"}
            variant={"outlined"}
          />
        </Box>
        <Box m={2}>
          <TextField
            label={"Password"}
            variant={"outlined"}
            type={"password"}
          />
        </Box>
        <Box m={2}>
          <TextField
            label={"Repeat password"}
            variant={"outlined"}
            type={"password"}
          />
        </Box>
      </Route>

      <Box m={4}>
        <Button style={{ marginRight: "200px" }}>Back</Button>
        <Button variant={"contained"} color={"primary"}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default GetStarted;

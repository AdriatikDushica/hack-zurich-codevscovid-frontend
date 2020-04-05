import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Box, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  wizard: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  formContainer: {
    width: "300px",
    margin: "auto",
  },
}));

const GetStarted = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [position, setPositon] = useState([51.505, -0.09]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
        hospitalName: "",
        street: "",
        cap: "",
        city: "",
        country: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submit formik");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Container maxWidth="md">
          <Stepper
            activeStep={page}
            alternativeLabel
            style={{ width: "100%" }}
            className={classes.wizard}
          >
            <Step>
              <StepLabel>Account info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Hospital details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Select your position</StepLabel>
            </Step>
          </Stepper>

          {page === 0 ? (
            <div className={classes.formContainer}>
              <Box m={2}>
                <TextField
                  placeholder={"name@email.com"}
                  label={"Email"}
                  variant={"outlined"}
                  autoFocus
                  onChange={handleChange}
                  name={"email"}
                  value={values.email}
                  fullWidth
                />
              </Box>
              <Box m={2}>
                <TextField
                  label={"Password"}
                  variant={"outlined"}
                  type={"password"}
                  onChange={handleChange}
                  name={"password"}
                  value={values.password}
                  fullWidth
                />
              </Box>
              <Box m={2}>
                <TextField
                  label={"Repeat password"}
                  variant={"outlined"}
                  type={"password"}
                  onChange={handleChange}
                  name={"repeatPassword"}
                  value={values.repeatPassword}
                  fullWidth
                />
              </Box>
            </div>
          ) : null}

          {page === 1 ? (
            <div className={classes.formContainer}>
              <Box m={2}>
                <TextField
                  placeholder={"Hospital XY"}
                  label={"Hospital name"}
                  variant={"outlined"}
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                  name={"hospitalName"}
                  value={values.hospitalName}
                />
              </Box>
              <Box m={2}>
                <TextField
                  placeholder={"Street"}
                  label={"Street"}
                  variant={"outlined"}
                  fullWidth
                  onChange={handleChange}
                  name={"street"}
                  value={values.street}
                />
              </Box>
              <Box m={2}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      placeholder={"CAP"}
                      label={"CAP"}
                      variant={"outlined"}
                      fullWidth
                      onChange={handleChange}
                      name={"cap"}
                      value={values.cap}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      placeholder={"City"}
                      label={"City"}
                      variant={"outlined"}
                      fullWidth
                      onChange={handleChange}
                      name={"city"}
                      value={values.city}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box m={2}>
                <TextField
                  placeholder={"Country"}
                  label={"Country"}
                  variant={"outlined"}
                  fullWidth
                  onChange={handleChange}
                  name={"country"}
                  value={values.country}
                />
              </Box>
            </div>
          ) : null}

          {page === 2 ? (
            <Map
              center={position}
              zoom={2}
              style={{ width: "100%", height: "400px" }}
              onClick={({ latlng: { lat, lng } }) => setPositon([lat, lng])}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </Popup>
              </Marker>
            </Map>
          ) : null}

          <Box m={6}>
            {page > 0 ? (
              <Button
                onClick={() => setPage(page - 1)}
                style={{ marginRight: "200px" }}
              >
                Back
              </Button>
            ) : null}
            {page < 2 ? (
              <Button
                onClick={() => setPage(page + 1)}
                variant={"contained"}
                color={"primary"}
              >
                Next
              </Button>
            ) : (
              <Button variant={"contained"} color={"primary"}>
                Finish
              </Button>
            )}
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default GetStarted;

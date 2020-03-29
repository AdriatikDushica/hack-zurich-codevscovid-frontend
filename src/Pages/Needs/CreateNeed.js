import React from "react";
import { Card } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CreateNeed = ({ history, token }) => {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: "20px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#" onClick={() => history.push("/needs")}>
          Needs
        </Link>
        <Typography color="textPrimary">Create</Typography>
      </Breadcrumbs>

      <Card align={"left"} style={{ margin: "20px 0px" }}>
        <CardContent>
          <Formik
            initialValues={{ ItemName: "", description: "", quantity: 0 }}
            onSubmit={(values, { setSubmitting }) => {
              fetch("/me", {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((res) => res.json())
                .then(console.log);
              setSubmitting(false);
              console.log(values);
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
              <form onSubmit={handleSubmit} className={classes.root}>
                <Typography variant="h5">Create a request for need</Typography>
                <TextField
                  label={"Title"}
                  name={"ItemName"}
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ItemName}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label={"Description"}
                  name={"description"}
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  multiline
                  rows={4}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  type={"number"}
                  label={"Quantity"}
                  name={"quantity"}
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  color={"primary"}
                  variant={"outlined"}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default connect(
  (state) => ({
    token: state.jwt.token,
  }),
  (dispatch) => ({
    onSubmit: (token) => {},
  })
)(withRouter(CreateNeed));

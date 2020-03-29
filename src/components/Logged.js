import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { setJwtToken } from "../redux/reducers/actionCreators";

const Logged = ({ email, logout }) => (
  <>
    <Typography>Hello, {email}</Typography>
    <Button color="inherit" onClick={logout}>
      Log out
    </Button>
  </>
);

let mapStateToProps = (state) => ({
  email: state.jwt.email,
});

export default connect(mapStateToProps, (dispatch) => ({
  logout: () => dispatch(setJwtToken(null, null)),
}))(Logged);

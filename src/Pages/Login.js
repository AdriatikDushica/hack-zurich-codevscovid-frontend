import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { setJwtToken } from "../redux/reducers/actionCreators";

const Login = ({ setToken }) => {
  const [open, setOpen] = React.useState(false);

  const [warning, setWarning] = useState(null);

  const [email, setEmail] = useState("adriatik.dushica@gmail.com");
  const [password, setPassword] = useState("test");

  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");*/

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setWarning(null);
  };

  const handleLogin = () => {
    console.log("register!");

    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        confirmpassword: password,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else res.json().then((json) => setWarning(json.detail));
      })
      .then((res) => {
        setToken(res, email);
        handleClose();
      });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Log in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
        <DialogContent>
          {warning ? (
            <Typography color={"secondary"}>{warning}</Typography>
          ) : null}

          <TextField
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            style={{ marginTop: "20px" }}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: "20px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogin}>Log in</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  setToken: (token, email) => dispatch(setJwtToken(token, email)),
}))(Login);

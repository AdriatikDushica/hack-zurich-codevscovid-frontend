import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Register() {
  const [open, setOpen] = React.useState(false);

  const [warning, setWarning] = useState(null);

  /*const [email, setEmail] = useState("adriatik.dushica@gmail.com");
  const [firstName, setFirstname] = useState("Adriatik");
  const [lastName, setLastname] = useState("Dushica");
  const [phone, setPhone] = useState("2131212333");
  const [password, setPassword] = useState("test");*/

  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFirstname("");
    setLastname("");
    setPhone("");
    setEmail("");
    setPassword("");
    setWarning(null);
  };

  const handleRegister = () => {
    console.log("register!");
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, phone }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else res.json().then((json) => setWarning(json.detail));
      })
      .then((res) => {
        handleClose();
      });
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Sign in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
        <DialogContent>
          {warning ? (
            <Typography color={"secondary"}>{warning}</Typography>
          ) : null}

          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item sm={6}>
              <TextField
                autoFocus
                label="First name"
                type="email"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                label="Last name"
                type="email"
                fullWidth
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <TextField
            label="Phone number"
            fullWidth
            value={phone}
            style={{ marginTop: "20px" }}
            onChange={(e) => setPhone(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRegister} color="primary">
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

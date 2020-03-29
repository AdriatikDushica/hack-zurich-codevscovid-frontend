import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const CreateNeedButton = ({ history }) => (
  <div style={{ textAlign: "right", marginBottom: "20px" }}>
    <Button
      color="primary"
      variant="outlined"
      onClick={() => history.push("/needs/create")}
    >
      Request for need
    </Button>
  </div>
);

export default withRouter(CreateNeedButton);

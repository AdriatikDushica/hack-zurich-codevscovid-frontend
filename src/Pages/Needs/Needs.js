import React, { useEffect, useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import { v4 } from "uuid";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CreateNeedButton from "./CreateNeedButton";
import { connect } from "react-redux";
import { isLogged } from "../../redux/selectors";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withRouter } from "react-router-dom";
import _ from "lodash";

import Gas from "./images/gas.png";
import Hand from "./images/hand-sanitizers.png";
import Diagnosis from "./images/means-of-diagnosis.png";
import Oxygen from "./images/oxygen-concetrators.png";
import Mask from "./images/oxygen-concetrators.png";

export const availableTitles = {
  Gas: Gas,
  "Hand sanitizers": Hand,
  "Means of diagnosis": Diagnosis,
  "Oxigen concentrators": Oxygen,
  Masks: Mask,
};

const generateRandomData = () => {
  let data = [];

  for (let i = 0; i < 18; i++) {
    data.push({
      id: v4(),
      title: _.sample(Object.keys(availableTitles)),
      body: loremIpsum({ count: 4 }),
      quantity: Math.floor(Math.random() * 10) * 10 + 15,
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "white",
  },
  container: {
    marginTop: "20px",
  },
}));

const Needs = ({ isLogged, history }) => {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("effect");
    generateRandomData().then(setData);
  }, []);

  if (data == null) return <LinearProgress color={"secondary"} />;

  return (
    <Container className={classes.container}>
      {isLogged ? <CreateNeedButton /> : null}
      <Grid container spacing={3}>
        {data.map((need) => (
          <Grid item xs={4} key={need.id}>
            <Card align={"left"} className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <img
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      src={availableTitles[need.title]}
                    />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={need.title}
                subheader={`Quantity: ${need.quantity}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {need.body}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button onClick={() => history.push("/needs/detail/1234")}>
                  Donate
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default connect((state) => ({
  isLogged: isLogged(state),
}))(withRouter(Needs));

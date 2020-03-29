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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CreateNeedButton from "./CreateNeedButton";
import { connect } from "react-redux";
import { isLogged } from "../../redux/selectors";
import LinearProgress from "@material-ui/core/LinearProgress";

const generateRandomData = () => {
  let data = [];

  for (let i = 0; i < 18; i++) {
    data.push({
      id: v4(),
      title: loremIpsum({ units: "words", count: 2 }),
      body: loremIpsum({ count: 2 }),
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
    backgroundColor: grey[500],
  },
  container: {
    marginTop: "20px",
  },
}));

const Needs = ({ isLogged }) => {
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
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={need.title}
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {need.body}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button>Show more</Button>
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
}))(Needs);

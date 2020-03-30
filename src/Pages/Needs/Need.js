import React from "react";
import { Card } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import { v4 } from "uuid";
import { loremIpsum } from "lorem-ipsum";
import LinearProgress from "@material-ui/core/LinearProgress";
import GoogleMapReact from "google-map-react";
import Oxygen from "./images/oxygen-concetrators.png";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CreateNeed = ({ history, token, onSubmit }) => {
  const classes = useStyles();

  const title = loremIpsum({ units: "words", count: 10 });
  const need = {
    id: v4(),
    title: title.charAt(0).toUpperCase() + title.slice(1),
    body: loremIpsum({ count: 20 }),
    quantity: 30000,
  };

  const mapData = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#" onClick={() => history.push("/needs")}>
          Needs
        </Link>
        <Typography color="textPrimary">Reprehenderit laboris</Typography>
      </Breadcrumbs>

      <Grid item key={need.id} style={{ marginTop: "20px" }}>
        <Card align={"left"} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  src={Oxygen}
                />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={"Oxigen concentrators"}
            subheader={
              <div>
                Found 15 of 60
                <LinearProgress variant="determinate" value={25} />
              </div>
            }
          />
          <CardContent>
            <div style={{ height: "200px", width: "100%" }}>
              <GoogleMapReact
                //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={mapData.center}
                defaultZoom={mapData.zoom}
              ></GoogleMapReact>
            </div>

            <br />
            <br />

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
    </Container>
  );
};

export default connect()(withRouter(CreateNeed));

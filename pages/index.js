import React from "react";
import { Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import { IMAGES } from "../constants";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GroupIcon from "@mui/icons-material/Group";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import StoreIcon from "@mui/icons-material/Store";
import HeadsetIcon from "@mui/icons-material/Headset";
import Toolbar from "@mui/material/Toolbar";
import useStyles from "../pageStyles/home";
import { Grid } from "@mui/material";

const Home = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline>
        <Grid container direction="column">
          <Grid className={classes.section} item>
            <Toolbar>
              <img className={classes.logo} src={IMAGES.logo} />
            </Toolbar>
          </Grid>

          <Grid className={classes.section} item>
            <Grid container item direction="row" justifyContent="center">
              <Typography variant="h4">
                LFG, VOICECHAT & GAMING SERVICES
              </Typography>
            </Grid>
          </Grid>

          <Grid
            className={classes.section}
            container
            item
            justifyContent={"space-around"}
          >
            <Grid item xs={4}>
              <img
                className={classes.sampleImages}
                src={IMAGES.homeSample1}
                alt={"Game sample"}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                className={classes.sampleImages}
                src={IMAGES.homeSample3}
                alt={"Game sample"}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                className={classes.sampleImages}
                src={IMAGES.homeSample2}
                alt={"Game sample"}
              />
            </Grid>
          </Grid>

          <Grid
            className={classes.section}
            item
            container
            direction="row"
            justifyContent="center"
          >
            <Button
              onClick={() => router.push("/login")}
              className={classes.actionButton}
              variant="contained"
            >
              Login
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              className={classes.actionButton}
              variant="contained"
            >
              Signup
            </Button>
          </Grid>

          <Card className={`${classes.card} ${classes.section}}`}>
            <Grid className={classes.features} container direction="column">
              <Grid item container>
                <Typography variant="h4">Outstanding Features</Typography>
              </Grid>

              <Grid item container className={classes.feature}>
                <Grid container item>
                  <GroupIcon className={classes.icons} />
                  <Typography className={classes.featureTitle} variant="h6">
                    Looking For Group
                  </Typography>
                </Grid>

                <Grid xs={4} item>
                  <Typography className={classes.description} variant="body2">
                    Players can create LFG posts for their favorite games and
                    platforms.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container className={classes.feature}>
                <Grid container item>
                  <HeadsetIcon className={classes.icons} />
                  <Typography className={classes.featureTitle} variant="h6">
                    Text and Voice Chats
                  </Typography>
                </Grid>

                <Grid xs={4} item>
                  <Typography className={classes.description} variant="body2">
                    Player can communicate through text or voicechat through our
                    gaming lobbies.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container className={classes.feature}>
                <Grid container item>
                  <StoreIcon className={classes.icons} />
                  <Typography className={classes.featureTitle} variant="h6">
                    Gaming Services
                  </Typography>
                </Grid>

                <Grid xs={4} item>
                  <Typography className={classes.description} variant="body2">
                    Players can provide or purchase services such as : Coaching,
                    team boosting, content collaborators, and much more!
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container className={classes.feature}>
                <Grid container item>
                  <DynamicFeedIcon className={classes.icons} />
                  <Typography className={classes.featureTitle} variant="h6">
                    Gaming Feeds
                  </Typography>
                </Grid>

                <Grid xs={4} item>
                  <Typography className={classes.description} variant="body2">
                    Players can view or share amazing gaming moments or news.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* <p> A space for gamers </p>
          <p>Look for friends to game on</p> */}
        {/* <p>
            Welcome to Same, a web application where you will be able to look
            for other players and form groups to play on your preferred game.
            Same provides users with the tools to connect with others who like
            the same games as you do and with coaches that can share their
            knowledge of the game and make one improve on the game. Chat with
            other players via text and voice chat. Share special moment of a
            game with one another and have an opportunity to interact with the
            community of that game.
          </p> */}

        {/* <Card sx={{ maxWidth: 345 }} className={classes.card}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.card_title}
            >
              Find games
            </Typography>

            <CardMedia
              component="img"
              height="200"
              image="/gamespage.png"
            ></CardMedia>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={classes.card2}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.card_title}
            >
              {" "}
              Connect with others
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="/individualchat.png"
            ></CardMedia>
          </CardContent>
        </Card> */}
      </CssBaseline>
    </div>
  );
};

export default Home;

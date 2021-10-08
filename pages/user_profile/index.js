import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import {CssBaseline} from "@mui/material";
// import FormGroup from "@mui/material/FormGroup";
// import { useDispatch } from "react-redux";
// import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";
import Typography from '@mui/material/Typography';
import {Avatar, Grid, Card, CardContent} from "@mui/material";
import { IMAGES } from "../../contants";

// react component
const UserProfile = () => {
  // applies styling to components
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Grid className={classes.topGrid}>
          <Toolbar>
            <img className={classes.logo} 
            src="samelogox.png" 
          />
        </Toolbar>
        </Grid>
        <Grid className={classes.todoDelMedio}>
          <Grid className={classes.middleGrid}> 
            <Card className={classes.card}
            >
            <Grid container spacing={2}>
              <Avatar className={classes.circle} 
              alt = "Same"
              src="circle.png"
              />
              <Button className={classes.addFriendButton}>
                Add friends
              </Button>
            </Grid>
            <Typography className={classes.typo1}>
              Username
            </Typography>
            </Card>
          </Grid>
          <Grid className={classes.bottomGrid}>
            <card className={classes.card2}>
              <CardContent className={classes.content}>
                <Typography className={classes.square2}>
                  the description of the user goes here, and all fo the
                  games that the user plays
                </Typography>
              </CardContent>
            </card>
          </Grid>
        </Grid>
        
        {/* <Card className={classes.card}>
        <Avatar className={classes.circle} 
        alt = "Same"
        src="circle.png"
        
        />
        Username: the uausername goes here
        id: the uaid goes here
        </Card>
        <Card className={classes.card}>
        id: the uaid goes here
        </Card> */}
      </CssBaseline>
    </div>
  );
};

export default UserProfile;


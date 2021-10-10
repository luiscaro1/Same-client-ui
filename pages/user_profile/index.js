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
import {Avatar, Grid, Card, CardContent,Box} from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { IMAGES } from "../../contants";
import MoreVertIcon from '@mui/icons-material/MoreVert';


// react component
const UserProfile = () => {
  // applies styling to components
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="row">
      <CssBaseline>
        <Grid className={classes.middle} container direction="column">
          <Grid className={classes.logobar}>
          <Toolbar>
              <img className={classes.logo} src={IMAGES.logo} />
            </Toolbar>
          </Grid>
          <Grid className={classes.blackbox} container direction="column">
          <Box className={classes.leftbox}>
          <CardContent className={classes.usercard}>
            <Avatar className={classes.userprofile} alt="Same" src={"eula.jpg"}></Avatar>
            <Grid className={classes.usernamegrid} container direction="row">
              <Typography className={classes.usernametxt} variant="h3">
              Username
            </Typography>
            <Button className={classes.addFriendButton}>
            <PersonAddAlt1Icon className={classes.iconaddfriend}></PersonAddAlt1Icon>
              </Button>
            </Grid>
          <Grid className={classes.biobox} item sx={4}>
            <Typography variant="h5" fontWeight={"bold"}>Bio</Typography>
            <Typography className={classes.bio} variant="h6">
              Hey I'm the user and I am looking for someone to play with!
            </Typography>
            </Grid> 
            <Grid className={classes.friendsbox} container sx={2}>
            <Typography variant="h5" fontWeight={"bold"}>Friends</Typography>
            <Typography className={classes.friends} variant="h6">
              100
            </Typography>
            </Grid>
            <Grid className={classes.platformbox} container sx={2}>
            <Typography variant="h5" fontWeight={"bold"}>Platform</Typography>
            <Typography className={classes.platform} variant="h6">
              Any consoles
            </Typography>
            </Grid>
          </CardContent>
          </Box> 
          <Grid className={classes.whitebox}>
            <Grid className={classes.rightbox}>
              <Grid className={classes.buttonand3points} container direction="row">
              <Button className={classes.messageButton}>
            <Typography className={classes.message}> Message</Typography>
              </Button>
              <MoreVertIcon className={classes.threepoints}></MoreVertIcon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      
        {/* <Grid className={classes.topGrid}>
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
         */}
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
    </Grid>
  );
};

export default UserProfile;
import React from "react";
import PropTypes from 'prop-types';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import {CardHeader, CardMedia, Collapse, CssBaseline} from "@mui/material";
// import FormGroup from "@mui/material/FormGroup";
// import { useDispatch } from "react-redux";
// import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";
import Typography from '@mui/material/Typography';
import {Avatar, Grid, Card, CardContent,Box,Tabs,Tab} from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { IMAGES } from "../../contants";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { COLORS } from "../../contants";
import ListItem from '@mui/material/ListItem';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// react component
const UserProfile = () => {
  // applies styling to components
  const classes = useStyles();

  const [value,setValue]=React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root} container direction="row">
      <CssBaseline>
        {/* <Grid className={classes.middle} styles={{backgroundColor:"white"}} container direction="column"> */}
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
                <Grid className={classes.info} container direction="column">
                  <Grid className={classes.biobox} item xs={2}>
                    <Typography variant="h5" fontWeight={"bold"}>Bio</Typography>
                    <Typography className={classes.bio} variant="h6">
                      Hey I'm the user and I am looking for someone to play with!
                    </Typography>
                  </Grid> 
                  <Grid className={classes.friendsbox} item xs={2}>
                    <Typography variant="h5" fontWeight={"bold"}>Friends</Typography>
                    <Typography className={classes.friends} variant="h6">
                      100
                    </Typography>
                  </Grid>
                  <Grid className={classes.platformbox} item xs={2}>
                    <Typography variant="h5" fontWeight={"bold"}>Platform</Typography>
                    <Typography className={classes.platform} variant="h6">
                      Any consoles
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Box> 
        </Grid>
        <Grid className={classes.inforight} container direction="column">
          <Grid className={classes.buttongrid} container direction="row">
            <Button className={classes.messageButton}>
              <Typography className={classes.message}> Message</Typography>
            </Button>
            <MoreVertIcon className={classes.threepoints}></MoreVertIcon>
          </Grid>
          <Grid className={classes.tabgrid} item >
            <Box sx={{width:"100%"}}>
              <Tabs className={classes.tabs}
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{style:{backgroundColor:COLORS.lightGreen}}}
                >
                  <Tab label="Games" {...a11yProps(0)}>
                
                  </Tab>
                  <Tab label="Friends" {...a11yProps(1)}>

                  </Tab>
                  <Tab label="Posts" {...a11yProps(2)}>

                  </Tab>
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Grid container direction="row" className = {classes.ExptabGrid}>  
                  <Avatar alt="Apex Legend" src={"ApexLegend.jpg"} className = {classes.gameAvatars}/>
                  <Avatar alt="Genshin Impact" src={"genshin.jpg"} className = {classes.gameAvatars}/>
                  <Avatar alt="League of Legends" src= {"leagueOfLegends.png"} className = {classes.gameAvatars}/>
                  </Grid>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <Grid container direction="row" className = {classes.ExptabGrid}>  
                  <Avatar alt="Luis" src={"anger.png"} className = {classes.gameAvatars}/>
                  <Avatar alt="Naomy" src={"sadness.png"} className = {classes.gameAvatars}/>
                  <Avatar alt="Gabriel" src= {"disgust.png"} className = {classes.gameAvatars}/>
                  <Avatar alt="Jovan" src= {"fear.png"} className = {classes.gameAvatars}/>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid container direction="column" className = {classes.PostGrid}>  
                    <Grid item xs={2} className = {classes.ExptabGridScroll}>
                      {/* needs to be finished esta en proceso */}
                      <Card className = {classes.postCard}>
                      <img 
                          src = "disgust.png"/>
                      </Card>
                      <Card className = {classes.postCard}>
                        <img 
                          src = "anger.png"
                        />
                      </Card>
                      <Card className = {classes.postCard}>
                        <img 
                          src = "sadness.png"
                        />
                      </Card>
                      <Card className = {classes.postCard}>
                        <img 
                          src = "fear.png"
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </CssBaseline>
    </Grid>
  );
};

export default UserProfile;


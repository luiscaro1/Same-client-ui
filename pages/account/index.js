import React from "react";
import PropTypes from 'prop-types';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import {CardHeader, CardMedia, Collapse, CssBaseline} from "@mui/material";
// import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";
import Typography from '@mui/material/Typography';
import {Avatar, Grid, Card, CardContent,Box,Tabs,Tab,TextField} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { IMAGES } from "../../contants";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { COLORS } from "../../contants";
import Slider from '@mui/material/Slider';


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
const AccountSettings = () => {
  // applies styling to components
  const classes = useStyles();

  const [value,setValue]=React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  return (
    <Grid className={classes.root} container direction="row">
      <CssBaseline>
        {/* <Grid className={classes.middle} styles={{backgroundColor:"white"}} container direction="column"> */}
        <Grid className={classes.logobar}>
          <Toolbar>
              <img className={classes.logo} src={IMAGES.logo} />
              <MoreVertIcon className={classes.threepoints}></MoreVertIcon>
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
                  <Button className={classes.addFriendButton} variant="contained"
                      type="submit" >
                    <SettingsIcon className={classes.iconSettings}></SettingsIcon>
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
        <Grid className={classes.inforight} container direction="row">
          <Grid className={classes.tabgrid} item >
            <Box sx={{width:"100%", display:"flex"}}>
              <Tabs className={classes.tabs}
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                TabIndicatorProps={{style:{backgroundColor:COLORS.lightGreen}}}
                >
                  <Tab label="Account overview" {...a11yProps(0)}>
                
                  </Tab>
                  <Tab label="Edit Profile" {...a11yProps(1)}>

                  </Tab>
                  <Tab label="Change Password" {...a11yProps(2)}>

                  </Tab>
                  <Tab label="Notification settings" {...a11yProps(3)}>

                  </Tab>
                  
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Grid className={classes.overviewgrid} container direction="column">
                    <Grid item className={classes.textgrid} sx={8} direction="row">
                      <Typography className={classes.text}>Username:  myuser</Typography>
                      <Typography className={classes.text2}>Email:  myuser@gmail.com</Typography>
                      <Typography className={classes.block}>Blocked Users  0</Typography>
                    <Button className={classes.delete}>Delete Account</Button>
                    </Grid>
                  </Grid>
                </TabPanel>

                <TabPanel value={value} index={1}>
                <Grid className={classes.overviewgrid} container direction="column">
                    <Grid item className={classes.textgrid} sx={8}>
                      <TextField label="Username"className={classes.text} variant="filled"></TextField>
                      <TextField label="Email" className={classes.emailtext} variant="filled"></TextField>
                      <TextField label="Bio"className={classes.biotext} variant="filled" multiline rowsmax={Infinity}> </TextField>
                    <TextField label="Platform" className={classes.platformtext} variant="filled"> </TextField>
                    <Button 
                      variant="contained"
                      type="submit"
                      className={classes.saveButton}>Save</Button>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <Grid className={classes.overviewgrid} container direction="column">
                    <Grid item className={classes.textgrid} sx={8}>
                      <TextField label="Current Password"className={classes.text} variant="filled"></TextField>
                      <TextField label="New Password" className={classes.emailtext} variant="filled"></TextField>
                      <TextField label="Confirm New Password"className={classes.platformtext} variant="filled"> </TextField>
                    <Button 
                      variant="contained"
                      type="submit"
                      className={classes.saveButton}>Save</Button>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <Grid className={classes.notificationgrid} container>
                      <Grid item xs={8} direction="row">
                        <Typography className={classes.mute}> Mute</Typography>
                        <Box sx={{ width: 300 }}>
                          <Slider className={classes.slidingButton}
                            aria-label="Mute"
                            defaultValue={2}
                          />
                        </Box>
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

export default AccountSettings;


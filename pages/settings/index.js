import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {CssBaseline} from "@mui/material";
import useStyles from "./_style";
import {Avatar, Grid, Card, CardContent,Box} from "@mui/material";



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
   
            </Toolbar>
          </Grid>
          <Grid className={classes.blackbox} container direction="column">
 
          <Grid className={classes.whitebox}>

          </Grid>
        </Grid>
      </Grid>
      
        
      </CssBaseline>
    </Grid>
  );
};

export default UserProfile;
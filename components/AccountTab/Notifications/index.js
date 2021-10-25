import React from "react";
import {Grid,Box,Typography,Button,FormGroup, TextField,Slider} from "@mui/material";
import useStyles from "./_style";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelectors } from "../../../services/redux/store/selectors";

const NotificationsTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(authSelectors.selectToken);
  console.log(auth);

  //need to add the onclick event 
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //submiting changes 
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(values);
    // dispatch(authActions.login(values));
  };


  return (
    <Grid className={classes.notiList} spacing={3} container direction="column">
        <Grid item xs={8} direction="row">
            <Typography color="secondary" variant="h5"> Mute</Typography>
                <Box sx={{ width: 300 }}>
                    <Slider
                        className={classes.slidingButton}
                        aria-label="Mute"
                        defaultValue={false}
                        onClick={()=>handleChange(true)}
                        //need to change it so it does it on click
                      />
                </Box>
        </Grid>
        <Button
            className={classes.save}
            variant="contained"
            type="submit"
        >
        Save
        </Button>
    </Grid>
  );
};

export default NotificationsTab;
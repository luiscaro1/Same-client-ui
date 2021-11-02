import React from "react";
import {Grid,Box,Typography,Button,FormGroup, TextField} from "@mui/material";
import useStyles from "./_style";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelectors } from "../../../services/redux/store/selectors";

const PasswordTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(authSelectors.selectToken);
  console.log(auth);

  const [values, setValues] = React.useState({
    password: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //submitting changes for changing password
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(values);
    // dispatch(authActions.login(values));
  };


  return (
    <Grid className={classes.profileList} spacing={3} container direction="column">
        <form onSubmit={handleSumbit}>
            <FormGroup>
                <Grid item sx={8} className={classes.textgrid} container direction="column">
                    <TextField
                        label="Current Password" 
                        variant="outlined" 
                        onChange={handleChange}
                        className={classes.box}
                        inputProps={{ style: { color: "white" } }}></TextField>
                    <TextField
                        label="New Password"
                        variant="outlined"
                        onChange={handleChange}
                        className={classes.box}    
                        inputProps={{ style: { color: "white" } }}></TextField>
                    <TextField
                          label="Confirm Password"
                          className={classes.box}
                          variant="outlined"
                          onChange={handleChange}
                          inputProps={{ style: { color: "white" } }}></TextField>
                    </Grid>
            </FormGroup>
        </form>
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

export default PasswordTab;
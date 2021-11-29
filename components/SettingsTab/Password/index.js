import React from "react";
import {Grid,Box,Typography,Button,FormGroup, TextField} from "@mui/material";
import useStyles from "./_style";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelectors } from "../../../services/redux/store/selectors";
import { authActions } from "../../../services/redux/store/actions";
import { useRouter } from "next/router";

const PasswordTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router=useRouter();
  const auth = useSelector(authSelectors.selectToken);
  const updated=useSelector(authSelectors.selectUpdate);
  const update_error=useSelector(authSelectors.selectUpdateError);
  //console.log(auth);

  const [values, setValues] = React.useState({
    // password: "",
    new_password: "",
    confirm_password: "",
    error:"",
  });

  const validateValues = (vals) => {
    const { new_password,confirm_password } = vals;
    if (confirm_password !== new_password) {
      setValues({
        ...values,
        error: {
          message: "Passwords don't match!",
        },
      });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //submitting changes for changing password
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateValues(values)){
      dispatch(authActions.updatePassword(values.new_password));
    }
  };

  React.useEffect(() => {
    if (updated) router.push("/settings");
  }, [updated]);

  React.useEffect(() => {
    if (update_error)
      setValues({
        ...values,
        error:{message:"Password invalid"},
      });
  }, [update_error]);


  return (
    <Grid className={classes.profileList} spacing={3} container direction="column">
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Grid item sx={8} className={classes.textgrid} container direction="column">
                    {/* <TextField
                        label="Current Password" 
                        variant="outlined" 
                        onChange={handleChange}
                        className={classes.box}
                        inputProps={{ style: { color: "white" } }}></TextField> */}
                    <TextField
                        label="New Password"
                        name="new_password"
                        variant="outlined"
                        type="password"
                        onChange={handleChange}
                        className={classes.box}    
                        inputProps={{ style: { color: "white" } }}></TextField>
                    <TextField
                          label="Confirm Password"
                          name="confirm_password"
                          type="password"
                          className={classes.box}
                          variant="outlined"
                          onChange={handleChange}
                          inputProps={{ style: { color: "white" } }}></TextField>
                    </Grid>
                    <Button
            className={classes.save}
            variant="contained"
            type="submit"
        >
        Save
        </Button>
            </FormGroup>
        </form>
        
    </Grid>
  );
};

export default PasswordTab;
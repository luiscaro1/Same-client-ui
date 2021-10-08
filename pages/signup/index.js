import React from "react";
import { Grid, Card, CardContent, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";
import { IMAGES } from "../../contants";
import AppBar from "@mui/material/AppBar";
import { COLORS } from "../../contants";

// react component
const SignUp = () => {
  // applies styling to components
  const classes = useStyles();

  // function to dispatch events
  const dispatch = useDispatch();

  // hold the values of the text fields
  const [values, setValues] = React.useState({
    firstname:"",
    lastname:"",
    uausername: "",
    uaemail:"",
    uapassword: "",
  });

  // maps textfield values to state values
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // submits the values
  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch(authActions.login(values)); //needs to be change for signup process
  };

  return (
    <Grid className={classes.root} height='100vh' container direction="row"  >
      <Grid container>
        <Grid item xs={12} >
        <AppBar style={{backgroundColor:COLORS.normalGrey}}>
              <img className={classes.logo} src="samelogox.png" />
          </AppBar>
        </Grid>
          </Grid>
      <Grid className={classes.imageBackground} item xs={8}>
        <img
          className={classes.loginBackground}
          src={IMAGES.loginBackground}
          alt="login background"
        />
      </Grid>
      <Grid className={classes.formColumn} item xs={4}>
        <Box className={classes.formBox}>
          <CardContent>
            <form onSubmit={handleSumbit}>
              <FormGroup>
                <Grid container direction="column">
                <Grid item className={classes.formItem}>
                  
                  <TextField
                    name="firstname"
                    required
                    label="name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item className={classes.formItem2}>
                  
                  <TextField
                    name="lastname"
                    required
                    label="lastname"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item className={classes.formItem2}>
                  
                  <TextField
                    name="uaemail"
                    required
                    label="email"
                    onChange={handleChange}
                  />
                </Grid>
                  <Grid item className={classes.formItem2}>
                  
                    <TextField
                      name="uausername"
                      required
                      label="username"
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  <Grid item className={classes.formItem2}>
                    <TextField
                      name="uapassword"
                      type="password"
                      required
                      label="password"
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  <Grid item className={classes.formItem2}>
                    <Button variant="contained" type="submit" className={classes.actionButton}>
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </FormGroup>
            </form>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;

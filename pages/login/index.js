import React from "react";
import { Grid, Card, CardContent, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";
import { IMAGES } from "../../contants";

// react component
const Login = () => {
  // applies styling to components
  const classes = useStyles();

  // function to dispatch events
  const dispatch = useDispatch();

  // hold the values of the text fields
  const [values, setValues] = React.useState({
    uausername: "",
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

    dispatch(authActions.login(values));
  };

  return (
    <Grid className={classes.root} height='100vh' container direction="row"  >
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
                      name="uausername"
                      required
                      label="username"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item className={classes.formItem}>
                    <TextField
                      name="uapassword"
                      type="password"
                      required
                      label="password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item className={classes.formItem}>
                    <Button variant="contained" type="submit">
                      Login
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

export default Login;

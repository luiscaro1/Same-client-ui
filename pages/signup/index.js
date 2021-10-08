import React from "react";
import {
  Grid,
  CardContent,
  Box,
  Typography,
  Button,
  FormGroup,
  TextField,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
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
    confirmpassword: "",
    firstname: "",
    lastname: "",
    uaemail: "",
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
    <Grid className={classes.root} height="100vh" container direction="row">
      <Grid className={classes.imageBackground} item xs={8}>
        <img className={classes.logo} src={IMAGES.logo} />
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
                <Grid item container justifyContent="center">
                  <Typography variant="h6">Signup</Typography>
                </Grid>
                <Grid container direction="column">
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      name="firstname"
                      required
                      label="First Name"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      name="lastname"
                      required
                      label="Last Name"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      name="uaemail"
                      required
                      label="Email"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      name="uausername"
                      required
                      label="User Name"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      name="uapassword"
                      type="password"
                      required
                      label="Password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      name="confirmpassword"
                      type="confirmpassword"
                      required
                      label="Confirm Password"
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item container direction="row">
                    <Grid item container xs>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                      >
                        <Typography variant="body2">
                          I am 18 years or older <Checkbox />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        className={classes.formItem}
                        container
                        justifyContent="center"
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          className={classes.actionButton}
                        >
                          Signup
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item container justifyContent="center" marginTop="20px">
                    <Link href="/termsofservice">
                      <a>
                        <Typography variant="caption">
                          Terms Of Service
                        </Typography>
                      </a>
                    </Link>
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

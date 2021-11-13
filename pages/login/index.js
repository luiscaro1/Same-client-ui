/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Grid,
  CardContent,
  Box,
  Typography,
  Alert,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../services/redux/store/selectors";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "../../pageStyles/login";
import { IMAGES } from "../../constants";
import Link from "next/link";

// react component
const Login = () => {
  // applies styling to components
  const classes = useStyles();
  const router = useRouter();
  // function to dispatch events
  const dispatch = useDispatch();

  const auth = useSelector(authSelectors.selectToken);
  const error = useSelector(authSelectors.selectAuthError);

  // hold the values of the text fields
  const [values, setValues] = React.useState({
    user_name: "",
    password: "",
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

  React.useEffect(() => {
    if (auth) router.push("/dashboard");
  }, [auth]);

  React.useEffect(() => {
    if (error)
      setValues({
        ...values,
        error,
      });
  }, [error]);

  return (
    <>
      {values.error ? (
        <Alert severity="error" color="error">
          {values.error?.message}
        </Alert>
      ) : null}
      <Grid className={classes.root} height="100vh" container direction="row">
        <Grid className={classes.imageBackground} item xs={8}>
          <img className={classes.logo} src={IMAGES.logo} />
          <img
            className={classes.loginBackground}
            src={IMAGES.loginBackground}
            alt="login background"
          />
        </Grid>
        <Grid className={classes.formColumn} item>
          <Box className={classes.formBox}>
            <CardContent>
              <form onSubmit={handleSumbit}>
                <FormGroup>
                  <Grid container direction="column">
                    <Grid item container justifyContent="center">
                      <Typography color="primary" variant="h6">
                        Login
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      className={classes.formItem}
                      container
                      justifyContent="center"
                    >
                      <TextField
                        className={classes.inputs}
                        name="user_name"
                        required
                        label="username"
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
                        name="password"
                        type="password"
                        required
                        label="password"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      justifyContent="center"
                      marginTop="20px"
                    >
                      <Grid item>
                        <Link href="/signup">
                          <a style={{ textDecoration: "none" }}>
                            <Typography color="orange" variant="caption">
                              Don't have an account?
                            </Typography>
                          </a>
                        </Link>
                      </Grid>
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
    </>
  );
};

export default Login;

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
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "../../pageStyles/signup";
import { IMAGES } from "../../constants";
import { authSelectors } from "../../services/redux/store/selectors";

// react component
const SignUP = () => {
  // applies styling to components
  const classes = useStyles();
  const router = useRouter();
  // function to dispatch events
  const dispatch = useDispatch();

  const auth = useSelector(authSelectors.selectToken);

  // hold the values of the text fields
  const [values, setValues] = React.useState({
    user_name: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    email: "",
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

    dispatch(authActions.signup(values));
  };

  React.useEffect(() => {
    if (auth) router.push("/");
  }, [auth]);

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
      <Grid className={classes.formColumn} item>
        <Box className={classes.formBox}>
          <CardContent>
            <form onSubmit={handleSumbit}>
              <FormGroup>
                <Grid item container justifyContent="center">
                  <Typography color="primary" variant="h6">
                    Signup
                  </Typography>
                </Grid>
                <Grid container direction="column">
                  <Grid
                    item
                    className={classes.formItem}
                    container
                    justifyContent="center"
                  >
                    <TextField
                      sx={{ color: "text.primary" }}
                      name="first_name"
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
                      name="last_name"
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
                      name="email"
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
                      name="user_name"
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
                      name="password"
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
                      name="confirm_password"
                      type="password"
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
                        <Typography color="secondary" variant="body2">
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
                  <Grid item container justifyContent="center" marginTop="5px">
                    <Link href="/login">
                      <a>
                        <Typography variant="caption">
                          Already have an account? 
                        </Typography>
                      </a>
                    </Link>
                  </Grid>
                  <Grid item container justifyContent="center" marginTop="20px" >
                      <Typography style={{color:"white"}} variant="caption">By signing up you agree to Same's </Typography>
                    <Link href="/termsofservice">
                      <a>
                        <Typography variant="caption" marginLeft="10px">
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

export default SignUP;

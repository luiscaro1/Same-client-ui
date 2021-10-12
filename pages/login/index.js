import React from "react";
import { Grid, CardContent, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch,useSelector } from "react-redux";
import { authSelectors } from "../../services/redux/store/selectors";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";
import { IMAGES } from "../../contants";


// react component
const Login = () => {
  // applies styling to components
  const classes = useStyles();
  const router = useRouter()
  // function to dispatch events
  const dispatch = useDispatch();

  const auth = useSelector(authSelectors.selectToken)
  

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

  React.useEffect(()=>{
    if(auth) router.push('/')
  },[auth])

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
  );
};

export default Login;

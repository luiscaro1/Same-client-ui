import React from "react";
import { FormGroup, Grid, Typography, Checkbox,TextField } from "@mui/material";
import Button from "@mui/material/Button";
import useStyles from "../../pageStyles/report";
import { IMAGES } from "../../constants";
import { useRouter } from "next/router";
import {useSelector,useDispatch} from "react-redux";
import {reportActions} from "../../services/redux/store/actions";
import { reportSelectors } from "../../services/redux/store/selectors";
import { authSelectors } from "../../services/redux/store/selectors";

const Report = () => {
  const classes = useStyles();
  const router = useRouter();
  const [category, setCategory] = React.useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const reported=useSelector(reportSelectors.selectReported);
  const error= useSelector(reportSelectors.selectError);
  const loading= useSelector(reportSelectors.selectReportLoading);
 
  const auth = useSelector(authSelectors.selectToken);

  const [values, setValues] = React.useState({
    user_name:"",
    stalking:false,
    spamming:false,
    offensive:false,
    harrasment:false,
    discrimination: false,
    viruses:false,
    violationofIp:false,
    pretending:false,
    error: null,
  });

  const handleChecked = (e) => {
    setValues({
      ...values,
      uid: auth?.uid,
      user_name:e.target.user_name,
      stalking: e.target.stalking,
      spamming:e.target.spamming,
      offensive:e.target.offensive,
      harrasment:e.target.harrasment,
      discrimination:e.target.discrimination,
      viruses:e.target.viruses,
      violationofIp:e.target.violationofIp,
      pretending:e.target.pretending,
      
    });
  };
  const dispatch=useDispatch();

  const report=(e)=>{ 
    e.preventDefault();
     //add info that needs to be passed
    dispatch(reportActions.addReport(values));
  }

  React.useEffect(() => {
    if (error)
      setValues({
        ...values,
        error,
      });
  }, [error]);
  // const handleSumbit = (e) => {
  //   e.preventDefault();

  //   console.log(values);
  //   if (validateValues(values)) dispatch(authActions.signup(values));

  //   console.log(validateValues(values));
  // };

  if (loading){
    return "Loading..."
  }
  if(reported){
    return "Reported"
    // router.push("/dashboard");
  }
  return (
    <Grid height="100vh" container direction="row" className={classes.root}>
      <Grid className={classes.formColumn} item xs={12}>
        <Grid className={classes.reportForm} container direction="column">
          <Grid className={classes.imageBackground} item>
            <img className={classes.logo} src={IMAGES.logo} />
          </Grid>
          <Grid item>
            <Typography
              color="secondary"
              variant="h4"
              marginTop="5%"
              justifyContent="center"
              textAlign="center"
            >
              Report <TextField
                        sx={{ color: "text.primary"}}
                        name="user_name"
                        required
                        label="Username of the player"
                        onChange={handleChecked}
                      />
            </Typography>
          </Grid>
          <FormGroup onSubmit={report}>
            <Grid item>
              
              <Typography color="secondary" variant="subtitle1" margin="5%">
                <br></br>
                As accurately as possible, please tell us what happened with
                this player. Choose the options that correspond to the
                situation. Mark multiple options if needed.
                <br></br>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox onChange={handleChecked} />
                Stalking
              </Typography>

              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox  onChange={handleChecked}/>
                Spamming inappropriate content
              </Typography>

              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox onChange={handleChecked}/>
                Offensive Language
              </Typography>

              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox onChange={handleChecked}/>
                Sexual Harassment{" "}
              </Typography>
              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox onChange={handleChecked}/>
                Discrimination
              </Typography>

              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox onChange={handleChecked}/>
                Spreading viruses/malicious software
              </Typography>
              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox onChange={handleChecked} />
                Violation of IP rights(includes stolen content)
              </Typography>

              <Typography
                className={classes.text}
                color="primary"
                justifyContent="right"
                marginLeft="5%"
              >
                <Checkbox  onChange={handleChecked}/>
                Pretending to be an admin Same developer
              </Typography>
            </Grid>

            <Grid
              className={classes.formItem}
              item
              container
              justifyContent="center"
            >
              <Button
                onClick={() => router.push("/dashboard")}
                variant="contained"
                className={classes.cancelButton}
              >
                Cancel
              </Button>

              {/* Needs to be adjusted to actually submit the form */}
              <Button
                // onClick={() => router.push("/")}
                variant="contained"
                type="submit"
                className={classes.submitButton}
              >
                Submit Report
              </Button>
            </Grid>
          </FormGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Report;

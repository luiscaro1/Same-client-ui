import React from "react";
import { FormGroup, Grid, Typography, Checkbox,TextField,Alert } from "@mui/material";
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

  const reported=useSelector(reportSelectors.selectReported);
  const error= useSelector(reportSelectors.selectError);
  const loading= useSelector(reportSelectors.selectReportLoading);
 
  const auth = useSelector(authSelectors.selectToken);
  const dispatch=useDispatch();

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

  

  // const checkvalues=(vals)=>{
  //   const {stalking,spamming,offensive,harrasment,discrimination,
  //     viruses,violationofIp,pretending } = vals;
  //     if (!stalking && !spamming && !offensive && !harrasment && !discrimination && !viruses &&!violationofIp && !pretending ) {
  //       setValues({
  //         ...values,
  //         error: {
  //           message: "One must be marked to submit a report",
  //         },
  //       });
  //       return false;
  //     }
  //     else{
  //       setValues({
  //         ...values
  //       });
  //       return true;
  //     }
      
  // }

  //For username textfield
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
     
  const handleChecked = (e) => {
    setValues({
      ...values,
      uid: auth?.uid,
      stalking:e.target.stalking,
      spamming:e.target.spamming,
      offensive:e.target.offensive,
      harrasment:e.target.harrasment,
      discrimination:e.target.discrimination,
      viruses:e.target.viruses,
      violationofIp:e.target.violationofIp,
      pretending:e.target.pretending,
      
    });
  };
 
  const report=(e)=>{ 
    e.preventDefault();
    console.log(values);
    // if(checkvalues(values)) {
      dispatch(reportActions.addReport(values));
    // }
    //console.log(checkvalues(values));//add info that needs to be passed

  }

  React.useEffect(() => {
    if (reported) 
      router.push("/dashboard");
  }, [reported]);

  React.useEffect(() => {
    if (error)
      setValues({
        ...values,
        error,
      });
  }, [error]);

  if (loading){
    return "Loading..."
  }
 
  if(reported){
    return "Submitted"
  }
  return (
    <>
    {/* {values.error ? (
      <Alert severity="error" color="error">
        {values.error?.message}
      </Alert>
    ) : null} */}
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
              Report 
            </Typography>
          </Grid>
          <form onSubmit={report}>
          <FormGroup>
            <Grid item>
              <Typography color="secondary" variant="subtitle1" margin="5%">
                <br></br>
                As accurately as possible, please tell us what happened with
                this player. Write down the username of the player you want report.
                Choose the options that correspond to the
                situation. Mark multiple options if needed.
                <br></br>
              </Typography>
            </Grid>
            <Grid item marginLeft="5%">
              <TextField 
                        sx={{ color: "text.primary"} }
                        name="user_name"
                        required
                        label="Username of the player"
                        onChange={handleChange}
                      />
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
          </form>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
   
};
export default Report;

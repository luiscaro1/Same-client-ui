import React from "react";
import { FormGroup, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import useStyles from "../../pageStyles/feedback";
import { COLORS, IMAGES } from "../../constants";
import { useRouter } from "next/router";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import GamesIcon from '@mui/icons-material/Games';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import {useSelector,useDispatch} from "react-redux";
import {feedbackActions} from "../../services/redux/store/actions";
import { feedbackSelectors } from "../../services/redux/store/selectors";
import { authSelectors } from "../../services/redux/store/selectors";


const Feedback2 = () => {

    const classes = useStyles();
    const router = useRouter();
    const submit_feed=useSelector(feedbackSelectors.selectSubmittedFeed);
    const error= useSelector(feedbackSelectors.selectError);
    //const loading= useSelector(feedbackSelectors.selectLoading);
 
    const auth = useSelector(authSelectors.selectToken);
    const dispatch=useDispatch();

    const [values, setValues] = React.useState({
        email:"",
        websitedesign:"",
        ratedesign:"",
        websitefunctionality:"",
        ratefunctionality:"",
        gameavailable:"",
        rategames:"",
        generalinformation:"",
        rateoverall:"",
        error: null,
        
      });

      const validateEmail = (val) => {
        const { email } = val;
        if (email!== auth?.email) {
          setValues({
            ...values,
            error: {
              message: "Please write your email!",
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
    
    
    const submitting=(e)=>{ 
        e.preventDefault();
        //console.log(values);
        if(validateEmail(values.email)){
            dispatch(feedbackActions.addFeedBack(values));
        }
        //console.log(checkvalues(values));//add info that needs to be passed
    
      }

    React.useEffect(() => {
        if(submit_feed) 
            router.push("/dashboard");
      }, [submit_feed]);
    
    React.useEffect(() => {
        if (error)
          setValues({
            ...values,
            error,
          });
      }, [error]);
    
    // if (loading){
    //     return "Loading..."
    // }

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: COLORS.lightGreen,
        },
    });

    return (
        <Grid height="100vh" container direction="row">
            <Grid className={classes.formColumn} item >
                <Grid className={classes.feedbackForm} container direction="column">
                    <Grid className={classes.imageBackground} item>
                        <img className={classes.logo} src={IMAGES.logo} />
                    </Grid>
                    <Grid
                        item
                        container>
                        <Typography className={classes.feedbackTitle}>
                            We appreciate your Feedback.
                        </Typography>
                    </Grid>
                    <form onSubmit={submitting}>
                    <FormGroup>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackEmail}
                                label="Email"
                                placeholder=" "
                                name="email"
                                required 
                                onChange={handleChange}/>
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.categoryTitle} >
                                Website Design
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackBody}
                                name="websitedesign"
                                label="What can we improve in this area?"
                                placeholder=" "
                                rows={5}
                                multiline
                                onChange={handleChange} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.ratingTitle} >
                                Rate this service / feature.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <StyledRating
                                name="ratedesign"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                onChange={handleChange}
                                icon={<GamesIcon className={classes.feedbackRating} />}
                                emptyIcon={<GamesOutlinedIcon className={classes.feedbackRating} />} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.categoryTitle} >
                                Website Functionality
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackBody}
                                name="websitefunctionality"
                                label="What can we improve in this area?"
                                placeholder=" "
                                rows={5}
                                multiline
                                onChange={handleChange} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.ratingTitle} >
                                Rate this service / feature.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <StyledRating
                                name="ratefunctionality"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                onChange={handleChange}
                                icon={<GamesIcon className={classes.feedbackRating} />}
                                emptyIcon={<GamesOutlinedIcon className={classes.feedbackRating} />} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.categoryTitle} >
                                Games Available
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackBody}
                                name="gameavailable"
                                label="What can we improve in this area?"
                                placeholder=" "
                                rows={5}
                                multiline
                                onChange={handleChange} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.ratingTitle} >
                                Rate this service / feature.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <StyledRating
                                name="rategames"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                max={5}
                                onChange={handleChange}
                                icon={<GamesIcon className={classes.feedbackRating} />}
                                emptyIcon={<GamesOutlinedIcon className={classes.feedbackRating} />} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.categoryTitle} >
                                General Information
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackBody}
                                name="generalinformation"
                                label="What can we improve overall?"
                                placeholder=" "
                                rows={5}
                                multiline
                                onChange={handleChange} />
                        </Grid>
                        <Grid
                            item
                            container>
                            <Typography className={classes.ratingTitle} >
                                Rate our website overall.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <StyledRating
                                name="rateoverall"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                onChange={handleChange}
                                icon={<GamesIcon className={classes.feedbackRating} />}
                                emptyIcon={<GamesOutlinedIcon className={classes.feedbackRating} />} />
                        </Grid>
                        <Grid
                            className={classes.formItem}
                            item
                            container
                            justifyContent="center">
                            <Button
                                onClick={() => router.push("/dashboard")}
                                variant="contained"
                                className={classes.cancelButton}>
                                Cancel
                            </Button>

                            {/* Needs to be adjusted to actually submit the form */}
                            <Button
                                //onClick={() => router.push("/dashboard")}
                                variant="contained"
                                type="submit"
                                className={classes.submitButton}>
                                Submit Feedback
                            </Button>
                        </Grid>
                    </FormGroup>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Feedback2;

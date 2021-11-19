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
import NormalKeyboard from "../../components/KeyboardTest";

const Feedback2 = () => {

    const classes = useStyles();
    const router = useRouter();
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    }

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
                    <FormGroup>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackEmail}
                                label="Email"
                                placeholder=" " />
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
                                label="What can we improve in this area?"
                                placeholder=" "
                                rows={5}
                                multiline />
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
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
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
                                label="What can we improve in this area?"
                                placeholder=" "
                                rows={5}
                                multiline />
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
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
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
                                label="What can we improve in this area?"
                                placeholder=" "
                                rows={5}
                                multiline />
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
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
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
                                label="What can we improve overall?"
                                placeholder=" "
                                rows={5}
                                multiline />
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
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
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
                                onClick={() => router.push("/")}
                                variant="contained"
                                className={classes.submitButton}>
                                Submit Feedback
                            </Button>
                        </Grid>
                    </FormGroup>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Feedback2;

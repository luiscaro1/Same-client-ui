import React from "react";
import { FormGroup, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import useStyles from "../../pageStyles/feedback";
import { COLORS, IMAGES } from "../../constants";
import { useRouter } from "next/router";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import GamesIcon from '@mui/icons-material/Games';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';

const Feedback = () => {

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
                            container>
                            <Typography className={classes.ratingInfo} >
                                How likely are you to recomend our service?
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
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackEmail}
                                label="Email"
                                placeholder=" " />
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackCategory}
                                label="Feedback Category"
                                select
                                value={category}
                                onChange={handleChange}>
                                <MenuItem value=" "> None </MenuItem>
                                <MenuItem value="design"> Design </MenuItem>
                                <MenuItem value="funtionality"> Functionality </MenuItem>
                                <MenuItem value="games available"> Games Available </MenuItem>
                                <MenuItem value="incorrect information"> General Information </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center">
                            <TextField
                                className={classes.feedbackBody}
                                label="What Can We Improve?"
                                placeholder=" "
                                rows={5}
                                multiline />
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
export default Feedback;

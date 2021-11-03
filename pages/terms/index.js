import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import useStyles from "../../pageStyles/terms";
import { IMAGES } from "../../constants";


const Terms = () => {

    const classes = useStyles();

    return (
        <Grid height="100vh" container direction="row">
            <Grid className={classes.formColumn} item >
                <Grid className={classes.termsForm} container direction="column">
                    <Grid className={classes.imageBackground} item>
                        <img className={classes.logo} src={IMAGES.logo} />
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="center">
                        <Typography className={classes.termsTitle} color="primary" variant="h3">
                            Terms of Service
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container>
                        <Typography className={classes.termsInfo} >
                            Terms and Conditions of Service go here.
                            <br/>
                            <br/> 
                            - The SAME Team
                        </Typography>
                    </Grid>
                    <Grid
                        className={classes.formItem}
                        item
                        container
                        justifyContent="center">
                        <Button
                            variant="contained"
                            className={classes.actionButton}>
                            Back to Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Terms;

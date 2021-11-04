import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import useStyles from "../../pageStyles/termsofservice";
import { IMAGES } from "../../constants";
import { useRouter } from "next/router";

const Terms = () => {

    const classes = useStyles();
    const router = useRouter();

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
                        YOUR SAME ACCOUNT
                            <br/>
                            <br/>
	                        As a user, you are responsible for your log-in credentials and for any 
                            activity resulting from the use of your log-in credentials or other 
                            activity on your account on the service. When you access the web application,
                            if you don’t have a registered account, it is imperative that you create one
                            in order to access our services. When registering for your account, it will
                            require you to provide a unique username, a unique email (not in use by 
                            another account within the service), a password, and other personal information.
                            This is all required in order for the users to be able to access the other 
                            services within the platform. You ensure that the information provided in 
                            the registration process is true, accurate, current, and complete. We reserve
                            the right to reject any username or to terminate your username or prevent use 
                            of a username in our sole discretion, and without any liability to you. You agree
                            to notify the development team immediately if you believe the confidentiality 
                            of your log-in credentials has been compromised or if you suspect unauthorized 
                            use of your Account. You agree that we will not be liable for any loss or damage 
                            arising from unauthorized use of your credentials.
                            <br/>
                            <br/>
                            YOUR CONSENT
                            <br/>
                            <br/>
	                        Within some of our services you will be able to share your content publicly available.
                            If we believe that the content that you are sharing is inappropriate, we are authorized 
                            to remove such post from our services and depending on the severity it could lead to your
                            account getting banned from utilizing our services. If you think that someone is utilizing your 
                            personal property rights, you can notify us and we will take the appropriate actions.
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
                            onClick={() => router.push("/signup")}
                            variant="contained"
                            className={classes.actionButton}>
                            Back
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Terms;

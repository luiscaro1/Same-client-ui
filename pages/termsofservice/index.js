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
                            AGE REQUIREMENT
                            <br />
                            <br />
                            In order to utilize the services provided by the Same Platform the user must be of the
                            age of 18 years or older. Some of the services provided by our platform require the use
                            of money and communication with people that one has no knowledge of. The user will be held
                            responsible for the use of the services, if a user is below the required age a parent or legal
                            guardian must register the account for them, ensuring that an adult has the knowledge of the
                            tools that the minor will have available within our platform. By doing this the parent or legal
                            guardian agrees to the terms of services. As the legal guardian, you agree that the minor will have
                            access to monetary services provided by other users and that you are willing to let the minor access
                            these services. If the minor were to create the account without the knowledge of a parent or legal
                            guardian, the Same team will not be held accountable for any loss of money or any lawsuit that can
                            affect the company for infringement of the age requirement or for not reading the terms of services.
                            <br />
                            <br />
                            <br />
                            SAME'S SEVICES
                            <br />
                            <br />
                            The same platform offers the users with the following services: create LFG posts for their favorite
                            games and platforms, Text and Voice Chats, Gaming Services provided by other players(Coaching, team
                            boosting, content collaborators, and much more!), Gaming Feeds. All the users will have these tools
                            available for them once they have registered their account.
                            <br />
                            <br />
                            <br />
                            RULES OF CONDUCT
                            <br />
                            <br />
                            Within the Same community we expect that the users will behave with a certain manner and have some
                            form of professionalism if the user will be providing their services to other users. Under no
                            circumstances will the Same team accept the following conduct: use of illegal content, scamming other
                            users, shaming other users, harassing other users, try to gain access to other user’s account, trying
                            to pretend to be another user, pretending to be a member of the Same development team, falsely accusing
                            other users, or stealing other user’s content. The Same development team reserves the right to refuse
                            the access of our platform to any user without notice for any reason. Failing to comply with these rules
                            could result in the loss of the account and the termination of said account and all of the accounts that
                            the user has created within the same platform. You agree that the Same team does not need to provide a
                            notice or warning to you before termination or suspension of your account(s).
                            <br />
                            <br />
                            <br />
                            YOUR SAME ACCOUNT
                            <br />
                            <br />
                            As a user you are responsible for your log-in credentials and for any activity resulting from the use
                            of your log-in credentials or other activity on your account on the service. When you access the web
                            application if you don’t have a registered account it is imperative that you create on in order to access
                            our services. When registering for your account it will require you to provide a unique username, a unique
                            email (not in use by another account within the service), a password, and other personal information, this
                            is all required in order for the users to be able to access the other services within the platform. You
                            ensure that the information provided in the registration process is true, accurate, current, and complete.
                            We reserve the right to reject any username or to terminate your username or prevent use of a username in
                            our sole discretion, and without any liability to you. You agree to notify the development team immediately
                            if you believe the confidentiality of your log-in credentials has been compromised or if you suspect
                            unauthorized use of your Account. You agree that we will not be liable for any loss or damage arising
                            from unauthorized use of your credentials.
                            <br />
                            <br />
                            <br />
                            YOUR CONTENT
                            <br />
                            <br />
                            With in some of our services you will be able to share your content publicly available. If we believe
                            that the content that you are sharing is inappropriate we are authorized to remove such post from our
                            services and depending on the severity it could lead to your account getting banned from utilizing our
                            services. If you think that someone is utilizing your personal property rights, you can notify us, and
                            we will take the appropriate actions.
                            <br />
                            <br />
                            <br />
                            SAME CONTENT
                            <br />
                            <br />
                            Some of our services includes content that belongs to Same. You may utilize our content allowed by these
                            terms, but we retain any intellectual rights that we have in our content. If you want to use our content
                            don’t remove, alter, or obscure our branding or logo from it and give us our deserved recognition. If any
                            of the previous statement are not followed accordingly you may be facing legal action from our team for stollen content.
                            <br />
                            <br />
                            <br />
                            OTHER CONTENT
                            <br />
                            <br />
                            Some of our services give you access to content that belong to other users. You may not use this content
                            without that user’s permission. The views expressed by other users’ content are theirs, and don’t necessarily
                            reflect Same’s views.
                            <br />
                            <br />
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

import React from "react";
import {
  Grid,
  Toolbar,
  Avatar,
  CardContent,
  Typography,
  Button,
  IconButton,

} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useSelector } from "react-redux";
import useStyles from "../../pageStyles/profile";
import { IMAGES, MEDIA_STREAM } from "../../constants";

import { authSelectors } from "../../services/redux/store/selectors";
import ProfileTab from "../../components/ProfileTab";
import BlockReportMenu from "../../components/BlockReportMenu";

const Profile = () => {
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  console.log(auth);
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid className={classes.section} item>
          <Toolbar>
            <img className={classes.logo} src={IMAGES.logo} />
          </Toolbar>
        </Grid>
      </Grid>

      <Grid item container xs>
        <Grid className={classes.info} item xs={4} container>
          <CardContent>
            <Grid
              container
              justifyContent="center"
              spacing={4}
              direction="column"
            >
              {
                //TODO: Remove hard-coded image
              }
              <Grid container item xs={8} justifyContent="center">
                <Grid item>
                  <Avatar
                    className={classes.profilePic}
                    src={MEDIA_STREAM + auth?.avatar_url}
                  />
                </Grid>
              </Grid>

              <Grid item container justifyContent="center" xs={8} spacing={2}>
                <Grid item>
                  <Typography color="secondary" variant="h5">
                    {auth?.user_name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained">
                    <PersonAddAlt1Icon />
                  </Button>
                </Grid>
                  <Grid item>
                    <BlockReportMenu />
                  </Grid>
              </Grid>
              <Grid item container wrap spacing={4}>
                <Grid item xs={3}>
                  <Typography color="primary" variant="h6">
                    Bio
                  </Typography>
                </Grid>

                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  item
                  xs={8}
                >
                  <Typography color="secondary" variant="body1">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container wrap spacing={4}>
                <Grid item xs={3}>
                  <Typography color="primary" variant="h6">
                    Friends
                  </Typography>
                </Grid>

                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  item
                  xs={8}
                >
                  <Typography color="secondary" variant="body1">
                    100
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item container xs>
          <Grid className={classes.card}>
            <CardContent>
              <ProfileTab />
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;

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
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../../pageStyles/dashboard";
import { IMAGES, MEDIA_STREAM } from "../../constants";
import {
  authSelectors,
  friendSelectors,
} from "../../services/redux/store/selectors";
import DashBoardTab from "../../components/DashBoardTab";
// import BlockReportMenu from "../../components/BlockReportMenu";
import NavMenu from "../../components/NavMenu";
import { friendActions, authActions } from "../../services/redux/store/actions";
import { useRouter } from "next/router";

const DashBoard = () => {
  const router = useRouter();
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const loading = useSelector(authSelectors.selectAuthLoading);
  //console.log(auth?.uid);
  const friend_count = useSelector(friendSelectors.selectFriendCount);
  const get_bio = useSelector(authSelectors.selectBio);
  const dispatch = useDispatch();

  const [info, setInfo] = React.useState({
    uid: "",
    error: null,
  });

  //for friend count, works but doesnt want to show in front end
  const getallFriends = () => {
    if (auth) {
      //console.log(auth?.uid);
      var id = auth?.uid;
      dispatch(friendActions.getFriendCount(id));
    }
  };

  const getUserBio = () => {
    if (auth) {
      //console.log(auth?.user_name);
      var name = auth?.user_name;
      dispatch(authActions.getBio(name));
    }
  };

  //const count= getallFriends();
  React.useEffect(() => {
    getallFriends();
    if (auth) {
      getUserBio();
    }
  }, [auth, friend_count, get_bio]);

  if (!auth && !loading) router.push("/login");

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid className={classes.section} width="100%" item>
          <Toolbar width="100%">
            <Grid container width="100%">
              <Grid item xs>
                <img className={classes.logo} src={IMAGES.logo} />
              </Grid>
              <Grid item>
                <NavMenu className={classes.bar} />
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>

      <Grid item container className={classes.dashboardContent} xs>
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
                {/* <Grid item>
                  <Button variant="contained">
                    <PersonAddAlt1Icon />
                  </Button>
                </Grid> */}

                {/* <Grid item>
                  <BlockReportMenu />
                </Grid> */}
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
                    {get_bio}
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
                    {friend_count}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item container xs>
          <Grid className={classes.card}>
            <CardContent>
              <DashBoardTab />
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashBoard;

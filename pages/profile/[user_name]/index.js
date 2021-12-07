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
import useStyles from "../../../pageStyles/profile";
import { IMAGES, MEDIA_STREAM } from "../../../constants";
import { authSelectors } from "../../../services/redux/store/selectors";
import DashBoardTab from "../../../components/DashBoardTab";
import BlockReportMenu from "../../../components/BlockReportMenu";
import NavMenu from "../../../components/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { friendActions } from "../../../services/redux/store/actions";
import { authActions } from "../../../services/redux/store/actions";
import { friendSelectors } from "../../../services/redux/store/selectors";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const loading = useSelector(authSelectors.selectAuthLoading);
  const other = useSelector(authSelectors.selectOtherUser);
  const user_error = useSelector(authSelectors.selectUserError);
  const error = useSelector(authSelectors.selectAuthError);
  //friends
  const friendship = useSelector(friendSelectors.selectFriendship);
  const friend_error = useSelector(friendSelectors.selectFriendError);
  const friend_count = useSelector(friendSelectors.selectFriendCount);
  const router = useRouter();

  const user_name = router?.query?.user_name;
  // function to dispatch events
  const dispatch = useDispatch();

  const [info, setInfo] = React.useState({
    user_name: "",
    error: null,
  });

  const getallFriends = () => {
    if (auth && other) {
      //console.log(other?.data?.uid);
      var id = other?.data?.uid;
      dispatch(friendActions.getFriendCount(id));
    }
  };

  //const count= getallFriends();

  // console.log(auth?.uid);
  // console.log(other?.data.user_name);

  //adding a friend
  const addFriend = (e) => {
    e.preventDefault();
    var other_name = other?.data.user_name;

    dispatch(friendActions.addFriend(other_name));
  };

  // React.useEffect(() => {
  //   if (friendship) return "Friendship";
  // }, [friendship]);

  const getUser = () => {
    if (user_name && auth) {
      console.log("here");
      dispatch(authActions.getbyUsername(user_name));
    }
  };

  React.useEffect(() => {
    getUser();

    // router.push("/profile/user_name")
  }, [user_name, auth]);

  React.useEffect(() => {
    getallFriends();

    // router.push("/profile/user_name")
  }, [other, friend_count]);

  // React.useEffect(() => {
  //   if (user_error)
  //     setInfo({
  //       ...info,
  //       error: "User does not exist",
  //     });
  // }, [user_error]);

  // React.useEffect(() => {
  //   if (friend_error)
  //     setInfo({
  //       ...info,
  //       error: "Opps try again later",
  //     });
  // }, [friend_error]);

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
                    {other?.data?.user_name}
                  </Typography>
                </Grid>
                <Grid item>
                  {/* <form onSubmit={addFriend}> */}
                  <Button variant="contained" onClick={addFriend}>
                    <PersonAddAlt1Icon />
                  </Button>
                  {/* </form> */}
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
                    {other?.data?.bio}
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
                    {friend_count?.data?.count}
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

export default Profile;

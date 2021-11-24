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
import { useRouter } from "next/router";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import useStyles from "../../../pageStyles/profile";
import { IMAGES, MEDIA_STREAM } from "../../../constants";
import { authSelectors } from "../../../services/redux/store/selectors";
import DashBoardTab from "../../../components/DashBoardTab";
import BlockReportMenu from "../../../components/BlockReportMenu";
import NavMenu from "../../../components/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { friendActions } from "../../../services/redux/store/actions";
import {authActions} from "../../../services/redux/store/actions";
import { friendSelectors } from "../../../services/redux/store/selectors";


const Profile = () => {
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const error = useSelector(authSelectors.selectAuthError);
  const other=useSelector(authSelectors.selectOtherUser);
//friends
  const friendship=useSelector(friendSelectors.selectFriendship);
  const friend=useSelector(friendSelectors.selectFriends);
  const friend_err=useSelector(friendSelectors.selectFriendError);
  const router = useRouter();

  const user_name = router?.query?.user_name;
  // function to dispatch events
  const dispatch = useDispatch();
  //console.log(user_name);

  const [info, setInfo] = React.useState({
    uid: "",
    user_name: "",
  });

  // const [values] = React.useState({
  //   uid:auth?.uid,
  //   user_name:other?.user_name, 
  // });

 
  const validateUsername = (val) => {
    if (val!== getUser().user_name) {
      // setValues({
      //   ...values,
      //   error: {
      //     message: "User_name does not exist!",
      //   },
      // });
      return false;
    }
    return true;
  };

  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     uid: auth?.uid,
  //     user_name: other?.user_name, 
  //   });
  // };
  const handleChange = (e) => {
    setInfo({
      ...info,
      uid:auth?.uid,
      user_name:user_name,
      [e.target.name]: e.target.value,
    });
  };


//for friend count
  // const getallFriends = (e) => {
  //   dispatch(friendActions.getallFriends());
  // };
//adding a friend
  const addFriend=(e)=>{
    e.preventDefault();
    console.log(values);
   if(validateUsername(info.user_name)){
      dispatch(friendActions.addFriend(info));
    }
}

  React.useEffect(() => {
    if (friend) 
      return "Friendship"
  }, [friend]);

  React.useEffect(() => {
      getUser();
      // router.push("/profile/user_name")
      return "GOT it"
    
  }, [user_name]);

  const getUser = () => {
    if (user_name) {
        dispatch(authActions.getbyUsername(user_name));
    }
  };


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
                  <Button variant="contained"  onClick={addFriend}
                  >
                    <PersonAddAlt1Icon  />
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

              <DashBoardTab />

            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


export default Profile;


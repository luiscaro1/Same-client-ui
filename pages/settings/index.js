import React from "react";
import {
  Grid,
  Toolbar,
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "../../pageStyles/settings";
import { IMAGES, MEDIA_STREAM } from "../../constants";
import { authSelectors,friendSelectors } from "../../services/redux/store/selectors";
import SettingsTab from "../../components/SettingsTab";
import Link from "next/link";
import NavMenu from "../../components/NavMenu";
import { friendActions,authActions } from "../../services/redux/store/actions";
import router, { useRouter } from "next/router";
import { route } from "next/dist/server/router";

const Settings = () => {
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const friend_count=useSelector(friendSelectors.selectFriendCount);
  const deleted=useSelector(authSelectors.selectDeleted);
  const updated_bio=useSelector(authSelectors.selectBio);
  
  
  //console.log(auth);
  //console.log(friend_count?.count);
  console.log(friend_count);

  const dispatch=useDispatch();

  const [info,setInfo]=React.useState({
    uid:"",
    error:null,
  });

  const getFriendNumber=()=>{
    //console.log(auth?.uid);
    if(auth){
      var id=auth?.uid;
      dispatch(friendActions.getFriendCount(id));
    }

  };

  const getUserBio=()=>{
    if(auth){//console.log(auth?.user_name);
      var name=auth?.user_name;
      dispatch(authActions.getBio(name));
    }

  };

  const deleteUser=()=>{
    //console.log(auth?.uid);
    var id=auth?.uid;
    dispatch(authActions.deleteAccount(id));
  };

  const logout = () => {
    dispatch(authActions.logout());
    router.push("/");
  };


  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //const count=getFriendNumber();
  

  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  React.useEffect(()=>{
    getFriendNumber();
    if(auth){getUserBio();}
  },[auth,friend_count,updated_bio]);

  React.useEffect(()=>{
    if(deleted){
        logout();
    } 
  },[deleted]);


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

      <Grid item container className={classes.settingsContent} xs>
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
                    <SettingsIcon />
                  </Button>
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
                    {updated_bio}
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
                    {friend_count} {/*not sure if its working */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item container xs>
          <Grid className={classes.card}>
            <CardContent>
              <SettingsTab />
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justifyContent="flex-end">
        <Grid item>
          <Button
            variant="outlined"
            color="error"
            className={classes.delete}
            onClick={deleteUser}
          >
            Delete Account
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Settings;

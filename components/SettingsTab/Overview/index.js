import React from "react";
import {
  Grid,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import useStyles from "./_style";
// import LfgContainer from "../../Lfg/LfgContainer";
import { useSelector,useDispatch } from "react-redux";
import { authSelectors,blockSelectors } from "../../../services/redux/store/selectors";
import { blockActions,authActions } from "../../../services/redux/store/actions";

const OverviewTab = () => {
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const block_count=useSelector(blockSelectors.selectBlockCount);
  const email=useSelector(authSelectors.selectEmail);
  const dispatch=useDispatch();

  console.log(auth);
  const [info,setInfo]=React.useState({
    uid:"",
    error:null,
  });

  const getUserEmail=()=>{
    //console.log(auth?.user_name);
    var name=auth?.user_name;
    dispatch(authActions.getEmail(name));
  }

  const getBlockedUsers=()=>{
    //console.log(auth?.uid);
    var id=auth?.uid;
    dispatch(blockActions.getBlockCount(id));
  }

  // const count=getBlockedUsers();

  // const name=getUserEmail();

  React.useEffect(()=>{
    getBlockedUsers();
    getUserEmail();
  },[block_count,email]);

  return (
    <Grid
      className={classes.overviewList}
      spacing={4}
      container
      direction="column"
    >
      <Typography color="secondary" variant="h6">
        Username: {auth?.user_name}
      </Typography>
      <Typography color="secondary" variant="h6">
        Email: {email}
      </Typography>
      <Typography color="secondary" variant="h6">
        Blocked Users {block_count}
      </Typography>
    </Grid>
  );
};

export default OverviewTab;

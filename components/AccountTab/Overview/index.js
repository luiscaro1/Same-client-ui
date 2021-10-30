import React from "react";
import {
  Grid,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,Button
} from "@mui/material";
import useStyles from "./_style";
// import LfgContainer from "../../Lfg/LfgContainer";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../services/redux/store/selectors";

const OverviewTab = () => {
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  console.log(auth);
//   const lobbies = useSelector(gameSelectors.selectUserLobbies);

  return (
    <Grid className={classes.overviewList} spacing={4} container direction="column">
     <Typography color="secondary" variant="h5"> Username: {auth?.user_name} </Typography>
        <Typography color="secondary" variant="h5">
            Email: myuser@gmail.com
        </Typography>
        <Typography color="secondary" variant="h5">
            Blocked Users 0
        </Typography>
        <Button
            className={classes.delete}
            variant="contained"
            type="submit"
        >
        Delete Account
        </Button>
    </Grid>
  );
};

export default OverviewTab;
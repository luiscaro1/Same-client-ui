import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormGroup,
  TextField,
  Switch,
} from "@mui/material";
import useStyles from "./_style";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelectors } from "../../../services/redux/store/selectors";

const NotificationsTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(authSelectors.selectToken);
  console.log(auth);

  //need to add the onclick event
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  //submiting changes
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(values);
    // dispatch(authActions.login(values));
  };

  return (
    <Grid className={classes.notiList} spacing={3} container direction="column">
      <Grid item xs={8} direction="row">
        <Typography color="secondary" variant="h5">
          {" "}
          Mute
        </Typography>
        <Box sx={{ width: 300 }}>
          <Switch
            // className={classes.slidingButton}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            //need to change it so it does it on click
          />
        </Box>
        <Typography color="secondary" variant="h6">
          Service coming soon!!!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotificationsTab;

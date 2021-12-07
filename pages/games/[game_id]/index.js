import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import { Toolbar, Typography } from "@mui/material";
import NavMenu from "../../../components/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../../services/redux/store/actions";
import {
  gameSelectors,
  authSelectors,
} from "../../../services/redux/store/selectors";
import TabPanel from "../../../components/TabPanel";
import Lfg from "../../../components/Lfg";
import Feed from "../../../components/Feed";
import useStyles from "../../../pageStyles/game";

import { IMAGES, MEDIA_STREAM } from "../../../constants";

import Grid from "@mui/material/Grid";

const GameFeed = () => {
  const classes = useStyles();
  const router = useRouter();
  const { game_id } = router.query;
  const dispatch = useDispatch();
  const currentGame = useSelector(gameSelectors.selectCurrentGame);
  const [value, setValue] = React.useState(0);
  const auth = useSelector(authSelectors.selectToken);
  const loading = useSelector(authSelectors.selectAuthLoading);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getGameData = () => {
    if (game_id && !currentGame.data)
      dispatch(gameActions.getGameById(game_id));
  };

  const clearCurrentLobby = () => {
    dispatch(gameActions.setCurrentLobby(null));
    dispatch(gameActions.setLobbyMessages(null));
  };

  React.useEffect(() => {
    getGameData();
  }, [game_id]);

  React.useEffect(() => {
    clearCurrentLobby();
  }, []);

  if (!auth && !loading) router.push("/login");
  return (
    <>
      <Grid item container>
        <Grid className={classes.section} width="100%" height="100%" item>
          <Toolbar width="100%" height="100%">
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
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="center">
          <img
            src={`${MEDIA_STREAM}${currentGame?.data?.banner_url}`}
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid container xs justifyContent="center">
          <Grid item>
            <Typography variant="h4" color="primary">
              {currentGame?.data?.name}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Look For Group" {...a11yProps(0)} />
            <Tab label="Game Feed" {...a11yProps(1)} />
            <Tab label="Market" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Lfg />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Feed />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography color="primary" variant="h3">
            Coming Soon!
          </Typography>
        </TabPanel>
      </Box>
    </>
  );
};

export default GameFeed;

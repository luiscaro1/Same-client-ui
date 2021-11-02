import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../../services/redux/store/actions";
import { gameSelectors } from "../../../services/redux/store/selectors";
import TabPanel from "../../../components/TabPanel";
import Lfg from "../../../components/Lfg";
import Feed from "../../../components/Feed";

import { IMAGES } from "../../../constants";

import Grid from "@mui/material/Grid";

const GameFeed = () => {
  const router = useRouter();
  const { game_id } = router.query;
  const dispatch = useDispatch();
  const currentGame = useSelector(gameSelectors.selectCurrentGame);
  const [value, setValue] = React.useState(0);

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

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container justifyContent="center">
        <img src={IMAGES.apex} />
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
        Item Three
      </TabPanel>
    </Box>
  );
};

export default GameFeed;

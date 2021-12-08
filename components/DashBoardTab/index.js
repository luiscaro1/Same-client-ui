import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import useStyles from "./_style";
import TabPanel from "../TabPanel";
import LobbiesTab from "./Lobbies";
import PostsTab from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../services/redux/store/actions";
import { authSelectors } from "../../services/redux/store/selectors";

const DashBoardTab = () => {
  const classes = useStyles();
  //const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(authSelectors.selectToken);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const getUserLfgLobbies = () => {
    if (auth?.uid) dispatch(gameActions.getUserLfgLobbies(auth.uid));
  };
  const getUserLfgPosts = () => {
    if (auth?.uid) dispatch(gameActions.getUserLfgPosts(auth.uid));
  };

  React.useEffect(() => {
    getUserLfgLobbies();
    getUserLfgPosts();
  }, [auth?.uid]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Lobbies" {...a11yProps(0)} />

          <Tab label="Posts" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LobbiesTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PostsTab />
      </TabPanel>
    </Box>
  );
};

export default DashBoardTab;

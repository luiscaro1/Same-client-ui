import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import useStyles from "./_style";
import TabPanel from "../TabPanel";
import OverviewTab from "./Overview";
import EditProfileTab from "./EditProfile";
import PasswordTab from "./Password";

import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../services/redux/store/actions";
import { authSelectors } from "../../services/redux/store/selectors";
import NotificationsTab from "./Notifications";

const AccountTab = () => {
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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="basic tabs example"
        >
          <Tab label="Account Overview" {...a11yProps(0)} />
          <Tab label="Edit Profile" {...a11yProps(1)} />
          <Tab label="Change Password" {...a11yProps(2)} />
          <Tab label="Notification Settings" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OverviewTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EditProfileTab/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PasswordTab/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NotificationsTab/>
      </TabPanel>
    </Box>
  );
};

export default AccountTab;

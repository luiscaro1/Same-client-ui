import React from "react";
import {
  Grid,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import useStyles from "./_style";
import LfgContainer from "../../Lfg/LfgContainer";
import { useSelector } from "react-redux";
import { gameSelectors } from "../../../services/redux/store/selectors";

const LobbiesTab = () => {
  const classes = useStyles();

  const lobbies = useSelector(gameSelectors.selectUserLobbies);

  return (
    <Grid className={classes.lfgList} spacing={3} container direction="column">
      {lobbies?.map((lobby) => (
        <LfgContainer key={lobby.lid} disabled={true} lobby={lobby} />
      ))}
    </Grid>
  );
};

export default LobbiesTab;

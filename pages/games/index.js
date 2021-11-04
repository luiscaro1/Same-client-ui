import React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../services/redux/store/actions";
import { gameSelectors } from "../../services/redux/store/selectors";
import useStyles from "../../pageStyles/game";

const Games = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const games = useSelector(gameSelectors.selectGames);

  const getGames = () => {
    dispatch(gameActions.getAllGames());
  };

  const viewGamePage = (game) => {
    dispatch(gameActions.setCurrentGame(game));

    router.push("/games/" + game.gid);
  };

  React.useEffect(() => {
    getGames();
  }, []);

  return (
    <List className={classes.list}>
      {(games || []).map((game) => (
        <ListItem key={game.name}>
          <ListItemButton onClick={() => viewGamePage(game)}>
            <Typography color="primary">{game.name}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Games;

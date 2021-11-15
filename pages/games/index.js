import React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography, Grid, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../services/redux/store/actions";
import { gameSelectors } from "../../services/redux/store/selectors";
import useStyles from "../../pageStyles/game";
import { IMAGES } from "../../constants";
import NavMenu from "../../components/NavMenu";

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
    <>
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
      <List className={classes.list}>
        {(games || []).map((game) => (
          <ListItem key={game.name}>
            <ListItemButton onClick={() => viewGamePage(game)}>
              <Typography color="primary">{game.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Games;

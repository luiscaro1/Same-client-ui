import React from "react";
import { Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { useRouter } from "next/router";

import { gameActions } from "../../../services/redux/store/actions";
import {
  gameSelectors,
  authSelectors,
} from "../../../services/redux/store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { MEDIA_STREAM } from "../../../constants";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const dummy_data = [
  {
    user_name: "naomymorales",
  },
  {
    user_name: "jjmp127",
  },
  {
    user_name: "skiaXD",
  },
];

import useStyles from "./_style";

const Lobby = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const currentLobby = useSelector(gameSelectors.selectCurrentLobby);
  const lobby_id = router?.query?.lobby_id;
  const [mute, setMute] = React.useState(true);

  const getCurrentLobby = () => {
    if (lobby_id && !currentLobby?.data)
      dispatch(gameActions.getCurrentLobby(lobby_id));
  };

  React.useEffect(() => {
    getCurrentLobby();
  }, [lobby_id]);

  return (
    <Grid container>
      <Grid item>
        <Typography color="primary">
          Hosted by {currentLobby?.data?.user_name}
        </Typography>
      </Grid>

      <Grid container item>
        <Grid item xs={4} maxWidth={400} minWidth={300}>
          <Card>
            <CardContent>
              <Grid height="100vh" container direction="column" spacing={2}>
                <Grid item>
                  <Typography
                    className={classes.section}
                    color="primary"
                    variant="body2"
                  >
                    Voice
                  </Typography>
                </Grid>
                <Grid container item spacing={2}>
                  {dummy_data.map((player) => (
                    <Grid key={player.user_name} item container spacing={2}>
                      <Grid item>
                        <Avatar
                          src={
                            MEDIA_STREAM +
                            "ad81b66ffd94844153ad9342c4b70cc6.jpg"
                          }
                        />
                      </Grid>
                      <Grid
                        item
                        container
                        xs
                        direction="column"
                        justifyContent="center"
                      >
                        <Grid item>
                          <Typography variant="body1">
                            {player.user_name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid
                  xs={9}
                  item
                  container
                  direction="column"
                  justifyContent="flex-end"
                >
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="h6" color="secondary">
                        {auth?.user_name}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      container
                      direction="column"
                      xs
                      justifyContent="center"
                    >
                      <Grid item>
                        <VolumeOffIcon />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs></Grid>

        {/* <Grid item xs={2} minWidth={200} maxWidth={250}>
          <Card className={classes.lobbyChats}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Typography
                    className={classes.section}
                    color="primary"
                    variant="body2"
                  >
                    Online
                  </Typography>
                </Grid>
                {dummy_data.map((player) => (
                  <Grid key={player.user_name} item container spacing={2}>
                    <Grid item>
                      <Avatar
                        src={
                          MEDIA_STREAM + "ad81b66ffd94844153ad9342c4b70cc6.jpg"
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      xs
                      direction="column"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Typography variant="body1">
                          {player.user_name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Lobby;

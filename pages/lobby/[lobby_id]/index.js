import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import {
  listenForMessage,
  listenToOnChatConnection,
} from "../../../services/socketio/listeners/lobby";
import { gameActions } from "../../../services/redux/store/actions";
import {
  gameSelectors,
  authSelectors,
} from "../../../services/redux/store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { MEDIA_STREAM } from "../../../constants";
import { joinLobby } from "../../../services/socketio/actions/lobby";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import useStyles from "../../../pageStyles/lobby";

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

const Lobby = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const currentLobby = useSelector(gameSelectors.selectCurrentLobby);
  const lobby_id = router?.query?.lobby_id;
  const [mute, setMute] = React.useState(true);
  const [message, setMessage] = React.useState({
    content: "",
    type: "TEXT",
  });
  const messageBoxRef = React.useRef();

  const handleChange = (e) => {
    setMessage({
      ...message,
      content: e.target.value,
      type: e.target.name,
      lid: lobby_id,
    });
  };

  const handleContent = ({ type, content }) => {
    switch (type) {
      case "TEXT":
        return <Typography color="secondary">{content}</Typography>;

      default:
        return (
          <img className={classes.chatImage} src={MEDIA_STREAM + content} />
        );
    }
  };

  const getCurrentLobby = async () => {
    if (lobby_id && !currentLobby?.data) {
      await dispatch(gameActions.getCurrentLobby(lobby_id));
      joinLobby(lobby_id);
    }
  };

  const getCurrentLobbyMessages = async () => {
    if (lobby_id && !currentLobby?.data?.messages) {
      await dispatch(
        gameActions.getLobbyMessages({
          lid: lobby_id,
          limit: 20,
          pageNumber: 1,
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth) dispatch(gameActions.sendMessage(message));
  };

  const unmuteMic = () => {
    setMute(false);
  };

  const muteMic = () => {
    setMute(true);
  };

  React.useEffect(() => {
    getCurrentLobby();
    getCurrentLobbyMessages();
  }, [lobby_id]);

  React.useEffect(() => {
    listenToOnChatConnection();

    messageBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    listenForMessage((msg) => dispatch(gameActions.receiveMessage(msg)));
  }, []);

  return (
    <Grid container height="100%" className={classes.lobby}>
      <Grid container item height="100%">
        <Grid item xs={4} maxWidth={400} minWidth={300} height="100%">
          <Card className={classes.lobbyCard}>
            <CardContent className={classes.lobbyCard}>
              <Grid height="100%" container direction="column" spacing={2}>
                <Grid item>
                  <Typography color="primary">
                    Hosted by {currentLobby?.data?.user_name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.section}
                    color="primary"
                    variant="body2"
                  >
                    Voice
                  </Typography>
                </Grid>
                <Grid item container spacing={2}>
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
                        height="100%"
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
                  item
                  height="100%"
                  xs={9}
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
                        {mute ? (
                          <VolumeOffIcon onClick={unmuteMic} />
                        ) : (
                          <VolumeUpIcon onClick={muteMic} />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          item
          xs
          height="100%"
          justifyContent="flex-end"
        >
          <Grid
            className={classes.chatMessageBox}
            item
            container
            direction="column"
            xs
            ref={messageBoxRef}
          >
            {currentLobby?.messages?.map((message) => {
              return (
                <Grid
                  key={message.mid}
                  item
                  container
                  justifyContent={
                    auth?.uid === message.uid ? "flex-end" : "flex-start"
                  }
                >
                  <Grid item xs={6}>
                    <CardContent>
                      <Grid container direction="column" spacing={1}>
                        {auth?.uid === message.uid ? (
                          <Grid item container spacing={2}>
                            <Grid
                              xs
                              container
                              item
                              direction="column"
                              justifyContent="center"
                            >
                              <Grid item container justifyContent="flex-end">
                                <Typography color="primary" variant="caption">
                                  {message.user_name}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Avatar src={MEDIA_STREAM + message.avatar_url} />
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid item container spacing={2} xs>
                            <Grid item>
                              <Avatar src={MEDIA_STREAM + message.avatar_url} />
                            </Grid>
                            <Grid
                              xs
                              container
                              item
                              direction="column"
                              justifyContent="center"
                            >
                              <Grid item>
                                <Typography color="primary" variant="caption">
                                  {message.user_name}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}

                        <Grid item container spacing={2}>
                          <Grid
                            item
                            container
                            xs
                            direction="column"
                            justifyContent="center"
                          >
                            <Grid
                              item
                              container
                              justifyContent={
                                auth?.uid === message.uid
                                  ? "flex-end"
                                  : "flex-start"
                              }
                            >
                              {handleContent(message)}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid item container>
              <Grid item xs>
                <TextField
                  className={classes.chatBox}
                  name="TEXT"
                  type="text"
                  required
                  multiline
                  onChange={handleChange}
                />
              </Grid>
              <Grid item container direction="column" xs={1}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.sendButton}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

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

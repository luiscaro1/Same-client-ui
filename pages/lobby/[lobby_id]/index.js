import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/router";
import { IMAGES } from "../../../constants";
import NavMenu from "../../../components/NavMenu";
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
import {
  joinVoiceLobby,
  leaveVoiceLobby,
  sendAudioString,
} from "../../../services/socketio/actions/voice";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import useStyles from "../../../pageStyles/lobby";
import {
  listenToOnVoiceConnection,
  listenToVoiceLobbyUpdates,
  listenToVoiceData,
} from "../../../services/socketio/listeners/voice";

var m = true;
var uivc = false;

const Lobby = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const auth = useSelector(authSelectors.selectToken);
  const loading = useSelector(authSelectors.selectAuthLoading);
  const currentLobby = useSelector(gameSelectors.selectCurrentLobby);
  const lobby_id = router?.query?.lobby_id;
  const [mute, setMute] = React.useState(true);
  const [message, setMessage] = React.useState({
    content: "",
    type: "TEXT",
  });

  const userInVoiceChat = Object.keys(currentLobby?.voicechat).includes(
    auth?.uid
  );

  React.useEffect(() => {
    if (userInVoiceChat) {
      joinVL();
      uivc = true;
    } else false;
  }, [userInVoiceChat, auth, lobby_id]);

  const messageBoxRef = React.useRef();
  const messageInputRef = React.useRef();

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

  const getCurrentLobbyMembers = () => {
    if (lobby_id) dispatch(gameActions.getMembersInLobby(lobby_id));
  };
  const getUsersInVoiceChat = () => {
    if (lobby_id) {
      dispatch(gameActions.getUsersInVoiceChat(lobby_id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (auth) dispatch(gameActions.sendMessage(message));

    if (messageInputRef.current)
      messageInputRef.current.childNodes[0].children[0].value = "";
  };

  const joinVL = () => {
    if (auth && lobby_id) {
      joinVoiceLobby({ uid: auth?.uid, lid: lobby_id });
      if (lobby_id && auth) sendVoiceData(1000);
    }
  };

  const leaveVL = () => {
    if (auth && lobby_id) leaveVoiceLobby({ uid: auth?.uid, lid: lobby_id });
    uivc = false;
  };

  const sendVoiceData = (time) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      var madiaRecorder = new MediaRecorder(stream);
      madiaRecorder.start();

      var audioChunks = [];

      madiaRecorder.addEventListener("dataavailable", function (event) {
        audioChunks.push(event.data);
      });

      madiaRecorder.addEventListener("stop", function () {
        var audioBlob = new Blob(audioChunks);

        audioChunks = [];

        var fileReader = new FileReader();
        fileReader.readAsDataURL(audioBlob);
        fileReader.onloadend = function () {
          // if (!state.microphone) return;

          var base64String = fileReader.result;

          if (!m && uivc)
            sendAudioString({
              lid: lobby_id,
              userState: { uid: auth?.uid, muted: m },
              data: base64String,
            });
        };

        madiaRecorder.start();

        setTimeout(function () {
          madiaRecorder.stop();
        }, time);
      });

      setTimeout(function () {
        madiaRecorder.stop();
      }, time);
    });

    listenToVoiceData();
  };

  const unmuteMic = () => {
    m = false;
    setMute(false);
  };

  const muteMic = () => {
    m = true;
    setMute(true);
  };

  React.useEffect(() => {
    getCurrentLobby();
    getCurrentLobbyMessages();
    getCurrentLobbyMembers();
    getUsersInVoiceChat();
  }, [lobby_id]);

  React.useEffect(() => {
    listenToOnChatConnection();
    listenToOnVoiceConnection();

    messageBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    listenForMessage((msg) => dispatch(gameActions.receiveMessage(msg)));
  }, []);

  React.useEffect(() => {
    if (lobby_id) {
      listenToVoiceLobbyUpdates(() => getUsersInVoiceChat());
    }
  }, [lobby_id]);

  React.useEffect(() => {
    if (messageBoxRef.current)
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [currentLobby?.messages]);

  if (!auth && !loading) router.push("/login");

  if (currentLobby?.loadingLobby) {
    return (
      <Grid container height="100%" justifyContent="center" alignItems="center">
        <CircularProgress color="primary" />
      </Grid>
    );
  } else
    return (
      <>
        <Grid item container>
          <Grid className={classes.section1} width="100%" item>
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
        <Grid container height="100%" className={classes.lobby}>
          <Grid container item height="100%">
            <Grid item xs={4} maxWidth={400} minWidth={300} height="100%">
              <Card className={classes.lobbyCard}>
                <CardContent className={classes.lobbyCard}>
                  <Grid height="100%" container direction="column">
                    <Grid item>
                      <Typography color="primary">
                        Hosted by {currentLobby?.data?.user_name}
                      </Typography>
                    </Grid>

                    <Grid item container>
                      <Grid item xs className={classes.section}>
                        <Typography color="primary" variant="body2">
                          Voice
                        </Typography>
                      </Grid>

                      <Grid item className={classes.section}>
                        {!Object.keys(currentLobby?.voicechat).includes(
                          auth?.uid
                        ) ? (
                          <Button
                            onClick={joinVL}
                            size="small"
                            variant="contained"
                          >
                            Join
                          </Button>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                      {Object.keys(currentLobby?.voicechat)?.map((uid) => {
                        const p = currentLobby?.members?.[uid];
                        return (
                          <Grid key={uid} item container spacing={2}>
                            <Grid item>
                              <Avatar src={MEDIA_STREAM + p?.avatar_url} />
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
                                  {p?.user_name}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        );
                      })}
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
                        <Grid item>
                          {userInVoiceChat ? (
                            <IconButton
                              onClick={leaveVL}
                              size="small"
                              variant="contained"
                            >
                              <ExitToAppIcon sx={{ color: "red" }} />
                            </IconButton>
                          ) : null}
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
                                  <Grid
                                    item
                                    container
                                    justifyContent="flex-end"
                                  >
                                    <Typography
                                      color="primary"
                                      variant="caption"
                                    >
                                      {message.user_name}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid item>
                                  <Avatar
                                    src={MEDIA_STREAM + message.avatar_url}
                                  />
                                </Grid>
                              </Grid>
                            ) : (
                              <Grid item container spacing={2} xs>
                                <Grid item>
                                  <Avatar
                                    src={MEDIA_STREAM + message.avatar_url}
                                  />
                                </Grid>
                                <Grid
                                  xs
                                  container
                                  item
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <Grid item>
                                    <Typography
                                      color="primary"
                                      variant="caption"
                                    >
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
                <Grid item container direction="row">
                  <Grid item xs={10}>
                    <TextField
                      ref={messageInputRef}
                      className={classes.chatBox}
                      name="TEXT"
                      type="text"
                      required
                      multiline
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={2} item container direction="column">
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

            <Grid item xs={2} height={"100%"} minWidth={200} maxWidth={250}>
              <Card className={classes.members}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Typography
                        className={classes.section}
                        color="primary"
                        variant="body2"
                      >
                        Members
                      </Typography>
                    </Grid>
                    {Object.values(currentLobby?.members || {})?.map(
                      (player) => (
                        <Grid key={player.user_name} item container spacing={2}>
                          <Grid item>
                            <Avatar src={MEDIA_STREAM + player.avatar_url} />
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

                          <Grid
                            xs={2}
                            container
                            item
                            direction="column"
                            justifyContent="center"
                          ></Grid>
                        </Grid>
                      )
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
};

export default Lobby;

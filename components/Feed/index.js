import React from "react";
import { useRouter } from "next/router";

import {
  Grid,
  Typography,
  Modal,
  Button,
  CardContent,
  Card,
  Backdrop,
  Fade,
  Box,
  TextField,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { gameActions } from "../../services/redux/store/actions";
import {
  gameSelectors,
  authSelectors,
} from "../../services/redux/store/selectors";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import useStyles from "./_style";
import { IMAGES, MEDIA_STREAM } from "../../constants";
import {
  listenForFeedPosts,
  listenForNewLobby,
} from "../../services/socketio/listeners/game";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 450,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const Feed = () => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { game_id } = router.query;
  const auth = useSelector(authSelectors.selectToken);
  const currentGame = useSelector(gameSelectors.selectCurrentGame);
  const [values, setValues] = React.useState({
    files: null,
    text: "",
  });

  console.log(values);

  const getFeedPosts = () => {
    if (game_id) dispatch(gameActions.getPostsById(game_id));
  };
  const addFeedPost = async (e) => {
    e.preventDefault();

    if (values.text || values.files)
      await dispatch(gameActions.addFeedPost(values));

    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!auth) router.push("/login");
    else setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setValues({ ...values, text: e.target.value });
  };

  const handleFiles = (e) => {
    if (e.target.files != null || e.target.files[0] != null) {
      const p = [];

      const files = [...e.target.files];

      files.map((file) => {
        p.push(file);
      });

      setValues({
        ...values,
        files: (values.files || []).concat(p),
      });
    }
  };

  React.useEffect(() => {
    getFeedPosts();
  }, [game_id]);

  React.useEffect(() => {
    listenForFeedPosts(getFeedPosts);
  }, []);

  return (
    <span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={addFeedPost}>
            <Box sx={style}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography
                    color="primary"
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Make a post
                  </Typography>
                </Grid>

                <Grid item>
                  <TextField
                    className={classes.description}
                    name="description"
                    type="text"
                    required
                    label="What's on your mind?"
                    multiline
                    rows={12}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item>
                  <Button>
                    Attach
                    <AttachFileIcon />
                    <input
                      className={classes.input}
                      onChange={handleFiles}
                      id="icon-button-file"
                      multiple
                      type="file"
                    />
                  </Button>
                </Grid>

                <Grid item>
                  <Grid item container justifyContent="flex-end" spacing={2}>
                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={handleClose}
                        color="error"
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button type="submit" variant="outlined">
                        Post
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Fade>
      </Modal>

      <Grid spacing={4} container direction="column">
        <Grid container item justifyContent="center">
          <Grid item className={classes.lfgCard}>
            <Button onClick={handleOpen} variant="outlined">
              Create
            </Button>
          </Grid>
        </Grid>
        {currentGame?.posts?.map((post) => {
          console.log(post);
          return (
            <Grid item key={post.pid} container justifyContent="center">
              <Card className={classes.postCard}>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid container item spacing={2}>
                      <Grid item>
                        <Avatar src={MEDIA_STREAM + auth?.avatar_url}></Avatar>
                      </Grid>

                      <Grid
                        item
                        xs
                        container
                        direction="column"
                        justifyContent="center"
                      >
                        <Typography variant="caption">
                          {auth?.user_name}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      xs
                      direction="column"
                      justifyContent="center"
                    >
                      <Typography variant="body2">{post.text}</Typography>
                    </Grid>

                    <Grid
                      item
                      container
                      alignItems="center"
                      justifyContent="center"
                    >
                      {post.attachments?.length > 0 ? (
                        <Grid item className={classes.postImage}>
                          <img
                            style={{ width: "100%" }}
                            src={
                              "http://localhost:5002/stream/" +
                              post?.attachments?.[0]?.filename
                            }
                          />
                        </Grid>
                      ) : null}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </span>
  );
};

export default Feed;

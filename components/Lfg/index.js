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

import { gameActions } from "../../services/redux/store/actions";
import {
  gameSelectors,
  authSelectors,
} from "../../services/redux/store/selectors";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import useStyles from "./_style";
import { IMAGES } from "../../contants";
import { listenForNewLobby } from "../../services/socketio/listeners/game";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const Lfg = () => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { game_id } = router.query;
  const auth = useSelector(authSelectors.selectToken);
  const currentGame = useSelector(gameSelectors.selectCurrentGame);
  const [description, setDescription] = React.useState("");

  const getLfgLobbies = () => {
    if (game_id) dispatch(gameActions.getLfgLobbies(game_id));
  };
  const addLfgLobby = async (e) => {
    e.preventDefault();

    if (description !== "")
      await dispatch(gameActions.addLfgLobby(description));

    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!auth) router.push("/login");
    else setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  React.useEffect(() => {
    getLfgLobbies();
  }, [game_id]);

  React.useEffect(() => {
    listenForNewLobby(getLfgLobbies);
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
          <form onSubmit={addLfgLobby}>
            <Box sx={style}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography
                    color="primary"
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Look For Group
                  </Typography>
                </Grid>

                <Grid item>
                  <TextField
                    className={classes.description}
                    name="description"
                    type="text"
                    required
                    label="What are you looking for?"
                    multiline
                    rows={12}
                    onChange={handleChange}
                  />
                </Grid>

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
            </Box>
          </form>
        </Fade>
      </Modal>

      <Grid spacing={2} container direction="column">
        <Grid container item alignItems="center" spacing={1} xs>
          <Button onClick={handleOpen} variant="outlined">
            Create
          </Button>
        </Grid>
        {currentGame?.lobbies?.map((lobby) => {
          return (
            <Grid key={lobby.lid} item xs>
              <Card>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid container item spacing={2}>
                      <Grid item>
                        <Avatar>P</Avatar>
                      </Grid>

                      <Grid
                        item
                        xs
                        container
                        direction="column"
                        justifyContent="center"
                      >
                        <Typography variant="caption">Username</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      xs
                      direction="column"
                      justifyContent="center"
                    >
                      <Typography variant="body2">
                        {lobby.description}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent="flex-end" marginTop="10px">
                      <Grid item container alignItems="center" xs={1}>
                        <img className={classes.platforms} src={IMAGES.xbox} />
                      </Grid>
                      <Grid item container alignItems="center" xs={1}>
                        <img
                          className={classes.platforms}
                          src={IMAGES.playstation}
                        />
                      </Grid>
                      <Grid item container alignItems="center" xs={1}>
                        <img className={classes.platforms} src={IMAGES.pc} />
                      </Grid>
                      <Grid item xs={1} container alignItems="center">
                        <Button variant="contained">Join</Button>
                      </Grid>
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

export default Lfg;

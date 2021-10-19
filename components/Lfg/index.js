import React from "react";
import { useRouter } from "next/router";

import {
  Grid,
  Typography,
  Modal,
  Button,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import { gameActions } from "../../services/redux/store/actions";
import {
  gameSelectors,
  authSelectors,
} from "../../services/redux/store/selectors";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./_style";

import { listenForNewLobby } from "../../services/socketio/listeners/game";
import LfgContainer from "./LfgContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

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
  const [values, setValues] = React.useState({
    description: "",
    platform: "Any",
    region: null,
    mic: true,
    rank: null,
  });

  const descriptionLengthExceeds = values.description.length > 200;

  const getLfgLobbies = () => {
    if (game_id) dispatch(gameActions.getLfgLobbies(game_id));
  };
  const addLfgLobby = async (e) => {
    e.preventDefault();

    if (values.description !== "" && !descriptionLengthExceeds)
      await dispatch(gameActions.addLfgLobby(values));

    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!auth) router.push("/login");
    else setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
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
                    onChange={handleChange}
                  />
                </Grid>

                {descriptionLengthExceeds ? (
                  <Grid item>
                    <Typography color="error">
                      Description cannot exceed 200 characters{" "}
                    </Typography>
                  </Grid>
                ) : null}

                <Grid item>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Platform
                      </InputLabel>
                      <Select
                        name="platform"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.platform}
                        label="Platform"
                        onChange={handleChange}
                      >
                        <MenuItem value={"xbox"}>xbox</MenuItem>
                        <MenuItem value={"playstation"}>playstation</MenuItem>
                        <MenuItem value={"pc"}>pc</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Mic</InputLabel>
                      <Select
                        name="mic"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.mic}
                        label="Mic"
                        onChange={handleChange}
                      >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Rank
                      </InputLabel>
                      <Select
                        disabled={currentGame?.data?.rank !== null}
                        name="rank"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.rank}
                        label="Rank"
                        onChange={handleChange}
                      >
                        {currentGame?.data?.ranks?.map((rank) => {
                          return (
                            <MenuItem key={rank} value={rank}>
                              {rank}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Region
                      </InputLabel>
                      <Select
                        name="region"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.region}
                        label="Region"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Any"}>Any</MenuItem>
                        <MenuItem value={"NA"}>NA</MenuItem>
                        <MenuItem value={"SA"}>SA</MenuItem>
                        <MenuItem value={"EU"}>EU</MenuItem>
                        <MenuItem value={"ASIA"}>ASIA</MenuItem>
                        <MenuItem value={"AUS"}>AUS</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
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

      <Grid spacing={4} container direction="column">
        <Grid container item justifyContent="center">
          <Grid item className={classes.lfgCard}>
            <Button onClick={handleOpen} variant="outlined">
              Create
            </Button>
          </Grid>
        </Grid>
        {currentGame?.lobbies?.map((lobby) => {
          return <LfgContainer lobby={lobby} key={lobby.lid} />;
        })}
      </Grid>
    </span>
  );
};

export default Lfg;

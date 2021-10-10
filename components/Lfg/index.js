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
} from "@mui/material";

import { gameActions } from "../../services/redux/store/actions";
import { gameSelectors } from "../../services/redux/store/selectors";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import useStyles from "./_style";
import { IMAGES } from "../../contants";

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
  const currentGame = useSelector(gameSelectors.selectCurrentGame);

  const getLfgLobbies = () => {
    if (game_id) dispatch(gameActions.getLfgLobbies(game_id));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    getLfgLobbies();
  }, [game_id]);

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
          <Box sx={style}>
            <Typography color="secondary" id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography color="secondary" id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Grid spacing={2} container direction="column">
        <Grid container item alignItems="center" spacing={1} xs>
          <Button onClick={handleOpen} variant="outlined">Create</Button>
        </Grid>
        {currentGame?.lobbies?.map((lobby) => {
          return (
            <Grid item xs>
              <Card key={lobby.lid}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar>P</Avatar>
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
                    <Grid item xs={1} container alignItems='center'>
                      <Button variant="contained">Join</Button>
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
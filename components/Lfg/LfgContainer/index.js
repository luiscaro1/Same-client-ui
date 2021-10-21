import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import useStyles from "./_style";
import { useDispatch } from "react-redux";
import { gameActions } from "../../../services/redux/store/actions";
import { MEDIA_STREAM, IMAGES } from "../../../constants";
import PropTypes from "prop-types";

const LfgContainer = ({ lobby, disabled }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const joinLobby = async (lid) => {
    await dispatch(gameActions.joinLobby(lid));
    dispatch(gameActions.setCurrentLobby(lobby));
    router.push("/lobby/" + lid);
  };
  const handlePlatform = (platform) => {
    switch (platform) {
      case "playstation": {
        return IMAGES.playstation;
      }
      case "xbox": {
        return IMAGES.xbox;
      }
      default:
        return IMAGES.pc;
    }
  };
  return (
    <Grid item key={lobby.lid} container justifyContent="center">
      <Card className={classes.lfgCard}>
        <CardContent>
          <Grid container direction="column" spacing={2}>
            <Grid container item spacing={2}>
              <Grid item>
                <Avatar src={MEDIA_STREAM + lobby.avatar_url} />
              </Grid>

              <Grid
                item
                xs
                container
                direction="column"
                justifyContent="center"
              >
                <Typography variant="caption">{lobby.user_name}</Typography>
              </Grid>

              {disabled ? null : (
                <Grid item>
                  <Button onClick={() => joinLobby(lobby.lid)}>Join</Button>
                </Grid>
              )}
            </Grid>

            <Grid item container xs direction="column" justifyContent="center">
              <Typography variant="body2">{lobby.description}</Typography>
            </Grid>
            <Grid container marginTop="10px" direction="row" spacing={4}>
              <Grid
                xs={2}
                item
                container
                alignItems="center"
                justifyContent="center"
              >
                <Typography color="primary" variant="caption">
                  Region: {lobby.region}
                </Typography>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                xs={10}
                justifyContent="flex-end"
              >
                <img
                  className={classes.platforms}
                  src={handlePlatform(lobby.platform)}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );

  LfgContainer.propTypes = {
    lobby: PropTypes.instanceOf(Object).isRequired,
    disabled: PropTypes.bool.isRequired,
  };
};

export default LfgContainer;

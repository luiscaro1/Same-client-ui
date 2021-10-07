import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import useStyles from "./_style";


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Same</h1>
      <h1 className={classes.about}>
        <p> A space for gamers </p>
        <p>Look for friends to game on</p>
      </h1>
      <p>
        Welcome to Same, a web application where you will be able to look for
        other players and form groups to play on your preferred game. Same
        provides users with the tools to connect with others who like the same
        games as you do and with coaches that can share their knowledge of the
        game and make one improve on the game. Chat with other players via text
        and voice chat. Share special moment of a game with one another and have
        an opportunity to interact with the community of that game.
      </p>
      <div className={classes.horse}>
        <img src={'horse.png'} />
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.card_title}
          >
            Find games
          </Typography>
        </CardContent>
        <CardMedia>
          {/* className={classes.card_media}
               image={buscar image} */}
        </CardMedia>
      </Card>
    </div>
  );
}

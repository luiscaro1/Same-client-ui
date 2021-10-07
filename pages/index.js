import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image';
import useStyles from "./_style";


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline>
      <Typography className={classes.title}>Same</Typography>
      <div className={classes.horse}>
        <Image src={'/horse.png'} width={178} height={77}/>
      </div>
      <Typography className={classes.about}>
        <p> A space for gamers </p>
        <p>Look for friends to game on</p>
        <p>
        Welcome to Same, a web application where you will be able to look for
        other players and form groups to play on your preferred game. Same
        provides users with the tools to connect with others who like the same
        games as you do and with coaches that can share their knowledge of the
        game and make one improve on the game. Chat with other players via text
        and voice chat. Share special moment of a game with one another and have
        an opportunity to interact with the community of that game.
      </p>
      </Typography>
      
      <Card sx={{maxWidth:345}} className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.card_title}
          >
            Find games
          </Typography>

        <CardMedia component="img" height="200" image="/gamespage.png">
        </CardMedia>
        </CardContent>
      </Card>

      <Card sx={{maxWidth:345}} className={classes.card2}>
      <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.card_title}
          > Connect with others
          </Typography>
          <CardMedia component="img" height="200" image="/individualchat.png">
        </CardMedia>
        </CardContent>
      </Card>
      </CssBaseline>
    </div>
  );
}

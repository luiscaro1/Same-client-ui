import React from "react";
import Card from '@material-ui/Card';
import CardContent from '@material-ui/CardContent';
import CardMedia from '@material-ui/CardMedia';
import Typography from '@material-ui/Typography';
import useStyles from "./_style";


export default function Home() {
  const classes = useStyles();

  return <div className={classes.root}>
  <h1 className={classes.title}>
          Same
         </h1>
         <h1 className={classes.about}>
           <p> A space for gamers </p>
          <p>Look for friends to game on</p>
        </h1>
         <p>Welcome to Same, a web application where you will be able to look for other players and form groups to play on your preferred game. 
             Same provides users with the tools to connect with others who like the same games as you do and with coaches that can share 
             their knowledge of the game and make one improve on the game. Chat with other players via text and voice chat. 
             Share special moment of a game with one another and have an opportunity to interact with the community of that game.</p>
          <div className={classes.horse}>
            {/* <img className="horse_image"
            src={`${process.env.PUBLIC_URL}/horse.png`}
            width="100"
            height="100"
            >
            </img> */}
          </div>
          <Card sx={{maxWidth:345}} className={classes.card}>
            <CardContent>
                 <Typography gutterBottom variant="h5" component="div" className={classes.card_title}>
                    Find games
                 </Typography>
             
             <CardMedia
              component="img"
              height="140"
              image="public/horse.png">
              
               {/* className={classes.card_media}
               image={buscar image} */}
             </CardMedia>
             </CardContent>
        </Card>

  </div>;
}

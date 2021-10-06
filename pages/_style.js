import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background:"black",
    textAlign:"center",
    color:"white"
  },
  title:{
      background:"black",
      alignItems:"center",
  },
  about:{
      alignItems:"center",
      position:"absolute",
  },
  horse:{
    background:"none"

  },

  card:{
      marginTop:200,
      height:400,
      width:440,
      background:'#A0918D',

  },
  card_media:{
      height:330,
      width:330,
      position:"absolute",
      textAlign:"center",
  },
  card_title:{
      fontWeight:'bold'
  },

});


export default useStyles

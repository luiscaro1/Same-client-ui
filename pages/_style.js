import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useStyles = makeStyles({
  root: {
    backgroundColor:"black",
    textAlign:"center",
    color:"white",
    fontWeight:'bold'
  },
  title:{
      alignItems:"center",
      fontSize:'3rem'
  },
  about:{
      backgroundColor:"#000000",
      fontSize:'1rem',
      alignItems:"center",
      position:"absolute",
  },
  horse:{
    backgroundColor:"#00000",
    marginLeft:400
  },
  horse2:{
    backgroundColor:"#00000",
    marginLeft:700
  },

  card:{
      // marginTop:200,
      // height:400,
      // width:440,
      background:'#000000',
      marginTop:300

  },
  card2:{
    // marginTop:200,
    // height:400,
    // width:440,
    background:'#000000',
    marginBottom:300,
    marginLeft:400
},
  card_media:{
      height:330,
      width:330,
      position:"absolute",
      textAlign:"center",
  },
  card_title:{
      color:"white",
      fontWeight:'bold'
  },

});


export default useStyles

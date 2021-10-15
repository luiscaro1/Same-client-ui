import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { COLORS } from "../../contants";

const useStyles = makeStyles({
  root: {
    backgroundColor:"white",
    color: "black",
    fontWeight: "bold",
    maxWidth:"100%",
    height:"100vh"
  },

  logobar:{
    backgroundColor:COLORS.lightGreen,
    width:"100%"
  },
  
  logo: {
    width: 100,
  },
  blackbox:{
    alignItems:"left",
    width:400,
    maxHeight: 700
  },
  leftbox:{
    backgroundColor:"black",
    fontWeight:"bold",
  },
  usercard:{
    backgroundColor:"black",
    color:"white",

  },
  userprofile:{
    width:250,
    height:250,
    marginLeft:48,
    marginTop:10,
    position:"absolute",
  },
  usernamegrid:{
    marginTop:280,
    position:"absolute",
    alignItems:"center",
    textAlign:"center",
  },
  usernametxt:{
    fontWeight:"bold",
    fontSize:"2rem",
    marginLeft:50,  
  },

  addFriendButton:{
    color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },
    
    width: 5,
    height: 35,
    // width: 5,
    // height: 26,
    marginLeft:20
    
    // marginBottom: 150,
  },

  biobox:{
    margin:"0px 0px 0px 30px",
    
  },
  bio:{
    margin:"10px 0px 5px 0px",
    color:COLORS.lightGreen,
    
  },
  friendsbox:{
    margin:"10px 0px 10px 30px",
  },
  friends:{
    margin:"10px 0px 5px 0px",
    color:COLORS.lightGreen,
    
  },
  platformbox:{
    margin:"0px 0px 20px 30px",
  },
  platform:{
    // margin:"0px 0px 10px 30px",
    color:COLORS.lightGreen,
  },
  messageButton:{
    color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },
    margin:"100px 0px 0px 1300px",
  }, 
  message:{
    fontWeight:"bold"
  },

  inforight:{ // esto es lo que esta causando lo de los margenes I think
    alignItems:"center",
    position:"absolute",
    textAlign:"center"
  },
   
  threepoints:{
    margin:"105px 0px 0px 20px"
  },
  info:{
    margin:"350px 0px 0px 0px"
},

buttongrid:{
  alignItems:"right",
},

tabgrid:{
  marginRight: 50,
},

tabs:{
  marginRight: 370,
  "& .Mui-selected": {
    color: "black",
    fontFamily:"Roboto",
    fontSize:"1rem"
   }
},

ExptabGrid:{
  height: 500,
  width:600,
 },

 PostGrid:{
   backgroundColor: COLORS.darkGrey,
  height: 500,
  width:600,
 },

 ExptabGridScroll:{
  flexGrow: 1,
  overflow: "auto",
 },

 postCard:{
   marginLeft: 30,
   marginTop: 5,
   marginBottom:5,
  backgroundColor: "white",
  //maxHeight: 500,
  maxWidth: 500,
  content: "center",
 },

 gameAvatars:{
  height: 80,
  width:80,
  margin: "10px 10px 10px 10px",

 },
 postAvatar:{
  height: 100,
  width: 100,
 },

 cardMediaPost:{
  //maxHeight: 350,
  maxWidth: 300,
  marginLeft: 100,
  marginTop: 10,
 },
 cardPostComment:{
   color: COLORS.darkGrey,
   fontSize: "1rem"
 },
 cardPostHeader:{
   color:"black",
 },


});

export default useStyles;
import { makeStyles } from "@mui/styles";
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
    width:"25%",
    height: "100%",
  },
  leftbox:{
    backgroundColor:"black",
    fontWeight:"bold",
    height: "100%",
    paddingTop: "20%"
  },
  usercard:{
    backgroundColor:"black",
    color:"white",

  },
  userprofile:{
    width: "300px",
    height: "300px",
    marginLeft: "5%",
    marginTop: 10,
    position:"absolute",
  },
  usernamegrid:{
    position:"absolute",
    alignItems: "center",
    textAlign: "center",
    marginTop:"400px"
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
    
    width: "5%",
    height: 35,
    marginLeft:20
  },

  biobox:{
    margin:"100px 0px 0px 10%",
    
  },
  bio:{
    margin:"10px 0px 10px 0px",
    color:COLORS.lightGreen,
    
  },
  friendsbox:{
    margin:"10px 0px 10px 10%",
  },
  friends:{
    margin:"10px 0px 10px 0px",
    color:COLORS.lightGreen,
    
  },
  platformbox:{
    margin:"0px 0px 20px 10%",
  },
  platform:{
    color:COLORS.lightGreen,
  },
  messageButton:{
    color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },
    margin:"300px 0px 0px 20%",
  }, 
  message:{
    fontWeight:"bold"
  },

  inforight:{ // esto es lo que esta causando lo de los margenes I think

    position:"absolute",
    width: "60%",
    margin: "0 0 0 30%"
  },
   
  threepoints:{
    margin:"305px 0px 0px 5%"
  },
  info:{
    margin:"350px 0px 0px 0px"
},

buttongrid:{
  alignItems:"right",
  margin: "0 0 0 0"
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
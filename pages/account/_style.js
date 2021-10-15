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
  //everything on the left side of the screen
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
    marginLeft:20
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

  //everything on the right side of the screen
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
    margin:"0px 0px 0px 1100px"
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
  margin:"200px 0px 0px 420px",
  // marginRight: 370,
 
  "& .Mui-selected": {
    color: "black",
    fontFamily:"Roboto",
    fontSize:"1rem"
   }

},

 overviewgrid:{
   fontWeight:"bold",
   alignItems:"left",
   justifyContent:"flex-left",
   height:400,
   width:500

 },

 textgrid:{
  margin:"160px 0px 0px 0px",
  alignItems:"left",
  justifyContent:"left"
 },

 text:{
   fontWeight:"bold",
   fontSize:"1.3rem",
   justifyContent:"left",
   alignItems:"left",
   margin:"0px 75px 0px 0px"
 },
 text2:{
  fontWeight:"bold",
  fontSize:"1.3rem",
  margin:"30px 0px 0px 0px"
 },
 block:{
  fontWeight:"bold",
  fontSize:"1.3rem",
  margin:"30px 95px 0px 0px"
 },

 delete:{
  fontWeight:"bold",
  fontSize:"1.3rem",
  margin:"30px 50px 0px 0px",
  color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },

 },

 emailtext:{
  margin:"30px 70px 0px 0px",
 },
 biotext:{
  margin:"30px 70px 0px 0px",
  
 },
 platformtext:{
   alignItems:"left",
  margin:"30px 135px 10px 67.5px",
 },

 saveButton:{
  margin:"60px 50px 40px 0px",
  color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },

 },

 notificationgrid:{
  margin:"160px 0px 0px 0px",
  alignItems:"left",
  justifyContent:"left",
 },

 mute:{
  fontWeight:"bold",
  fontSize:"1.3rem",
  justifyContent:"left",
  alignItems:"left",
  margin:"20px 75px 0px 0px"
 },

 slidingButton:{
    height:20,
    width:40,
    color:COLORS.darkGreen,
    margin:"0px 0px 160px 30px"
 },

});

export default useStyles;
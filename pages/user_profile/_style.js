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
    height:655,
  },
  leftbox:{
    backgroundColor:"black",
    fontWeight:"bold",
    width:400,
    height:655
  },
  usercard:{
    backgroundColor:"black",
    color:"white",
    width:400,
    height:655

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
    margin:"0px 0px 20px 90px",

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },
    margin:"100px 0px 0px 1100px",
  }, 
  message:{
    fontWeight:"bold"
  },

  inforight:{
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

},

tabs:{
  "& .Mui-selected": {
    color: "black",
    fontFamily:"Roboto",
    fontSize:"1rem"
   }
},


  // card: {
  //   aligncontent: "center",
  //   backgroundColor: COLORS.darkGrey,
  //   color: COLORS.lightGreen,
  //   height: 300,
  //   justifyContent: "center",
  // },
  // card2:{
  //   backgroundColor: COLORS.lightGreen,
  //   color: COLORS.darkGrey,
  //   height: 200,
  //   width:100,
  // },
  // circle:{
  //   height:150,
  //   width: 150,
  // },
  // content:{
  //   backgroundcolor: COLORS.lightGreen,
  //   height: 300,
  //   width: 300,
  // },

  // square1:{
  //   variant:"h1",
  //   color: COLORS.lightGreen
  // },

  // square2:{
  //   variant:"body2",
  //   color: COLORS.darkGrey,
  //   textAlign: "left",
  // },
  // topGrid:{
  //   backgroundColor: "grey"
  // },
  // middleGrid:{
  //   backgroundColor: COLORS.darkGrey,
  //   width: 300,
  //   alignContent: "left",
  // },
  // bottomGrid:{
  //   backgroundColor: COLORS.lightGreen,
  //   width: 300,
  // },
  // todoDelMedio:{
  //   marginLeft: 600,
  //   marginRight:500,
  // },
  // typo1:{
  //   marginLeft:30,
  // },

});

export default useStyles;
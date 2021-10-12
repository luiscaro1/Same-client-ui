import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { COLORS } from "../../contants";

const useStyles = makeStyles({
  root: {
    backgroundColor:"white",
    color: "black",
    fontWeight: "bold",
  },

  logobar:{
    backgroundColor:COLORS.lightGreen,
    width:"118%"
  },
  
  logo: {
    width: 100,
  },
  blackbox:{
    backgroundColor:"black",
    alignItems:"left",
    width:400,
    height:800

  },
  leftbox:{
    fontWeight:"bold",
    width:400,
    height:800
  },
  usercard:{
    backgroundColor:"black",
    color:"white",
    width:400,
    height:500

  },
  whitebox:{
    backgroundColor:"white",
    marginBottom:10,
  },
  rightbox:{
    backgroundColor:"white",
    width:"100%"
    
  },
  userprofile:{
    width:250,
    height:250,
    marginLeft:48,
    marginTop:20,
    position:"absolute",
    

  },
  usernamegrid:{
    marginTop:300,
    position:"absolute",
    alignItems:"center",
    textAlign:"center"

  },
  usernametxt:{
    fontWeight:"bold",
    fontSize:"2rem",
    marginLeft:50
    
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
    margin:"410px 0px 0px 30px"
  },
  bio:{
    margin:"10px 0px 30px 0px",
    color:COLORS.lightGreen
  },
  friendsbox:{
    margin:"0px 0px 30px 30px",

  },
  friends:{
    margin:"0px 0px 30px 30px",
    color:COLORS.lightGreen,
  },

  platformbox:{
    margin:"0px 0px 20px 30px",

  },
  platform:{
    margin:"0px 0px 20px 30px",
    color:COLORS.lightGreen,
  },
  messageButton:{
    color: "black",
    backgroundColor: COLORS.lightGreen,
    margin:"0px 0px 20px 90px",

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },
    margin:"57px 0px 0px 660px",
    

  }, 
  message:{
    fontWeight:"bold"

  },

  buttonand3points:{
    alignItems:"center",
    position:"absolute",
    textAlign:"center"
  },
   
  threepoints:{
    margin:"57px 0px 0px 20px"
    
   
    
  
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
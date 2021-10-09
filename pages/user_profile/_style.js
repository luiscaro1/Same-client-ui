import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { COLORS } from "../../contants";

const useStyles = makeStyles({
  root: {
    aligncontent: "center",
    backgroundColor: COLORS.darkGrey,
    color: "black",
    fontWeight: "bold",
  },
  
  logo: {
    width: 100,
  },

  addFriendButton:{
    color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },

    width: 100,
    height: 50,
    marginTop: 50,
    // marginBottom: 150,
  },

  card: {
    aligncontent: "center",
    backgroundColor: COLORS.lightGrey,
    
    height: 300,
    justifyContent: "center",
  },
  card2:{
    backgroundColor: COLORS.lightGreen,
    color: COLORS.darkGrey,
    height: 200,
    width:100,
  },
  circle:{
    height:150,
    width: 150,
  },
  content:{
    backgroundcolor: COLORS.lightGreen,
    height: 300,
     width: 300,
  },

  square1:{
    variant:"h1",
    color: COLORS.lightGreen
  },

  square2:{
    variant:"body2",
    color: COLORS.darkGrey,
    backgroundColor: COLORS.lightGreen,
    height: 150,
    textAlign: "left",
  },
  topGrid:{
    backgroundColor: "grey"
  },
  middleGrid:{
    backgroundColor: COLORS.darkGrey,
    width: 350,
    alignContent: "left",
  },
  bottomGrid:{
    backgroundColor: COLORS.lightGrey,
    width: 350,
  },
  todoDelMedio:{
     //marginLeft: 200,
     backgroundColor: COLORS.darkGrey,
    // marginRight:500,
  },
  typo1:{
    marginLeft:30,
    fontWeight:"bold",
    fontSize: "2rem"
  },
  leftSideHorses:{
    width: 580,
    height: 600,
  },
  rightSideHorses:{
    marginTop: 20,
    width: 580,
    height: 600,
  },
  wholeContainer:{
    //alignItems: "center",
  }
});

export default useStyles;
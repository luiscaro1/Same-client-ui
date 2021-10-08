import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { COLORS } from "../../contants";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    aligncontent: "center",
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
    backgroundColor: COLORS.darkGrey,
    color: COLORS.lightGreen,
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
    textAlign: "left",
  },
  topGrid:{
    backgroundColor: "grey"
  },
  middleGrid:{
    backgroundColor: COLORS.darkGrey,
    width: 300,
    alignContent: "left",
  },
  bottomGrid:{
    backgroundColor: COLORS.lightGreen,
    width: 300,
  },
  todoDelMedio:{
    marginLeft: 600,
    marginRight:500,
  },
  typo1:{
    marginLeft:30,
  },

});

export default useStyles;
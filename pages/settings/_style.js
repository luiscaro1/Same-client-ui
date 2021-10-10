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
    width:"100%"
  },
  
  blackbox:{
    backgroundColor:"black",
    alignItems:"left",
    width:400,
    height:800

  },

});

export default useStyles;
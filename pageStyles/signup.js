import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

const useStyles = makeStyles((theme) => ({

  root:{
    flexWrap:'nowrap'
  },
  formColumn: {
    backgroundColor: COLORS.lightGrey,
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
  },
  logo: {
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 10,
    width: 100,
  },

  formItem: {
    margin: "10px 0px 10px 0px",
   
  },
  // formBox:{
    
  //   [theme.breakpoints.down("md")]: {
  //     margin: "0 50% 0 auto",
     
  //   },
  // },

  // card:{
  //   [theme.breakpoints.down("md")]: {
  //     margin: "0 20% 0 20%",
  //     width:"100%"
  //   },
     
  // },

  loginBackground: {
    marginTop: 20,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display:"none"
      
      
    },
  
  },
  imageBackground: {
    backgroundColor: COLORS.darkGrey,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  appbar: {
    width: "100%",
    backgroundColor: "black",
  },
  actionButton: {
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },

    width: 200,
    height: 50,
    margin: 14,
    marginTop: 18,
  },
  targetMessage: {
    color: "white",
    margin: "0px 20px 0px 20px",
  },
}));

export default useStyles;

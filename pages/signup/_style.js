import { makeStyles } from "@mui/styles";
import { COLORS } from "../../contants";

const useStyles = makeStyles({
  formColumn: {
    backgroundColor:COLORS.lightGrey,
  },
  logo: {
    marginTop:30,
    marginLeft:30,
    marginBottom:10,
    width: 100,
  },
  formItem: {
    // margin: "100px 0px 10px 0px",
    marginTop:100,
    marginLeft:30

  },
  formItem2: {
    // margin: "20px 0px 30px 0px",
    marginTop:20,
    marginLeft:30,
  },
 
  loginBackground: {
    marginTop:20,
    width: "100%",
  },
  imageBackground: {
    backgroundColor: COLORS.darkGrey,
  },
  appbar: {
    width: "100%",
    backgroundColor:COLORS.normalGrey,
  },
  actionButton: {
    backgroundColor: COLORS.normalGrey,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },

    width: 200,
    height: 50,
    margin: 15
  },
});

export default useStyles;

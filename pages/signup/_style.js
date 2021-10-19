import { makeStyles } from "@mui/styles";
import { COLORS } from "../../constants";

const useStyles = makeStyles({
  formColumn: {
    backgroundColor: COLORS.lightGrey,
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

  loginBackground: {
    marginTop: 20,
    width: "100%",
  },
  imageBackground: {
    backgroundColor: COLORS.darkGrey,
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
});

export default useStyles;

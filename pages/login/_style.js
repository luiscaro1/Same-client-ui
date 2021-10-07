import { makeStyles } from "@mui/styles";
import { COLORS } from "../../contants";

const useStyles = makeStyles({
  formColumn: {
    backgroundColor: "white",
  },
  formItem: {
    margin: "10px 0px 10px 0px",
  },
  loginBackground: {
    width: "100%",
  },
  imageBackground: {
    backgroundColor: COLORS.darkGrey,
  },
});

export default useStyles;

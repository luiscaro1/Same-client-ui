import { makeStyles } from "@mui/styles";
import { COLORS } from "../../constants";

const useStyles = makeStyles({
  actionButtons: {
    marginTop: 20,
  },
  platforms: {
    width: 50,
  },
  description: {
    width: "100%",
    height: "100%",
  },
  lfgCard: {
    maxWidth: 800,
    width: "100%",
  },
  input: {
    opacity: 0,
    position: "absolute",
    cursor: "pointer",
    width: 95,
    height: 36,
  },
  postCard: {
    maxWidth: 800,
    width: "100%",
  },
  postImage: {
    border: "1px solid",
    borderColor: COLORS.lightestGray,
  },
});

export default useStyles;

import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

const useStyles = makeStyles({
  lobby: {
    backgroundColor: COLORS.lightGrey,
  },
  section: {
    paddingBottom: 10,
    borderBottom: "3px solid grey",
  },
  lobbyCard: {
    height: "100%",
  },
  chatBox: {
    width: "100%",
  },
  chatMessageBox: {
    flexWrap: "nowrap",
    overflow: "scroll",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  sendButton: {
    borderRadius: "0 10px 10px 0px",
    height: "100%",
    maxHeight: 55,
  },
  chatImage: {
    maxWidth: 600,
    width: "100%",
  },

  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  members: {
    height: "100%",
  },
});

export default useStyles;

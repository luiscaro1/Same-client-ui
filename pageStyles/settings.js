import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
  },
  section: {
    margin: "20px 0px 40px 0px",
  },
  settingsContent: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  info: {
    maxWidth: 400,
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
  },
  card: {
    width: "100%",
    height: "100vh",
  },
  profilePic: {
    border: "3px solid white",
    // width: "100%",
    // height: "100%",
    width: 250,
    height: 250,
  },
  alignText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default useStyles;

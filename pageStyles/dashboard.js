import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    width: 100,
    flex:1
  },
  section: {
    margin: "20px 0px 40px 0px",
  },
  bar:{
    marginLeft:'auto'
  },

  info: {
    maxWidth: 400,
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
  
});

export default useStyles;

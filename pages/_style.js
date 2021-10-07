import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { grey } from "@mui/material/colors";
import { COLORS } from "../contants";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 100,
  },
  sampleImages: {
    width: "100%",
    maxWidth: 300,
  },

  actionButton: {
    color: "black",
    backgroundColor: COLORS.lightGreen,

    "&:hover": {
      backgroundColor: COLORS.darkGreen,
    },

    width: 200,
    height: 50,
    margin: 10,
  },
  icons: {
    height: "100%",
  },
  featuresGrid: {
    marginTop: 20,
    marginBottom: 40,
  },
  featureTitle: {
    marginLeft: 10,
  },
  features: {
    marginTop: 20,
    marginLeft: "5%",
  },
  feature: {
    marginTop: 20,
    marginBottom: 20,
  },
  description: {
    textAlign: "left",
  },

  card: {
    backgroundColor: grey[900],
    color: "white",
  },
  section: {
    margin: "20px 0px 40px 0px",
  },
});

export default useStyles;

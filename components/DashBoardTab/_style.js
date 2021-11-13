import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& > div > div": {
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
  },
}));

export default useStyles;

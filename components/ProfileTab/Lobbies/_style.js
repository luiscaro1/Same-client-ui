import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  lfgCard: {
    maxWidth: 800,
    width: "100%",
  },
  lfgList: {
    maxHeight: 1000,
    flexWrap: "nowrap",
    overflow: "scroll",
    overflowX: "hidden",
  },
});

export default useStyles;

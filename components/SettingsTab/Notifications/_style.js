import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  notiCard: {
    maxWidth: 800,
    width: "100%",
  },
  notiList: {
    maxHeight: 1000,
    flexWrap: "nowrap",
    overflow: "scroll",
    overflowX: "hidden",
    
  },
  slidingButton:{
    height: 20,
    width: 40,
  },

  save:{
    height:50,
    width:100,
    margin:"10% 0% 0% 30%"
  },
});

export default useStyles;
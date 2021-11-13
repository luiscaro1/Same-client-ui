import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  overviewCard: {
    maxWidth: 800,
    width: "100%",
  },
  overviewList: {
    maxHeight: 1000,
    flexWrap: "nowrap",
    overflow: "scroll",
    overflowX: "hidden",
    marginTop:30
  },
  delete:{
      height:50,
      width:100,
      margin:"40% 0% 0% 30%",
      // alignItems:"center",
      position:"center",
      backgroundColor:"red",
        "&:hover": {
            backgroundColor:"#b2102f"
            ,
        },

  },
});

export default useStyles;
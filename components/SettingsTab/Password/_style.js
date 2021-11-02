import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  passwordCard: {
    maxWidth: 800,
    width: "100%",
  },
  passwordList: {
    maxHeight: 1000,
    flexWrap: "nowrap",
    overflow: "scroll",
    overflowX: "hidden",
    
  },
  textgrid:{
      margin:"5% 0% 0% 0%",
      justifyContent:"left"

  },

  box:{
      height:"50%",
      width:200,
      margin:10
  },
  
  save:{
    height:50,
    width:100,
    margin:"10% 0% 0% 30%"
  },
});

export default useStyles;
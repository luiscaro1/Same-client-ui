import { makeStyles } from "@mui/styles";
import {COLORS} from "../../constants";

const useStyles = makeStyles({
    button:{
        "&:hover": {
            backgroundColor: COLORS.darkGreen,
        },
    marginLeft:'auto'
    },
    
  });
  
  export default useStyles;
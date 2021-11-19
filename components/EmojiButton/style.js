import { makeStyles } from "@mui/styles";
import {COLORS} from "../../constants";

const useStyles = makeStyles({
    button:{
        "&:hover": {
            backgroundColor: COLORS.lightGreen,
        },
    },
    
  });
  
  export default useStyles;

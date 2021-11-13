import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

const useStyles = makeStyles((theme) => ({

    formColumn: {
        backgroundColor: COLORS.lightGrey,
        margin: "10% 10% 0 10%",
        width: "70%",
        [theme.breakpoints.down("sm")]: {
            flexGrow:1,
            fontSize:8,
           
          },
    },

    reportForm: {
        margin: "10vh 0 10vh 0"
    },
    formItem: {
        margin: "50px 0px 10px 0px",
    },

    imageBackground: {
        alignSelf: "center",
    },

    logo: {
        width: 150
    },

    submitButton: {
        backgroundColor: COLORS.lightGreen,

        "&:hover": {
            backgroundColor: COLORS.darkGreen,
        },

        width: 175,
        height: 50,
    },

    cancelButton: {
        marginRight: 30
    },


}));

export default useStyles;
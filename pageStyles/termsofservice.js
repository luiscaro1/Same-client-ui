import { makeStyles } from "@mui/styles";
import { textAlign } from "@mui/system";
import { COLORS } from "../constants";

const useStyles = makeStyles({
    formColumn: {

        backgroundColor: COLORS.lightGrey,
        margin: "0 auto 0 auto",
        width: "40%"
    },
    termsInfo: {
        color: "white",
        margin: "50px auto 50px auto",
        textAlign: "center",
        width: "70%"
    },

    termsForm: {
        margin: "5vh 0 10vh 0"
    },

    termsTitle: {
        marginTop: "5vh",
        fontWeight: "bold"
    },

    imageBackground: {
        alignSelf: "center",
    },

    logo: {
        width: 150
    },

    formItem: {
        margin: "10px 0px 10px 0px",
    },

    actionButton: {
        backgroundColor: COLORS.lightGreen,

        "&:hover": {
            backgroundColor: COLORS.darkGreen,
        },

        width: 175,
        height: 50,
    },
});

export default useStyles;

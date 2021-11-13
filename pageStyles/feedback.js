import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

const useStyles = makeStyles((theme) => ({
    formColumn: {

        backgroundColor: COLORS.lightGrey,
        margin: "0 auto 0 auto",
        width: "40%",
        [theme.breakpoints.down("md")]: {
           flexGrow: 1
          },
    },

    feedbackForm: {
        margin: "5vh 0 10vh 0"
    },

    feedbackTitle: {
        margin: "50px auto 0 auto",
        textAlign: "center",
        marginTop: "5vh",
        color: COLORS.lightGreen,
        fontSize: "24pt",
        [theme.breakpoints.down("md")]: {
            fontSize: "20pt"
           },
    },

    imageBackground: {
        alignSelf: "center",
    },

    logo: {
        width: 150
    },

    formItem: {
        margin: "50px 0px 10px 0px",
    },

    ratingInfo: {
        color: "white",
        margin: "0 auto 2% auto",
        textAlign: "center",
        width: "70%"
    },

    ratingTitle: {
        color: "white",
        margin: "0px auto 10px auto",
        textAlign: "center",
        fontSize: "12pt"
    },

    feedbackRating: {
        fontSize: 60,
        marginBottom: 50,
        [theme.breakpoints.down("md")]: {
            fontSize: 40,
            marginBottom: 20
           },
    },

    submitButton: {
        backgroundColor: COLORS.lightGreen,

        "&:hover": {
            backgroundColor: COLORS.darkGreen,
        },

        width: 175,
        height: 50,

        [theme.breakpoints.down("md")]: {
            padding: 5,
            width: 150,
            height: 40
           },
    },

    cancelButton: {
        marginRight: 20,
        [theme.breakpoints.down("md")]: {
            width: 10,
            height: 40
           },
    },

    feedbackEmail: {
        width: "50%",
        marginTop: 60,
    },

    feedbackCategory: {
        width: "50%",
        marginTop: 50
    },

    categoryTitle: {
        color: "white",
        margin: "50px auto 10px auto",
        textAlign: "center",
        fontSize: "16pt"
    },

    feedbackBody: {
        width: "50%",
        margin: "0 auto 20px auto"
    }
}));

export default useStyles;

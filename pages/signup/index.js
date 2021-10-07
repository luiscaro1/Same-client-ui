import * as React from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { colors, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { authActions } from "../../services/redux/store/actions";
//import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from "./_style";
import { Box } from "@mui/system";

// react component
const Signup = () => {
  // applies styling to components
  //const classes = useStyles();

  // function to dispatch events
  const dispatch = useDispatch();

  // hold the values of the text fields
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    uausername: "",
    uapassword: "",
  });

  console.log(values);

  // maps textfield values to state values
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // submits the values
  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch(authActions.login(values));
  };

  return (
    <Box style={{ backgroundColor: "green", height: "98.82vh" }}>
      <Box style={{ backgroundColor: "#6F6868", height: "10vh" }} sx={{ display: "flex", p: 1, alignItems: "center" }} >
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <a href="/" style={{ textDecoration: "none", fontSize: "5vh", fontFamily: "IMPACT", color: "white" }}>
            SAME
          </a>
        </Box>
        <Box sx={{ p: 1 }}>
          <IconButton size="large" sx={{ mr: 2 }}>
            (^3^)
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", p: 1 }} style={{ padding: "0", height: "88vh"}}>
        <Box style={{ backgroundColor: "#36F499"}} sx={{ p:1, flexGrow: 1 }}>
          Photo
        </Box>
        <Box style={{ backgroundColor: "#C4C4C4", width: "25vh", height: "86.8vh", paddign: "0px"}} sx={{ p:1 }}>
          <form onSubmit={handleSumbit} style={{}}>
            <FormGroup style={{ alignItems:"center", marginTop: "15vh"}}>
              <h1 style={{ fontFamily: "IMPACT", fontSize: "2.5vh", color:"#6F6868", marginBottom: "5vh" } }>
                WELCOME GAMERS!
                </h1>
              <TextField
                style={{ width: "15vh", marginBottom: "2vh", textAlign: "center"}}
                className="firstnameInput"
                name="firstname"
                required
                label="Firstname"
                onChange={handleChange}
              />
              <TextField
                style={{ width: "15vh", marginBottom: "2vh"}}
                name="lastname"
                required
                label="Lastname"
                onChange={handleChange}
              />
              <TextField
                style={{ width: "15vh", marginBottom: "2vh"}}
                name="email"
                required
                label="Email"
                onChange={handleChange}
              />
              <TextField
                style={{ width: "15vh", marginBottom: "2vh",}}
                name="uausername"
                required
                label="Username"
                onChange={handleChange}
              />
              <TextField
                style={{ width: "15vh", marginBottom: "5vh"}}
                name="uapassword"
                type="password"
                required
                label="Password"
                onChange={handleChange}
              />
              <Button style={{ width: "7vh", backgroundColor: "#36F499", color: "black" }}variant="contained">
                Register
              </Button>
              <Box style={{ color: "#6F6868", fontFamily: "IMPACT", marginTop: "15vh"}}>
                Copyrights@SameDev2021
                </Box>
            </FormGroup>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;

import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { authActions } from "../../services/redux/store/actions";
import useStyles from "./_style";

// react component
const UserProfile = () => {
  // applies styling to components
  const classes = useStyles();

  // function to dispatch events
  const dispatch = useDispatch();

  // hold the values of the text fields
  const [values, setValues] = React.useState({
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
    <form onSubmit={handleSumbit}>
      <FormGroup>
        <TextField
          name="uausername"
          required
          label="username"
          onChange={handleChange}
        />
        <TextField
          name="uapassword"
          type="password"
          required
          label="password"
          onChange={handleChange}
        />
        <Button type="submit">UserProfile</Button>
      </FormGroup>
    </form>
  );
};

export default UserProfile;


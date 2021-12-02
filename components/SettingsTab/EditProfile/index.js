import React from "react";
import {Grid,Box,Typography,Button,FormGroup, TextField, adaptV4Theme} from "@mui/material";
import useStyles from "./_style";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelectors } from "../../../services/redux/store/selectors";
import { authActions } from "../../../services/redux/store/actions";

const EditProfileTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router=useRouter();
  const auth = useSelector(authSelectors.selectToken);
  
  const updated=useSelector(authSelectors.selectUpdate);
  // const updated_bio=useSelector(authSelectors.selectBio);
  //console.log(auth);

  const [name, setName] = React.useState({
    user_name: "",
    
  });

  const [mail, setMail] = React.useState({
    email: "",
  });

  const [bio,setBio]=React.useState({
    bio:"",
  })

  const handleUsernameChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  };

  const handleBioChange = (e) => {
    setBio({
      ...bio,
      [e.target.name]: e.target.value,
    });
  };

  const submittingUsername=(e)=>{
     e.preventDefault();
     //console.log(name);
     dispatch(authActions.updateUsername(name.user_name));
  };

  const submittingEmail=(e)=>{
    e.preventDefault();
    dispatch(authActions.updateEmail(mail.email));
  };
  const submittingBio=(e)=>{
    e.preventDefault();
    dispatch(authActions.updateBio(bio.bio));
  };

  //submiting changes for edit profile
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(authActions.update(values));
  //   // dispatch(authActions.login(values));
  // };

  // React.useEffect(() => {
  //   if(updated && auth){
  //       router.push("/settings");
  //   }
  // }, [auth,updated]);



  return (
    <Grid className={classes.profileList} spacing={3} container direction="column">
      <Grid item sx={8} className={classes.textgrid} container direction="column">
          <form onSubmit={submittingUsername}>
            <FormGroup>
                    <Grid item direction="row">
                      <TextField
                        label="Username" 
                        name="user_name"
                        variant="outlined" 
                        onChange={handleUsernameChange}
                        className={classes.box}
                        inputProps={{ style: { color: "white" } }}>
                      </TextField>
                      <Button
                        className={classes.save}
                        variant="contained"
                        type="submit">
                          Save
                        </Button>
                    </Grid>
              </FormGroup>
            </form>
          <form onSubmit={submittingEmail}>
            <FormGroup>
            <Grid item direction="row">
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        onChange={handleEmailChange}
                        className={classes.box}    
                        inputProps={{ style: { color: "white" } }}></TextField>
                        <Button
                          className={classes.save}
                          variant="contained"
                          type="submit"
                        >
                          Save
                        </Button>
                    </Grid>
            </FormGroup>
            </form>
            <form onSubmit={submittingBio}>
            <FormGroup>
            <Grid item direction="row">
                    <TextField
                          label="Bio"
                          name="bio"
                          className={classes.biobox}
                          variant="outlined"
                          onChange={handleBioChange}
                          multiline
                          rowsmax={Infinity}
                          inputProps={{ style: { color: "white" } }}></TextField>
                        <Button
                          className={classes.save}
                          variant="contained"
                          type="submit"
                        >
                          Save
                        </Button>
                    </Grid>
            </FormGroup>
            </form>
                    
      </Grid>
       
    </Grid>
  );
};

export default EditProfileTab;
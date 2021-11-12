import React from "react";
import { FormGroup, Grid, Typography,Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import useStyles from "../../pageStyles/feedback2";
import { IMAGES } from "../../constants";
import { useRouter } from "next/router";


const Report = () => {

    const classes = useStyles();
    const router = useRouter();
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    }


    return (
        <Grid height="100vh" container direction="row" className={classes.root} >
            <Grid className={classes.formColumn} item xs={8} >
                <Grid className={classes.reportForm} container direction="column">
                    <Grid className={classes.imageBackground} item>
                        <img className={classes.logo} src={IMAGES.logo} />
                    </Grid>
                    <Grid item >
                        <Typography  color="secondary" variant="h4" marginTop="5%" 
                        justifyContent="center" textAlign="center" >
                            Report a player
                        </Typography>
                    </Grid>
                    <FormGroup>
                        <Grid item>
                            <Typography color="secondary" variant="subtitle1" margin="5%">
                                <br></br>
                                As accurately as possible, please tell us what happened
                                with this player. Choose the options that correspond to the situation.
                                Mark multiple options if needed.
                                <br></br>
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color="primary" variant="body2" 
                            justifyContent="right" marginLeft="10%">
                                <Checkbox/>Stalking
                            </Typography>
                           
                            <Typography variant="body2"
                                color="primary" 
                                justifyContent="right" 
                                marginLeft="10%"
                                ><Checkbox/>Spamming inappropriate or illegal content
                                </Typography>

                            <Typography color="primary" variant="body2" 
                            justifyContent="right"marginLeft="10%" >
                                <Checkbox />Offensive Language 
                            </Typography>

                            <Typography variant="body2"
                                color="primary" 
                                justifyContent="right" 
                                marginLeft="10%"
                                ><Checkbox />Sexual Harassment </Typography>
                            <Typography variant="body2"
                                color="primary" 
                                justifyContent="right" 
                                marginLeft="10%"
                                ><Checkbox />Discrimination (homophobia, racism, etc.) </Typography>
                        
                            <Typography variant="body2"
                                color="primary" 
                                justifyContent="right" 
                                marginLeft="10%"
                                ><Checkbox />Spreading viruses and malicious software</Typography>
                            <Typography variant="body2"
                                color="primary" 
                                justifyContent="right" 
                                marginLeft="10%"
                                ><Checkbox />Violation of IP rights(includes stolen content) </Typography>

                            <Typography variant="body2"
                                color="primary" 
                                justifyContent="right" 
                                marginLeft="10%"
                                ><Checkbox />Pretending to be an admin Same developer</Typography>
                        </Grid>
                
                        <Grid
                            className={classes.formItem}
                            item
                            container
                            justifyContent="center">
                            <Button
                                onClick={() => router.push("/dashboard")}
                                variant="contained"
                                className={classes.cancelButton}>
                                Cancel
                            </Button>

                            {/* Needs to be adjusted to actually submit the form */}
                            <Button
                                onClick={() => router.push("/")}
                                variant="contained"
                                className={classes.submitButton}>
                                Submit Report
                            </Button>
                        </Grid>
                    </FormGroup>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Report;

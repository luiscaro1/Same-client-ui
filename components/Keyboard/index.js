import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Input } from '@mui/material';
import { Grid } from '@mui/material';
import EmojiButton from '../EmojiButton';

class NormalKeyboard extends Component {
  
  state = {
    layoutName: "default",
  }

  onChange = (input) => {
    this.setState({ input });
    console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") this.handleShift();
  }

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  }

  onChangeInput = event => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  }

  render() {
    return (
      <Grid>
        <Grid justifyContent={"center"} container direction ={ "row "}>
          <Input
            value={this.state.input}
            placeholder={" Type Text Here"}
            onChange={this.onChangeInput}
            sx={{width: "90%"}} 
            />

         <EmojiButton />

        </Grid>
        <Grid container>
          <Keyboard
            keyboardRef={k => (this.keyboard = k)}
            layoutName={this.state.layoutName}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress} />
        </Grid>
      </Grid>
    );
  }
}

export default NormalKeyboard;
import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Tabs, Tab } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiKeyboard from '../EmojiKeyboardTest';
import { Grid } from '@mui/material';
import EmojiButton from '../EmojiButton';

class NormalKeyboard extends Component {
  onChange = (input) => {
    console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);
  }

  render() {
    return (

      <Grid>
        <EmojiButton />
        <Keyboard
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
      </Grid>
    );
  }
}

export default NormalKeyboard;
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useStyles from "./style";
import EmojiKeyboard from '../EmojiKeyboardTest';
import { useRouter } from "next/router";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const ITEM_HEIGHT = 100;

export default function EmojiButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes=useStyles();
  const router = useRouter();

  const options = [
    'Emojis',
  ];

  return (
    <div>
      <IconButton className={classes.button}
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <InsertEmoticonIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        
      >
        <MenuItem key={options[0]} selected={options === 'Pyxis'} onClick={handleClose}>
        <EmojiKeyboard /></MenuItem>
      </Menu>
    </div>
  );
}

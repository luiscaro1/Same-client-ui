import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from "./_style";
import { useRouter } from "next/router";
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatIcon from '@mui/icons-material/Chat';
import GamesIcon from '@mui/icons-material/Games';


const NavMenu = () => {

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
        'Games',
        'Lobby',
        'Dashboard',
        'Settings',
        'Feedback',
        'Logout',
      
      ];
  
    return (
      <div>
        <IconButton className={classes.button}
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        <MenuIcon/>
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
        <MenuItem key={options[0]} selected={options === 'Pyxis'} onClick={() => router.push("/games")}>
        <ListItemIcon>
                <GamesIcon fontSize="small" />
          </ListItemIcon>{options[0]}</MenuItem>
        <MenuItem key={options[1]} selected={options === 'Pyxis'} onClick={() => router.push("/lobby")}>
        <ListItemIcon>
                <ChatIcon fontSize="small" />
          </ListItemIcon>{options[1]}</MenuItem>
        <MenuItem key={options[2]} selected={options === 'Pyxis'} onClick={() => router.push("/dashboard")}>
        <ListItemIcon>
                <DashboardIcon fontSize="small" />
          </ListItemIcon>{options[2]}</MenuItem>
        <MenuItem key={options[3]} selected={options === 'Pyxis'}  onClick={() => router.push("/settings")}>
            <ListItemIcon>
                <SettingsIcon fontSize="small" />
          </ListItemIcon>{options[3]}</MenuItem>
        <MenuItem key={options[4]} selected={options === 'Pyxis'}  onClick={() => router.push("/feedback2")}>
        <ListItemIcon>
                <FeedbackIcon fontSize="small" />
          </ListItemIcon>{options[4]}</MenuItem>
        <MenuItem key={options[5]} selected={options === 'Pyxis'}  onClick={handleClose}>
            <ListItemIcon>
                <Logout fontSize="small" />
          </ListItemIcon>{options[5]}</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
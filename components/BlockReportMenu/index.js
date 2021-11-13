import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from "./_style";
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import BlockIcon from '@mui/icons-material/Block';
import ReportIcon from '@mui/icons-material/Report';
import { useRouter } from "next/router";

const ITEM_HEIGHT = 100;

export default function BlockReportMenu() {
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
    'Unfriend',
    'Block',
    'Report',
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
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem key={options[0]} selected={options === 'Pyxis'} onClick={handleClose}>
        <ListItemIcon>
                <PersonRemoveIcon fontSize="small" />
          </ListItemIcon>{options[0]}</MenuItem>
        <MenuItem key={options[1]} selected={options === 'Pyxis'} onClick={handleClose}>
        <ListItemIcon>
                <BlockIcon fontSize="small" />
          </ListItemIcon>{options[1]}</MenuItem>
        <MenuItem key={options[2]} selected={options === 'Pyxis'} onClick={() => router.push("/report")}>
        <ListItemIcon>
                <ReportIcon fontSize="small" />
          </ListItemIcon>{options[2]}</MenuItem>
      </Menu>
    </div>
  );
}

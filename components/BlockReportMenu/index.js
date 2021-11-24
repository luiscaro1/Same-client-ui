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
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { friendActions } from '../../services/redux/store/actions';
import { blockActions } from '../../services/redux/store/actions';
import { authSelectors } from '../../services/redux/store/selectors';
import { friendSelectors } from '../../services/redux/store/selectors';
import { blockSelectors } from '../../services/redux/store/selectors';

const ITEM_HEIGHT = 100;

const BlockReportMenu=()=> {
  const auth = useSelector(authSelectors.selectToken);
  const other=useSelector(authSelectors.selectOtherUser);
  
//unfriending
  const no_friendship=useSelector(friendSelectors.selectNoFriend);
  const friend_error=useSelector(friendSelectors.selectFriendError);

//block
  const blocked=useSelector(blockSelectors.selectBlocked);
  const block_error=useSelector(blockSelectors.selectBlockError);

//unblock
  const unblocked=useSelector(blockSelectors.selectUnblocked);

  const dispatch = useDispatch();
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

  const user_name = router?.query?.user_name;

  const [info, setInfo] = React.useState({
    user_name:"",
    error: null,
  });

  const options = [
    'Unfriend',
    'Block',
    'Unblock',
    'Report',
  ];

  const removeFriend=(e)=>{
    e.preventDefault();
    var other_name=other?.data?.user_name;
    
    //console.log(other_name);
    //console.log(auth?.uid);
    dispatch(friendActions.unFriend(other_name));
  
}

const blockUser=(e)=>{
  e.preventDefault();
    
    var other_name=other?.data?.user_name;
    //console.log(other_name);
    //console.log(auth?.uid);
    dispatch(blockActions.block(other_name));
}

const unBlockUser=(e)=>{
  e.preventDefault();

  var other_name=other?.data?.user_name;
  //console.log(other_name);
  //console.log(auth?.uid);
  dispatch(blockActions.unBlock(other_name));

}

React.useEffect(() => {
  if (no_friendship) 
    return "No longer friends"
  
}, [no_friendship]);

React.useEffect(()=>{
  if(blocked)
    return "This person is blocked"
},[blocked]);

React.useEffect(()=>{
  if(unblocked)
    return "This person is unblocked"
},[unblocked]);

React.useEffect(() => {
  if (friend_error)
      setInfo({
        ...info,
        error:"Opps try again later",
    }); 

}, [friend_error]);

React.useEffect(() => {
  if (block_error)
      setInfo({
        ...info,
        error:"Opps try again later",
    }); 

}, [block_error]);

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
        <MenuItem key={options[0]} selected={options === 'Pyxis'} onClick={removeFriend}>
        <ListItemIcon>
                <PersonRemoveIcon fontSize="small" />
          </ListItemIcon>{options[0]}</MenuItem>
        <MenuItem key={options[1]} selected={options === 'Pyxis'} onClick={blockUser}>
        <ListItemIcon>
                <BlockIcon fontSize="small" />
          </ListItemIcon>{options[1]}</MenuItem>
        <MenuItem key={options[2]} selected={options === 'Pyxis'} onClick={unBlockUser}>
        <ListItemIcon>
                <PersonIcon fontSize="small" />
          </ListItemIcon>{options[2]}</MenuItem>
          <MenuItem key={options[3]} selected={options === 'Pyxis'} onClick={() => router.push("/report")}>
        <ListItemIcon>
                <ReportIcon fontSize="small" />
          </ListItemIcon>{options[3]}</MenuItem>
      </Menu>
    </div>
  );
};
export default BlockReportMenu;

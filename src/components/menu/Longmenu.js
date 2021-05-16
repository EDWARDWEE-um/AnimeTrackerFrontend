import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Button } from '@material-ui/core';
import auth from "../auth/auth";


const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{color:'white'}}/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
          <MenuItem >
            <Button href="/app" > Home </Button>
          </MenuItem>
          <MenuItem >
            <Button href="/category" > Categories </Button>
          </MenuItem>
          <MenuItem >
            <Button href="/search" > Search </Button>
          </MenuItem>
          <MenuItem >
            <Button href="/animelist" > Anime List </Button>
          </MenuItem>
          <MenuItem >
            <Button href="/logout" onClick={() => {auth.logout(() => {props.history.push("/");});}} > Logout </Button>
          </MenuItem>
          
      </Menu>
    </div>
  );
}
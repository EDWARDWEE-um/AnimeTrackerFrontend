import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
},
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#141E30',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #243B55, #141E30)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #243B55, #141E30)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <a style={{color:'white' , textDecoration:'none' }} href="/"> BUDGET YOUR LIFE</a>
          </Typography>
          <Button style={{color:'#FFFFFF', textDecoration:'none'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> <a href="/" style={{color:'black', textDecoration:'none'}} > Profile </a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/resume" style={{color:'black', textDecoration:'none'}} > Resume </a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/projects" style={{color:'black', textDecoration:'none'}} > Project </a></MenuItem>
      </Menu>
 

          
        </Toolbar>
      </AppBar>
    </div>
  );
}

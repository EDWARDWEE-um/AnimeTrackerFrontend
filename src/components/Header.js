import React ,{ useContext }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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



 function ButtonAppBar(props) {
  const classes = useStyles();
 
  return (
      
      <div className={classes.root}>
        <AppBar position="static" style={{background: '#141E30',  /* fallback for old browsers */
          background: '-webkit-linear-gradient(to right, #243B55, #141E30)',  /* Chrome 10-25, Safari 5.1-6 */
          background: 'linear-gradient(to right, #243B55, #141E30)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
          }}>
          <Toolbar>
          <Typography variant="h6" className={classes.title}>
              <a style={{color:'white',textDecoration:'none'}} href="/">THE ANIME TO DO LIST</a>
            </Typography>   
           
          </Toolbar>
        </AppBar>
      </div>
    );
 
}

export default ButtonAppBar;
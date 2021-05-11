
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import MovieIcon from '@material-ui/icons/Movie';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../axios';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '20rem',
    maxHeight:'50rem',
    flexGrow: 1,
    
  },
  header:{
    whiteSpace: "break-spaces"
  },
  media: {
    height: '25rem',
    width: '100%',
    objectFit:'contain',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function AnimeCard(props) {
  const classes = useStyles();
	const history = useHistory();
 
  const { anime } = props;

  console.log(anime)

  if (!anime || anime.length === 0) return <p>Cannot find any contact, sorry</p>;
  return (
    <React.Fragment>
      	{anime.map((anim) => {
  return (
    <div>
    <Card className={classes.root} style={{marginLeft:'auto', marginRight:'auto', marginBottom:'2rem' , width:'50vh'}}>
      <CardHeader
        title={ anim.title } className={classes.header}
        subheader={'Ratings : '+ anim.score  +"                    Type : " +anim.type}
      />
      <CardMedia
        className={classes.media}
        image={anim.image_url}
        title={anim.name}
      
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {anim.synopsis}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" >
          <DeleteForeverIcon />
        </IconButton>
      <IconButton aria-label="share" target='blank' style={{marginLeft:'7rem'}}>
          <MovieIcon />&nbsp;:&nbsp;{anim.episodes}
        </IconButton>
       
        <IconButton aria-label="share" href={anim.url}  style={{marginRight:'0'}} target='blank'>
          <InfoIcon />
        </IconButton>
        
      
      </CardActions>
     
      </Card>
      </div>
    	);
	})}	
	</React.Fragment>
  );
}
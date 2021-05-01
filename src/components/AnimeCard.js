
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InfoIcon from '@material-ui/icons/Info';
import MovieIcon from '@material-ui/icons/Movie';

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

export default function RecipeReviewCard({anime}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{marginLeft:'auto', marginRight:'auto', marginBottom:'2rem' , width:'50vh'}}>
      <CardHeader
        title={ anime.title } className={classes.header}
        subheader={'Ratings : '+ anime.score  +"                    Type : " +anime.type}
      />
      <CardMedia
        className={classes.media}
        image={anime.image_url}
        title={anime.name}
      
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {anime.synopsis}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
      <IconButton aria-label="share" href={anime.url} target='blank' style={{marginLeft:'7rem'}}>
          <MovieIcon />&nbsp;:&nbsp;{anime.episodes}
        </IconButton>
       
        <IconButton aria-label="share" href={anime.url}  style={{marginRight:'0'}} target='blank'>
          <InfoIcon />
        </IconButton>
        
      
      </CardActions>
     
    </Card>
  );
}
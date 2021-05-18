import React ,{ useEffect, useState }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import CategoryList from './CategoryList'
import CategoryResults from './CategoryResults';
import AnimeCard from '../AnimeCard';

const useStyles = makeStyles({
  root: {
    maxWidth: '18rem',
    maxHeight:'50rem',
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:'1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard({category,color}) {
  const classes = useStyles();
  const [appState, setAppState] = useState({
		id:null,
	});


  return (
    <div>
      <Card className={classes.root} key={category.id} style={{backgroundColor:color}} >
      <CardActionArea onClick={()=> {localStorage.setItem('id',category.id);localStorage.setItem('name',category.name);}}  href="/categoryresult" value={color} id={category.id}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{textAlign:'center'}}>
          {category.name}
        </Typography>
      </CardContent>
          
      </CardActionArea>
     
    </Card>
    </div>
    
  );
}
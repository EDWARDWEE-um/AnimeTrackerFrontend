import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

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
  const bull = <span className={classes.bullet}>•</span>;

  const handleSubmit = async (e) =>{
      e.preventDefault();
      const results = await fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc`)
      .then(res => res.json());
      console.log(results)  
    }

  return (
    <Card className={classes.root} key={category.id} style={{backgroundColor:color}} >
      <CardActionArea onClick={handleSubmit} value={color}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{textAlign:'center'}}>
          {category.name}
        </Typography>
      </CardContent>
          
      </CardActionArea>
     
    </Card>
  );
}
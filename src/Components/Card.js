import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1rem',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
    <CardMedia image="https://static.wikia.nocookie.net/towerofsaviors/images/3/39/2680i.png/revision/latest/scale-to-width-down/100?cb=20210415114656"  style={{ height: "7rem" }}/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total Budget
        </Typography>
      </CardContent>
    </Card>
  );
}
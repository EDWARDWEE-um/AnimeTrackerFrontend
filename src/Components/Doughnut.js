import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useMediaQuery } from 'react-responsive'
import { Container } from '@material-ui/core';


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
        'orange',
        'pink',
      ],
      borderColor: [
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    
  ],
  
};
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
      fontSize: '2rem',
      marginLeft:'auto',
      marginRight:'auto',
    },
    pos: {
      marginBottom: 12,
    },

   

  });

export default function DoughnutChart() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
        <Card className={classes.root} style={{}} >
        <CardContent>
        <div className='header'>
                <h1 className={classes.title}> Spending </h1>
                <div className='links'>
                </div>
                </div>
                <Doughnut data={data}  options={{ responsive: true , maintainAspectRatio: true, }}/>
        </CardContent>
        </Card>
        </div>
    )
}

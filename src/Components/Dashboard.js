import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
}
}));

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

export default function Dashboard() {
    const [expanded, setExpanded] = React.useState('panel1');
    const classes = useStyles();
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className={classes.root}>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{fontSize:'1rem', fontWeight:'bold'}}> Total Budget </Typography>
                    </AccordionSummary>
                     <AccordionDetails>
                        <Typography style={{fontSize:'1rem'}}>
                           $ 2000

                        </Typography>

                    </AccordionDetails>

                 </Accordion>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{fontSize:'1rem', fontWeight:'bold'}}> Budget Left </Typography>
                    </AccordionSummary>
                     <AccordionDetails>
                        <Typography style={{fontSize:'1rem'}}>
                           $ 1791

                        </Typography>

                    </AccordionDetails>

                 </Accordion>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{fontSize:'1rem', fontWeight:'bold'}}> Total Transactions </Typography>
                    </AccordionSummary>
                     <AccordionDetails>
                        <Typography style={{fontSize:'1rem'}}>
                           4
                        </Typography>

                    </AccordionDetails>

                 </Accordion>
            
        </div>
    )
}

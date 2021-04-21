import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
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

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <Desktop>Desktop or laptop</Desktop>
            <Tablet>Tablet</Tablet>
            <Mobile>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{fontSize:'2rem', fontWeight:'bold'}}> Total Budget </Typography>
                    </AccordionSummary>
                     <AccordionDetails>
                        <Typography style={{fontSize:'2rem'}}>
                           $ 2000
                        <Button size="small" style={{marginLeft:'18.8rem'}}><EditIcon style={{ fontSize:'1.5rem'}}/></Button>

                        </Typography>

                    </AccordionDetails>

                 </Accordion>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{fontSize:'2rem', fontWeight:'bold'}}> Budget Left </Typography>
                    </AccordionSummary>
                     <AccordionDetails>
                        <Typography style={{fontSize:'2rem'}}>
                           $ 1791
                        <Button size="small" style={{marginLeft:'18.8rem'}}><EditIcon style={{ fontSize:'1.5rem'}}/></Button>

                        </Typography>

                    </AccordionDetails>

                 </Accordion>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{fontSize:'2rem', fontWeight:'bold'}}> Total Transactions </Typography>
                    </AccordionSummary>
                     <AccordionDetails>
                        <Typography style={{fontSize:'2rem'}}>
                           4
                        <Button size="small" style={{marginLeft:'18.8rem'}}><EditIcon style={{ fontSize:'1.5rem'}}/></Button>
                        </Typography>

                    </AccordionDetails>

                 </Accordion>
            </Mobile>
            <Default>Not mobile (desktop or laptop or tablet)</Default>
        </div>
    )
}

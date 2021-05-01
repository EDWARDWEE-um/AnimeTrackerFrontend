import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AnimeCard from './AnimeCard';
import SampleCard from './SampleCard';
import { useMediaQuery } from 'react-responsive'

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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
	<div>
		<Mobile >
		<form className={classes.root} noValidate autoComplete="off" onSubmit={props.HandleSearch} style={{textAlign:'center'}}> 
			<TextField 			variant="outlined" 
								type="search"
								placeholder="Search for an anime..."
								required
								value={props.search}
								onChange={e => props.SetSearch(e.target.value)}/>
		</form>
		<div >
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
				{props.animeList.map(anime => (
					<SampleCard
						anime={anime}
						key={anime.mal_id} />
				))}
		</div>
		</Mobile>

	</div>
    
  );
}
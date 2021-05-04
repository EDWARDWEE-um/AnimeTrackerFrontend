import React ,{ useEffect, useState }  from 'react'
import AnimeCard from './AnimeCard'
import axiosInstance from '../axios';


export default function AnimeList() {
	const [appState, setAppState] = useState({
		animelist: null,
	});

    useEffect(() => {
		axiosInstance.get(`Death-Note/`).then((res) => {
			const allPosts = res.data;
			setAppState({ animelist: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

    return (
        <div>
            <AnimeCard animelist={appState.anime} />
        </div>
    )
}

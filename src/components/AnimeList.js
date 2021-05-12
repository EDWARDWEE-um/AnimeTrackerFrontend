import React ,{ useEffect, useState }  from 'react'
import APICard from './APIAnimeCard'
import axiosInstance from '../axios';
import Header from './Header'

export default function AnimeList() {
	const [appState, setAppState] = useState({
		animelist: null,
	});

    useEffect(() => {
		axiosInstance.get(`anime/`).then((res) => {
			const allPosts = res.data;
			setAppState({ animelist: allPosts });
			console.log(allPosts);
		});
	}, [setAppState]);

    return (
        <div>
			<Header/>
			<h1 style={{textAlign:"center"}}> 💖 Anime Checklist 💖</h1>
            <APICard anime={appState.animelist} />
        </div>
    )
}

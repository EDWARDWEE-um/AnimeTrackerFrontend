import React ,{ useEffect, useState }  from 'react'
import APICard from './APIAnimeCard'
import axiosInstance from '../axios';


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
            <APICard anime={appState.animelist} />
        </div>
    )
}

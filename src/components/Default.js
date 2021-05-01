import React from 'react'
import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';

export default function Default() {
	const [topAnime, SetTopAnime] = useState([]);
	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 10));
	}
	useEffect(() => {
		GetTopAnime();
	}, []);

    return (
        <div>
				<h1 style={{textAlign:"center"}}>🔥🔥 Top Anime 🔥🔥  </h1>
				{topAnime.map(anime => (
					<AnimeCard
					anime={anime}
					key={anime.mal_id} />
					
				))}
        </div>
    )
}
import React ,{ useEffect, useState }  from 'react'
import Header from '../Header'
import AnimeCard from '../AnimeCard'

export default function CategoryResults() {
        const [topAnime, SetTopAnime] = useState([]);
        const GetTopAnime = async () => {
            const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=`+localStorage.getItem('id')+`&order_by=score&sort=desc`)
                .then(res => res.json());
            SetTopAnime(temp.results);
            console.log(temp.results);
        }
        useEffect(() => {
            GetTopAnime();
        }, []);
        const name = localStorage.getItem('name')
        return (
            <div>
                    <Header />
                    <h1 style={{textAlign:"center"}}>  ⭐⭐ {name} ⭐⭐ </h1>
                    {topAnime.map(anime => (
                        <AnimeCard
                        anime={anime}
                        key={anime.mal_id} />
                        
                    ))}
    
            </div>
        )

}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header'
import CategoryCard from './CatergoryCard'

const categories = [
    {id: 1, name: 'Action',color:'rgb(255, 0, 0)' },
    {id: 2, name: 'Adventure',color:'rgb(255, 64, 0)' },
    {id: 3, name: 'Cars',color:'rgb(255, 128, 0)' },
    {id: 4, name: 'Comedy',color:'rgb(255, 191, 0)' },
    {id: 5, name: 'Dementia',color:'rgb(255, 255, 0)' },
    {id: 6, name: 'Demons',color:'rgb(191, 255, 0)' },
    {id: 7, name: 'Mystery',color:'rgb(128, 255, 0)' },
    {id: 8, name: 'Drama',color:'rgb(64, 255, 0)' },
    {id: 9, name: 'Ecchi',color:'rgb(0, 255, 0)' },
    {id: 10, name: 'Fantasy',color:'rgb(0, 255, 64)' },
    {id: 13, name: 'Historical',color:'rgb(0, 255, 127)' },
    {id: 14, name: 'Horror',color:'rgb(0, 255, 191)' },
    {id: 15, name: 'Kids',color:'rgb(0, 255, 255)' },
    {id: 16, name: 'Magic',color:'rgb(0, 191, 255)' },
    {id: 17, name: 'Martial Arts',color:'rgb(0, 128, 255)' },
    {id: 18, name: 'Mecha',color:'rgb(0, 64, 255)' },
    {id: 19, name: 'Music',color:'rgb(0, 0, 255)' },
    {id: 20, name: 'Parody',color:'rgb(64, 0, 255)' },
    {id: 21, name: 'Samurai',color:'rgb(128, 0, 255)' },
    {id: 22, name: 'Romance',color:'rgb(191, 0, 255)' },
    {id: 23, name: 'School',color:'	rgb(255, 0, 255)' },
    {id: 24, name: 'Sci Fi',color:'rgb(255, 0, 191)' },
    {id: 25, name: 'Shoujo',color:'rgb(255, 0, 128)' },
    {id: 28, name: 'Shounen Ai',color:'rgb(255, 0, 64)' },
    {id: 29, name: 'Space',color:'rgb(255, 0, 0)' },
    {id: 30, name: 'Sports',color:'rgb(255, 64, 0)' },
    {id: 31, name: 'Super Power',color:'rgb(255, 128, 0)' },
    {id: 32, name: 'Vampire',color:'rgb(255, 191, 0)' },
    {id: 33, name: 'Yaoi',color:'rgb(255, 255, 0)' },
    {id: 34, name: 'Yuri',color:'rgb(191, 255, 0)' },
    {id: 35, name: 'Harem',color:'rgb(128, 255, 0)' },
    {id: 36, name: 'Slice Of Life',color:'rgb(64, 255, 0)' },
    {id: 37, name: 'Supernatural',color:'rgb(0, 255, 0)' },
    {id: 38, name: 'Military',color:'rgb(0, 255, 64)' },
    {id: 39, name: 'Police',color:'rgb(0, 255, 127)' },
    {id: 40, name: 'Psychological',color:'rgb(0, 255, 191)' },
    {id: 41, name: 'Thriller',color:'rgb(0, 255, 255)' },
    {id: 42, name: 'Seinen',color:'rgb(0, 191, 255)' },
    {id: 43, name: 'Josei',color:'rgb(0, 128, 255)' },
]




export default function CategoryList() {
    return (
        <div>
            <Header/>
            <h1 style={{textAlign:"center"}} > Categories </h1>
            {categories.map(category => (
            <CategoryCard category={category} color={category.color}/>
            ))}
        </div>
    )
}

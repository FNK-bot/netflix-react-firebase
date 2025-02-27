import { React, useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../request';

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then(res => {

            setMovies(res.data.results)
        })
    }, [])

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className="w-full h-[600px] text-white ">
            <div className="w-full h-full ">
                <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title} className="w-full h-full object-cover" />
                <div className="absolute w-full top-[20%] p-4  md:p-8">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        {movie?.title}</h1>
                    <div className="my-4">
                        <button className="border  border-gray-300 bg-gray-300 text-black py-2 px-5">Play</button>
                        <button className=" border border-gray-300 bg-black px-5 py-2 ml-4">Watch Later</button>
                    </div>
                    <p className="text-gray-400 text-sm">
                        {movie?.release_date}
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main

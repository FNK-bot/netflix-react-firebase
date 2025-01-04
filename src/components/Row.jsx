import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ fetchUrl, title, rowId }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchUrl).then(res => setMovies(res.data.results))
    }, [fetchUrl])

    const rigthArrow = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft += 500

    }
    const leftArrow = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft -= 500

    }

    return (
        <div className='text-white'>
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className="flex items-center group relatve">
                <MdChevronLeft onClick={leftArrow}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 text-black hidden cursor-pointer group-hover:block' size={40} />

                <div id={'slider' + rowId} className="w-full h-full  overflow-x-scroll 
                   whitespace-nowrap scroll-smooth scrollbar-hide relative
                   ">
                    {
                        movies.map((item, id) => {
                            return <MovieCard item={item} key={id} />
                        })
                    }


                </div>
                <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 text-black hidden cursor-pointer group-hover:block' size={40}
                    onClick={rigthArrow}
                />
            </div>
        </div>
    )
}


export default Row

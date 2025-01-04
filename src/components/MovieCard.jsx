import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';

const MovieCard = ({ item }) => {
    const [like, setLike] = useState(false);
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();
    const movieID = doc(db, 'users', `${user?.email}`)
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);
    const saveShow = async () => {
        if (user?.email) {
            if (!like) {

                setLike(true);
                await updateDoc(movieID, {
                    savedShows: arrayUnion({
                        id: item.id,
                        title: item.title,
                        img: item.backdrop_path,
                    }),
                });

            } else {
                setLike(false);
                const result = movies.filter((itemInList) => item.id !== itemInList.id)
                await updateDoc(movieID, {
                    savedShows: result
                })
            }

        } else {
            alert('Please log in to save a movie');
        }
    };

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] 
        lg:w-[280px] inline-block cursor-pointer relative  p-2'>
            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className="block h-auto w-full" />
            <div className="text-white opacity-0 hover:opacity-100 hover:bg-black/80 absolute top-0 left-0 w-full
            h-full
            ">
                <p className='w-full flex text-xs md:text-sm text-center justify-center
                 items-center font-bold h-full white-space-normal '>{item?.title}</p>
            </div>
            <p onClick={saveShow}>
                {
                    like ? <FaHeart className='absolute top-4 left-4 text-gray-300'
                    /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                }
            </p>

        </div>
    )
}

export default MovieCard

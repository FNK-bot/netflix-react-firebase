import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {
    let { user, logOut } = UserAuth()
    return (
        <nav className='flex items-center justify-between p-4 absolute w-full z-[100]'>
            <Link to='/'>
                <h1 className='text-red-500 text-4xl font-bold cursor-pointer z-50'>Netflix</h1>
            </Link>

            {!user?.email ? (<div className=""><Link to='/login'>
                <button className='text-white pr-4 cursor-pointer'>Sign In</button>
            </Link>
                <Link to='/signup'>
                    <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
                </Link>
            </div>
            )
                :
                (<div className="">
                    <Link to='/account'>
                        <button className='text-white pr-4 cursor-pointer'>Account</button>
                    </Link>

                    <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'
                        onClick={(e) => logOut()}
                    >Sign Out</button>

                </div>)
            }
        </nav >
    )
}

export default Navbar

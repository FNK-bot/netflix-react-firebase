import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const { user, login } = UserAuth();
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            if (password.length < 6) {
                return setError('Minimum 6 char required')
            }
            await login(email, password)
            navigate('/')
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        }
    }

    return (

        <div className='w-full h-screen'>
            <img className='h-full w-full object-cover absolute hidden sm:block'
                src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg" />
            <div className="bg-black/60 w-full h-screen fixed top-0 left-0"></div>
            <div className="fixed w-full px-4 py-24 z-50 ">
                <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-bold text-3xl">Sign In</h1>
                        {error ? <p className='p-3 bg-red-500 my-3'>{error}</p> : null}
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input type="email" placeholder='Email' autoComplete='email'
                                className='p-3 my-2 bg-gray-700 '
                                onChange={(e) => { setEmail(e.target.value) }}
                            />

                            <input className='p-3 my-2 bg-gray-700 '
                                type="password" placeholder='password' autoComplete='current-password'
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <button type='submit' className="bg-red-600 py-3 my-6 font-bold rounded">Sign In</button>
                            <div className="flex justify-between item-center text-sm text-gray-400">
                                <p>
                                    <input type='checkbox' className='mr-2' /> Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-500'>New to Netflix?</span>
                                <Link to='/signup' className='text-red-600'>{'  '}Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function ProtectedRout({ children }) {
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to='/login' />
    }
    return children

}

export default ProtectedRout

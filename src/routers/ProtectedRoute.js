import useAuth from '../Custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'

import React from 'react'

const ProtectedRoute = ({children}) => {


    const {currentUser}=useAuth()
    return currentUser ? children : <Navigate to="/login"/>

}

export default ProtectedRoute
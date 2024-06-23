import React, { useContext } from 'react';
import useRole from './useRole';
import { AuthContext } from '../AllComponent/AuthoncationAll/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const [roles]=useRole()
    const ad= roles.role === "admin"

    let {user,loading}=useContext(AuthContext)
    let location =useLocation()


    if (loading) {
       return <progress className="progress w-56"></progress>
    }

    if (user && ad) {
        return children
    }

    return <Navigate state={{from:location}} to="/"></Navigate>



};

export default AdminRoute;
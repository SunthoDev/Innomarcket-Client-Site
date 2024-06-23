import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    let {user,loading}=useContext(AuthContext)

    let location =useLocation()


    // console.log(user,loading)

    if (loading) {
       return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate state={{from:location}} to="/login"></Navigate>
};

export default PrivateRoute;
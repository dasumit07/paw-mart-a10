import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';
import { AuthContext } from '../context/Authcontext';

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);
const location = useLocation();


if(loading){
    return <Loading></Loading>;
};


if(!user){
    return <Navigate to="/login" state={location.pathname}></Navigate>
};



    return children;
};

export default PrivateRoute;
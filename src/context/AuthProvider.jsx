import React, { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';


import { auth } from '../firebase/firebase.config';
import { AuthContext } from './Authcontext';
import Loading from '../pages/Loading';

const AuthProvider = ({children}) => {

const [user, setUser]= useState(null);
const [loading, setLoading] = useState(true);

const authInfo = {
    user,
    setUser,
    loading,
    setLoading
};

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
});
    return () => {
    unsubscribe();
    }
}, []);

if(loading){
  return  <Loading></Loading>
}

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;
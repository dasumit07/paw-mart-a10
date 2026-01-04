import React, { useEffect, useState } from 'react';

import { onAuthStateChanged, updateProfile } from 'firebase/auth';


import { auth } from '../firebase/firebase.config';

import Loading from '../pages/Loading';
import { AuthContext } from './Authcontext';

const AuthProvider = ({children}) => {

const [user, setUser]= useState(null);
const [loading, setLoading] = useState(true);
const updateUserProfile = (name, photoURL) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  });
};

const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    updateUserProfile
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
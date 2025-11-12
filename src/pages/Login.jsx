import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import 'animate.css';
import toast, { Toaster } from 'react-hot-toast';

import { auth, googleProvider } from '../firebase/firebase.config';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
const [errorPassword, setErrorPassword] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();
const location = useLocation();
const from = location.state || '/';
const {setUser, setLoading} = useContext(AuthContext);
useEffect(()=>{
        document.title = "Log In | PawMart"
    },[]);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const password = e.target.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            setErrorPassword('Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.');
            return;
        }
setErrorPassword('');
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const user = res.user;
            setUser(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `🎉 Welcome Back, ${user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from);
        setLoading(false);
        })
        .catch((error) => {
            toast.error(`Login Failed: ${error.message}`);
        });
    }
    const handleGoogleSignUp = () => {

        signInWithPopup(auth, googleProvider)
        .then((res) => {
            const user = res.user;
            setUser(user);
            Swal.fire({
              position: "center",
              icon: "success",
              title: `🎉 Welcome, ${user.displayName || "User"}!`,
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from);
            setLoading(false);
        })
        .catch((error) => {
            toast.error(`Google Sign-Up Failed: ${error.message}`);
        });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50 mt-15">
      <div className="bg-orange-50 shadow-lg rounded-2xl p-8 w-full max-w-md my-8 hover:scale-105 transition ease-in-out duration-1000 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to <span className="bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">PawMart</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
            name='email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
            name='password'
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errorPassword ? <p className="text-red-500 text-sm mt-2">{errorPassword}</p> : null}
          </div>

          <div className="text-right mb-4">
           <p className="text-blue-600 text-sm hover:underline cursor-pointer">
        
              Forgot Password?
           </p>
          </div>

          <button
            type="submit"
            className="w-full btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl"
          >
            Login
          </button>
        </form>

        <div className="my-6 text-center text-gray-400 text-sm">---------- or ----------</div>

        <button
        onClick={handleGoogleSignUp}
          className="w-full btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl"
        >
          <FcGoogle/>
          <span className=" font-medium">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline ">
            Register
          </Link>
        </p>
      </div>
      <Toaster/>
    </div>
    );
};

export default Login;
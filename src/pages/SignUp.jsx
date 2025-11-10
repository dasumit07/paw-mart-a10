import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import 'animate.css';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../context/Authcontext';
import { auth, googleProvider } from '../firebase/firebase.config';
import Swal from 'sweetalert2';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const navigate = useNavigate();
    const {setUser, setLoading} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            setErrorPassword('Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.');
            return;
        }
        if (name.length < 6){
            setErrorName('Name must be at least 6 characters long.');
            return;
        }
        setErrorPassword('');
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const user = res.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                Swal.fire({
  position: "center",
  icon: "success",
  title: `🎉 Welcome, ${user.displayName || "User"}!`,
  showConfirmButton: false,
  timer: 1500
});
                navigate('/');
                setUser(user);
                setLoading(false);
            })
            .catch(() => {
                toast.error("Failed to update profile.");
            })
        })
        .catch((error) => {
            toast.error(`Signup Failed: ${error.message}`);
        })
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
            navigate('/');
            setLoading(false);
        })
        .catch((error) => {
            toast.error(`Google Sign-Up Failed: ${error.message}`);
        });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50 mt-15">
      <div className="bg-orange-50 shadow-lg rounded-2xl p-8 my-8 w-full max-w-md hover:scale-105 transition ease-in-out duration-1000 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
            name='name'
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            {errorName ? <p className="text-red-500 text-sm mt-2">{errorName}</p> : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
            name='photoURL'
              type="text"
              placeholder="Enter your photo URL"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
            name='email'
              type="email"
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
              placeholder="Create a password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 text-gray-500 cursor-pointer"
            >
              {showPassword ?  <FaEyeSlash /> : <FaEye />}
            </span>
            {errorPassword ? <p className="text-red-500 text-sm mt-2">{errorPassword}</p> : null}
          </div>

          <button
            type="submit"
            className="w-full  btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 text-center text-gray-400 text-sm">---------- or ----------</div>

        <button
        onClick={handleGoogleSignUp}
          className="w-full border flex items-center justify-center gap-2 py-2  hover:bg-blue-100 transition btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105  ease-in-out rounded-2xl"
        >
          <FcGoogle/>
          <span className=" font-medium">Sign up with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
      <Toaster/>
    </div>
    );
};

export default Signup;
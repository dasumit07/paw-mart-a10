import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import 'animate.css';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../context/Authcontext';
import { auth, googleProvider } from '../firebase/firebase.config';
import Swal from 'sweetalert2';
import Loading from './Loading';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState('');
  const [errorName, setErrorName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Sign Up | PawMart";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const name = e.target.name.value;
      const photoFile = e.target.photoURL.files[0];
      const email = e.target.email.value;
      const password = e.target.password.value;

      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

      if (!regex.test(password)) {
        setErrorPassword(
          'Password must be at least 6 characters and contain uppercase & lowercase.'
        );
        setLoading(false);
        return;
      }

      if (name.length < 6) {
        setErrorName('Name must be at least 6 characters long.');
        setLoading(false);
        return;
      }

      setErrorPassword('');
      setErrorName('');
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const formData = new FormData();
      formData.append('image', photoFile);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageApiKey}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const imgData = await imgRes.json();

      if (!imgData.success) {
        throw new Error('Image upload failed');
      }

      const photoURL = imgData.data.display_url;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      const userData = {
        displayName: name,
        photoURL,
        email,
        createdAt: new Date(),
      };

      await fetch('https://paw-mart-a10-server.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      setLoading(false);
      
      setUser({ ...user, displayName: name, photoURL });
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: `🎉 Welcome, ${name}!`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/');

      
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Signup Failed!');
    } 
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      setUser(user);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `🎉 Welcome, ${user.displayName || 'User'}!`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/');
    } catch (error) {
      toast.error(`Google Sign-Up Failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
if (loading) return <Loading></Loading>
  return (
    <div className="flex items-center justify-center min-h-screen mt-15">
      <div className="border border-orange-50 backdrop-blur-xs shadow-lg rounded-2xl p-8 my-8 w-full max-w-md animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold text-center text-gray-400 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            {errorName && <p className="text-red-500 text-sm">{errorName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 font-semibold mb-2">
              Photo
            </label>
            <input
              name="photoURL"
              type="file"
              className="file-input file-input-neutral w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 font-semibold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-400 font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errorPassword && (
              <p className="text-red-500 text-sm">{errorPassword}</p>
            )}
          </div>

          <button className="btn w-full bg-orange-400 text-white rounded-2xl">
            Sign Up
          </button>
        </form>

        <div className="my-6 text-center text-gray-400">---------- or ----------</div>

        <button
          onClick={handleGoogleSignUp}
          className="btn w-full bg-orange-400 text-white rounded-2xl flex gap-2 justify-center"
        >
          <FcGoogle /> Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;

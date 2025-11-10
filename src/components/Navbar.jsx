import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { IoPawSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { auth } from '../firebase/firebase.config';

import { signOut } from 'firebase/auth';
import { LuLogIn } from 'react-icons/lu';
import { MoonLoader } from 'react-spinners';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';


const Navbar = () => {
  const {user, setUser, loading} = useContext(AuthContext);

  const handleSignout = () =>{
    signOut(auth)
    .then(() =>{
      setUser(null);
      Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `👋 Successfully Signed Out!, ${user.displayName || "User"}!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
    })
    .catch((error) =>{
      toast.error(`Sign Out Failed: ${error.message}`);
    });
  };
    return (
        <div className="navbar fixed top-0 left-0 w-full z-50  shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl">
 <div className='w-11/12 mx-auto flex'>
     <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      {
        user ? <ul tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <NavLink to={"/"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Home</NavLink>
      <NavLink to={"/pets"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Pets / Supplies</NavLink>
      <NavLink  className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Add Listing</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>My Listings</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>My Orders</NavLink>
    </ul> : <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={"/"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Home</NavLink>
      <NavLink to={"/pets"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Pets / Supplies</NavLink>
      </ul>
      }
    </div>
    <NavLink to={"/"} className={"flex items-center bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text "}><IoPawSharp className='text-orange-500 text-4xl'></IoPawSharp><span className=' text-2xl font-bold'>Paw</span><span className=' text-3xl font-bold'>Mart</span></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    {
      user ? <ul className="menu menu-horizontal px-1 gap-5">
      <NavLink to={"/"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Home</NavLink>
      <NavLink to={"/pets"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Pets / Supplies</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Add Listing</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>My Listings</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>My Orders</NavLink>
    </ul> : <ul className="menu menu-horizontal px-1 gap-5">
      <NavLink to={"/"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Home</NavLink>
      <NavLink to={"/pets"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Pets / Supplies</NavLink>
    </ul>
    }
  </div>
  <div data-aos="fade-left" className="navbar-end">
    {loading ? <MoonLoader size={30} /> :  user? 
    <div className='flex items-center gap-1 md:gap-4'>
      
      <div className="dropdown dropdown-hover">
  <div tabIndex={0}><img
      src={user.photoURL ? user.photoURL : "https://via.placeholder.com/88"}
      alt='avatar'
      className='h-12 w-12 rounded-full hover:scale-105 transition ease-in-out duration-500'
      /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-orange-50 rounded-box z-1 w-52 p-2 shadow-sm">
    <Link><li className='bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text font-bold text-center'>{user.displayName}</li></Link>
  </ul>
</div>
      <button onClick={handleSignout} className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl ">
      <LuLogIn />
        LogOut
        </button>
    </div> : <Link to={"/login"}>
    <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl">
      <LuLogIn />
        Login / Register
        </button></Link> }
  </div>
 </div>
</div>
    );
};

export default Navbar;
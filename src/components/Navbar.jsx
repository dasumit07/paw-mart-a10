import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoPawSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { auth } from '../firebase/firebase.config';

import { signOut } from 'firebase/auth';
import { LuLogIn } from 'react-icons/lu';
import { MoonLoader } from 'react-spinners';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';
import { CiLogout } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { FaTachometerAlt } from 'react-icons/fa';



const Navbar = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `👋 Successfully Signed Out!, ${user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        toast.error(`Sign Out Failed: ${error.message}`);
      });
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    document.querySelector('html').setAttribute('data-theme', savedTheme);
  }, []);

  const handleTheme = (checked) => {
    setIsDark(checked);
    const theme = checked ? 'dark' : 'light';
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
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
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>Home</NavLink>
                <NavLink to={"/pets"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>Pets / Supplies</NavLink>
                <NavLink to={"/dashboard/addListing"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>Add Listing</NavLink>
                <NavLink to={"/dashboard/myListings"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>My listings</NavLink>
                <NavLink to={"/dashboard/myOrders"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>My Orders</NavLink>
                <NavLink to={"/about-us"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>About Us</NavLink>
              </ul> : <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <NavLink to={"/"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>Home</NavLink>
                <NavLink to={"/pets"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>Pets / Supplies</NavLink>
                <NavLink to={"/about-us"} className={({ isActive }) =>
                  `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                  }`}>About Us</NavLink>
              </ul>
            }
          </div>
          <NavLink to={"/"} className={"flex items-center bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text "}><IoPawSharp className='text-orange-500 text-4xl'></IoPawSharp><span className=' text-2xl font-bold'>Paw</span><span className=' text-3xl font-bold'>Mart</span></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          {
            user ? <ul className="menu menu-horizontal px-1 gap-5">
              <NavLink to={"/"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>Home</NavLink>
              <NavLink to={"/pets"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>Pets / Supplies</NavLink>
              <NavLink to={"/dashboard/addListing"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>Add Listing</NavLink>
              <NavLink to={"/dashboard/myListings"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>My listings</NavLink>
              <NavLink to={"/dashboard/myOrders"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>My Orders</NavLink>
              <NavLink to={"/about-us"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>About Us</NavLink>
            </ul> : <ul className="menu menu-horizontal px-1 gap-5">
              <NavLink to={"/"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>Home</NavLink>
              <NavLink to={"/pets"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>Pets / Supplies</NavLink>
              <NavLink to={"/about-us"} className={({ isActive }) =>
                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
                }`}>About Us</NavLink>
            </ul>
          }
        </div>
        <div className="navbar-end gap-4 ">
          {loading ? <MoonLoader size={30} /> : user ?
            <div className='flex items-center gap-1 md:gap-4'>

              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="m-1"><img
                  src={user.photoURL ? user.photoURL : "https://via.placeholder.com/88"}
                  alt='avatar'
                  className='h-12 w-12 rounded-full hover:scale-105 transition ease-in-out duration-500'
                /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><Link to={"/dashboard/profile"} className='hover:bg-linear-to-r from-orange-300 to-orange-100'><button className="  text-gray-500 font-semibold  hover:scale-102 transition ease-in-out rounded-2xl flex gap-2 items-center w-full">
                    <CgProfile />
                    My Profile
                  </button></Link></li>
                  <li><Link to={"/dashboard"} className='hover:bg-linear-to-r from-orange-300 to-orange-100'><button className="  text-gray-500 font-semibold  hover:scale-102 transition ease-in-out rounded-2xl flex gap-2 items-center w-full">
                    <FaTachometerAlt />
                    Dashboard
                  </button></Link></li>
                  <li><button onClick={handleSignout} className="hover:bg-linear-to-r from-orange-300 to-orange-100  text-gray-500 font-semibold  hover:scale-102 transition ease-in-out ">
                    <CiLogout />
                    LogOut
                  </button></li>
                </ul>

              </div>

            </div> : <Link to={"/login"}>
              <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl">
                <LuLogIn />
                Login
              </button></Link>}
          <label className="toggle text-base-content">
            <input
              type="checkbox"
              checked={isDark}
              onChange={(e) => handleTheme(e.target.checked)}
            />


            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


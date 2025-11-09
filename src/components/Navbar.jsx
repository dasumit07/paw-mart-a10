import React from 'react';
import { IoPawSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 w-full z-50  shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl">
 <div className='w-11/12 mx-auto flex'>
     <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NavLink className={"flex items-center bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text "}><IoPawSharp className='text-orange-500 text-4xl mr-2'></IoPawSharp><span className=' text-2xl font-bold'>Paw</span><span className=' text-3xl font-bold'>Mart</span></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Home</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`}>Pets / Supplies</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className='btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl'>
    Login / Register</Link>
  </div>
 </div>
</div>
    );
};

export default Navbar;
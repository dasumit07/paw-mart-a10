import React, { useContext } from 'react';
import { FaHome, FaTachometerAlt } from 'react-icons/fa';
import { MdAddCircleOutline, MdPayment, MdReportProblem, MdSyncProblem } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router';

import { CgProfile } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import { CiCircleList, CiLogout } from 'react-icons/ci';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { MoonLoader } from 'react-spinners';
import { AuthContext } from '../context/Authcontext';

const DashBoardLayout = () => {
    const { user, setUser, loading } = useContext(AuthContext);
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
    return (
        <div className="drawer lg:drawer-open md:w-11/12 mx-auto min-h-screen">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-linear-to-r from-white to-orange-200 flex justify-between">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square ">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4"><Link to={"/"}><p className='bg-linear-to-r from-orange-700 to-orange-500 text-transparent bg-clip-text text-2xl lg:text-3xl font-bold'>PawMart</p></Link></div>
                    <div>
                        {loading ? <MoonLoader size={30} /> :
                            <div className='flex items-center gap-1 md:gap-4'>

                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1"><img
                                        src={user.photoURL ? user.photoURL : "https://via.placeholder.com/88"}
                                        alt='avatar'
                                        className='h-12 w-12 rounded-full hover:scale-105 transition ease-in-out duration-500'
                                    /></div>
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><Link to={"/dashboard/profile"} className='hover:bg-linear-to-r from-orange-300 to-orange-100'><button className="  text-gray-400 font-semibold  hover:scale-102 transition ease-in-out rounded-2xl flex gap-2 items-center w-full">
                                            <CgProfile />
                                            My Profile
                                        </button></Link></li>
                                        <li><button onClick={handleSignout} className="hover:bg-linear-to-r from-orange-300 to-orange-100  text-gray-400 font-semibold  hover:scale-102 transition ease-in-out ">
                                            <CiLogout />
                                            LogOut
                                        </button></li>
                                    </ul>

                                </div>

                            </div>}
                    </div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        <li>
                            <NavLink to={"/"} className={({ isActive }) =>
                                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-600 font-bold' : 'hover:text-orange-400'
                                }`}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1" data-tip="Home Page"><FaHome size={20} /><span className="is-drawer-close:hidden">Home Page</span></button></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard"} end className={({ isActive }) =>
                                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-600 font-bold' : 'hover:text-orange-400'
                                }`}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1" data-tip="Dashboard"><FaTachometerAlt size={20} /><span className="is-drawer-close:hidden">Dashboard</span></button></NavLink>
                        </li>

                        <li>
                            <NavLink to={"/dashboard/addListing"} className={({ isActive }) =>
                                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-600 font-bold' : 'hover:text-orange-400'
                                }`}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1" data-tip="Add Listing"><MdAddCircleOutline size={20} /><span className="is-drawer-close:hidden">Add Listing</span></button></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/myListings"} className={({ isActive }) =>
                                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-600 font-bold' : 'hover:text-orange-400'
                                }`}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1" data-tip="My Listings"><CiCircleList size={22} /><span className="is-drawer-close:hidden">My Listings</span></button></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/myOrders"} className={({ isActive }) =>
                                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-600 font-bold' : 'hover:text-orange-400'
                                }`}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1" data-tip="My Orders"><TiShoppingCart size={22} /><span className="is-drawer-close:hidden">My Orders</span></button></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/profile"} className={({ isActive }) =>
                                `hover:scale-105 transition ease-in-out ${isActive ? 'text-orange-600 font-bold' : 'hover:text-orange-400'
                                }`}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1" data-tip="My Profile"><CgProfile size={22} /><span className="is-drawer-close:hidden">My Profile</span></button></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
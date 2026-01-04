import React, { useEffect } from "react";
import { GiSelfLove, GiShoppingCart } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { PiDog, PiShootingStar } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | PawMart";
  }, []);

  return (
    <div className="w-11/12 mt-10 mx-auto px-4 py-12 space-y-16 animate__animated animate__fadeIn">

      {/* HERO SECTION */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-500">
          About PawMart 🐾
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          PawMart is a trusted platform where pet lovers can buy, sell, and adopt
          pets and pet supplies with confidence.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 ">
        <div className="bg-base-100 p-6 shadow rounded-2xl  border border-orange-50 backdrop-blur-xs  overflow-hidden  mb-8 animate__animated animate__fadeIn  hover:shadow-lg transition hover:scale-101  ease-in-out duration-500">
          <h2 className="text-2xl font-semibold mb-3 text-center flex  justify-center items-center gap-2"><span><TbTargetArrow /></span> <span>Our Mission</span></h2>
          <p className="text-gray-400">
            Our mission is to create a safe and user-friendly marketplace that
            connects pet owners, breeders, and adopters while ensuring animal
            care and responsibility.
          </p>
        </div>

        <div className="bg-base-100 p-6 shadow rounded-2xl border border-orange-50 backdrop-blur-xs  overflow-hidden  mb-8 animate__animated animate__fadeIn hover:shadow-lg transition hover:scale-101  ease-in-out duration-500">
          <h2 className="text-2xl font-semibold mb-3 text-center flex  justify-center items-center gap-2"><span><PiShootingStar /></span> <span>Our Vision</span></h2>
          <p className="text-gray-400">
            We envision a world where every pet finds a loving home and pet
            owners can easily access quality food, accessories, and care
            products.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose PawMart?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-base-100 p-6 shadow rounded-2xl border border-orange-50 backdrop-blur-xs  overflow-hidden  mb-8 animate__animated animate__fadeIn hover:shadow-lg transition hover:scale-101  ease-in-out duration-500">
            <h3 className="text-xl font-bold text-center mb-3 flex  justify-center items-center gap-2"><span><PiDog /></span> <span>Trusted Listings</span></h3>
            <p className="text-center text-gray-400">All listings are managed by registered users, ensuring transparency and trust.</p>
          </div>
          <div className="bg-base-100 p-6 shadow rounded-2xl border border-orange-50 backdrop-blur-xs  overflow-hidden  mb-8 animate__animated animate__fadeIn hover:shadow-lg transition hover:scale-101  ease-in-out duration-500">
            <h3 className="text-xl font-bold text-center mb-3 flex  justify-center items-center gap-2"><span><GiShoppingCart /></span> <span>Easy Marketplace</span></h3>
            <p  className="text-center text-gray-400">Buy, sell, and adopt pets or pet supplies with a smooth and simple process.</p>
          </div>
          <div className="bg-base-100 p-6 shadow rounded-2xl border border-orange-50 backdrop-blur-xs  overflow-hidden  mb-8 animate__animated animate__fadeIn hover:shadow-lg transition hover:scale-101  ease-in-out duration-500">
            <h3 className="text-xl font-bold text-center mb-3 flex  justify-center items-center gap-2"><span><GrSecure /></span> <span>Secure Platform</span></h3>
            <p className="text-center text-gray-400">User authentication and protected dashboards keep your data safe.</p>
          </div>
        </div>
      </div>

      {/* TEAM / FOOTER TEXT */}
      <div className="text-center bg-orange-50 p-8 rounded-2xl">
        <h3 className="text-2xl text-black font-semibold mb-3 flex justify-center items-center gap-2">
          <span>Built with</span> <span><GiSelfLove /></span> <span>for Pet Lovers</span>
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          PawMart is developed as a modern MERN-based platform focusing on
          usability, performance, and real-world functionality.
        </p>
      </div>

    </div>
  );
};

const Feature = ({ title, text }) => (
  <div className="bg-base-100 p-6 shadow rounded-2xl text-center hover:scale-105 transition">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default AboutUs;

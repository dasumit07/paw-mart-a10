import React from 'react';
import { Link } from 'react-router';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
const Card = ({ item }) => {
  return (
    <div className="max-w-sm border border-orange-50 backdrop-blur-xs  rounded-2xl shadow-md overflow-hidden  mb-8 animate__animated animate__fadeInDown  hover:shadow-md transition hover:scale-101  ease-in-out duration-500">
      <img
        src={item.image}
        alt={item.name}
        className="h-50 w-full object-cover hover:shadow-lg transition hover:scale-105  ease-in-out duration-500"
      />
      <div className="p-5">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          Name : {item.name}
        </h3>
        <h3 className={`text-sm font-semibold  bg-gray-700 text-white mb-2 rounded-xl ${item.category === "Pets"
            ? "w-[50px]"
            : item.category === "Pet Food"
              ? "w-[80px]"
              : item.category === "Accessories"
                ? "w-[90px]"
                : "w-[130px]"
          } flex items-center justify-center`}>
          {item.category}
        </h3>

        <div className="flex justify-between items-center text-gray-500 mb-3">
          <div className='flex items-center gap-1'>
            <span><CiLocationOn /></span>
            <span className="text-sm flex items-center gap-1">
              {item.location}
            </span>
          </div>
          <div className='flex items-center gap-1'><span className="text-sm font-bold  bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">{item.price} </span><span><FaBangladeshiTakaSign /></span></div>
        </div>

        <Link to={`/pets/${item._id}`}>
          <button className="w-full bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold text-sm  hover:scale-102 transition ease-in-out duration-500 rounded-xl py-2 cursor-pointer">
            See Details
          </button></Link>
      </div>
    </div>

  );
};

export default Card;
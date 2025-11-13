import React from 'react';
import { Link } from 'react-router';

const Card = ({item}) => {
    return (
        <div className="max-w-sm border border-orange-50 backdrop-blur-xs  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-105  ease-in-out duration-700 mb-8">
  <img
    src={item.image}
    alt={item.name}
    className="h-70 w-full object-cover"
  />
  <div className="p-5">
    <h3 className="text-xl font-semibold text-gray-400 mb-2">
      Name : {item.name}
    </h3>
    <h3 className="text-sm font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-black mb-2 rounded-2xl w-[130px] flex items-center justify-center">
      {item.category}
    </h3>

    <div className="flex justify-between items-center text-gray-400 mb-3">
      <span className="text-sm flex items-center gap-1">
        Location : {item.location}
      </span>
      <span className="text-lg font-bold  bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">Price : {item.price} TK</span>
    </div>

    <Link to={`/pets/${item._id}`}>
    <button className="w-full bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl py-2 cursor-pointer">
      See Details
    </button></Link>
  </div>
</div>

    );
};

export default Card;
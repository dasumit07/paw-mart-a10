import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Details = () => {
    const data = useLoaderData()
    
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 mt-10">

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={data.image}
          alt={data.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"/>

        <div className="flex-1">
            
          <h1 className="text-3xl font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text mb-3">
            Name: {data.name}
          </h1>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {data.category}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Owner’s Email:</span> {data.email} 
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Description:</span> {data.description}
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed"></p>

          <div className="flex items-center justify-between mb-6">
            <p className="text-lg font-semibold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
              Location: {data.location}
            </p>
            <p className="text-lg font-semibold text-yellow-500">
              Price: {data.price}
            </p>
          </div>
          <button
              type="submit"
              className="btn w-full bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  rounded-2xl py-2 hover:scale-105 transition ease-in-out"
            >
              Adopt / Order Now
            </button>
          
        </div>
      </div>

      <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
        <Link to="/pets">
          <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  rounded-2xl py-2 hover:scale-105 transition ease-in-out">
            ← Go Back
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Details;
import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const PetsSuplies = () => {
    const items = useLoaderData();
    return (
        <div className='mt-20' >

      <h1
        className="text-center text-3xl font-bold mt-10 bg-linear-to-r from-orange-600 to-orange-200 text-transparent bg-clip-text" >
        All Pets / Supplies
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 w-11/12 mx-auto my-10">
        {items.map((item) => (
          <div
            key={item._id}
            
            className="transition-transform duration-300 hover:scale-105"
          >
            <Card item ={item}></Card>
          </div>
        ))}
      </div>
    </div>
    );
};

export default PetsSuplies;
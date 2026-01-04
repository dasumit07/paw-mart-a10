import React from 'react';
import Card from './Card';


const RecentListing = ({data}) => {
    const items = data
   
    return (
        <div className='w-11/12 mx-auto mt-8'>
            <h1
        className="text-center text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-8" >
        Recent Listings
      </h1>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto my-10">
        {items.map((item) => (
          <div
            key={item._id}
            
            
          >
            <Card item ={item}></Card>
          </div>
        ))}
      </div>
        </div>
    );
};

export default RecentListing;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';
import Loading from './Loading';

const PetsSuplies = () => {
    const items = useLoaderData();
    const[searchItems, setSearchItems] = useState(items);
    const[loading, setLoading] = useState(false);
    useEffect(()=>{
            document.title = "Pets/Supplies | PawMart"
        },[]);

        const handleSearch = (e) =>{
          e.preventDefault();
          const searchText = e.target.search.value;
          setLoading(true)
          fetch(`http://localhost:3000/search?search=${searchText}`)
          .then(res => res.json())
          .then(data =>{
            setSearchItems(data)
            setLoading(false)
          })

        }
        if(loading){
          <Loading></Loading>
        }
    return (
        <div className='mt-20' >

      <h1
        className="text-center text-3xl font-bold mt-10 bg-linear-to-r from-orange-600 to-orange-200 text-transparent bg-clip-text" >
        All Pets / Supplies
      </h1>
        <form onSubmit={handleSearch} className='flex justify-center mt-5'>
          <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input name='search' type="search" placeholder="Search" />
</label>
<button type='submit' className='btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  py-2 hover:scale-105 transition ease-in-out'>Search</button>
        </form>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 w-11/12 mx-auto my-10">
        {searchItems.map((item) => (
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
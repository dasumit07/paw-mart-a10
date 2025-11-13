import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Card from './Card';
import Loading from './Loading';

const PetsSuplies = () => {
    const items = useLoaderData();
    const[searchItems, setSearchItems] = useState(items);
    const[loading, setLoading] = useState(false);
    const { category: routeCategory } = useParams();
    const [category, setCategory] = useState(routeCategory || "");

    useEffect(()=>{
            document.title = category
      ? `${category} | PawMart`
      : "Pets/Supplies | PawMart";
        },[category]);

        const handleSearch = (e) =>{
          e.preventDefault();
          const searchText = e.target.search.value;
          setLoading(true)
          fetch(`https://paw-mart-a10-server.vercel.app/search?search=${searchText}`)
          .then(res => res.json())
          .then(data =>{
            setSearchItems(data)
            setCategory("")
            setLoading(false)
          })

        }
        const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setLoading(true);

    if (!selectedCategory || selectedCategory == "") {
      setSearchItems(items);
      setLoading(false);
      return;
    }

    fetch(`https://paw-mart-a10-server.vercel.app/category?category=${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };


        if(loading){
        return  <Loading></Loading>
        }
    return (
        <div className='mt-20' >

      <h1
        className="text-center text-3xl font-bold mt-10 bg-linear-to-r from-orange-600 to-orange-200 text-transparent bg-clip-text" >
        {category ? `${category.toUpperCase()} Items` : "All Pets / Supplies"}
      </h1>
        {
          routeCategory ? '' : <form onSubmit={handleSearch} className='md:flex justify-center gap-2 mt-5'>
          <div className='flex mb-2'>
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
          </div>

<select
          value={category}
          onChange={handleCategoryChange}
          className="border px-4 py-2 rounded bg-white text-gray-700 hover:border-orange-400"
        >
          <option value="">All Categories</option>
          <option value="Pets">Pet</option>
          <option value="Product">Product</option>
          <option value="Accessories">Accessories</option>
          <option value="Food">Food</option>
        </select>

        </form>
        }
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 w-11/12 mx-auto mt-10">
        {searchItems.map((item) => (
          <div
            key={item._id}
            
            className="transition-transform duration-300 hover:scale-105"
          >
            <Card item ={item}></Card>
          </div>
        ))}
      </div>
      <div className="text-center mb-5">
        <Link to="/">
          <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  rounded-2xl py-2 hover:scale-105 transition ease-in-out">
            ← Go Back
          </button>
        </Link>
      </div>
    </div>
    );
};

export default PetsSuplies;
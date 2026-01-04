import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Card from './Card';
import Loading from './Loading';

const PetsSuplies = () => {
  const [sort, setSort] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { category: routeCategory } = useParams();
  const [category, setCategory] = useState(routeCategory || "");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");


  useEffect(() => {
    document.title = category
      ? `${category} | PawMart`
      : "Pets/Supplies | PawMart";
  }, [category]);
  const fetchPets = async () => {
    setLoading(true);

    const res = await fetch(
      `https://paw-mart-a10-server.vercel.app/pets?page=${page}&limit=8&search=${search}&category=${category}&sort=${sort}`
    );

    const data = await res.json();
    setItems(data.items);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchPets();
  }, [page, search, category, sort]);


  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value.trim());
    setPage(1);

  }
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };


  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className='mt-20' >

      <h1
        className="text-center text-3xl font-bold mt-10 bg-linear-to-r from-orange-600 to-orange-200 text-transparent bg-clip-text" >
        {category ? `${category.toUpperCase()} Items` : "All Pets / Supplies"}
      </h1>
      {
        routeCategory ? '' : <form onSubmit={handleSearch} className='md:flex justify-center gap-2 mt-5'>
          <div className='flex mb-2 ml-2'>
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
            <button type='submit' className='btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  py-2 hover:scale-102 transition ease-in-out'>Search</button>
          </div>

          <select
            value={category}
            onChange={handleCategoryChange}
            className="border ml-2 h-10 rounded bg-white text-gray-700 hover:border-orange-400"
          >
            <option className='text-sm' value="">All Categories</option>
            <option className='text-sm' value="Pets">Pet</option>
            <option className='text-sm' value="Product">Product</option>
            <option className='text-sm' value="Accessories">Accessories</option>
            <option className='text-sm' value="Food">Food</option>
          </select>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="border ml-2 h-10 rounded bg-white text-gray-700 hover:border-orange-400"
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

        </form>
      }
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-10">
        {items.map((item) => (
          <div
            key={item._id}
          >
            <Card item={item}></Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 my-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-sm"
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map(p => (
          <button
            key={p}
            onClick={() => setPage(p + 1)}
            className={`btn btn-sm ${page === p + 1 ? "btn-primary" : "btn-outline"}`}
          >
            {p + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="btn btn-sm"
        >
          Next
        </button>

      </div>

      <div className="text-center mb-5">
        <Link to="/">
          <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  rounded-2xl py-2 hover:scale-102 duration-500 transition ease-in-out">
            ← Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PetsSuplies;
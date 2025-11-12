import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext';
import { Link } from 'react-router';

const MyListings = () => {
    const {user, setLoading} = useContext(AuthContext);
    const [Listings, setListings] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/myListings?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setListings(data);
            setLoading(false);
        })

    },[user, setListings, setLoading]);
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 mt-15">
      <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">
        🐾 My Listings
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-linear-to-r from-orange-600 to-orange-300 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Listings && Listings.length > 0 ? (
              Listings.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-orange-50 transition ease-in-out"
                >
                  <td className="py-3 px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium">{item.name}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{item.price} TK</td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4 text-gray-500">{item.email}</td>
                  <td className="py-3 px-4 text-center flex justify-center gap-3">
                    <Link to={`/update/${item._id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                      Update
                    </button></Link>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No listings found 😿
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyListings;
import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const data = useLoaderData();
     const navigate = useNavigate();
useEffect(()=>{
        document.title = "Update Details | PawMart"
    },[]);
    const handleUpdate = (e) =>{
        e.preventDefault();
        const formdata = {
            name: e.target.name.value,
            category: e.target.category.value,
            price: e.target.price.value,
            location: e.target.location.value,
            description: e.target.description.value,
            image: e.target.image.value,
            email: e.target.email.value,
            date: e.target.date.value
        }
        Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://paw-mart-a10-server.vercel.app/pets/${data._id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "🎉 Successfully Updated",
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate("/dashboard/myListings")
        })
        .catch(err =>{
            console.log(err)
        })
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});

    }
    return (
        <div className="max-w-2xl mx-auto my-20 border border-orange-50 backdrop-blur-xs p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-6 text-center">
        Update Your Details
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">
            Product / Pet Name
          </label>
          <input
          name='name'
          required
            type="text"
            defaultValue={data.name}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Category</label>
          <select
          name='category'
          required
          defaultValue={data.category}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option className='text-gray-500' value="">Select Category</option>
            <option className='text-gray-500' value="Pets">Pets</option>
            <option className='text-gray-500' value="Food">Pet Food</option>
            <option className='text-gray-500' value="Accessories">Accessories</option>
            <option className='text-gray-500' value="Care Products">Pet Care Products</option>
          </select>
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Price</label>
          <input
          name='price'
          required
            type="number"
            defaultValue={data.price}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Location</label>
          <input
          name='location'
          required
            type="text"
            defaultValue={data.location}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">
            Description
          </label>
          <textarea
          name='description'
          required
            rows="4"
            defaultValue={data.description}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">
            Image URL
          </label>
          <input
          name='image'
          required
            type="text"
            defaultValue={data.image}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Pick Up Date</label>
          <input
          name='date'
          required
            type="date"
            defaultValue={data.date}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Email</label>
          <input
          name='email'
          required
            type="email"
            defaultValue={data.email}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
             className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl w-full" 
          >
            Update
          </button>
        </div>
      </form>
      <div className="text-center mt-12">
        <Link to="/dashboard/myListings">
          <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  rounded-2xl py-2 hover:scale-105 transition ease-in-out">
            ← Go Back
          </button>
        </Link>
      </div>
    </div>
    );
};

export default UpdateItem;
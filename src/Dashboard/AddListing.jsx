import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import Loading from '../pages/Loading';

const AddListing = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Add Listing | PawMart"
  }, []);

  const handleAddListing = async(e) => {
    e.preventDefault();
    setLoading(true);
    const selectedCategory = e.target.category.value;
    const imageFile = e.target.image.files[0];

    const formData = new FormData();
    formData.append('image', imageFile);

    const imgRes = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageApiKey}`,
      {
        method: "POST",
        body: formData
      }
    );

    const imgData = await imgRes.json();

    if (!imgData.success) {
      throw new Error("Image upload failed");
    }

    const imageURL = imgData.data.display_url;
    const formdata = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: selectedCategory === "Pets" ? 0 : e.target.price.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: imageURL,
      email: e.target.email.value,
      date: e.target.date.value
    }
    fetch('https://paw-mart-a10-server.vercel.app/pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "🎉 Successfully Added",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/pets")
        
      })
      .catch(err => {
        console.log(err)
      })

  }
  if (loading) return <Loading></Loading>;
  return (
    <div className="animate__animated animate__fadeIn max-w-2xl mx-auto  border border-orange-50 backdrop-blur-xs p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-6 text-center">
        Add New Listing
      </h2>

      <form onSubmit={handleAddListing} className="space-y-5">
        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">
            Product / Pet Name
          </label>
          <input
            name='name'
            required
            type="text"
            placeholder="Enter name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Category</label>
          <select
            name='category'
            required
            onChange={(e) => setCategory(e.target.value)}
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
            placeholder="Enter price (0 if pet)"
            value={category === "Pets" ? 0 : undefined}
            disabled={category === "Pets"}
            className={`w-full px-4 py-2 border rounded-lg ${category === "Pets"
              ? " cursor-not-allowed"
              : "focus:outline-none focus:ring-2 focus:ring-orange-400"
              }`}
          />
        </div>
        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Location</label>
          <input
            name='location'
            required
            type="text"
            placeholder="Enter location"
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
            placeholder="Write details..."
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
            type="file"
            placeholder="https://example.com/image.jpg"
            className=" file-input file-input-neutral w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Pick Up Date</label>
          <input
            name='date'
            required
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-2">Email</label>
          <input
            name='email'
            required
            type="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 border rounded-lg cursor-not-allowed"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-102 duration-500 transition ease-in-out rounded-2xl w-full"
          >
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
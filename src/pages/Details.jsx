import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const Details = () => {
    const data = useLoaderData()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(()=>{
            document.title = "Details | PawMart"
        },[]);
    const handleOrder = (e) =>{
            e.preventDefault();
            const quantity =
    data.category.toLowerCase() === "pets"
      ? 1
      : Number(e.target.quantity.value) || 1;
      const price = quantity == 1 ? data.price : data.price * quantity;
            const formdata = {
                buyer_name: e.target.buyer_name.value,
                email: e.target.email.value,
                product_id: e.target.product_id.value,
                product_name: e.target.product_name.value,
                quantity: quantity,
                price: price,
                address: e.target.address.value,
                date: e.target.date.value,
                phone: e.target.phone.value,
                notes: e.target.notes.value
            }
            fetch('https://paw-mart-a10-server.vercel.app/orders', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata)
            })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                          position: "center",
                          icon: "success",
                          title: `${data.category == "Pets" ? "Adoption" : "Order"} placed successfully!`,
                          showConfirmButton: false,
                          timer: 2000
                        });
                        navigate("/pets")
            })
            .catch(err =>{
                console.log(err)
            })
    
        }
        const handleNotUser = () =>{
if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${data.category == "Pets" ? "You need to be logged in to adopt a pet." : "You need to be logged in to place an order."}`
            });
            return navigate("/login");
        }
        };
    
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 mt-10 animate__animated animate__fadeInDown">

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={data.image}
          alt={data.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"/>

        <div className="flex-1">
            
          <h1 className="text-2xl  mb-3">
            Name: <span className='font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>{data.name}</span>
          </h1>

          <p className=" mb-2">
            <span className="font-semibold">Category:</span> <span className='text-gray-400 '>{data.category}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Owner’s Email:</span> <span className='text-gray-400 '>{data.email}</span> 
          </p>
          <p className="mb-4">
            <span className="font-semibold">Description:</span> <span className='text-gray-400 '>{data.description}</span>
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed"></p>

          <div className="flex items-center justify-between mb-6">
            <p className="text-lg font-semibold ">
              Location: <span className='bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>{data.location}</span>
            </p>
            <div className='flex items-center gap-1'><p className="text-lg font-semibold ">
              Price: <span className='text-yellow-500'>{data.price}</span>
            </p>
             <span className='text-yellow-500'><FaBangladeshiTakaSign /></span></div>
          </div>
         
           
{
  data.category == "Pets" ? <button
  className="btn w-full bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold rounded-2xl py-2 hover:scale-102 transition ease-in-out duration-500"
  onClick={() => {
    handleNotUser();
    document.getElementById('my_modal_5').showModal();}}
>
  Adopt Now
</button> : <button
  className="btn w-full bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold rounded-2xl py-2 hover:scale-102 transition ease-in-out duration-500"
  onClick={() => {
    handleNotUser();
    document.getElementById('my_modal_5').showModal();
  }}
>
  Order Now
</button>
}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box max-w-lg">
    {
      data.category == "Pets" ? <h3 className="font-bold text-center text-lg bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">Adopt : <span className='text-gray-500'>{data.name}</span></h3> : <h3 className="font-bold text-2xl text-center mb-6 bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">
      Place Your Order 🐾
    </h3>
    }

    <form onSubmit={handleOrder} method="dialog" className="space-y-4">
     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2"> Name</label>
        <input
          type="text"
          name='buyer_name'
          value={user?.displayName}
          readOnly
          className="w-full px-4 py-2 border rounded-lg  cursor-not-allowed"
        />
      </div>

   
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Email</label>
        <input
          type="email"
          name='email'
          value={user?.email}
          readOnly
          className="w-full px-4 py-2 border rounded-lg  cursor-not-allowed"
        />
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Product / Listing ID</label>
        <input
          type="text"
          name='product_id'
          value={data._id}
          readOnly
          className="w-full px-4 py-2 border rounded-lg  cursor-not-allowed"
        />
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Product / Listing Name</label>
        <input
          type="text"
          name='product_name'
          value={data.name}
          readOnly
          className="w-full px-4 py-2 border rounded-lg  cursor-not-allowed"
        />
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Quantity</label>
        <input
          type="number"
          name='quantity'
          required
          defaultValue={data.category.toLowerCase() === "pets" ? "1" : ""}
          disabled={data.category.toLowerCase() === "pets"}
          className={`w-full px-4 py-2 border rounded-lg ${data.category.toLowerCase() === "pets"
        ? " cursor-not-allowed"
        : "focus:outline-none focus:ring-2 focus:ring-orange-400"
    }`}
        />
      </div>

    
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Price</label>
        <input
          type="text"
          name='price'
          value={data.price}
          
          className="w-full px-4 py-2 border rounded-lg  cursor-not-allowed "
        />
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Address</label>
        <textarea
          rows="3"
          name='address'
          placeholder="Enter your address"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Pick Up Date</label>
        <input
          type="date"
          name='date'
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Phone</label>
        <input
          type="tel"
          name='phone'
          placeholder="Enter your phone number"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

     
      <div>
        <label className="block bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text font-medium mb-2">Additional Notes</label>
        <textarea
          rows="3"
          name='notes'
          placeholder="Write any notes..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>

      
      <div className="modal-action flex justify-between">
        <button
        type="submit"
        className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg">
          Confirm Order
        </button>
        <form method="dialog">
    <button className="btn">Close</button>
  </form>
      </div>
    </form>
  </div>
</dialog>

          
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/pets">
          <button className="btn bg-orange-400 hover:bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold  rounded-2xl py-2 hover:scale-102 transition ease-in-out duration-500">
            ← Go Back
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Details;
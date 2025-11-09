import React from 'react';
import { Link } from 'react-router';

const Category = () => {
    return (
        <div className='mt-5 w-11/12 mx-auto '>
            <div className='backdrop-blur-xs bg-black/40 text-center p-2  rounded-2xl w-[350px]'>
            <h1 className='text-center  text-3xl font-bold  bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>Explore By Categories</h1>
        </div>
            <div className='grid grid-cols-2 md:grid-cols-4  mt-3'>
            <Link className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/ynRtft4j/animal.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
                 Pets (Adoption)
                </p></Link>
            <Link className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/N2Xby0BH/dog-food.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
                 Pet Food
                </p></Link>
            <Link className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/gLbYdzSw/pet-collar.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
            Accessories
                </p></Link>
            <Link className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/4ZkW3Kj6/pet-grooming.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
                Pet Care Products
                </p></Link>
        </div>
        </div>
    );
};

export default Category;
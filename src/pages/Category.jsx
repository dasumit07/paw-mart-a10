import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'

const Category = () => {
    
    return (
        <div className='mt-5 w-11/12 mx-auto '>
            <div className='App text-center p-2 text-3xl  rounded-2xl '>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Explore By Category{' '}
        <span style={{ color: 'Orange', fontWeight: 'bold' }}>
          <Typewriter
            words={['Pets', 'Pet Food', 'Accessories', 'Pet Care Products']}
            loop={1000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </h1>
        </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
            <Link to={'/category/pets'} className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/ynRtft4j/animal.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
                 Pets (Adoption)
                </p></Link>
            <Link to={'/category/food'} className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/N2Xby0BH/dog-food.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
                 Pet Food
                </p></Link>
            <Link to={'/category/accessories'} className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/gLbYdzSw/pet-collar.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
            Accessories
                </p></Link>
            <Link to={'/category/products'} className='shadow-sm mx-auto backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition ease-in-out hover:bg-orange-200'>
            <img className='h-20' src="https://i.ibb.co.com/4ZkW3Kj6/pet-grooming.png" alt="" />
                <p className=' font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>
                Pet Care Products
                </p></Link>
        </div>
        </div>
    );
};

export default Category;
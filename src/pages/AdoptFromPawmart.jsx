import React from 'react';

const AdoptFromPawmart = () => {
    return (
        <div class="py-20  text-center w-11/12 mx-auto">
  <h2 class="text-3xl font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text mb-8">🐾 Why Adopt from PawMart?</h2>
  <div className='backdrop-blur-xs bg-black/40 text-center   rounded-2xl'>
    <p class="bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text max-w-2xl mx-auto mb-12 text-lg">
    At PawMart, we believe every pet deserves a loving home. Adopting not only saves lives but
    also fills your heart with unconditional love.
  </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    <div class="bg-linear-to-r from-orange-200 to-orange-50 rounded-xl shadow-md p-6 hover:scale-105 transition">
      <img className='rounded-xl mb-3' src="https://i.ibb.co.com/9HWwMYHw/puppies-ccca1b0776bb47c0b61b2e8a52b9dd92.jpg" alt="" />
      <h3 class="text-xl font-semibold mb-2 bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Save a Life</h3>
      <p class="text-gray-500">Thousands of pets need homes. Your adoption can make a difference.</p>
    </div>

    <div class="bg-linear-to-r from-orange-200 to-orange-50  rounded-xl shadow-md p-6 hover:scale-105 transition">
      <img className='rounded-xl mb-3' src="https://i.ibb.co.com/MyQCBYT7/most-loyal-dog-breeds-st-bernard-1571189105.jpg" alt="" />
      <h3 class="text-xl font-semibold mb-2 bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Gain a True Friend</h3>
      <p class="text-gray-500">Adopted pets are loyal, loving, and grateful companions.</p>
    </div>

    <div class="bg-linear-to-r from-orange-200 to-orange-50  rounded-xl shadow-md p-6 hover:scale-105 transition">
      <img className='rounded-xl mb-3' src="https://i.ibb.co.com/RptfrQ1q/family-adopt-dog-6c2f1eedd593433f85549e94e07af8bf.jpg" alt="" />
      <h3 class="text-xl font-semibold mb-2 bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Support a Community</h3>
      <p class="text-gray-500">Every adoption supports local shelters and responsible pet care.</p>
    </div>
  </div>
</div>

    );
};

export default AdoptFromPawmart;
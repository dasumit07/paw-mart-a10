import React from 'react';

const MeetHero = () => {
    return (
        <div class="my-8 text-center w-11/12 mx-auto flex flex-col items-center">
  <div className='backdrop-blur-xs bg-black/40 text-center p-2 mb-5  rounded-2xl w-[400px]'>
    <h2 class="text-3xl font-bold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">🦸 Meet Our Pet Heroes</h2>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
    <div class="bg-orange-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
      <img src="https://i.ibb.co.com/r2ypx4jj/Sadia-Rahman-headshot-scaled.jpg" alt="Hero1" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"/>
      <h3 class="text-xl font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">Sadia Rahman</h3>
      <p class="text-sm text-orange-600">Pet Rescuer</p>
      <p class="mt-2 text-gray-600">“Adopting my first cat changed my life forever.”</p>
    </div>

    <div class="bg-orange-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
      <img src="https://i.ibb.co.com/rGKBdSCH/avatars-000568936152-17omjj-t240x240.jpg" alt="Hero2" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"/>
      <h3 class="text-xl font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">Tanvir Ahmed</h3>
      <p class="text-sm text-orange-600">Volunteer</p>
      <p class="mt-2 text-gray-600">“Every adoption is a story of love and second chances.”</p>
    </div>

    <div class="bg-orange-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
      <img src="https://i.ibb.co.com/CsvqYkz0/Dr-Md-Zahirul-Islam-222x300.jpg" alt="Hero3" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"/>
      <h3 class="text-xl font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">Rafiul Islam</h3>
      <p class="text-sm text-orange-600">Pet Care Specialist</p>
      <p class="mt-2 text-gray-600">“Helping pets find homes is my biggest joy.”</p>
    </div>

    <div class="bg-orange-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
      <img src="https://i.ibb.co.com/GQLZj2GV/images-1.jpg" alt="Hero4" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"/>
      <h3 class="text-xl font-semibold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">Mim Chowdhury</h3>
      <p class="text-sm text-orange-600">Animal Lover</p>
      <p class="mt-2 text-gray-600">“Adoption builds a bridge between love and compassion.”</p>
    </div>
  </div>
</div>

    );
};

export default MeetHero;
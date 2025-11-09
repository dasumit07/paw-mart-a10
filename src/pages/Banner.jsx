import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const Banner = () => {
    return (
        <div className="relative h-[80vh] w-11/12 mx-auto rounded-3xl overflow-hidden shadow-lg mt-20">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/MxM3MzvG/Dog-Cat-Getty-Images-10093564.webp')" }}
          >
            <div className="backdrop-blur-xs bg-black/40 text-center p-4 rounded-2xl">
              <h1 className="text-xl md:text-3xl font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
                Find Your Furry Friend Today!
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/Jw61Kxqb/Pets.jpg')" }}
          >
            <div className="backdrop-blur-xs bg-black/40 text-center p-4 rounded-2xl">
              <h1 className="text-xl md:text-3xl font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
                Adopt, Don’t Shop — Give a Pet a Home.
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/xyhWnKR/family-pet-care-cover.jpg')" }}
          >
            <div className="backdrop-blur-xs bg-black/40 text-center p-4 rounded-2xl">
              <h1 className="text-xl md:text-3xl font-bold bg-linear-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
                Because Every Pet Deserves Love and Care.
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;
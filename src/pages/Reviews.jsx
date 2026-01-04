import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        name: "John Doe",
        photo: "https://i.ibb.co.com/m5TbsnR5/pic-1.png",
        rating: 5,
        text: "Adopting from PawMart was smooth and amazing! Our dog is now part of our family."
    },
    {
        name: "Jane Smith",
        photo: "https://i.ibb.co.com/8gK20RVj/images-9.jpg",
        rating: 4,
        text: "Great experience with PawMart. The staff guided us properly during adoption."
    },
    {
        name: "Alex Johnson",
        photo: "https://i.ibb.co.com/0R64kKzw/10-1.webp",
        rating: 5,
        text: "High-quality products and wonderful adoption support!"
    }
];

const Reviews = () => {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto hover:scale-102 duration-500 transition">
                {reviews.map((review, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <img src={review.photo} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h4 className="font-semibold text-gray-500">{review.name}</h4>
                                <div className="flex text-yellow-400">
                                    {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;

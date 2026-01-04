import React from 'react';

const stats = [
  { title: "Pets Adopted", value: "500+" },
  { title: "Happy Customers", value: "1200+" },
  { title: "Products Sold", value: "1500+" },
  { title: "Volunteer Members", value: "80+" }
];

const Statistics = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-8 text-center">Our Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-11/12 mx-auto text-center hover:scale-102 duration-500 transition">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

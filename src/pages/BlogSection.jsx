import React from 'react';
import { Link } from 'react-router';


const blogs = [
  {
    title: "5 Tips to Keep Your Dog Healthy",
    image: "https://i.ibb.co.com/pjndM2ZH/images-11.jpg",
    link: "https://www.instagram.com/reel/DRJUE8iDgTk/"
  },
  {
    title: "How to Train Your Cat Effectively",
    image: "https://i.ibb.co.com/MyB9Whmd/images-12.jpg",
    link: "https://www.facebook.com/Pam.JohnsonBennett/posts/train-your-cat-the-correct-way-cats-are-very-smart-and-theyre-easy-to-train-but-/991440799009075/"
  },
  {
    title: "Choosing the Best Pet Food",
    image: "https://i.ibb.co.com/CKYJf6HD/6323971706b9ddb5bca4d8c7-IMG-4443-241-7wc-Qfsh49.jpg",
    link: "https://colaskitchen.com/blog-posts/five-qualities-that-a-dog-food-must-have"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-8 text-center">Latest Blog & Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto hover:scale-102 duration-500 transition">
        {blogs.map((blog, index) => (
          <Link key={index} to={blog.link} className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg text-gray-500">{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

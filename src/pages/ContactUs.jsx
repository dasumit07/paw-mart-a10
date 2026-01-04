import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { IoPawSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your message has been sent successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 mt-20 mb-20">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-center mb-10">
                Have questions or suggestions? Reach out to us and we'll get back to you!
            </p>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <IoPawSharp className="text-orange-500 text-3xl" />
                        <span className="font-semibold text-lg">PawMart</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdEmail className="text-orange-500 text-2xl" />
                        <span>pawmart@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdPhone className="text-orange-500 text-2xl" />
                        <span>+880 1234 567 890</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdLocationOn className="text-orange-500 text-2xl" />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </div>

            
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border p-3 rounded text-black font-semibold"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border p-3 rounded text-black font-semibold"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border p-3 rounded resize-none text-black font-semibold"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;

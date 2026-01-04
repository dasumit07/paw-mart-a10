import React, { useState } from 'react';

const faqs = [
    { q: "How can I adopt a pet?", a: "You can browse our pets and click 'Adopt Now' on the pet page." },
    { q: "What are the adoption fees?", a: "Fees vary depending on the pet and location. Details are on each pet's page." },
    { q: "Can I return a pet after adoption?", a: "We ensure compatibility before adoption, but contact support if needed." },
    { q: "Do you deliver pet products?", a: "Yes, we deliver all products purchased through PawMart." }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="py-16 ">
            <h2 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text mb-8 text-center">Frequently Asked Questions</h2>
            <div className="w-11/12 md:w-2/3 mx-auto space-y-4 hover:scale-102 duration-500 transition">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl shadow p-4 cursor-pointer" onClick={() => toggle(i)}>
                        <h3 className="font-semibold text-black text-lg flex justify-between items-center">
                            {faq.q}
                            <span>{openIndex === i ? "-" : "+"}</span>
                        </h3>
                        {openIndex === i && <p className="mt-2 text-gray-600">{faq.a}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;

import React from "react";
import { Link } from "react-router";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 mt-20 mb-20">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                PawMart is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information Collection</h2>
            <p className="mb-4">
                We collect personal information such as name, email, phone number, and payment details when you register or make a purchase.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
            <p className="mb-4">
                The information collected is used to process orders, communicate with you, and improve our services. We do not sell your information to third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies & Tracking</h2>
            <p className="mb-4">
                We may use cookies and tracking technologies to enhance user experience and analyze site usage.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
            <p className="mb-4">
                We implement security measures to protect your personal information. However, we cannot guarantee 100% security on the internet.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
            <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy periodically. Continued use of the site constitutes acceptance of any changes.
            </p>

            <p className="mt-8">
                For any questions regarding our privacy practices, please <Link to="/contact-us" className="text-orange-500 underline">contact us</Link>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;

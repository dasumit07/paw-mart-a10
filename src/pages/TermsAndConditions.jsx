import React from "react";
import { Link } from "react-router";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-20 mb-20">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      
      <p className="mb-4">
        Welcome to PawMart! By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Website</h2>
      <p className="mb-4">
        You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Product Information</h2>
      <p className="mb-4">
        We make every effort to display accurate product information. However, we do not guarantee that all information is error-free.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Orders & Payments</h2>
      <p className="mb-4">
        All orders are subject to availability. Payments must be made through secure and authorized payment gateways.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Returns & Refunds</h2>
      <p className="mb-4">
        Returns and refunds are handled according to our Return Policy. Please contact us for any issues regarding products purchased.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Liability</h2>
      <p className="mb-4">
        PawMart is not liable for any damages arising from the use of the website or products purchased.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes</h2>
      <p className="mb-4">
        We reserve the right to update or modify these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
      </p>

      <p className="mt-8">
        For any questions regarding these terms, please <Link to="/contact-us" className="text-orange-500 underline">contact us</Link>.
      </p>
    </div>
  );
};

export default TermsAndConditions;

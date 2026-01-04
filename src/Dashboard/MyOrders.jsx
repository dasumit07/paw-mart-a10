import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from 'sweetalert2';
import Loading from '../pages/Loading';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "My Orders | PawMart"
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`https://paw-mart-a10-server.vercel.app/myOrders?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })

  }, [user, setOrders, setLoading]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("PawMart - My Orders Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`User: ${user.displayName || "N/A"} (${user.email})`, 14, 30);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 37);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price (TK)",
      "Quantity",
      "Total (TK)",
      "Address",
      "Date",
      "Phone"
    ];

    const tableRows = [];
    let grandTotal = 0;

    orders.forEach(order => {
      const total = Number(order.price || 0) * Number(order.quantity || 1);
      grandTotal += total;

      const rowData = [
        order.product_name,
        order.buyer_name,
        order.price,
        order.quantity,
        total.toFixed(2),
        order.address,
        order.date,
        order.phone
      ];
      tableRows.push(rowData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 45,
      theme: 'grid',
      styles: { fontSize: 9 },
      headStyles: { fillColor: [255, 140, 0], textColor: 255 },
    });
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(13);
    doc.text(`Grand Total: ${grandTotal.toFixed(2)} TK`, 14, finalY);

    doc.save(`PawMart_MyOrders_${user.displayName || "user"}.pdf`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://paw-mart-a10-server.vercel.app/orders/${id}`, {
          method: "DELETE",

        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setOrders(prevListings => prevListings.filter(item => item._id !== id));
          })
          .catch(err => {
            console.log(err)
          })

        Swal.fire({
          title: "Canceled!",
          text: "Your order has been canceled.",
          icon: "success"
        });
      }
    });
  }
  if (loading) return <Loading></Loading>;
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate__animated animate__fadeIn">
      <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">
        🐾 My Orders
      </h2>

      <div className="overflow-x-auto  border border-orange-50 backdrop-blur-xs  shadow-lg rounded-2xl">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-linear-to-r from-gray-600 to-gray-300 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Product/Listing Name</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center">Phone</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-orange-50 transition ease-in-out"
                >
                  <td className="py-3 px-4 font-medium text-gray-400">{item.product_name}</td>
                  <td className="py-3 px-4 font-medium text-gray-400">{item.buyer_name}</td>
                  <td className="py-3 px-4 text-gray-400">{item.price} TK</td>
                  <td className="py-3 px-4 text-gray-400">{item.quantity}</td>
                  <td className="py-3 px-4 text-gray-400">{item.address}</td>
                  <td className="py-3 px-4 text-gray-400">{item.date}</td>
                  <td className="py-3 px-4 text-gray-400">{item.phone}</td>
                  <td className="py-3 px-4 text-gray-500">
                    <button onClick={() => handleDelete(item._id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No Orders found 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-center mt-3'>
        <button onClick={handleDownloadPDF} className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
          “Download Report”
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
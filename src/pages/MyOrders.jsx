import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
    const {user, setLoading} = useContext(AuthContext);
        const [orders, setOrders] = useState([])
    
        useEffect(()=>{
            fetch(`http://localhost:3000/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    
        },[user, setOrders, setLoading]);

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
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 mt-15">
      <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-orange-600 to-orange-300 text-transparent bg-clip-text">
        🐾 My Orders
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-linear-to-r from-orange-600 to-orange-300 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Product/Listing Name</th>
              <th className="py-3 px-4 text-left">Buyer Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center">Phone</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-orange-50 transition ease-in-out"
                >
                 <td className="py-3 px-4 font-medium">{item.product_name}</td>
                  <td className="py-3 px-4 font-medium">{item.buyer_name}</td>
                  <td className="py-3 px-4">{item.price}</td>
                  <td className="py-3 px-4">{item.quantity} TK</td>
                  <td className="py-3 px-4">{item.address}</td>
                  <td className="py-3 px-4 text-gray-500">{item.date}</td>
                  <td className="py-3 px-4 text-gray-500">{item.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No Orders found 😿
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
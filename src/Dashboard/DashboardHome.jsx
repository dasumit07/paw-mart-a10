import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";
import Loading from "../pages/Loading";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const [overview, setOverview] = useState(null);
  const [charts, setCharts] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchOverview();
      fetchCharts();
      fetchOrders();
    }
  }, [user]);

  const fetchOverview = async () => {
    const res = await fetch(
      `https://paw-mart-a10-server.vercel.app/dashboard/user-overview?email=${user.email}`
    );
    setOverview(await res.json());
  };

  const fetchCharts = async () => {
    const res = await fetch(
      `https://paw-mart-a10-server.vercel.app/dashboard/user-charts?email=${user.email}`
    );
    setCharts(await res.json());
  };

  const fetchOrders = async () => {
    const res = await fetch(
      `https://paw-mart-a10-server.vercel.app/dashboard/my-orders?email=${user.email}`
    );
    setOrders(await res.json());
  };

  if (!overview || !charts) return <Loading></Loading>;

  return (
    <div className="p-6 space-y-10 animate__animated animate__fadeIn">

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="My Listings" value={overview.myPets} />
        <Card title="My Orders" value={overview.totalOrders} />
        <Card title="Total Spent" value={`৳${overview.totalSpent}`} />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* PIE */}
        <div className="bg-base-100 p-6 shadow rounded-xl">
          <h3 className="font-bold mb-4">Order Status</h3>
          <PieChart width={350} height={300}>
            <Pie
              data={charts.orderStatus}
              dataKey="count"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={100}
            >
              {charts.orderStatus.map((_, i) => (
                <Cell key={i} fill={["#22c55e", "#f97316", "#ef4444"][i % 3]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* LINE */}
        <div className="bg-base-100 p-6 shadow rounded-xl">
          <h3 className="font-bold mb-4">Spending Over Time</h3>
          <LineChart width={350} height={300} data={charts.spending}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#4f46e5" />
          </LineChart>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-base-100  shadow rounded-xl overflow-x-auto">
        <h3 className="font-bold mb-4">My Orders</h3>
        <table className="table min-w-full text-sm text-gray-700 table-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr className="text-gray-400" key={o._id}>
                <td>{i + 1}</td>
                <td>{o.product_name}</td>
                <td>{o.quantity}</td>
                <td>৳{o.price}</td>
                <td>{o.date}</td>
                <td>{o.address}</td>
                <td>{o.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-base-100 shadow rounded-xl p-6 text-center">
    <h4 className="font-semibold">{title}</h4>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default DashboardHome;


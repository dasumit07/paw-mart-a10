import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PetsSuplies from "../pages/PetsSuplies";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Notfound from "../pages/NotFound";
import AddListing from "../pages/AddListing";
import MyListings from "../pages/Mylistings";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../pages/Details";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:3000/latest-items')
        },
        {
          path: "/pets",
          element: <PetsSuplies></PetsSuplies>,
          loader:()=> fetch('http://localhost:3000/pets')
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/addListing",
          element: <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        },
        {
          path: "/myListings",
          element: <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        },
        {
          path: "/myOrders",
          element: <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        },
        {
          path: "/pets/:id",
          element: <PrivateRoute>
            <Details></Details>
          </PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:3000/pets/${params.id}`)
        }
    ],
  },
  {
    path:"*",
    element: <Notfound></Notfound>
  }
]);
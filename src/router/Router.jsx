import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PetsSuplies from "../pages/PetsSuplies";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Notfound from "../pages/NotFound";
import AddListing from "../pages/AddListing";

import MyOrders from "../pages/MyOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../pages/Details";
import UpdateItem from "../pages/UpdateItem";
import Loading from "../pages/Loading";
import MyListings from "../pages/MyListings";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element:<Home></Home>,
            loader:()=> fetch('https://paw-mart-a10-server.vercel.app/latest-items'),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/pets",
          element: <PetsSuplies></PetsSuplies>,
          loader:()=> fetch('https://paw-mart-a10-server.vercel.app/pets'),
          hydrateFallbackElement: <Loading></Loading>
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
          path: "/update/:id",
          element: <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>,
          loader:({params})=> fetch(`https://paw-mart-a10-server.vercel.app/pets/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
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
          loader:({params})=> fetch(`https://paw-mart-a10-server.vercel.app/pets/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
           path: "/category/:category",
           element: <PetsSuplies></PetsSuplies>,
           loader: ({ params }) => fetch(`https://paw-mart-a10-server.vercel.app/category?category=${params.category}`)
}
    ],
  },
  {
    path:"*",
    element: <Notfound></Notfound>
  }
]);
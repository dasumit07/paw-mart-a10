import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PetsSuplies from "../pages/PetsSuplies";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Notfound from "../pages/NotFound";
import AddListing from "../Dashboard/AddListing";

import MyOrders from "../Dashboard/MyOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../pages/Details";
import UpdateItem from "../pages/UpdateItem";
import Loading from "../pages/Loading";
import MyListings from "../Dashboard/MyListings";
import DashBoardLayout from "../layouts/DashboardLayout";
import MyProfile from "../Dashboard/MyProfile";
import DashboardHome from "../Dashboard/DashboardHome";
import AboutUs from "../pages/AboutUs";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ContactUs from "../pages/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://paw-mart-a10-server.vercel.app/latest-items'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/pets",
        element: <PetsSuplies></PetsSuplies>,
        loader: () => fetch('https://paw-mart-a10-server.vercel.app/pets'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
     
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <UpdateItem></UpdateItem>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://paw-mart-a10-server.vercel.app/pets/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
     
      {
        path: "/pets/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://paw-mart-a10-server.vercel.app/pets/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/category/:category",
        element: <PetsSuplies></PetsSuplies>,
        loader: ({ params }) => fetch(`https://paw-mart-a10-server.vercel.app/category?category=${params.category}`)
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "addListing",
        element:<AddListing></AddListing>
      },
       
      {
        path: "myListings",
        element:<MyListings></MyListings>
      },
       {
        path: "myOrders",
        element:<MyOrders></MyOrders>
       },
      {
        path: "profile",
        element: <MyProfile></MyProfile>
      }
    ]
  },
  {
    path: "*",
    element: <Notfound></Notfound>
  }
]);
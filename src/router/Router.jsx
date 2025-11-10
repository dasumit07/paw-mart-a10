import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PetsSuplies from "../pages/PetsSuplies";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Notfound from "../pages/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element:<Home></Home>
        },
        {
          path: "/pets",
          element: <PetsSuplies></PetsSuplies>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        }
    ],
  },
  {
    path:"*",
    element: <Notfound></Notfound>
  }
]);
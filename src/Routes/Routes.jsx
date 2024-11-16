import { createBrowserRouter } from "react-router-dom";
import Overview from "../Dashboard/Overview";
import AddProduct from "../Dashboard/Seller/AddProduct";
import MyProduct from "../Dashboard/Seller/MyProduct";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main-Layout/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([

    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"products",
          element: <Products></Products>
        },
        {
          path:"/about",
          element: <About></About>
        },
        {
          path:"/contact-us",
          element: <Contact></Contact>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
        path:"/dashboard/overview",
        element:<Overview></Overview>
        },
        {
        path:"/dashboard/my-products",
        element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
        },
        {
        path:"/dashboard/add-products",
        element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
      ]
    }
  ]);
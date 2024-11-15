import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main-Layout/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";

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
  ]);
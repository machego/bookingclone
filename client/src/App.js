import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Login from "./pages/login/Login.jsx"



function App() {
  /*
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  */

  const router = createBrowserRouter([
    /*{
      path: "/",
      element: <Layout />,
      children: [*/
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/hotels",
          element: <List/>
        },
        {
          path: "/hotels/:id",
          element: <Hotel/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
   /* },
  ]*/);


  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Navbar/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/Home_Page/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error_Page/Error";
import RestaurantPage from "./components/Restaurant_Menu/RestaurantPage";
import GetUserLocation from "./components/GetUserLocation/GetUserLocation";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <GetUserLocation isAuthenticated={isAuthenticated}/>
      )}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: `/restaurant/:resId`,
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/getlocation",
    element: <GetUserLocation />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);

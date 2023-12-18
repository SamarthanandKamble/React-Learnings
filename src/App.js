import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Navbar/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/Home_Page/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error_Page/Error";
import RestaurantPage from "./components/Restaurant_Menu/RestaurantPage";
import { GetUserLocation } from "./components/GetUserLocation/GetUserLocation";
import { cartStore } from "./utils/Redux/Store";
import { Provider } from "react-redux";
import CartPage from "./components/Restaurant_Menu/CartPage";
import { useSelector } from "react-redux";

const App = () => {
  const isPlaceIdAvailable = false;
  console.log("App.js rendered");
  return (
    <Provider store={cartStore}>
      <div className="main-container">
        {isPlaceIdAvailable ? (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        ) : (
          <GetUserLocation />
        )}
      </div>
    </Provider>
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
        path: "About",
        element: <About />,
      },
      {
        path: `restaurant/:resId`,
        element: <RestaurantPage />,
      },
      {
        path: `cart`,
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <GetUserLocation />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);

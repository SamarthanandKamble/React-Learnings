import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Navbar/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/Home_Page/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error_Page/Error";
import RestaurantPage from "./components/Restaurant_Menu/RestaurantPage";
import { GetUserLocation } from "./components/GetUserLocation/GetUserLocation";
import CoordinateContext from "./utils/CoordinateContext";
import { cartStore } from "./utils/Redux/Store";
import { Provider } from "react-redux";
import CartPage from "./components/Restaurant_Menu/CartPage";

const App = () => {
  const [userLocation, setUserLocation] = useState(true);
  const [coord, setCoord] = useState({
    lat: "lat",
    lng: "lng",
  });

  return (
    <Provider store={cartStore}>
      <CoordinateContext.Provider value={{ lat: coord.lat, lng: coord.lng }}>
        <div className="main-container">
          {userLocation ? (
            <GetUserLocation
              setUserLocation={setUserLocation}
              setCoord={setCoord}
            />
          ) : (
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          )}
        </div>
      </CoordinateContext.Provider>
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
        path: "/About",
        element: <About />,
      },
      {
        path: `/restaurant/:resId`,
        element: <RestaurantPage />,
      },
      {
        path: `/cart`,
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/location",
    element: <GetUserLocation />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);

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

const App = () => {
  const [userLocation, setUserLocation] = useState(true);
  const [coord, setCoord] = useState({
    lat: "lat",
    lng: "lng",
  });

  return (
    <CoordinateContext.Provider value={{ lat: coord.lat, lng: coord.lng }}>
      <div>
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
  );
};

const router = createBrowserRouter([
  {
    path: "/location",
    element: <GetUserLocation />,
  },
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardContainer />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);

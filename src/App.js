import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      {/* <SearchBox /> */}
      <CardContainer />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);

import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";

const CuisineTitle = ({ cuisineList }) => {
  console.log("cuisineList", cuisineList);
  console.log("Cuisine List rendered");
  const [cuisineTitle, setCuisineTitle] = useState([]);

  if (cuisineList.length < 0) {
    return;
  }
  
  useEffect(() => {
    getCuisineTitle();
  }, []);

  function getCuisineTitle() {
    console.log("cuisineList222", cuisineList);
    console.log("Inside getCuisineTitle");
    let data = cuisineList.filter(
      (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
    );
    console.log("data :", data)
    // setCuisineTitle();
  }

  

  return (
    <div className="cuisine-info">
      {cuisineTitle.length > 0
        ? cuisineTitle.map((cuisine) => <h1>"sasa"</h1>)
        : ""}
    </div>
  );
};
export default CuisineTitle;

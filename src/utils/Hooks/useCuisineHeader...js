import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";

const useCuisineHeader = (cuisineList) => {
  console.log("cuisine list :", cuisineList);
  const [cuisineTitle, setCuisineTitle] = useState([]);

  useEffect(() => {
    getCuisineTitle();
  }, [cuisineList]);

  function getCuisineTitle() {
    let data = cuisineList.filter(
      (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
    );

    console.log("data", data);
    setCuisineTitle(
      cuisineList.filter(
        (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
      )
    );
  }
  return cuisineTitle;
};
export default useCuisineHeader;

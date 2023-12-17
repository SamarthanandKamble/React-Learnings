import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";

const useCuisineHeader = (cuisineList) => {
  // console.log("cuisine list :", cuisineList);
  const [cuisineTitle, setCuisineTitle] = useState([]);

  useEffect(() => {
    getCuisineTitle();
  }, [cuisineList]);

  function getCuisineTitle() {
 
    setCuisineTitle(
      cuisineList.filter(
        (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
      )
    );
  }
  return cuisineTitle;
};
export default useCuisineHeader;

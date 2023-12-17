import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";
import CuisineInfo from "./CuisineInfo";
import CuisineTitle from "./CuisineTitle";
import useCuisineHeader from "../../utils/Hooks/useCuisineHeader..";
const CuisineHeader = ({ cuisineList }) => {

  const cuisineHook = useCuisineHeader(cuisineList);

  return (
    <div className="cuisine-title-cnt">
      {cuisineHook &&
        cuisineHook.map((cuisine, index) => (
          <CuisineTitle data={cuisine.card.card} key={index} />
        ))}
    </div>
  );
};
export default CuisineHeader;

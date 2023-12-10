import React from "react";
import { RESTAURANT_IMAGE_SRC } from "../../utils/constant";
const CuisineCard = ({ cuisineData }) => {
  return (
    <div className="cuisine-card">
      <img src={RESTAURANT_IMAGE_SRC + cuisineData.imageId} className="cuisine-card-image"/>
    </div>
  );
};

export default CuisineCard;

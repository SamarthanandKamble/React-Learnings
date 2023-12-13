import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";
import CuisineInfo from "./CuisineInfo";
import CuisineTitle from "./CuisineTitle";

const CuisineHeader = ({ cuisineList }) => {
  const [cuisineTitle, setCuisineTitle] = useState([]);

  useEffect(() => {
    getCuisineTitle();
  }, [cuisineList]);

  function getCuisineTitle() {
    // let data = cuisineList.filter(
    //   (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
    // );

    // console.log("data", data);
    setCuisineTitle(
      cuisineList.filter(
        (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
      )
    );
  }

  return (
    <div className="cuisine-title-cnt">
      {cuisineTitle &&
        cuisineTitle.map((cuisine, index) => (
          <CuisineTitle data={cuisine.card.card} key={index} />
        ))}
    </div>
  );
};
export default CuisineHeader;

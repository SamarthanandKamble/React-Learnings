import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";
import CuisineInfo from "./CuisineInfo";
import CuisineTitle from "./CuisineTitle";
import useCuisineHeader from "../../utils/Hooks/useCuisineHeader..";
const CuisineHeader = ({ cuisineList }) => {
  // const [cuisineTitle, setCuisineTitle] = useState([]);

  const cuisineHook = useCuisineHeader(cuisineList);
  console.log("cuisineHook : ", cuisineHook);

  // useEffect(() => {
  //   getCuisineTitle();
  // }, [cuisineList]);

  // function getCuisineTitle() {
  //   // let data = cuisineList.filter(
  //   //   (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
  //   // );

  //   // console.log("data", data);
  //   setCuisineTitle(
  //     cuisineList.filter(
  //       (title) => title?.card?.card?.["@type"] === CUISINE_TITLE
  //     )
  //   );
  // }

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

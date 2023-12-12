import { useState, useEffect } from "react";
import { CUISINE_TITLE } from "../../utils/constant";
import CuisineInfo from "./CuisineInfo";
const CuisineTitle = ({ cuisineList }) => {
  // console.log("cuisineList", cuisineList);
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

  function checkIfOpen(e) {
    console.log(e);
  }

  if (cuisineList.length <= 0) {
    return;
  }
  return (
    <div className="cuisine-title-cnt">
      {cuisineTitle.length > 0 &&
        cuisineTitle.map((cuisine, index) => (
          <div key={index}>
            <div className="cuisine-title-div" onClick={checkIfOpen}>
              <p className="cuisine-title">
                {cuisine.card.card.title} ({cuisine.card.card.itemCards.length})
              </p>
              <span>Dropdown</span>
            </div>
            <div className="cuisine-info-cnt">
              {cuisine.card.card.itemCards.map(({ card }) => (
                <CuisineInfo cuisineList={card} key={card.info.id} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
export default CuisineTitle;

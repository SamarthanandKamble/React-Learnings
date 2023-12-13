import { useState, useEffect } from "react";
import { RESTAURANT_PAGE_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";
import CouponsPage from "./CouponsPage";
import RestaurantBriefInfo from "./RestaurantBriefInfo";
import CuisineHeader from "./CuisineHeader";
const RestaurantPage = () => {
  let { resId } = useParams();

  const [restaurantData, setRestaurantData] = useState([]);
  const [couponsData, setCouponsData] = useState([]);
  const [cuisineTitleList, setCuisineTitleList] = useState([]);
  useEffect(() => {
    fetchRestaurantMenuPage();
  }, []);

  async function fetchRestaurantMenuPage() {
    let result = await fetch(RESTAURANT_PAGE_URL + resId);
    let { data } = await result.json();

    setRestaurantData(data?.cards[0]?.card?.card?.info);
    // console.log("RestaurantData", data?.cards[0]?.card?.card?.info);
    setCouponsData(data?.cards[1].card.card.gridElements.infoWithStyle.offers);
    // console.log(
    //   "Coupons Data",
    //   data?.cards[1].card.card.gridElements.infoWithStyle.offers
    // );
    setCuisineTitleList(
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    // console.log(
    //   "Cuisine List",
    //   data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  }

  if (resId === undefined) {
    return;
  }
  return (
    <div className="rest-page-cnt">
      <RestaurantBriefInfo restaurantData={restaurantData} />
      <div className="time-to-deliver">
        {restaurantData?.sla?.slaString}
        <span className="price-for-two">
          {restaurantData.costForTwoMessage}
        </span>
      </div>
      <div className="div-2">
        <CouponsPage couponsData={couponsData} />
      </div>
      <div>
        <CuisineHeader cuisineList={cuisineTitleList} />
      </div>
    </div>
  );
};

export default RestaurantPage;

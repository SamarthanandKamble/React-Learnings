import { useState, useEffect } from "react";
import { RESTAURANT_PAGE_URL } from "../../utils/constant";
import { CUISINE_IMAGE_SRC } from "../../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantPage = () => {
  let { resId } = useParams();

  const [restaurantData, setRestaurantData] = useState([]);
  const [couponsData, setCouponsData] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  useEffect(() => {
    fetchRestaurantMenuPage();
  }, []);

  async function fetchRestaurantMenuPage() {
    let result = await fetch(RESTAURANT_PAGE_URL + resId);
    let { data } = await result.json();

    setRestaurantData(data?.cards[0]?.card?.card?.info);
    setCouponsData(data?.cards[1].card.card.gridElements.infoWithStyle.offers);
    setCuisineList(
      data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

  if (resId === undefined) {
    return;
  }
  return (
    <div className="rest-page-cnt">
      <div className="restaurant-info">
        <div className="restaurant-name div-1">{restaurantData.name}</div>
        <div className="restaurant-rating div-1">
          {restaurantData.avgRatingString}
        </div>
        <div className="restaurant-cuisine div-1">
          {restaurantData.cuisines}
        </div>
        <div className="restaurant-stars div-1">
          {restaurantData.totalRatingsString}
        </div>
        <div className="restaurant-address div-1">
          {restaurantData.areaName} {restaurantData?.sla?.lastMileTravelString}
        </div>
      </div>
      <div className="time-to-deliver">
        {restaurantData?.sla?.slaString}
        <span className="price-for-two">
          {restaurantData.costForTwoMessage}
        </span>
      </div>
      <div className="div-2">
        <div className="coupons">
          {couponsData.map(({ info }, index) => (
            <div key={index} className="col-1">
              {info.offerTag ? (
                <div className="offer-tag">
                  <span className="offer-text">{info.offerTag}</span>
                  <hr className="offer-separate-bar" />
                </div>
              ) : (
                ""
              )}
              <div className="col-2">
                <span>*</span>
                <li className="itemCoupon">{info.header}</li>
                <p className="coupons-text">
                  {info.couponCode} | {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cuisine-info">
        <h2 className="cuisine-title">Recommended</h2>
        <span className="dropdown">Dropdown</span>
        {cuisineList.map(({ card }, index) => (
          <div className="row-1" key={card.info.id}>
            <div className="cuisine-info">
              <ul className="cuisine-info-list">
                <li className="cuisine-item">Veg/non-veg</li>
                <li className="cuisine-item">{card.info.name}</li>
                <li className="cuisine-item">Rs {card.info.price / 100}</li>
                <li className="cuisine-item">{card.info.description}</li>
              </ul>
            </div>
            <div className="cuisine-img-div">
              <img
                alt="cuisine image"
                src={CUISINE_IMAGE_SRC + card.info.imageId}
                className="cuisine-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;

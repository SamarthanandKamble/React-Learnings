const RestaurantBriefInfo = ({ restaurantData }) => {
//   console.log(restaurantData);
  if (restaurantData === undefined) {
    return;
  }
  return (
    <div className="restaurant-info">
      <div className="restaurant-name div-1">{restaurantData.name}</div>
      <div className="restaurant-rating div-1">
        {restaurantData.avgRatingString}
      </div>
      <div className="restaurant-cuisine div-1">{restaurantData.cuisines}</div>
      <div className="restaurant-stars div-1">
        {restaurantData.totalRatingsString}
      </div>
      <div className="restaurant-address div-1">
        {restaurantData.areaName} {restaurantData?.sla?.lastMileTravelString}
      </div>
    </div>
  );
};

export default RestaurantBriefInfo;

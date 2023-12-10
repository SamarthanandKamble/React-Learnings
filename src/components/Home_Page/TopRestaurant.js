import { RESTAURANT_IMAGE_SRC } from "../../utils/constant";
import Title from "../Title/Title";

const TopRestaurant = ({ topRestaurant }) => {
  if (topRestaurant === undefined || topRestaurant.length <= 0) {
    return;
  }

  return (
    <div className="top-restaurant">
      <Title title={"Top restaurant chains"} />
      {topRestaurant.map((restaurant, index) => (
        <img
          key={index}
          src={RESTAURANT_IMAGE_SRC + restaurant.info.cloudinaryImageId}
          className="top-restaurant-img"
        />
      ))}
    </div>
  );
};

export default TopRestaurant;

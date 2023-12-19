import { RESTAURANT_IMAGE_SRC } from "../../utils/constant";

const Card = ({ cardData }) => {
  console.log("cardData", cardData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = cardData;
  return (
    <div className="card-cnt">
      <div className="card-image-div">
        <img
          src={RESTAURANT_IMAGE_SRC + cloudinaryImageId}
          alt="food-image"
          className="food-image"
        />
      </div>
      <span className="card-item" id="card-hotel-name">
        {name}
      </span>
      <span className="card-item" id="cuisine-name">
        {cuisines.join()}
      </span>
      <span className="card-item" id="cuisine-price">
        {costForTwo}
      </span>
      <span className="card-items" id="rating">
        {avgRating}
      </span>
    </div>
  );
};

export default Card;

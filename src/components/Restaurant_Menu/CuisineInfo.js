import { CUISINE_IMAGE_SRC } from "../../utils/constant";

const CuisineInfo = ({ cuisineList }) => {
  const { name, price, description, imageId } = cuisineList.info;
  if (cuisineList === undefined) {
    return;
  }
  return (
    <div className="row-1" key={cuisineList.info.id}>
      <div className="cuisine-info">
        <ul className="cuisine-info-list">
          <li className="cuisine-item">Veg/non-veg</li>
          <li className="cuisine-item">{name}</li>
          <li className="cuisine-item">Rs {price / 100}</li>
          <li className="cuisine-item">{description}</li>
        </ul>
      </div>
      <div className="cuisine-img-div">
        <img
          alt="cuisine image"
          src={CUISINE_IMAGE_SRC + imageId}
          className="cuisine-image"
        />
      </div>
    </div>
  );
};
export default CuisineInfo;

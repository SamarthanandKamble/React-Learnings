import { CUISINE_IMAGE_SRC } from "../../utils/constant";

const CuisineInfo = ({ cuisineList }) => {
//   console.log(cuisineList);
  if (cuisineList === undefined) {
    return;
  }
  return (
    <div className="cuisine-info-cnt">
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
  );
};
export default CuisineInfo;

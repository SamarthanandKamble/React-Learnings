import { CUISINE_IMAGE_SRC } from "../../utils/constant";

const CuisineInfo = ({ itemCards }) => {

  return (
    itemCards &&
    itemCards.map(({ card }) => (
      <div className="cuisine-info-cnt" key={card.info.id}>
        <div className="row-1">
          <div className="cuisine-info">
            <ul className="cuisine-info-list">
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
      </div>
    ))
  );
};
export default CuisineInfo;

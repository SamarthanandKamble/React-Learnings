import { Link } from "react-router-dom";
import Card from "./Card";
import Title from "../Title/Title";
const CardContainer = ({ data }) => {
  // console.log("cardContainer data:", data);

  if (data?.length < 0 || data === undefined) {
    return;
  }
  return (
    <div>
      <Title title={"Restaurants with online food delivery"} />
      <div className="card-container">
        {data.map((card) => (
          <Link to={`restaurant/${card.info.id}`} key={card.info.id}>
            <Card cardData={card.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};


export default CardContainer;

import Card from "./Card";
import { useEffect, useState } from "react";
import { URL } from "../utils/constant";

const CardContainer = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data = await fetch(URL);
    let result = await data.json();
    // console.log(
    //   result?.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    setCardData(
      result?.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
    <div className="card-body">
      {cardData.map((card) => (
        <Card key={card.info.id} cardData={card.info} />
      ))}
    </div>
  );
};

export default CardContainer;

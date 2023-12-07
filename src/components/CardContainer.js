import Card from "./Card";
import { useEffect, useState } from "react";
import { URL } from "../utils/constant";

const CardContainer = () => {
  const [cardData, setCardData] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filterCardData, setFilterCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("Card container render");

  async function fetchData() {
    let data = await fetch(URL);
    let result = await data.json();
    // console.log(
    //   result?.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    setCardData(
      result?.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterCardData(
      result?.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
    <>
      <div className="search-div">
        <input
          type="text"
          placeholder="Search here"
          className="search-box"
          value={searchRestaurant}
          onChange={(e) => {
            setSearchRestaurant(e.target.value.toLowerCase());
          }}
        />
        <button
          onClick={() => {
            setFilterCardData(
              cardData.filter((card) =>
                card.info.name.toLowerCase().includes(searchRestaurant)
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="card-body">
        {filterCardData.map((card) => (
          <Card key={card.info.id} cardData={card.info} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;

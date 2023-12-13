import { useState, useEffect, useContext } from "react";
import CardContainer from "../Cuisine_Card/CardContainer.js";
import { URL1, URL2 } from "../../utils/constant.js";
import MultipleCuisines from "../Cuisine_Card/MultipleCuisine.js";
import TopRestaurant from "../Home_Page/TopRestaurant.js";
import CoordinateContext from "../../utils/CoordinateContext.js";

const Body = () => {
  let [searchRestaurant, setSearchRestaurant] = useState("");
  const [cardData, setCardData] = useState([]);
  const [filterCardData, setFilterCardData] = useState([]);
  const [multipleCuisines, setMultipleCuisines] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  // console.log("Body : ", latitude, longitude);
  useEffect(() => {
    fetchData();
  }, []);

  const { lat, lng } = useContext(CoordinateContext);
  console.log("lat : ", lat, "lng : ", lng);

  async function fetchData() {
    let data = await fetch(`${URL1}lat=${lat}&lng=${lng}`);
    let result = await data.json();
    // console.log(
    //   result?.data?.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
    // );
    setCardData(
      result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterCardData(
      result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(
    //   result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setMultipleCuisines(
      result?.data?.cards[1].card.card.gridElements.infoWithStyle.info
    );
    setTopRestaurants(
      result?.data?.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   result?.data?.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
    // );
  }

  function checkForTheRestaurant(e) {
    setFilterCardData(
      cardData.filter((card) =>
        card.info.name.toLowerCase().includes(searchRestaurant)
      )
    );
  }

  return (
    <div className="body">
      <input
        type="text"
        placeholder="Search here"
        className="search-box"
        value={searchRestaurant}
        onChange={(e) => {
          setSearchRestaurant(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          checkForTheRestaurant(e);
        }}
      >
        Search
      </button>
      <MultipleCuisines data={multipleCuisines} />
      <TopRestaurant topRestaurant={topRestaurants} />
      <CardContainer data={filterCardData} />
    </div>
  );
};

export default Body;

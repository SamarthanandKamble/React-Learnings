import { useState } from "react";
import GetUserCoordinates from "./GetUserCoordinates";

const SuggestedCitiesData = ({ cities }) => {
  const [cityPlaceId, setCityPlaceId] = useState("");

  function getCityString(e) {
    let testCity = e.target.innerText;
    if (testCity) {
      let data = cities.reduce((acc, curr) => {
        if (curr.description === testCity) {
          acc = curr.place_id;
        }
        return acc;
      }, "");
      setCityPlaceId(data);
    }
  }

  return (
    <div className="city-suggestions" onClick={getCityString}>
      {cities.length > 0
        ? cities.map((city, index) => <p key={index}>{city.description}</p>)
        : ""}
      <GetUserCoordinates id={cityPlaceId} />
    </div>
  );
};

export default SuggestedCitiesData;

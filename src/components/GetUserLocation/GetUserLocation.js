import { useState, useEffect } from "react";
import SuggestedCitiesData from "./SuggestedCitiesData";

export const GetUserLocation = ({ setUserLocation, setCoord }) => {
  const [city, setCity] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);

  useEffect(() => {
    getUserCity(city);
  }, [city]);

  async function getUserCity(city) {
    if (city.length > 0) {
      let result = await fetch(
        `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${city}`
      );
      let { data } = await result.json();

      setCitySuggestions(data);
    }
  }

  return (
    <div>
      <input
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />

      {citySuggestions.length > 0 ? (
        <SuggestedCitiesData
          cities={citySuggestions}
          setUserLocation={setUserLocation}
          setCoord={setCoord}
        />
      ) : (
        ""
      )}
    </div>
  );
};

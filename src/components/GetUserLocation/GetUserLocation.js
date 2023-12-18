import { useState, useEffect } from "react";
import SuggestedCitiesData from "./SuggestedCitiesData";

export const GetUserLocation = () => {
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
        <SuggestedCitiesData cities={citySuggestions} />
      ) : (
        console.log("this is else part for /GetUserLocation")
      )}
    </div>
  );
};

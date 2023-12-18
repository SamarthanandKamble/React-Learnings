import { useState } from "react";
import GetUserCoordinates from "./GetUserCoordinates";
import { useDispatch, useSelector } from "react-redux";
import { setPlaceId } from "../../utils/Redux/userLocationSlice";
import { useNavigate } from "react-router-dom";
const SuggestedCitiesData = ({ cities }) => {
  const [cityPlaceId, setCityPlaceId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getCityString(e) {
    let searchCity = localStorage.getItem("selectedCity")
      ? JSON.parse(localStorage.getItem("selectedCity"))
      : e.target.innerText;
    if (searchCity) {
      let data = cities.reduce((acc, curr) => {
        if (curr.description === searchCity) {
          acc = curr.place_id;
        }
        return acc;
      }, "");

      dispatch(setPlaceId(data));
      setCityPlaceId(data);
      localStorage.setItem("placeId", JSON.stringify(data));
    }

    navigate("/about");

    localStorage.setItem("selectedCity", JSON.stringify(searchCity));
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

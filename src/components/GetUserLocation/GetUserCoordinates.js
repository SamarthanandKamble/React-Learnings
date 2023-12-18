import { useDispatch } from "react-redux";
import { coordX, coordY } from "../../utils/Redux/userLocationSlice";

const GetUserCoordinates = ({ id }) => {
  const dispatch = useDispatch();

  const getCoordinates = async () => {
    let cityPlaceId = localStorage.getItem("placeId")
      ? JSON.parse(localStorage.getItem("placeId"))
      : id;
    if (id) {
      let result = await fetch(
        `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${cityPlaceId}`
      );
      let { data } = await result.json();
      const { lat, lng } = data[0]?.geometry?.location;
      dispatch(coordX(lat));
      dispatch(coordY(lng));
    
    }
  };

  if (id) {
    getCoordinates();
  } else {
    return;
  }

  return <></>;
};

export default GetUserCoordinates;

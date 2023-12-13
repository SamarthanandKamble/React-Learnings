import { useState, createContext } from "react";

const GetUserCoordinates = ({ id, setUserLocation, setCoord }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getCoordinates = async () => {
    if (id) {
      let result = await fetch(
        `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`
      );
      let { data } = await result.json();
      const { lat, lng } = data[0]?.geometry?.location;
      setLatitude(lat);
      setLongitude(lng);
      setUserLocation(false);
      let updateCoordinates = {
        lat: lat,
        lng: lng,
      };
      setCoord(updateCoordinates);
    }
  };
  if (id && setUserLocation) {
    getCoordinates();
  } else {
    return;
  }

  return <></>;
};

export default GetUserCoordinates;

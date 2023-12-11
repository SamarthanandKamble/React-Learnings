import { useState } from "react";
const GetUserCoordinates = ({ id }) => {
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");

  const getUserCoordinates = async () => {
    if (id) {
      let result = await fetch(
        `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`
      );
      let { data } = await result.json();
      const { lat, lng } = data[0]?.geometry?.location;
      console.log("Coord compo:", lat, lng);
      setLatitude(lat);
      setLongitude(lng);
    }
  };
  if (id) {
    getUserCoordinates();
  } else {
    return;
  }

  return <></>;
};
export let latitude;
export let longitude;
export default GetUserCoordinates;

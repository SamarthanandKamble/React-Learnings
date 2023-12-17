import { useState } from "react";
import CuisineInfo from "./CuisineInfo";

const CuisineTitle = ({ data }) => {
  const [isCuisineListOpen, setIsCuisineListOpen] = useState(false);

  // console.log("cuisine title data :", data);

  function checkIfOpen() {
    setIsCuisineListOpen(!isCuisineListOpen);
  }

  return (
    data && (
      <div>
        <div className="cuisine-title-div" onClick={checkIfOpen}>
          <p className="cuisine-title">
            {data.title} {data.itemCards.length}
          </p>
          <span>Dropdown</span>
        </div>
        {isCuisineListOpen && <CuisineInfo itemCards={data.itemCards} />}
      </div>
    )
  );
};

export default CuisineTitle;

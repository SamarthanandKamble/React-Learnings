import { useState } from "react";
import CardContainer from "./CardContainer";

const SearchBox = () => {
  let [searchData, setSearchData] = useState("");
  console.log("Search box render");
  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="Search here"
        className="search-box"
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          <CardContainer data={searchData} />;
        }}
      >
        Search
      </button>
    </div>
  );
};
export let searchData;
export default SearchBox;

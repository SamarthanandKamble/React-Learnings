import CuisineCard from "./CuisineCard";
import Title from "../Title/Title";
const MultipleCuisines = ({ data }) => {
  if (data === undefined || data.length <= 0) {
    return;
  }
  

  return (
    <div>
      <Title title={"What's on your mind "} />
      <div className="cuisine-card">
        <div className="multiple-cuisine">
          {data.map((cuisine) => (
            <CuisineCard key={cuisine.id} cuisineData={cuisine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleCuisines;

const Card = () => {
  return (
    <div className="card-cnt">
      <div className="card-image-div">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          alt="food-image"
          className="food-image"
        />
      </div>
      <span className="card-items" id="cuisine-name">
        Biryani
      </span>
      <span className="card-items" id="cuisine-price">
        400
      </span>
      <span className="card-items" id="rating">
        4.8
      </span>
    </div>
  );
};

export default Card;

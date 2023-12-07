import { useState } from "react";

const Header = () => {
  const [isUserLogin, setIsUserLogin] = useState("Login");
  return (
    <div className="navbar">
      <div className="nav-logo">LOGO</div>
      <ul className="nav-ul">
        <li className="list-items">Home</li>
        <li className="list-items">About</li>
        <li className="list-items">Restaurants</li>
        <li className="list-items">Cart</li>
        <button
          type="text"
          onClick={() => {
            isUserLogin === "Login"
              ? setIsUserLogin("Log Out")
              : setIsUserLogin("Login");
          }}
        >
          {isUserLogin}
        </button>
      </ul>
    </div>
  );
};

export default Header;

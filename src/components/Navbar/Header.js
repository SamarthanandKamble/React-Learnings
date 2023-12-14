import { useState } from "react";
import { Link } from "react-router-dom";
import useUserNetwork from "../../utils/Hooks/useUserNetwork";

const Header = () => {
  const [isUserLogin, setIsUserLogin] = useState("Login");
  const userConnectivity = useUserNetwork();
  return (
    <div className="navbar">
      <div className="nav-logo">LOGO</div>
      <ul className="nav-ul">
        <li className="list-items">
          <Link to="/">Home</Link>
        </li>
        <li className="list-items">
          <Link to="/about">About</Link>
        </li>
        <li className="list-items">
          User is : {userConnectivity ? "Online" : "Offline"}
        </li>
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

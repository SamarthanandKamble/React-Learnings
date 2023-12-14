import { useState, useEffect } from "react";

const useUserNetwork = () => {
  const [userNetwork, setUserNetwork] = useState(true);

  useEffect(() => {
    checkUserNetwork();
  }, []);

  const checkUserNetwork = () => {
    window.addEventListener("online", () => setUserNetwork(true));
    window.addEventListener("offline", () => setUserNetwork(false));
  };

  return userNetwork;
};

export default useUserNetwork;

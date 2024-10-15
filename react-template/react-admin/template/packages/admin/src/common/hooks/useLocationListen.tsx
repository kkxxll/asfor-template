import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default (listener) => {
  const location = useLocation();
  useEffect(() => {
    listener(location);
  }, [location]);
};

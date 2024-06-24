import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "./index";

const ProteccionRuta = ({ children }) => {
  const token = getCookie("authToken");

  try {
    if (!token) {
      return <Navigate to={"/"} />;
    }
    return <Outlet />;
  } catch (error) {
    console.error(error);
  }

  return <Outlet />;
};

export default ProteccionRuta;

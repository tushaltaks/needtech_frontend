import { Navigate, Outlet, useLocation } from "react-router-dom";
const Proteted = () => {
  const location = useLocation()
  let auth = localStorage.getItem("token");
  return auth ? <><Outlet /></> : <Navigate state={{ from: location }} to="/login" />
};
export default Proteted;

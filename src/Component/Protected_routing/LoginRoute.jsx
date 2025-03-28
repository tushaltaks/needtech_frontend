import { Navigate, Outlet } from "react-router-dom";
const LoginRoute = () => {
    let auth = localStorage.getItem("token");
    return !auth ? <><Outlet /></> : <Navigate to="/" />
};
export default LoginRoute;

import { Navigate, Outlet } from "react-router-dom";

const ProteccionRuta = ({ activation }) => {
    if (!activation) return <Navigate to="/" replace />;
    return <Outlet/>;

};

export default ProteccionRuta;

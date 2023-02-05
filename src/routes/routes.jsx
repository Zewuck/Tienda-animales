import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import AcercaDe from "../pages/AcercaDe";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tienda from "../pages/Tienda";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthAPI from "../utils/AuthAPI";

export default function AppRoutes() {

  return (
    <div>
      {/*navbar*/}
      <Navbar />
      <div>
        {/*elementos*/}
        <Routes>
          <Route path="https://Zewuck.github.io/Tienda-animales/" element={<Inicio />} />
          <Route path="https://Zewuck.github.io/Tienda-animales/acerca" element={<AcercaDe />} />
          <Route path="https://Zewuck.github.io/Tienda-animales/contacto" element={<Contacto />} />
          <Route path="https://Zewuck.github.io/Tienda-animales/tienda" element={<Tienda />} />
          <Route
            path="https://Zewuck.github.io/Tienda-animales/login"
            element={
              <RouteRegistration >
                <Login />
              </RouteRegistration>
            }
          />
          <Route
            path="https://Zewuck.github.io/Tienda-animales/register"
            element={
              <RouteRegistration>
                <Register />
              </RouteRegistration>
            }
          />
          <Route
            path="https://Zewuck.github.io/Tienda-animales/dashboard"
            element={
              <RouteProtected>
                <Dashboard />
              </RouteProtected>
            }
          />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

const RouteRegistration = ({ children }) => {
  const authApi = useContext(AuthAPI);
  if (!authApi.auth) {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
const RouteProtected = ({  children }) => {
  const authApi = useContext(AuthAPI);
  if (!authApi.auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


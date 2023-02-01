import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import AcercaDe from "../pages/AcercaDe";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthAPI from "../utils/AuthAPI";

export default function AppRoutes() {
  const authApi = useContext(AuthAPI);
  return (
    <div>
      {/*navbar*/}
      <Navbar />
      <div>
        {/*elementos*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/login"
            element={
              <RouteRegistration auth={authApi.auth}>
                <Login />
              </RouteRegistration>
            }
          />
          <Route
            path="/register"
            element={
              <RouteRegistration auth={authApi.auth}>
                <Register />
              </RouteRegistration>
            }
          />
          <Route
            path="/dashboard"
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

const RouteRegistration = ({ auth, children }) => {
  if (!auth) {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
const RouteProtected = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};



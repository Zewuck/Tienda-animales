import React, {useContext} from 'react'

import { Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import AcercaDe from "../pages/AcercaDe";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";

export default function routes() {
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

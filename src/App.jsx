import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div>
      {/*navbar*/}
      <Navbar/>
      <div>
        {/*elementos*/}
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/acerca" element={<AcercaDe />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

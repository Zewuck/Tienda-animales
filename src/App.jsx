import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import AcercaDe from './pages/AcercaDe'
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
        </Routes>
      </div>
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import { FondoInicio } from "./FondoInicio";
import AcercaDe from './pages/AcercaDe'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/*navbar*/}
      <Navbar/>
      <div>
        {/*elementos*/}
        <Routes>
          <Route path="/" element={<FondoInicio />}></Route>
          <Route path="/acerca" element={<AcercaDe />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import { FondoInicio } from "./FondoInicio";
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
        </Routes>
      </div>
    </div>
  );
};

export default App;

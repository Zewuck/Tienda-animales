import { Route, Routes } from "react-router-dom";
import { FondoInicio } from "./FondoInicio";

const App = () => {
  return (
    <div>
      {/*navbar*/}
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

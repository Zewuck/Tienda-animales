import React, { useState } from "react";
import Routes from './routes/routes'
import { BrowserRouter as Router } from "react-router-dom";
import AuthApi from "./utils/AuthAPI";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [auth, setAuth] = useState(false)

  return (
    <div>
     <AuthApi.Provider value={{auth, setAuth}}>
      <Router>
        <Routes></Routes>
      </Router>
    </AuthApi.Provider>
    </div>
  );
};

export default App;
